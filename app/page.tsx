export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">ISR Demo Pages</h1>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Normal ISR Page</h2>
          <p className="mb-4">This page renders dummy content with a 15-second revalidation time.</p>
          <a href="/normal" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View Page
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Always Error Page (JSON)</h2>
          <p className="mb-4">
            This page always returns a 500 status with a JSON error message, with 15-second revalidation.
          </p>
          <a
            href="/always-error/demo"
            className="inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            View Page
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Build Error Page</h2>
          <p className="mb-4">
            This page would fail at build time but works during runtime with a 15-second revalidation.
          </p>
          <a
            href="/build-error/demo"
            className="inline-block bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600"
          >
            View Page
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Custom Status Code (JSON)</h2>
          <p className="mb-4">This page returns any status code you specify in the URL with a JSON response.</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <a
              href="/status-code/200"
              className="inline-block bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
            >
              200 OK
            </a>
            <a
              href="/status-code/400"
              className="inline-block bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600"
            >
              400 Bad Request
            </a>
            <a
              href="/status-code/404"
              className="inline-block bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600"
            >
              404 Not Found
            </a>
            <a
              href="/status-code/500"
              className="inline-block bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
            >
              500 Server Error
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Custom HTML Error Pages</h2>
          <p className="mb-4">This page returns any status code you specify with a custom HTML error page.</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <a
              href="/html-error/400"
              className="inline-block bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600"
            >
              400 Bad Request
            </a>
            <a
              href="/html-error/404"
              className="inline-block bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600"
            >
              404 Not Found
            </a>
            <a
              href="/html-error/500"
              className="inline-block bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
            >
              500 Server Error
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold mb-2">How ISR Works</h3>
        <p>
          Incremental Static Regeneration (ISR) enables you to update static content without rebuilding the entire site.
          Each page has a revalidation time of 15 seconds, after which Next.js will attempt to regenerate the page on
          the next request.
        </p>
      </div>
    </div>
  )
}
