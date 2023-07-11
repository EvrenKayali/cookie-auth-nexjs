import { NextRequest, NextResponse } from "next/server";
import { getKeyStore } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const keyStore = await getKeyStore();
  return NextResponse.json(keyStore.toJSON());
}
