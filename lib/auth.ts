import * as fs from "fs";
import * as jose from "node-jose";
import { addDays } from "date-fns";
import { cookies } from "next/headers";
import * as jwt from "jsonwebtoken";
import { cache } from "react";

export type User = {
  sub: string;
  email: string;
};

export type TokenPayload = {
  isAuthanticated: boolean;
  user?: User & { iat: number; exp: number };
};

export const keyFile = "keys.json";

export async function generateKeys() {
  const keyStore = jose.JWK.createKeyStore();
  await keyStore.generate("RSA", 2048, {
    alg: "RS256",
    use: "sig",
  });

  fs.writeFileSync(keyFile, JSON.stringify(keyStore.toJSON(true), null, "  "));
}

export async function generateKeysIfNotExist() {
  if (!fs.existsSync(keyFile)) {
    await generateKeys();
  }
}

export async function getKeyStore() {
  const pem = Buffer.from(process.env.CERT!, "base64").toString("ascii");
  const keyStore = jose.JWK.createKeyStore();
  const key = await jose.JWK.asKey(pem!, "pem");
  await keyStore.add(key);
  return keyStore;
}

export async function generateJwt(user: User) {
  const keyStore = await getKeyStore();
  if (!keyStore) {
    return undefined;
  }
  const [key] = keyStore.all({ use: "sig" });
  const xp = addDays(Date.now(), 10).getTime();
  const opt = { compact: true, jwk: key, fields: { typ: "jwt" } };
  const payload = JSON.stringify({
    exp: Math.floor(xp / 1000),
    iat: Math.floor(Date.now() / 1000),
    ...user,
  });
  const token = await jose.JWS.createSign(opt, key).update(payload).final();

  return token;
}

export async function signIn(user: User, persistent?: boolean) {
  const token = await generateJwt(user);

  cookies().set("auth", String(token), {
    httpOnly: true,
    path: "/",
    secure: true,
    sameSite: "lax",
    priority: "high",
    expires: persistent ? addDays(Date.now(), 15) : undefined,
  });
}

export const getSession = cache(async (): Promise<TokenPayload> => {
  const token = cookies().get("auth")?.value;

  if (!token) {
    return { isAuthanticated: false };
  }
  const keyStore = await getKeyStore();

  if (!keyStore) {
    return { isAuthanticated: false };
  }
  const decoded = jwt.decode(token, { complete: true });
  const kid = decoded?.header.kid;

  const key = keyStore.get(kid!);

  try {
    const result = jwt.verify(token, key.toPEM()) as User & {
      iat: number;
      exp: number;
    };
    return { isAuthanticated: true, user: result };
  } catch {
    return { isAuthanticated: false };
  }
});
