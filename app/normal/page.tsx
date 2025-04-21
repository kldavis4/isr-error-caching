export const revalidate = 15

async function getData() {
  // Simulate data fetching
  return {
    title: "Normal ISR Page",
    content: "This is a normal ISR page with dummy content",
    timestamp: new Date().toISOString(),
  }
}

export default async function NormalPage() {
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
          This page will be revalidated after 15 seconds. Refresh to see if it's been regenerated.
        </p>
      </div>
    </div>
  )
}
