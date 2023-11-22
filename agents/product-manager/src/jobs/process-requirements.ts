import { ModelServerAdapter } from "@project-aegis/llm/src/adapters";
import { AgentType, JobHandler } from "@project-aegis/worker";
import { Client } from "edgedb";

export interface JobData {
  name: string;
  description: string;
}

export class ProcessRequirementsJob implements JobHandler<JobData> {
  dbClient: Client;
  llmClient: ModelServerAdapter;

  agentType: AgentType = "product-manager";

  constructor(dbClient: Client, llmClient: ModelServerAdapter) {
    this.dbClient = dbClient;
    this.llmClient = llmClient;
  }

  start(jobData: JobData) {
    // TODO: Validate project exists with the given id
    // TODO: Create user stories from project name and description
    console.log(jobData);
  }
}
