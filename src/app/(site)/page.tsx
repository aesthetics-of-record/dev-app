"use client";

import React from "react";
import { ThemeMenu } from "@/components/ThemeMenu";
import { Button } from "@/components/ui/button";
import Modal from "@/components/modals/Modal";
import useAuthModal from "@/hooks/modals/useAuthModal";
import { DialogDemo } from "@/components/frames/DialogDemo";
import Header from "@/components/Header";
import { useUser } from "@supabase/auth-helpers-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const Home: React.FC = () => {
  const authModal = useAuthModal();

  return (
    <div>
      <Header>
        <DialogDemo />
        <div>
          <Button
            onClick={authModal.onOpen}
            className="bg-transparent text-neutral-300 font-medium"
          >
            Sign up
          </Button>
        </div>
        <div>
          <Sheet>
            <SheetContent side={"left"}>
              <div className="grid gap-4 py-4">
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Header>
    </div>
  );
};

export default Home;
