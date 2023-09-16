'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import useAuthModal from '@/hooks/modals/useAuthModal';
import { DialogDemo } from '@/components/frames/DialogDemo';

const Home: React.FC = () => {
  const authModal = useAuthModal();

  return (
    <div className="h-full">
      <DialogDemo />
    </div>
  );
};

export default Home;
