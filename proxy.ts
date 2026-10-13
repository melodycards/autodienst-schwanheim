import { NextResponse, type NextRequest } from "next/server";
import { isProductionHost } from "./app/seo";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  if (!isProductionHost(request.headers.get("host"))) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
