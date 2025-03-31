import React from "react";
import {
  CongratsText,
  WinnerLabel,
  FinalWinnerWrapper,
  OpponentWrapper,
  VsText,
} from "../MatchResult";
import UserProfileCard from "./UserProfileCard";

interface User {
  id: number;
  name: string;
  profileImage: string;
}

interface Props {
  winner: User;
  loser: User;
}

const FinalResultDisplay: React.FC<Props> = ({ winner, loser }) => {
  const isLeft = winner.id < loser.id;

  return (
    <>
      <CongratsText>Congrats!</CongratsText>
      <WinnerLabel isLeft={isLeft}>WINNER!</WinnerLabel>
      <FinalWinnerWrapper isLeft={isLeft}>
        <UserProfileCard user={winner} />
      </FinalWinnerWrapper>
      <OpponentWrapper isLeft={isLeft}>
        <UserProfileCard user={loser} />
      </OpponentWrapper>
      <VsText isLeft={isLeft}>VS</VsText>
    </>
  );
};

export default FinalResultDisplay;
