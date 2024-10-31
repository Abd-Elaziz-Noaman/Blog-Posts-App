import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["media2.dev.to"],
  },
  distDir: "build",
};

export default nextConfig;
