export type AgentType = "product-manager" | "developer";

export interface JobHandler<T> {
  agentType: AgentType;
  start(jobData: T): void;
}
