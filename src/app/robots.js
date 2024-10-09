import { MetaInformation } from "./constants";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${MetaInformation.baseUrl}/sitemap.xml`,
  };
}
