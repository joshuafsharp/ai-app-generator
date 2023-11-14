import { Elysia } from "elysia";

// TODO: Create REST api endpoints and handler functions with elysia
export const getProductManagerRoutes = (app: Elysia) =>
  app.group(
    "product-manager",
    (app) =>
      // TODO: Provide overview of project requirements to product manager
      app.post("/initiate", ({}) => "Hi")
    // TODO: provide
  );
