import styled, { keyframes } from "styled-components";

// 로딩중
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const WaitingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 55%;
  left: 31%;
  transform: translate(-50%, -50%);
`;

export const WaitingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  margin-bottom: 90px; /* 세로 간격 */
`;

export const WaitingSlot = styled.div<{ hasProfile?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) =>
    props.hasProfile ? "120px" : "100px"}; /* 프로필이 있으면 크기 조정 */
  height: ${(props) => (props.hasProfile ? "140px" : "100px")};
  background-color: black;
  border-radius: 50%;
  position: relative;
`;

export const LoadingIndicator = styled.div`
  width: 30px;
  height: 30px;
  border: 4px solid white;
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const VsText = styled.div`
  font-family: "Sixtyfour", sans-serif;
  font-size: 20px;
  color: red;
  margin: 0 15px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 10; /* 로딩 인디케이터보다 위로 배치 */
`;

export const ProfileImage = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  object-fit: cover;
`;

export const PlayerName = styled.div`
  font-family: "Sixtyfour", sans-serif;
  font-size: 15px;
  color: white;
  margin-top: 25px;
`;
