import styled, { css, createGlobalStyle } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ProfileOverlay = styled.div`
  position: absolute;
  top: 150px;
  left: 20px;
  z-index: 10;
  display: flex;
  justify-content: center;
  pointer-events: none;
`;

export const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100px);
  grid-template-rows: repeat(2, auto);
  gap: 120px 270px;
`;

export const UserProfile = styled.div<{ isReady: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 4px solid transparent;
    object-fit: cover;
    transition: border-color 0.3s ease;

    ${({ isReady }) =>
      isReady &&
      css`
        border-color: #00ff00;
      `}
  }
`;

export const UserImage = styled.img``;

export const SixtyfourFont = createGlobalStyle`
  @font-face {
    font-family: 'Sixtyfour';
    src: url('../../assets/fonts/Sixtyfour.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export const UserName = styled.span`
  margin-top: 8px;
  font-size: 12px;
  color: white;
  font-family: "Sixtyfour", sans-serif;
`;

export const LineWrapper = styled.div`
  position: relative;
`;

export const VerticalLine = styled.div<{ left: string }>`
  position: absolute;
  top: 108px;
  left: ${({ left }) => left};
  width: 1.1px;
  height: 100px;
  background-color: white;
  z-index: 5;
`;

export const HorizontalLine = styled.div<{ left: string }>`
  position: absolute;
  top: 156px;
  left: ${({ left }) => left};
  width: 85px;
  height: 1.1px;
  background-color: white;
  z-index: 5;
`;

export const WinnerGrid = styled.div`
  position: absolute;
  top: 118px;
  left: 118px;
  display: grid;
  grid-template-columns: repeat(2, 100px);
  gap: 0 30px;
`;

export const VsText = styled.div`
  position: absolute;
  top: 145px;
  left: 215px;
  color: white;
  font-size: 18px;
  font-family: "Sixtyfour", sans-serif;
  z-index: 10;
`;
