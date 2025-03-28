import React, { useState, useEffect } from "react";
import Tournament from "./Tournament.tsx";
import { Wrapper, ProfileOverlay, LineWrapper } from "./Matching";

// 공통 컴포넌트 import
import SemiFinalGrid from "./components/SemiFinalGrid";
import FourUsersGrid from "./components/FourUsersGrid";
import MatchLines from "./components/MatchLines";

// 사용자 데이터 import
import BasicProfile1 from "../../assets/image/BasicProfile1.png";
import BasicProfile2 from "../../assets/image/BasicProfile2.png";

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
          <SemiFinalGrid users={mockWinners} readyStates={readyStates} />
          <MatchLines />
          <FourUsersGrid users={mockUsers} />
        </LineWrapper>
      </ProfileOverlay>
      <Tournament onReadyClick={handleReadyClick} />
    </Wrapper>
  );
};

export default Matching;
