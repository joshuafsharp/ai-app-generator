import { ModelServerAdapter } from "./adapters";
import { OllamaClient, OllamaModelType } from "./adapters/ollama";

export class ModelServerAdapterFactory {
  static createAdapter(
    type: string,
    model: OllamaModelType,
    baseUrl?: string
  ): ModelServerAdapter {
    switch (type) {
      case "ollama":
        return new OllamaClient(baseUrl ?? "http://localhost:11434", model);

      // case 'openai': return new OpenAIAdapter();
      // case 'googlebard': return new GoogleBardAdapter();

      default:
        throw new Error(`Unknown LLM type: ${type}`);
    }
  }
}
