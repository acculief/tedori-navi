import type { NextConfig } from "next";

// gh-pages（acculief.github.io/tedori-navi/）は basePath 必須だが、
// Vercel はルート配信なので basePath を空にする（VERCEL 環境変数で判定）。
const isVercel = !!process.env.VERCEL;
const isProd = process.env.NODE_ENV === "production";
const basePath = isVercel ? "" : isProd ? "/tedori-navi" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
