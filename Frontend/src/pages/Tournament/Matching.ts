import styled, { css, createGlobalStyle } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ProfileOverlay = styled.div`
  position: absolute;
  top: 150px;
  left: 35px;
  z-index: 10;
  display: flex;
  justify-content: center;
  pointer-events: none;
`;

export const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100px);
  grid-template-rows: repeat(2, auto);
  gap: 90px 240px;
`;

export const UserProfile = styled.div<{ isReady: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
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
  font-size: 14px;
  color: white;
  font-family: "Sixtyfour", sans-serif;
`;
