import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All images use static responsive files; do not expose an unused transformation endpoint.
  images: { unoptimized: true },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
