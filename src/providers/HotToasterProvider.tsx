"use client";

import { Toaster } from "react-hot-toast";

const HotToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
        },
      }}
    />
  );
};

export default HotToasterProvider;
