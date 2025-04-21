import type { NextRequest } from "next/server"

// Remove force-dynamic to enable ISR
export const revalidate = 15

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  // Always return a 500 status code
  return new Response(
    JSON.stringify({
      error: `This page always returns a 500 status (slug: ${params.slug})`,
      timestamp: new Date().toISOString(),
    }),
    {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
}
