import type { MetadataRoute } from "next";

// Required when using `output: "export"` (static HTML export)
export const dynamic = "force-static";

const SITE_URL = "https://brisset.me";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
