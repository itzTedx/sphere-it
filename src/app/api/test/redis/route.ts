import redis from "@/lib/redis";

export async function GET(_request: Request) {
  const pong = await redis.ping();
  console.log(pong);

  return Response.json({ message: pong });
}
