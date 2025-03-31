import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.img<{ isReady: boolean }>`
  width: ${({ width }) => width ?? "70px"};
  height: ${({ height }) => height ?? "70px"};
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid transparent;

  ${({ isReady }) =>
    isReady &&
    css`
      border-color: green;
    `}
`;

export const Name = styled.p`
  color: white;
  font-family: "Sixtyfour";
  font-size: 12px;
  margin-top: 6px;
  text-align: center;
`;
