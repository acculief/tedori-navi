import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "手取り計算ナビ",
    short_name: "手取り計算",
    description:
      "年収から手取り・税金・社会保険料を無料で即計算できる手取りシミュレーション。",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [],
  };
}
