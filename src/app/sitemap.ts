import { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

const BASE_URL = SITE_URL;

const routes = [
  { path: "/", priority: 1.0 },
  { path: "/tedori-keisan-houhou/", priority: 0.8 },
  { path: "/nennshu-500-tedori/", priority: 0.8 },
  { path: "/shakai-hoken-ryou/", priority: 0.8 },
  { path: "/furusato-nozei-jougen/", priority: 0.8 },
  { path: "/about/", priority: 0.3 },
  { path: "/contact/", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
