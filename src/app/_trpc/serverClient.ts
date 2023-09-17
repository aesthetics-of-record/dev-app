// 서버사이드 렌더링 클라이언트

import { appRouter } from '@/server';
import { httpBatchLink } from '@trpc/client';

const url =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:3000/api/trpc'
    : 'http://localhost:3000/api/trpc';

export const serverTrpc = appRouter.createCaller({
  links: [httpBatchLink({ url })],
});

