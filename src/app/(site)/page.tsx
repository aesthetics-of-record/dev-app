"use client";

import React from "react";
import { ThemeMenu } from "@/components/ThemeMenu";
import { Button } from "@/components/ui/button";
import Modal from "@/components/modals/Modal";
import useAuthModal from "@/hooks/modals/useAuthModal";
import { DialogDemo } from "@/components/frames/DialogDemo";

const Home: React.FC = () => {
  const authModal = useAuthModal();

  return (
    <div className={""}>
      <div>
        <Button>버튼</Button>
        <ThemeMenu />
        <Modal />
        <DialogDemo />
        {/* <div>
          <Button
            onClick={authModal.onOpen}
            className="bg-transparent text-neutral-300 font-medium"
          >
            Sign up
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
