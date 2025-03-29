import React from "react";
import { User } from "../../types/User";
import { Wrapper, ProfileImage, Name } from "./UserProfileCard.styles";

interface UserProfileCardProps {
  user: User;
  size?: number;
  isReady?: boolean;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  size = 70,
  isReady = false,
}) => {
  return (
    <Wrapper>
      <ProfileImage
        src={user.profileImage}
        alt={user.name}
        width={size}
        height={size}
        isReady={isReady}
      />
      <Name>{user.name}</Name>
    </Wrapper>
  );
};

export default UserProfileCard;
