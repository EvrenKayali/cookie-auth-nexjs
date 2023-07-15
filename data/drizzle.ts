import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { users } from "./entities";

export type User = InferModel<typeof users>;
export type NewUser = InferModel<typeof users, "insert">;

export const db = drizzle(sql, { logger: true, schema: { users } });
