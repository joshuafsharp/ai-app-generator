import * as Queue from "bee-queue";

export * from "./process-requirements";

export function createAndProcessJob<T>(
  jobData: T,
  handler: JobHandler<T>
): void {
  const queue = new Queue("product-manager");
  const job = queue.createJob(jobData);

  job
    .save()
    .then(() => {
      handler.handle(jobData);
    })
    .catch((error) => {
      console.error("Error enqueueing job:", error);
    });
}
