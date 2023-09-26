import { createTRPCRouter } from "~/server/api/trpc";
import { promptRouter } from "./routers/prompt";
import { marketplaceRouter } from "./routers/marketplace";
import { serviceRouter } from "./routers/service";

// export const runtime = 'nodejs';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  prompt: promptRouter,
  service: serviceRouter,
  marketplace: marketplaceRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
