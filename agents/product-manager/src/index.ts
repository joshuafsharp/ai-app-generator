import { app as rootApp } from "@project-aegis/api";

import { scheduleJob, ProcessRequirementsJob, JobData } from "./jobs";

// TODO: Create REST api endpoints and handler functions with elysia
export const getProductManagerRoutes = (app: typeof rootApp) =>
  app.group("product-manager", (app) =>
    // TODO: Provide overview of project requirements to product manager
    app.post("/init", ({ body: { projectId }, db, llm }) => {
      const jobData: JobData = body;
      const processRequirementsJob = new ProcessRequirementsJob(db, llm);

      scheduleJob(jobData, processRequirementsJob);

      return { message: "Job scheduled successfully" };
    })
  );
