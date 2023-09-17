'use client';

import React from 'react';
import useAuthModal from '@/hooks/modals/useAuthModal';
import { DialogDemo } from '@/components/frames/DialogDemo';

import { trpc } from '@/app/_trpc/client';

const Home: React.FC = () => {
  const authModal = useAuthModal();
  const getTodos = trpc.getTodos.useQuery();

  return (
    <div className="h-full">
      <DialogDemo />
      <div>{JSON.stringify(getTodos.data)}</div>
    </div>
  );
};

export default Home;
