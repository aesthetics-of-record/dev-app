"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import useAuthModal from "@/hooks/modals/useAuthModal";
import { DialogDemo } from "@/components/frames/DialogDemo";
import Header from "@/components/Header";

const Home: React.FC = () => {
  const authModal = useAuthModal();

  return (
    <div>
      <Header>
        <div className="h-full">
          <DialogDemo />

          <Button
            onClick={authModal.onOpen}
            className="bg-transparent text-neutral-300 font-medium"
          >
            Sign up
          </Button>
        </div>
      </Header>
    </div>
  );
};

export default Home;
