import { AgentType, JobHandler } from "@project-aegis/worker";

export interface JobData {
  name: string;
  description: string;
}

export class ProcessRequirements implements JobHandler<JobData> {
  llmClient: ModelServerAdapter;

  agentType: AgentType = "product-manager";

  constructor(llmClient: ModelServerAdapter) {
    this.llmClient = llmClient;
  }

  start(jobData: JobData) {
    // TODO: Create user stories from requirements
  }
}
