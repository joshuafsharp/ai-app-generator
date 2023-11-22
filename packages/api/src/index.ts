import { Elysia } from "elysia";
import { createClient } from "edgedb";
import { User } from "@project-aegis/db/dbschema/interfaces";
import e from "@project-aegis/db/dbschema/edgeql-js";
import { getProductManagerRoutes } from "@project-aegis/product-manager";
import { ModelServerAdapterFactory } from "@project-aegis/llm";

const dbClient = createClient();

const llmClient = ModelServerAdapterFactory.createAdapter(
  "ollama",
  "phind-codellama"
);

export const app = new Elysia()
  .decorate("db", dbClient)
  .decorate("llm", llmClient);

app.use(getProductManagerRoutes(app));

app.listen(3000);
