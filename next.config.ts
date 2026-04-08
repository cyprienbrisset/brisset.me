import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export", // Static export — works on OVH static hosting
  images: {
    unoptimized: true, // Required with output: 'export'
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },
  reactStrictMode: true,
  trailingSlash: true, // Better for static hosts
  experimental: {
    optimizePackageImports: ["@react-three/drei", "@react-three/fiber"],
  },
};

export default config;
