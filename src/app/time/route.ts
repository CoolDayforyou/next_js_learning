// export const dynamic = "force-dynamic"; //* For NEXT.js 14

export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
}
