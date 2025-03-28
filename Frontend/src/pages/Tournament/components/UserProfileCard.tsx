import React from "react";
import { UserProfile, UserImage, UserName } from "../Matching";

interface User {
  id: number;
  name: string;
  profileImage: string;
}

interface Props {
  user: User;
  isReady?: boolean;
}

const UserProfileCard: React.FC<Props> = ({ user, isReady = false }) => (
  <UserProfile isReady={isReady}>
    <UserImage src={user.profileImage} alt={user.name} />
    <UserName>{user.name}</UserName>
  </UserProfile>
);

export default UserProfileCard;
