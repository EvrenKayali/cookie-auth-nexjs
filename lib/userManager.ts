import { NewUser, db } from "@/data/drizzle";
import { users } from "@/data/entities";
import { and, eq } from "drizzle-orm";

export const register = async (user: NewUser) => {
  const result = await db.insert(users).values(user).returning();
  return result[0];
};

export const findByUserNameAndPassword = async (
  email: string,
  password: string
) => {
  return await db.query.users.findFirst({
    where: and(eq(users.email, email), eq(users.password, password)),
  });
};
