'use client';

import { useMemo } from 'react';
import Box from '../Box';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { usePathname } from 'next/navigation';
import SidebarItem from './SidebarItem';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';

interface LeftSidebarProps {
  className?: string;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ className }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: '홈',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: BiSearch,
        label: '트렌드',
        active: pathname === '/trend',
        href: '/trend',
      },
    ],
    [pathname]
  );

  return (
    <div className={cn('flex', className)}>
      <div className="flex flex-col gap-y-2 h-screen w-[250px] border-r">
        <Box className="h-full px-5">
          <div className="flex flex-col gap-y-2 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem
                key={item.label}
                {...item}
              ></SidebarItem>
            ))}
          </div>
          <Separator />
        </Box>
      </div>
    </div>
  );
};

export default LeftSidebar;
