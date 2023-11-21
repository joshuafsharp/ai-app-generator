import { Elysia } from "elysia";
import * as Queue from "bee-queue";

import { createUserStories } from "./jobs";

// TODO: Create REST api endpoints and handler functions with elysia
export const getProductManagerRoutes = (app: Elysia) =>
  app.group(
    "product-manager",
    (app) =>
      // TODO: Provide overview of project requirements to product manager
      app.post("/initiate", ({}) => "Hi")
    // TODO: provide
  );

export const productManagerQueue = new Queue<TODO Try and outline all the jobs that can be initiated from this queue>(
  "product-manager"
);
