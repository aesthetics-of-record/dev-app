'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queeyClient = new QueryClient();

  return (
    <QueryClientProvider client={queeyClient}>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;