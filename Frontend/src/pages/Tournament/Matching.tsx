import React, { useState, useEffect } from "react";
import Tournament from "./Tournament.tsx";
import BasicProfile1 from "../../assets/image/BasicProfile1.png";
import BasicProfile2 from "../../assets/image/BasicProfile2.png";

import {
  Wrapper,
  ProfileOverlay,
  UserGrid,
  UserProfile,
  UserImage,
  UserName,
  LineWrapper,
  VerticalLine,
  HorizontalLine,
  WinnerGrid,
  VsText,
} from "./Matching";

const mockUsers = [
  { id: 1, name: "PONG", profileImage: BasicProfile1 },
  { id: 2, name: "DING", profileImage: BasicProfile2 },
  { id: 3, name: "PING", profileImage: BasicProfile1 },
  { id: 4, name: "DONG", profileImage: BasicProfile2 },
];

const mockWinners = [
  { id: 3, name: "PING", profileImage: BasicProfile1 },
  { id: 2, name: "DING", profileImage: BasicProfile2 },
];

// 현재 로그인된 사용자라고 가정 (예: Ping)
const currentUserId = 3;

const Matching = () => {
  const [readyStates, setReadyStates] = useState<{ [userId: number]: boolean }>(
    {}
  );

  const handleReadyClick = () => {
    const mockSendPayload = {
      action: "send",
      category: "game",
      resource: "ready",
      data: {
        tournament_id: 135,
        match_id: 737,
        user_id: currentUserId,
      },
    };

    // 실제 WebSocket이 아닌 mock 수신 처리
    handleReceiveReady(mockSendPayload.data);
  };

  const handleReceiveReady = (data: { user_id: number }) => {
    setReadyStates((prev) => ({
      ...prev,
      [data.user_id]: true,
    }));
  };

  // mock 수신 테스트 (예: 4초 뒤에 Ding 준비됨)
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleReceiveReady({ user_id: 2 });
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Wrapper>
      <ProfileOverlay>
        <LineWrapper>
          {/* 중앙 상단 승자 이미지 */}
          <WinnerGrid>
            {mockWinners.map((user) => (
              <UserProfile key={user.id} isReady={!!readyStates[user.id]}>
                <UserImage src={user.profileImage} alt={user.name} />
                <UserName>{user.name}</UserName>
              </UserProfile>
            ))}
          </WinnerGrid>
          <VsText>VS</VsText>

          {/* 대진표 구분선 */}
          <VerticalLine left="46px" />
          <HorizontalLine left="46px" />
          <VerticalLine left="420px" />
          <HorizontalLine left="335px" />

          <UserGrid>
            {mockUsers.map((user) => (
              <UserProfile
                key={user.id}
                isReady={false} // 4강 유저는 항상 false (테두리 변경 비활성화)
              >
                <UserImage src={user.profileImage} alt={user.name} />
                <UserName>{user.name}</UserName>
              </UserProfile>
            ))}
          </UserGrid>
        </LineWrapper>
      </ProfileOverlay>
      <Tournament onReadyClick={handleReadyClick} />
    </Wrapper>
  );
};

export default Matching;
