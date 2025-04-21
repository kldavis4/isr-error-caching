import type { NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest, { params }: { params: { code: string } }) {
  const statusCode = Number.parseInt(params.code, 10) || 500

  // Return an HTML response with the requested status code
  return new Response(
    `<!DOCTYPE html>
    <html>
      <head>
        <title>Status ${statusCode}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f5f5f5;
          }
          .error-container {
            max-width: 500px;
            padding: 2rem;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .status-code {
            font-size: 4rem;
            font-weight: bold;
            color: #e53e3e;
            margin: 0;
          }
          .timestamp {
            color: #718096;
            font-size: 0.875rem;
            margin-top: 1rem;
          }
        </style>
      </head>
      <body>
        <div class="error-container">
          <h1 class="status-code">${statusCode}</h1>
          <p>This page intentionally returns a ${statusCode} status code.</p>
          <p>This is a custom HTML error page with ISR (15-second revalidation).</p>
          <p class="timestamp">Generated at: ${new Date().toISOString()}</p>
        </div>
      </body>
    </html>`,
    {
      status: statusCode,
      headers: {
        "Content-Type": "text/html",
      },
    },
  )
}
