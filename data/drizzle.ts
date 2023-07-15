import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { UsersTable } from "./entities";

export type User = InferModel<typeof UsersTable>;
export type NewUser = InferModel<typeof UsersTable, "insert">;

// Connect to Vercel Postgres
export const db = drizzle(sql);
export { UsersTable };
