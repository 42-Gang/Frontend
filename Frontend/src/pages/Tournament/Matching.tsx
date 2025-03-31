import React, { useState, useEffect } from "react";
import Tournament from "./Tournament.tsx";
import { Wrapper, ProfileOverlay, LineWrapper, VsText } from "./Matching";
import SemiFinalGrid from "./components/SemiFinalGrid/index";
import FourUsersGrid from "./components/FourUsersGrid";
import MatchLines from "./components/MatchLines";

import BasicProfile1 from "../../assets/image/BasicProfile1.png";
import BasicProfile2 from "../../assets/image/BasicProfile2.png";

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
          <VsText>VS</VsText>
          {/* 대진표 왼쪽 */}
          <MatchLines
            winnerId={mockWinners[0].id}
            leftUserId={mockUsers[2].id}
            rightUserId={mockUsers[0].id}
            direction="left"
          />
          {/* 대진표 오른쪽 */}
          <MatchLines
            winnerId={mockWinners[1].id}
            leftUserId={mockUsers[1].id}
            rightUserId={mockUsers[3].id}
            direction="right"
          />
          <FourUsersGrid users={mockUsers} />
        </LineWrapper>
      </ProfileOverlay>
      <Tournament onReadyClick={handleReadyClick} />
    </Wrapper>
  );
};

export default Matching;
