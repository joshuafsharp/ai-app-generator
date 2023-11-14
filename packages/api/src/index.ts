import { Elysia } from "elysia";
import { createClient } from "edgedb";
import { User } from "@project-aegis/db/dbschema/interfaces";
import e from "@project-aegis/db/dbschema/edgeql-js";
import { productManager } from "@project-aegis/product-manager";

const dbClient = createClient();

export const app = new Elysia().decorate("db", dbClient).use(productManager);

app.listen(3000);
