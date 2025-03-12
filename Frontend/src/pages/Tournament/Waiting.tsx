import React, { useState, useEffect } from "react";
import Tournament from "./Tournament.tsx";
import BasicProfile1 from "../../assets/image/BasicProfile1.png"; // 임시 프로필 이미지 추가
import BasicProfile2 from "../../assets/image/BasicProfile2.png";
import {
  WaitingContainer,
  WaitingRow,
  WaitingSlot,
  LoadingIndicator,
  VsText,
  ProfileContainer,
  ProfileImage,
  PlayerName,
} from "./Waiting";

const Waiting = () => {
  const [participants, setParticipants] = useState<
    (null | { name: string; image: string })[]
  >([
    { name: "Player1", image: BasicProfile1 }, // ✅ 1~2번째 참가자 기본 프로필 적용
    { name: "Player2", image: BasicProfile2 },
    null, // ✅ 3~4번째 참가자는 로딩 중
    null,
  ]);

  return (
    <>
      <Tournament />
      <WaitingContainer>
        {/* 첫 번째 줄(2명) */}
        <WaitingRow>
          <WaitingSlot>
            {participants[0] ? (
              <ProfileContainer>
                <ProfileImage
                  src={participants[0].image}
                  alt={participants[0].name}
                />
                <PlayerName>{participants[0].name}</PlayerName>
              </ProfileContainer>
            ) : (
              <LoadingIndicator />
            )}
          </WaitingSlot>
          <VsText>VS</VsText>
          <WaitingSlot>
            {participants[1] ? (
              <ProfileContainer>
                <ProfileImage
                  src={participants[1].image}
                  alt={participants[1].name}
                />
                <PlayerName>{participants[1].name}</PlayerName>
              </ProfileContainer>
            ) : (
              <LoadingIndicator />
            )}
          </WaitingSlot>
        </WaitingRow>
        {/* 두 번째 줄(2명) */}
        <WaitingRow>
          <WaitingSlot>
            {participants[2] ? (
              <ProfileContainer>
                <ProfileImage
                  src={participants[2].image}
                  alt={participants[2].name}
                />
                <PlayerName>{participants[2].name}</PlayerName>
              </ProfileContainer>
            ) : (
              <LoadingIndicator /> // 아직 참가하지 않으면 로딩 상태 유지
            )}
          </WaitingSlot>
          <VsText>VS</VsText>
          <WaitingSlot>
            {participants[3] ? (
              <ProfileContainer>
                <ProfileImage
                  src={participants[3].image}
                  alt={participants[3].name}
                />
                <PlayerName>{participants[3].name}</PlayerName>
              </ProfileContainer>
            ) : (
              <LoadingIndicator />
            )}
          </WaitingSlot>
        </WaitingRow>
      </WaitingContainer>
    </>
  );
};

export default Waiting;
