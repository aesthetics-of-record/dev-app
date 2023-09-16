"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import useAuthModal from "@/hooks/modals/useAuthModal";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { FaUserAlt } from "react-icons/fa";
import { ThemeMenu } from "./ThemeMenu";
import toast from "react-hot-toast";
import UserAvatar from "./UsetAvater";
import UserMenu from "./UserMenu";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const authModal = useAuthModal();
  const router = useRouter();

  const user = useUser();

  return (
    <div
      className={twMerge(
        `
    h-fit
  `,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between p-4 border fixed">
        <div></div>
        <div className="flex justify-center items-center gap-x-4">
          <ThemeMenu />

          {user ? (
            <div className="flex gap-x-4 items-center">
              <UserMenu user={user}>
                <UserAvatar user={user} className="" />
              </UserMenu>
            </div>
          ) : (
            <>
              <div>
                <Button onClick={authModal.onOpen} className="px-6 py-2">
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="h-20" />
      <div className="">{children}</div>
    </div>
  );
};

export default Header;
