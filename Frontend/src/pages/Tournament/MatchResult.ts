import styled from "styled-components";

export const CongratsText = styled.div`
  position: absolute;
  top: -60px;
  left: 130px;
  color: white;
  font-size: 24px;
  font-family: "Sixtyfour";
  z-index: 10;
`;

export const WinnerLabel = styled.div<{ isLeft: boolean }>`
  position: absolute;
  top: 90px;
  left: ${({ isLeft }) => (isLeft ? "128px" : "257px")};
  color: #ffe347;
  font-size: 14px;
  font-weight: bold;
  font-family: "Sixtyfour";
  z-index: 10;
`;

export const FinalWinnerWrapper = styled.div<{ isLeft: boolean }>`
  position: absolute;
  top: ${({ isLeft }) => (isLeft ? "118px" : "118px")};
  left: ${({ isLeft }) => (isLeft ? "138px" : "265px")};
`;

export const OpponentWrapper = styled.div<{ isLeft: boolean }>`
  position: absolute;
  top: ${({ isLeft }) => (isLeft ? "118px" : "118px")};
  left: ${({ isLeft }) => (isLeft ? "260px" : "140px")};
`;

export const ExitButtonWrapper = styled.button`
  position: absolute;
  bottom: 40px;
  left: 220px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const ExitImage = styled.img`
  width: 180px;
  height: auto;
  object-fit: contain;
`;

export const ResultProfileOverlay = styled.div`
  position: absolute;
  top: 130px;
  left: 20px;
  z-index: 10;
  display: flex;
  justify-content: center;
  pointer-events: none;
`;

export const VsText = styled.div<{ isLeft: boolean }>`
  position: absolute;
  top: ${({ isLeft }) => (isLeft ? "145px" : "140px")};
  left: ${({ isLeft }) => (isLeft ? "215px" : "218px")};
  color: white;
  font-size: 18px;
  font-family: "Sixtyfour", sans-serif;
  z-index: 10;
`;
