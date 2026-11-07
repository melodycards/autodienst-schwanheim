import { NextResponse, type NextRequest } from "next/server";
import { isProductionHost, siteUrl } from "./app/seo";

export function proxy(request: NextRequest) {
  if (request.headers.get("host")?.toLowerCase() === "autodienst-schwanheim.vercel.app") {
    const destination = new URL(siteUrl);
    destination.pathname = request.nextUrl.pathname;
    destination.search = request.nextUrl.search;
    return NextResponse.redirect(destination, 308);
  }

  const response = NextResponse.next();
  if (!isProductionHost(request.headers.get("host"))) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image).*)",
    // Include framework assets only on the fixed production alias.
    { source: "/_next/:path*", has: [{ type: "host", value: "autodienst-schwanheim\\.vercel\\.app" }] },
  ],
};
