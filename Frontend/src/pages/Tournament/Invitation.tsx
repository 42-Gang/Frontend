import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Tournament from "./Tournament.tsx";
import {
  InviteButtonContainer,
  MatchupRow,
  InviteButtonWrapper,
  InviteButton,
  InviteUserName,
  VSWrapper,
  ModalOverlay,
  ModalContainer,
  ModalTitle,
  ModalCloseButton,
  FriendRow,
  FriendProfileImage,
  FriendName,
  InviteGameButton,
  FriendListContainer,
  LoadingIndicator,
  ToastStyle,
} from "./Invitation";
import InviteIcon from "../../assets/image/InviteIcon.svg"; // 초대 수락하면 이걸로 변경되게 (추후 api 연동시 구현 예정)
import ModalCancel from "../../assets/image/ModalCancel.svg";
import FriendIcon from "../../assets/image/BasicProfile2.png";
import InviteButtonIcon from "../../assets/image/InviteButton.svg";
import InvitedButtonIcon from "../../assets/image/InvitedButton.svg";
import DefaultProfile from "../../assets/image/BasicProfile1.png";
import styled from "styled-components";

// 임시 데이터
const friends = [
  { id: 1, name: "PANG", imageUrl: DefaultProfile },
  { id: 2, name: "GANG", imageUrl: FriendIcon },
  { id: 3, name: "PING", imageUrl: FriendIcon },
  { id: 4, name: "PONG", imageUrl: FriendIcon },
];

const StyledInviteGameButton = styled(InviteGameButton)`
  margin-left: auto;
`;

const SmallLoadingIndicator = styled(LoadingIndicator)`
  width: 23px;
  height: 23px;
`;

// 기본 테두리는 빨간색, READY 버튼을 누르면 초록색으로 변경
const ReadyProfileImage = styled.img<{ $isReady: boolean }>`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${(props) => (props.$isReady ? "green" : "red")};
  transition: border 0.3s ease-in-out;
`;

const Invitation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingFriends, setLoadingFriends] = useState(new Set<number>());
  const [invitedFriends, setInvitedFriends] = useState<number[]>([]);
  const [loadingButtons, setLoadingButtons] = useState<number | null>(null);
  const [acceptedFriends, setAcceptedFriends] = useState<number[]>([1]);
  const [isReady, setIsReady] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInviteClick = (friendId: number) => {
    if (!invitedFriends.includes(friendId) && !loadingFriends.has(friendId)) {
      setInvitedFriends((prev) => [...prev, friendId]);

      setLoadingFriends((prev) => {
        const newSet = new Set(prev);
        newSet.add(friendId);
        return newSet;
      });

      toast.success(
        <>
          🏓 초대가 완료되었습니다 🏓
          <br />
          상대방의 응답을 기다리는 중...
        </>,
        {
          position: "top-right",
          autoClose: 1000,
          style: ToastStyle,
          draggable: true,
          draggablePercent: 50,
        }
      );

      setTimeout(() => {
        setLoadingFriends((prev) => {
          const newSet = new Set(prev);
          newSet.delete(friendId);
          return newSet;
        });

        setInvitedFriends((prev) => prev.filter((id) => id !== friendId));
      }, 5000);
    }
  };

  // READY 버튼을 누를 때 테두리 변경
  const toggleReadyState = () => {
    setIsReady((prev) => !prev);
  };

  return (
    <>
      <Tournament onReadyClick={toggleReadyState} />

      {!isModalOpen && ( // 기본 빨간 테두리 → READY 버튼 클릭하면 초록 테두리
        <InviteButtonContainer>
          <MatchupRow>
            {friends.slice(0, 2).map((friend, index) => (
              <React.Fragment key={friend.id}>
                <InviteButtonWrapper>
                  <InviteButton
                    onClick={friend.id !== 1 ? handleOpenModal : undefined}
                    disabled={friend.id === 1} // PANG(본인 프로필)만 비활성화
                  >
                    <ReadyProfileImage
                      key={isReady.toString()}
                      src={friend.imageUrl}
                      alt="Profile"
                      $isReady={isReady}
                    />
                  </InviteButton>
                  <InviteUserName>{friend.name}</InviteUserName>
                </InviteButtonWrapper>
                {index === 0 && <VSWrapper>VS</VSWrapper>}
              </React.Fragment>
            ))}
          </MatchupRow>
          <MatchupRow>
            {friends.slice(2, 4).map((friend, index) => (
              <React.Fragment key={friend.id}>
                <InviteButtonWrapper>
                  <InviteButton onClick={handleOpenModal}>
                    <ReadyProfileImage
                      key={isReady.toString()} // 상태 변경 강제 반영
                      src={friend.imageUrl}
                      alt="Profile"
                      $isReady={isReady} // READY 버튼 클릭 시 테두리 색 변경
                    />
                  </InviteButton>
                  <InviteUserName>{friend.name}</InviteUserName>
                </InviteButtonWrapper>
                {index === 0 && <VSWrapper>VS</VSWrapper>}
              </React.Fragment>
            ))}
          </MatchupRow>
        </InviteButtonContainer>
      )}

      {isModalOpen && (
        <ModalOverlay>
          <ModalContainer>
            <ModalTitle>Friends List</ModalTitle>
            <ModalCloseButton onClick={handleCloseModal}>
              <img
                src={ModalCancel}
                alt="Close"
                style={{
                  width: "35px",
                  height: "35px",
                  objectFit: "contain",
                  display: "block",
                  opacity: "1",
                  zIndex: 1100,
                }}
              />
            </ModalCloseButton>
            <FriendListContainer>
              {friends.map((friend) => (
                <FriendRow key={friend.id}>
                  <img // Friends List에서는 테두리 없는 기본 프로필
                    src={friend.imageUrl}
                    alt="Profile"
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%" }}
                  />
                  <FriendName>{friend.name}</FriendName>
                  <InviteGameButton
                    onClick={() => handleInviteClick(friend.id)}
                    isInvited={invitedFriends.includes(friend.id)}
                    isLoading={loadingFriends.has(friend.id)}
                  >
                    {acceptedFriends.includes(friend.id) ? (
                      <img src={InvitedButtonIcon} alt="Accepted" />
                    ) : loadingFriends.has(friend.id) ? (
                      <SmallLoadingIndicator />
                    ) : (
                      <img src={InviteButtonIcon} alt="Invite" />
                    )}
                  </InviteGameButton>
                </FriendRow>
              ))}
            </FriendListContainer>
          </ModalContainer>
        </ModalOverlay>
      )}
      <ToastContainer />
    </>
  );
};

export default Invitation;
