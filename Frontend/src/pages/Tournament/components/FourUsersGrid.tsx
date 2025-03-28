// components/FourUsersGrid.tsx
import React from "react";
import { UserGrid } from "../Matching";
import UserProfileCard from "./UserProfileCard";

interface User {
  id: number;
  name: string;
  profileImage: string;
}

interface Props {
  users: User[];
}

const FourUsersGrid: React.FC<Props> = ({ users }) => (
  <UserGrid>
    {users.map((user) => (
      <UserProfileCard key={user.id} user={user} />
    ))}
  </UserGrid>
);

export default FourUsersGrid;
