'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { trpc } from './client';
import { httpBatchLink } from '@trpc/client';

const TrpcProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const url =
    process.env.NODE_ENV === 'production'
      ? 'http://localhost:3000/api/trpc'
      : 'http://localhost:3000/api/trpc';

  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: url,
        }),
      ],
    })
  );

  return (
    <trpc.Provider
      client={trpcClient}
      queryClient={queryClient}
    >
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default TrpcProvider;
