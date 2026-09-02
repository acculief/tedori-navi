import { MetadataRoute } from "next";
export const dynamic = "force-static";
import { SITE_URL } from "@/config/site";

const BASE_URL = SITE_URL;

const routes = [
  { path: "/", priority: 1.0 },
  { path: "/tedori-keisan-houhou/", priority: 0.8 },
  { path: "/nennshu-250-tedori/", priority: 0.8 },
  { path: "/nennshu-300-tedori/", priority: 0.8 },
  { path: "/nennshu-450-tedori/", priority: 0.8 },
  { path: "/nennshu-350-tedori/", priority: 0.8 },
  { path: "/nennshu-400-tedori/", priority: 0.8 },
  { path: "/nennshu-500-tedori/", priority: 0.8 },
  { path: "/nennshu-550-tedori/", priority: 0.8 },
  { path: "/nennshu-600-tedori/", priority: 0.8 },
  { path: "/nennshu-700-tedori/", priority: 0.8 },
  { path: "/nennshu-800-tedori/", priority: 0.8 },
  { path: "/nennshu-900-tedori/", priority: 0.8 },
  { path: "/nennshu-1000-tedori/", priority: 0.8 },
  { path: "/nennshu-1200-tedori/", priority: 0.8 },
  { path: "/bonus-tedori/", priority: 0.8 },
  { path: "/shakai-hoken-ryou/", priority: 0.8 },
  { path: "/furusato-nozei-jougen/", priority: 0.8 },
  { path: "/jyuuminzei-keisan/", priority: 0.8 },
  { path: "/shotokuzei-keisan/", priority: 0.8 },
  { path: "/kousei-nenkin-hokenryou/", priority: 0.8 },
  { path: "/kenkou-hoken-ryou/", priority: 0.8 },
  { path: "/koyou-hoken-ryou/", priority: 0.8 },
  { path: "/ideco-setsuzei/", priority: 0.8 },
  { path: "/haiguusha-koujo/", priority: 0.8 },
  { path: "/fuyou-103man-kabe/", priority: 0.8 },
  { path: "/fuyou-130man-kabe/", priority: 0.8 },
  { path: "/fuyou-106man-kabe/", priority: 0.8 },
  { path: "/fukugyou-tedori-zei/", priority: 0.8 },
  { path: "/taishokukin-tedori/", priority: 0.8 },
  { path: "/gessyuu-30man-tedori/", priority: 0.8 },
  { path: "/gessyuu-25man-tedori/", priority: 0.8 },
  { path: "/jikyuu-tedori/", priority: 0.8 },
  { path: "/ikukyu-teate-tedori/", priority: 0.8 },
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
