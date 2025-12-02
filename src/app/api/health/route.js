export async function GET() {
  return Response.json({
    status: "ok",
    message: "3x Growth Consulting website is running",
    timestamp: new Date().toISOString(),
  })
}
