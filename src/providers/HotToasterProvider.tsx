"use client";

import { Toaster } from "react-hot-toast";

const HotToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "#333",
          color: "#fff",
        },
      }}
    />
  );
};

export default HotToasterProvider;