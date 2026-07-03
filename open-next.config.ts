import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Minimal config — uses default in-memory caches.
// To enable R2 incremental cache later, add `incrementalCache: r2IncrementalCache`.
export default defineCloudflareConfig({});
