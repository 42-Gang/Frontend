import React from "react";
import { User } from "../../types/User";
import UserProfileCard from "../UserProfileCard";
import { GridWrapper } from "./SemiFinalGrid.styles.ts";

interface SemiFinalGridProps {
  users: User[];
  readyStates: { [userId: number]: boolean };
}

const SemiFinalGrid: React.FC<SemiFinalGridProps> = ({
  users,
  readyStates,
}) => {
  return (
    <GridWrapper>
      {users.map((user) => (
        <UserProfileCard
          key={user.id}
          user={user}
          isReady={readyStates[user.id]}
        />
      ))}
    </GridWrapper>
  );
};

export default SemiFinalGrid;
