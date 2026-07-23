import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://domainkamu.com",
      lastModified: new Date(),
    },
  ];
}
