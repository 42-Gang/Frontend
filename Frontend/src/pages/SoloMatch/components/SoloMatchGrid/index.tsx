import React from "react";
import UserProfileCard from "../../../Tournament/components/UserProfileCard/index.tsx";
import VsText from "../../../Tournament/components/\bVsText/\bindex.tsx";
import { GridWrapper } from "./SoloMatchGrid.styles.ts";

interface Props {
  leftUser: any;
  rightUser: any;
  readyStates: { [userId: number]: boolean };
  size?: number;
}

const SoloMatchGrid = ({
  leftUser,
  rightUser,
  readyStates,
  size = 70,
}: Props) => {
  return (
    <GridWrapper>
      <UserProfileCard
        user={leftUser}
        isReady={readyStates[leftUser.id]}
        size={size}
      />
      <VsText />
      <UserProfileCard
        user={rightUser}
        isReady={readyStates[rightUser.id]}
        size={size}
      />
    </GridWrapper>
  );
};

export default SoloMatchGrid;
