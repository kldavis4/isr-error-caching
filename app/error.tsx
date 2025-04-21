"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="max-w-2xl mx-auto text-center py-10">
      <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-red-700 mb-4">Something went wrong!</h2>
        <div className="bg-white p-4 rounded mb-4 text-left overflow-auto">
          <p className="font-mono text-red-600">{error.message}</p>
        </div>
        <p className="mb-4 text-gray-700">
          This page encountered an error during generation. For pages with ISR, Next.js will retry generating the page
          on the next request after the revalidation period (15 seconds).
        </p>
        <button onClick={reset} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Try again
        </button>
      </div>
    </div>
  )
}
