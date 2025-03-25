import React from "react";
import Tournament from "./Tournament.tsx";
import { useNavigate } from "react-router-dom";
import BasicProfile1 from "../../assets/image/BasicProfile1.png";
import BasicProfile2 from "../../assets/image/BasicProfile2.png";
import ExitButtonImg from "../../assets/image/ExitButton.png";

import {
  Wrapper,
  UserGrid,
  UserProfile,
  UserImage,
  UserName,
  LineWrapper,
  VerticalLine,
  HorizontalLine,
} from "./Matching";

import {
  CongratsText,
  WinnerLabel,
  FinalWinnerWrapper,
  OpponentWrapper,
  ExitButtonWrapper,
  ExitImage,
  ResultProfileOverlay,
  VsText,
} from "./MatchResult";

// 임시 유저 정보 (4강)
const mockUsers = [
  { id: 1, name: "PONG", profileImage: BasicProfile1 },
  { id: 2, name: "DING", profileImage: BasicProfile2 },
  { id: 3, name: "PING", profileImage: BasicProfile1 },
  { id: 4, name: "DONG", profileImage: BasicProfile2 },
];

// 2강 진출자
const mockWinners = [
  { id: 1, name: "PONG", profileImage: BasicProfile1 },
  { id: 2, name: "DING", profileImage: BasicProfile2 },
];

// 최종 승자 임시 api (요소 위치 조절)
// const finalWinner = { id: 2, name: "DING", profileImage: BasicProfile2 };
const finalWinner = { id: 1, name: "PONG", profileImage: BasicProfile1 };

const MatchResult = () => {
  const navigate = useNavigate();

  const loser = mockWinners.find((user) => user.id !== finalWinner.id);
  const isLeftWinner = finalWinner.id === mockWinners[0].id;

  return (
    <Wrapper>
      <ResultProfileOverlay>
        <LineWrapper>
          <CongratsText>Congrats!</CongratsText>
          <WinnerLabel isLeft={isLeftWinner}>WINNER!</WinnerLabel>
          <FinalWinnerWrapper isLeft={isLeftWinner}>
            <UserProfile isReady={false}>
              <UserImage
                src={finalWinner.profileImage}
                alt={finalWinner.name}
              />
              <UserName>{finalWinner.name}</UserName>
            </UserProfile>
          </FinalWinnerWrapper>
          <OpponentWrapper isLeft={isLeftWinner}>
            <UserProfile isReady={false}>
              <UserImage src={loser?.profileImage} alt={loser?.name} />
              <UserName>{loser?.name}</UserName>
            </UserProfile>
          </OpponentWrapper>
          <VsText isLeft={isLeftWinner}>VS</VsText>
          <VerticalLine left="46px" />
          <HorizontalLine left="46px" />
          <VerticalLine left="420px" />
          <HorizontalLine left="335px" />
          {/* 4강 유저 */}
          <UserGrid>
            {mockUsers.map((user) => (
              <UserProfile key={user.id} isReady={false}>
                <UserImage src={user.profileImage} alt={user.name} />
                <UserName>{user.name}</UserName>
              </UserProfile>
            ))}
          </UserGrid>
        </LineWrapper>
      </ResultProfileOverlay>
      <Tournament
        customButton={
          <ExitButtonWrapper onClick={() => navigate("/Home")}>
            <ExitImage src={ExitButtonImg} alt="Exit" />
          </ExitButtonWrapper>
        }
      />
    </Wrapper>
  );
};

export default MatchResult;
