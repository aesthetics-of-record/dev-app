import { z } from 'zod';

import { publicProcedure, router } from './trpc';

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [10, 20, 30];
  }),

  getData: publicProcedure.query(async () => {
    console.log('getData');
    return 'getData';
  }),
  setData: publicProcedure.input(z.string()).mutation(async ({ input }) => {
    // Here you would update a database using the
    // input string passed into the procedure
    console.log(input);
    return input;
  }),
});

// 추후 레퍼런스를 위한 타입
export type AppRouter = typeof appRouter;
