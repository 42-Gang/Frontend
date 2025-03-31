import React, { useState, useEffect } from "react";
import Tournament from "./Tournament.tsx";
import {
  WaitingWrapper,
  WaitingOverlay,
  WaitingLeftMatchup,
  WaitingRightMatchup,
} from "./SemiFinalWaiting.styles";
import UserProfileCard from "./components/UserProfileCard";
import VsText from "./components/\bVsText/\bindex.tsx";
import BasicProfile1 from "../../assets/image/BasicProfile1.png";
import BasicProfile2 from "../../assets/image/BasicProfile2.png";

// Mock 데이터
const mockUsers = {
  pong: { id: 1, name: "PONG", profileImage: BasicProfile1 },
  ping: { id: 2, name: "PING", profileImage: BasicProfile1 },
  ding: { id: 3, name: "DING", profileImage: BasicProfile2 },
  dong: { id: 4, name: "DONG", profileImage: BasicProfile2 },
};

const currentUserId = 1;

const SemiFinalWaiting = () => {
  const [readyStates, setReadyStates] = useState<{ [userId: number]: boolean }>(
    {}
  );

  const handleReadyClick = () => {
    const mockPayload = {
      tournament_id: 135,
      match_id: 888,
      user_id: currentUserId,
    };

    handleReceiveReady(mockPayload.user_id);
  };

  const handleReceiveReady = (userId: number) => {
    setReadyStates((prev) => ({
      ...prev,
      [userId]: true,
    }));
  };

  useEffect(() => {
    // 예시: 3초 후 나머지도 자동 준비
    const timeout = setTimeout(() => {
      handleReceiveReady(mockUsers.ding.id);
      handleReceiveReady(mockUsers.ping.id);
      handleReceiveReady(mockUsers.dong.id);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <WaitingWrapper>
      <Tournament onReadyClick={handleReadyClick} />

      <WaitingOverlay>
        <WaitingLeftMatchup>
          <UserProfileCard
            user={mockUsers.pong}
            size={70}
            isReady={readyStates[mockUsers.pong.id]}
          />
          <VsText />
          <UserProfileCard
            user={mockUsers.ping}
            size={70}
            isReady={readyStates[mockUsers.ping.id]}
          />
        </WaitingLeftMatchup>

        <WaitingRightMatchup>
          <UserProfileCard
            user={mockUsers.ding}
            size={70}
            isReady={readyStates[mockUsers.ding.id]}
          />
          <VsText />
          <UserProfileCard
            user={mockUsers.dong}
            size={70}
            isReady={readyStates[mockUsers.dong.id]}
          />
        </WaitingRightMatchup>
      </WaitingOverlay>
    </WaitingWrapper>
  );
};

export default SemiFinalWaiting;
