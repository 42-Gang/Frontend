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
import InviteIcon from "../../assets/image/InviteIcon.svg";
import ModalCancel from "../../assets/image/ModalCancel.svg";
import FriendIcon from "../../assets/image/BasicProfile2.png";
import InviteButtonIcon from "../../assets/image/InviteButton.svg";
import InvitedButtonIcon from "../../assets/image/InvitedButton.svg";
import DefaultProfile from "../../assets/image/BasicProfile1.png";
import styled from "styled-components";

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
  const [acceptedFriends, setAcceptedFriends] = useState<number[]>([1]);
  const [isReady, setIsReady] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleInviteClick = (friendId: number) => {
    if (!invitedFriends.includes(friendId) && !loadingFriends.has(friendId)) {
      setInvitedFriends((prev) => [...prev, friendId]);
      setLoadingFriends((prev) => new Set(prev).add(friendId));

      toast.success(
        <>
          🏓 초대가 완료되었습니다 🏓
          <br />
          상대방의 응답을 기다린중...
        </>,
        {
          position: "top-right",
          autoClose: 1000,
          style: ToastStyle,
          draggable: true,
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

  const handleReadyClick = () => {
    setIsReady(true);
  };

  return (
    <>
      <Tournament onReadyClick={handleReadyClick} />

      {!isModalOpen && (
        <InviteButtonContainer>
          <MatchupRow>
            {friends.slice(0, 2).map((friend, index) => (
              <React.Fragment key={friend.id}>
                <InviteButtonWrapper>
                  <InviteButton
                    onClick={
                      friend.id !== 1 && !isReady ? handleOpenModal : undefined
                    }
                    disabled={friend.id === 1 || isReady}
                  >
                    <ReadyProfileImage
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
                  <InviteButton
                    onClick={!isReady ? handleOpenModal : undefined}
                    disabled={isReady}
                  >
                    <ReadyProfileImage
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
                style={{ width: "35px", height: "35px", objectFit: "contain" }}
              />
            </ModalCloseButton>
            <FriendListContainer>
              {friends.map((friend) => (
                <FriendRow key={friend.id}>
                  <img
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
