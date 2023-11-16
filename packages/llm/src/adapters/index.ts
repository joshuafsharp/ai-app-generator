export interface ModelServerAdapter {
  baseUrl: string;

  queryModel(modelName: string, prompt: string): Promise<string>;
}

// Future adapters like OpenAIAdapter, GoogleBardAdapter, etc., would also implement ModelServerAdapter

// Usage in worker job
// const llmAdapter = LLMAdapterFactory.createAdapter('ollama');
// const response = await llmAdapter.queryModel('phind-codellama', 'Your prompt here');
