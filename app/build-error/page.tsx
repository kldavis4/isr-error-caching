export const revalidate = 15

async function getData() {
  // Check if we're in the build phase using NEXT_PHASE environment variable
  // During build, NEXT_PHASE will be 'phase-production-build'
  const isBuildTime = process.env.NEXT_PHASE === "phase-production-build"

  // Throw an error only at build time
  if (isBuildTime) {
    throw new Error("This page fails at build time")
  }

  // Return normal data during revalidation
  return {
    title: "Build Error Page (Now Working)",
    content: "This page failed at build time but works during revalidation",
    timestamp: new Date().toISOString(),
  }
}

export default async function BuildErrorPage() {
  const data = await getData()

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <p className="mb-4">{data.content}</p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm text-gray-600">
          This page was generated at: <span className="font-mono">{data.timestamp}</span>
        </p>
        <p className="text-sm text-gray-600 mt-2">
          This page initially failed at build time but now works during revalidation. It will be revalidated after 15
          seconds. Refresh to see if it's been regenerated.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Environment: {process.env.NODE_ENV}, Build Phase: {process.env.NEXT_PHASE || "runtime"}
        </p>
      </div>
    </div>
  )
}
