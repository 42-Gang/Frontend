import React from "react";
import { User } from "../../types/User";
import {
  Wrapper,
  ProfileImage,
  Name,
  WinnerText,
} from "./UserProfileCard.styles";

interface UserProfileCardProps {
  user: User;
  size?: number;
  isReady?: boolean;
  isWinner?: boolean;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  size = 70,
  isReady = false,
  isWinner = false,
}) => {
  return (
    <Wrapper>
      <div style={{ position: "relative", width: size, height: size }}>
        {isWinner && <WinnerText>WINNER!</WinnerText>}
        <ProfileImage
          src={user.profileImage}
          alt={user.name}
          width={size}
          height={size}
          isReady={isReady}
        />
      </div>
      <Name>{user.name}</Name>
    </Wrapper>
  );
};

export default UserProfileCard;
