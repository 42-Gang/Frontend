import styled from "styled-components";
import SixtyfourFont from "../../assets/fonts/Sixtyfour.ttf";
import { createGlobalStyle } from "styled-components";
import ReadyButtonImage from "../../assets/image/ReadyButton.png";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Sixtyfour';
    src: url(${SixtyfourFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export const TournamentContainer = styled.div`
  width: 530px; /* 800px - 채팅창 너비(270px) */
  height: 600px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  padding: 20px;
`;

export const TournamentTitle = styled.h1`
  font-family: "Sixtyfour", sans-serif;
  font-size: 28px;
  letter-spacing: 2px;
  color: white;
  margin-left: 82px;
`;

export const ChatContainer = styled.div`
  width: 290px;
  height: 600px;
  background-color: #fd906f;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto;
`;

export const ChatHeader = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin: 5px 10px;
  text-align: left;
`;

export const ChatMessage = styled.div`
  font-size: 16px;
  margin: 5px 10px;
`;

export const ChatInputContainer = styled.div`
  display: flex;
  position: relative;
  bottom: -3px;
  left: -2px;
  right: 10px;
  background-color: #fd906f;
  padding: 5px;
  border-radius: 5px;
  opacity: 1;
  box-shadow: none;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 5px;
  border: 2px solid #000000;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
`;

export const SendButton = styled.button`
  margin-left: 6px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #ff6b6b;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #e55b5b;
  }
`;

export const ReadyButton = styled.button`
  position: absolute;
  bottom: -10px;
  left: 46%;
  transform: translateX(-50%);
  width: 150px;
  height: 80px;
  background-image: url(${ReadyButtonImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
