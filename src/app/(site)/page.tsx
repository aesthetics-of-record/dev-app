'use client';

import React from 'react';
import { ThemeMenu } from '@/components/ThemeMenu';
import { Button } from '@/components/ui/button';

const Home: React.FC = () => {
  return (
    <div className={''}>
      <div>
        <Button>버튼</Button>
        <ThemeMenu />
      </div>
    </div>
  );
};

export default Home;
