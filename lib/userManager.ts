import { NewUser, db } from "@/data/drizzle";
import { users } from "@/data/entities";
import { and, eq } from "drizzle-orm";
import * as bcrypt from "bcrypt";

export const register = async (user: NewUser) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const passwordHash = await bcrypt.hash(user.password!, salt);

  const result = await db
    .insert(users)
    .values({ ...user, password: passwordHash })
    .returning();
  return result[0];
};

export const findByUserNameAndPassword = async (
  email: string,
  password: string
) => {
  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (!user) {
    return undefined;
  }

  if (await bcrypt.compare(password, user.password)) {
    return user;
  }
};
