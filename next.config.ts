import type { NextConfig } from "next";

/**
 * Deployed via Coolify + Nixpacks (Node SSR).
 * Nixpacks auto-detects Next.js and runs `pnpm build` + `pnpm start`.
 * No static export — we keep full SSR + ISR + image optimization.
 */
const config: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
    // SVGs from GitHub need this — they're trusted (our own org repos)
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ["@react-three/drei", "@react-three/fiber"],
  },
};

export default config;
