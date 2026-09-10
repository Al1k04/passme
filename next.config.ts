import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.rawg.io",
      },
      { protocol: "https", hostname: "store.playstation.com" },
    ],
  },
};

export default nextConfig;
