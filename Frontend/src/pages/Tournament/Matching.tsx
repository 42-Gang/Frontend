import React, { useState, useEffect } from "react";
import Tournament from "./Tournament.tsx";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  ProfileOverlay,
  LineWrapper,
  VsTextWrapper,
  ExitImage,
  ExitButtonWrapper,
} from "./Matching";
import SemiFinalGrid from "./components/SemiFinalGrid/index";
import FourUsersGrid from "./components/FourUsersGrid";
import MatchLines from "./components/MatchLines";
import VsText from "./components/\bVsText/\bindex.tsx";

import BasicProfile1 from "../../assets/image/BasicProfile1.png";
import BasicProfile2 from "../../assets/image/BasicProfile2.png";
import ExitButtonImg from "../../assets/image/ExitButton.png";

// 임시 유저 데이터
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

const currentUserId = 3;

const Matching = () => {
  const [readyStates, setReadyStates] = useState<{ [userId: number]: boolean }>(
    {}
  );

  const [gameEnded, setGameEnded] = useState(false);
  const [finalWinner, setFinalWinner] = useState<null | (typeof mockUsers)[0]>(
    null
  );

  const navigate = useNavigate();

  // 임시 API 응답 시뮬레이션 (이긴 사람을 DING으로 가정)
  useEffect(() => {
    const timeout = setTimeout(() => {
      const winnerFromAPI = mockUsers.find((user) => user.name === "DING");
      setFinalWinner(winnerFromAPI || null);
      setGameEnded(true);
    }, 5000); // 예시: 5초 뒤 게임 끝
    return () => clearTimeout(timeout);
  }, []);

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

    handleReceiveReady(mockSendPayload.data);
  };

  const handleReceiveReady = (data: { user_id: number }) => {
    setReadyStates((prev) => ({
      ...prev,
      [data.user_id]: true,
    }));
  };
  return (
    <Wrapper>
      <ProfileOverlay>
        <LineWrapper>
          <SemiFinalGrid
            users={mockWinners}
            readyStates={readyStates}
            gameEnded={gameEnded}
            finalWinnerId={finalWinner?.id}
          />
          <VsTextWrapper>
            <VsText />
          </VsTextWrapper>
          <MatchLines
            winnerId={mockWinners[0].id}
            leftUserId={mockUsers[2].id}
            rightUserId={mockUsers[0].id}
            direction="left"
          />
          <MatchLines
            winnerId={mockWinners[1].id}
            leftUserId={mockUsers[1].id}
            rightUserId={mockUsers[3].id}
            direction="right"
          />
          <FourUsersGrid users={mockUsers} />
        </LineWrapper>
      </ProfileOverlay>
      <Tournament
        onReadyClick={handleReadyClick}
        customButton={
          gameEnded ? (
            <ExitButtonWrapper onClick={() => navigate("/Home")}>
              <ExitImage src={ExitButtonImg} alt="Exit" />
            </ExitButtonWrapper>
          ) : undefined
        }
      />
    </Wrapper>
  );
};

export default Matching;
