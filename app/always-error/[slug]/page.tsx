export const dynamicParams = true
export const revalidate = 15

// Generate no paths at build time
export function generateStaticParams() {
  return []
}

export default async function AlwaysErrorPage({ params }: { params: { slug: string } }) {
  // Method 1: For 404 errors, use notFound()
  // notFound()

  // Method 2: For other status codes, we need to use a different approach
  // Instead of returning a Response, we'll render an error UI
  return (
    <div className="max-w-2xl mx-auto bg-red-50 p-6 rounded-lg border border-red-200">
      <h1 className="text-2xl font-bold text-red-700 mb-4">500 Server Error</h1>
      <div className="bg-white p-4 rounded mb-4 overflow-auto">
        <pre className="text-red-600 whitespace-pre-wrap">
          {`This page always returns an error (slug: ${params.slug})`}
        </pre>
      </div>
      <p className="text-gray-700 mb-4">
        This page simulates a 500 error with ISR. It will be revalidated after 15 seconds.
      </p>
      <p className="text-gray-500 text-sm">Generated at: {new Date().toISOString()}</p>
    </div>
  )
}
