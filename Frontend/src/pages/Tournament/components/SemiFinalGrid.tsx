// components/SemiFinalGrid.tsx
import React from "react";
import { WinnerGrid, VsText } from "../Matching";
import UserProfileCard from "./UserProfileCard";

interface User {
  id: number;
  name: string;
  profileImage: string;
}

interface Props {
  users: User[];
  readyStates?: { [userId: number]: boolean };
}

const SemiFinalGrid: React.FC<Props> = ({ users, readyStates = {} }) => (
  <>
    <WinnerGrid>
      {users.map((user) => (
        <UserProfileCard
          key={user.id}
          user={user}
          isReady={!!readyStates[user.id]}
        />
      ))}
    </WinnerGrid>
    <VsText>VS</VsText>
  </>
);

export default SemiFinalGrid;
