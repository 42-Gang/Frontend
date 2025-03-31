import React from "react";
import { useNavigate } from "react-router-dom";
import Tournament from "./Tournament.tsx";
import { Wrapper, LineWrapper } from "./Matching";

import {
  ResultProfileOverlay,
  ExitButtonWrapper,
  ExitImage,
} from "./MatchResult";

// 공통 컴포넌트 import
import FinalResultDisplay from "./components/FinalResultDisplay";
import MatchLines from "./components/MatchLines";
import FourUsersGrid from "./components/FourUsersGrid";

// 이미지 import
import BasicProfile1 from "../../assets/image/BasicProfile1.png";
import BasicProfile2 from "../../assets/image/BasicProfile2.png";
import ExitButtonImg from "../../assets/image/ExitButton.png";

// 임시 사용자 데이터
const mockUsers = [
  { id: 1, name: "PONG", profileImage: BasicProfile1 },
  { id: 2, name: "DING", profileImage: BasicProfile2 },
  { id: 3, name: "PING", profileImage: BasicProfile1 },
  { id: 4, name: "DONG", profileImage: BasicProfile2 },
];

const mockWinners = [
  { id: 1, name: "PONG", profileImage: BasicProfile1 },
  { id: 2, name: "DING", profileImage: BasicProfile2 },
];

// 현재는 DING이 이겼다고 가정한 상태 (Winner 텍스트 위치 변경 확인)
const finalWinner = { id: 2, name: "DING", profileImage: BasicProfile2 };
// const finalWinner = { id: 1, name: "PONG", profileImage: BasicProfile1 };

const MatchResult = () => {
  const navigate = useNavigate();

  const loser = mockWinners.find((user) => user.id !== finalWinner.id);

  return (
    <Wrapper>
      <ResultProfileOverlay>
        <LineWrapper>
          {loser && <FinalResultDisplay winner={finalWinner} loser={loser} />}
          <MatchLines />
          <FourUsersGrid users={mockUsers} />
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
