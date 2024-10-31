import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const reqHeaders = new Headers(req.headers);
  const headersList = await headers();

  (await cookies()).set("resultsPerPage", "20");
  const theme = req.cookies.get("theme");

  console.log(reqHeaders.get("Authorization"));
  console.log(headersList.get("Authorization"));
  console.log(theme);
  console.log((await cookies()).get("resultsPerPage"));

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
