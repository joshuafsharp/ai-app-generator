import * as productManagerJobs from "@project-aegis/product-manager/src/jobs";

declare var self: Worker;

export interface WorkerEvent {
  type: productManagerJobs;
}

const workerURL = new URL("worker.ts", import.meta.url).href;
export const worker = new Worker(workerURL);

worker.postMessage("hello");

worker.onmessage<> = (event) => {
  console.log(event.data);
};
