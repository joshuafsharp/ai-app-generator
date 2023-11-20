import { test, expect } from "vitest";
import { OllamaClient, OllamaModelType } from "./ollama";

test(
  "OllamaClient",
  async () => {
    const client = new OllamaClient("http://localhost:11434", "codebooga");

    const result = await client.queryModel("test prompt");

    // Check that the result is a string (this will depend on your actual API)
    expect(typeof result, "string");

    // Check that the result is not empty
    expect(result.length).toBeGreaterThan(0);
  },
  60 * 1000
);
