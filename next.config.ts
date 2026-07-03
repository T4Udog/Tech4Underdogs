import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
  },
};

export default nextConfig;

// Bind Cloudflare env (secrets, bindings) into `next dev` so `process.env.*`
// resolves locally exactly like it will on Workers.
initOpenNextCloudflareForDev();
