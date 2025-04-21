export const dynamicParams = true
export const revalidate = 15

// Generate no paths at build time
export function generateStaticParams() {
  return []
}

export default async function StatusCodePage({ params }: { params: { code: string } }) {
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
