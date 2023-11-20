import { Ollama } from "langchain/llms/ollama";

import { ModelServerAdapter } from ".";

export type OllamaModelType =
  | "phind-codellama"
  | "codebooga"
  | "mistral-7b"
  | "mistral-13b";

export class OllamaClient implements ModelServerAdapter {
  baseUrl: string;

  ollama: Ollama;

  constructor(baseUrl: string, model: OllamaModelType) {
    this.baseUrl = baseUrl;
    this.ollama = new Ollama({ baseUrl: this.baseUrl, model });
  }

  async queryModel(prompt: string): Promise<string> {
    const stream = await this.ollama.stream(prompt);

    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }

    return chunks.join("");
  }
}
