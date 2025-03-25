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
} from "./Matching";

const mockUsers = [
  { id: 1, name: "PONG", profileImage: BasicProfile1 },
  { id: 2, name: "DING", profileImage: BasicProfile2 },
  { id: 3, name: "PING", profileImage: BasicProfile1 },
  { id: 4, name: "DONG", profileImage: BasicProfile2 },
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
          {/* 왼쪽 세로선 + 가로선 */}
          <VerticalLine left="46px" />
          <HorizontalLine left="46px" />
          {/* 오른쪽 세로선 + 가로선 */}
          <VerticalLine left="420px" />
          <HorizontalLine left="335px" />{" "}
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
