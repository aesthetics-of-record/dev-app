import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/providers/themeProvider';
import { Toaster } from '@/components/ui/toaster';
import SupabaseProvider from '@/providers/SupabaseProvider';
import ModalProvider from '@/providers/ModalProvider';
import HotToasterProvider from '@/providers/HotToasterProvider';
import SheetSide from '@/components/side/SheetSide';
import SideLayout from '@/components/side/SideLayout';
import Header from '@/components/Header';
import TrpcProvider from './_trpc/trpcProvider';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Project-Dev-App',
  description: 'this is my Project-Dev-App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={font.className}>
        <TrpcProvider>
          <SupabaseProvider>
            <ThemeProvider>
              <Header>
                <SideLayout>{children}</SideLayout>
              </Header>
            </ThemeProvider>
            <ModalProvider />
          </SupabaseProvider>
        </TrpcProvider>

        <Toaster />
        <HotToasterProvider />
      </body>
    </html>
  );
}
