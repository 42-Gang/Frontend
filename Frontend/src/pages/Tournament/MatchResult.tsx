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
import FinalResultDisplay from "./FinalResultDisplay";
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
  { id: 3, name: "PING", profileImage: BasicProfile1 }, // 왼쪽 2강 승자
  { id: 2, name: "DING", profileImage: BasicProfile2 }, // 오른쪽 2강 승자
];

const finalWinner = { id: 2, name: "DING", profileImage: BasicProfile2 }; // DING 우승

const MatchResult = () => {
  const navigate = useNavigate();
  const loser = mockWinners.find((user) => user.id !== finalWinner.id);

  // 왼쪽(PING) vs 오른쪽(DING) 기준으로 정렬
  const leftUser = finalWinner.id === mockUsers[2].id ? finalWinner : loser!;
  const rightUser = finalWinner.id === mockUsers[2].id ? loser! : finalWinner;

  return (
    <Wrapper>
      <ResultProfileOverlay>
        {/* 2강 결과: 중앙 정렬 + WINNER */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "130px",
            marginBottom: "20px",
            transform: "translateX(126px)",
          }}
        >
          <FinalResultDisplay
            winner={leftUser}
            loser={rightUser}
            size={70}
            gap={20}
          />
        </div>
        {/* 4강 대진표 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              marginTop: "10px",
              marginLeft: "-440px",
            }}
          >
            <MatchLines
              winnerId={mockWinners[0].id} // 왼쪽 승자
              leftUserId={mockUsers[2].id}
              rightUserId={mockUsers[0].id}
              direction="left"
            />
            <MatchLines
              winnerId={mockWinners[1].id} // 오른쪽 승자
              leftUserId={mockUsers[1].id}
              rightUserId={mockUsers[3].id}
              direction="right"
            />
            <FourUsersGrid users={mockUsers} />
          </div>
        </div>
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
