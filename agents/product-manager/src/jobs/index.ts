import { JobHandler } from "@project-aegis/worker";
import * as Queue from "bee-queue";

export * from "./process-requirements";

export const queue = new Queue("product-manager");

export function scheduleJob<T>(jobData: T, handler: JobHandler<T>) {
  queue.createJob(jobData).save();

  queue.process((job) => {
    console.log(
      `Started processing job ${job.id} with data:\n${JSON.stringify(
        job.data,
        null,
        2
      )}}`
    );

    const response = handler.start(job.data);

    console.log(`Finished processing job ${job.id}`);

    return response;
  });
}
