/**
 * Example API route — health check.
 *
 * GET /api/hello -> { message: "Hello from NextSaaS!", timestamp: "..." }
 */

export async function GET() {
  return Response.json({
    message: 'Hello from NextSaaS!',
    timestamp: new Date().toISOString(),
  });
}
