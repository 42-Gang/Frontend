import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 800px;
    height: 600px;
    min-width: 800px;
    min-height: 600px;
    max-width: 800px;
    max-height: 600px;
    margin: 0;
    padding: 0;
    overflow: hidden; /* 스크롤 방지 */
    position: fixed; /* 창 크기 고정 */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 화면 중앙 정렬 */
    background-color: black;
  }

  * {
    box-sizing: border-box; /* 모든 요소 크기 유지 */
  }
`;

export default GlobalStyle;
