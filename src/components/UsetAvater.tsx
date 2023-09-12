import { FC } from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import Image from "next/image";
import { Icons } from "./Icons";
import { AvatarProps } from "@radix-ui/react-avatar";
import { User } from "@supabase/auth-helpers-nextjs";

interface UserAvatarProps extends AvatarProps {
  user: User;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar {...props}>
      {user.user_metadata.avatar_url ? (
        <div className="relative aspect-square h-full w-full">
          <Image
            fill
            src={user.user_metadata.avatar_url}
            alt="profile picture"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.user_metadata.name}</span>
          <Icons.user />
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
