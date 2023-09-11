"use client";

import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import useAuthModal from "@/hooks/modals/useAuthModal";
import { supabaseAuthUiLocalization } from "@/localization/kor";
import { useEffect } from "react";

const customTheame = {
  default: {
    colors: {
      brand: "hsl(var(--background))",
      brandAccent: "hsl(var(--primary))",
      brandButtonText: "hsl(var(--foreground))",
      defaultButtonBackground: "hsl(val(--background))",
      defaultButtonBackgroundHover: "hsl(var(--primary))",
      defaultButtonBorder: "hsl(var(--primary))",
      defaultButtonText: "hsl(var(--foreground))",
      dividerBackground: "gray",
      inputBackground: "transparent",
      inputBorder: "lightgray",
      inputBorderHover: "hsl(var(--primary))",
      inputBorderFocus: "hsl(var(--primary))",
      inputText: "hsl(var(--foreground))",
      inputLabelText: "gray",
      inputPlaceholder: "darkgray",
      messageText: "gray",
      messageTextDanger: "red",
      anchorTextColor: "gray",
      anchorTextHoverColor: "darkgray",
    },
    space: {
      spaceSmall: "4px",
      spaceMedium: "8px",
      spaceLarge: "16px",
      labelBottomMargin: "8px",
      anchorBottomMargin: "4px",
      emailInputSpacing: "4px",
      socialAuthSpacing: "4px",
      buttonPadding: "10px 15px",
      inputPadding: "10px 15px",
    },
    fontSizes: {
      baseBodySize: "13px",
      baseInputSize: "14px",
      baseLabelSize: "14px",
      baseButtonSize: "14px",
    },
    fonts: {
      bodyFontFamily: `ui-sans-serif, sans-serif`,
      buttonFontFamily: `ui-sans-serif, sans-serif`,
      inputFontFamily: `ui-sans-serif, sans-serif`,
      labelFontFamily: `ui-sans-serif, sans-serif`,
    },
    // fontWeights: {},
    // lineHeights: {},
    // letterSpacings: {},
    // sizes: {},
    borderWidths: {
      buttonBorderWidth: "1px",
      inputBorderWidth: "1px",
    },
    // borderStyles: {},
    radii: {
      borderRadiusButton: "4px",
      buttonBorderRadius: "4px",
      inputBorderRadius: "4px",
    },
    // shadows: {},
    // zIndices: {},
    // transitions: {},
  },
};

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();

  useEffect(() => {
    console.log(session);
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal
      title="환영합니다."
      description="로그인/회원가입을 해 주세요."
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        providers={["github", "google"]}
        supabaseClient={supabaseClient}
        appearance={{
          theme: customTheame,
          variables: {
            default: {
              colors: {},
            },
          },
        }}
        localization={{
          variables: supabaseAuthUiLocalization,
        }}
      />
    </Modal>
  );
};

export default AuthModal;
