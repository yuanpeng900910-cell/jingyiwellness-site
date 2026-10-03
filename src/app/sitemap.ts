import type { MetadataRoute } from "next";
import { catalogCategories } from "@/lib/catalog";

export const dynamic = "force-static";

const origin = "https://jingyiwellness.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/products/", ...catalogCategories.map(({ slug }) => `/products/${slug}/`), "/gifts/", "/brand-story/", "/cooperation/"];
  return paths.map((path) => ({ url: new URL(path, origin).toString() }));
}
