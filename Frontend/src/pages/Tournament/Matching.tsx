import React, { useState } from "react";
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

// 임시 유저 정보
const mockUsers = [
  { id: 1, name: "PONG", profileImage: BasicProfile1 },
  { id: 2, name: "DING", profileImage: BasicProfile2 },
  { id: 3, name: "PING", profileImage: BasicProfile1 },
  { id: 4, name: "DONG", profileImage: BasicProfile2 },
];

const mockWinners = [
  { id: 1, name: "PING", profileImage: BasicProfile1 },
  { id: 2, name: "DING", profileImage: BasicProfile2 },
];

const Matching = () => {
  const [isReady, setIsReady] = useState(false);

  const toggleReadyState = () => {
    setIsReady((prev) => !prev);
  };

  return (
    <Wrapper>
      <ProfileOverlay>
        <LineWrapper>
          {/* 중앙 상단 승자 이미지 */}
          <WinnerGrid>
            {mockWinners.map((user) => (
              <UserProfile key={user.id} isReady={isReady}>
                <UserImage src={user.profileImage} alt={user.name} />
                <UserName>{user.name}</UserName>
              </UserProfile>
            ))}
          </WinnerGrid>
          <VsText>VS</VsText>
          {/* 대진표 구분선 - 왼쪽 */}
          <VerticalLine left="46px" />
          <HorizontalLine left="46px" />
          {/* 대진표 구분선 - 오른쪽 */}
          <VerticalLine left="420px" />
          <HorizontalLine left="335px" />
          <UserGrid>
            {mockUsers.map((user) => (
              <UserProfile key={user.id} isReady={isReady}>
                <UserImage src={user.profileImage} alt={user.name} />
                <UserName>{user.name}</UserName>
              </UserProfile>
            ))}
          </UserGrid>
        </LineWrapper>
      </ProfileOverlay>
      <Tournament onReadyClick={toggleReadyState} />
    </Wrapper>
  );
};

export default Matching;
