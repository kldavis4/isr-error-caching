export const dynamicParams = true
export const revalidate = 15

// Generate no paths at build time
export function generateStaticParams() {
  return []
}

async function getData(slug: string) {
  // Check if we're in the build phase
  const isBuildTime = process.env.NEXT_PHASE === "phase-production-build"

  // This would throw an error at build time, but we're not generating any pages at build time
  if (isBuildTime) {
    throw new Error("This page fails at build time")
  }

  // Return normal data during runtime/revalidation
  return {
    title: `Build Error Page (Now Working)`,
    content: `This page with slug "${slug}" would have failed at build time but works during runtime`,
    timestamp: new Date().toISOString(),
  }
}

export default async function BuildErrorPage({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug)

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <p className="mb-4">{data.content}</p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm text-gray-600">
          This page was generated at: <span className="font-mono">{data.timestamp}</span>
        </p>
        <p className="text-sm text-gray-600 mt-2">
          This page uses a dynamic route with <code>generateStaticParams: []</code> and <code>dynamicParams: true</code>
          . It would fail at build time, but since we're not generating any paths at build time, the build succeeds.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          It will be revalidated after 15 seconds. Refresh to see if it's been regenerated.
        </p>
      </div>
    </div>
  )
}
