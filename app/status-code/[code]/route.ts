import type { NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest, { params }: { params: { code: string } }) {
  const statusCode = Number.parseInt(params.code, 10) || 200

  // Return a Response with the requested status code
  return new Response(
    JSON.stringify({
      message: `This page returns status code ${statusCode}`,
      timestamp: new Date().toISOString(),
    }),
    {
      status: statusCode,
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
}
