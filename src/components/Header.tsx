'use client';

import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/ui/button';
import useAuthModal from '@/hooks/modals/useAuthModal';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { ThemeMenu } from './ThemeMenu';
import toast from 'react-hot-toast';
import UserAvatar from './UsetAvater';
import UserMenu from './UserMenu';
import SheetSide from './side/SheetSide';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const authModal = useAuthModal();
  const router = useRouter();

  const supabaseClient = useSupabaseClient();
  const user = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('로그아웃!');
    }
  };

  return (
    <div
      className={twMerge(
        `

    h-fit
  `,
        className
      )}
    >
      <div className="w-full flex items-center justify-between p-4 border fixed bg-background/90">
        <div>
          <div className="block md:hidden">
            <SheetSide />
          </div>
        </div>

        <div className="flex justify-center items-center gap-x-4">
          <ThemeMenu />

          {user ? (
            <div className="flex gap-x-4 items-center">
              <UserMenu user={user}>
                <UserAvatar
                  user={user}
                  className=""
                />
              </UserMenu>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="px-6 py-2"
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="h-[74px]" /> {/* 헤더크기인 74px 만큼.. */}
      <div className="">{children}</div>
    </div>
  );
};

export default Header;
