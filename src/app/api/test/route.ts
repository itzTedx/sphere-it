import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    ok: true,
    message: "Test route is working",
    timestamp: new Date().toISOString(),
  });
}
