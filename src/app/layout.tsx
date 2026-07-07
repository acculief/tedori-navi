import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/config/site";
import GoogleAnalyticsPageview from "@/components/GoogleAnalytics";
import Link from "next/link";
import Header from "@/components/Header";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "手取り計算機｜年収から手取り・税金・社会保険料を即計算【無料】",
    template: "%s | 手取り計算ナビ",
  },
  description:
    "年収を入力するだけで手取り額をシミュレーション。所得税・住民税・社会保険料の内訳、手取り率、ふるさと納税の上限目安まで無料で即計算。年収別の早見表や計算方法の解説も充実した手取り計算ナビ。",
  keywords: [
    "手取り計算",
    "年収 手取り",
    "手取り シミュレーション",
    "社会保険料 計算",
    "所得税 計算",
    "ふるさと納税 上限",
    "手取り計算機",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "手取り計算ナビ",
    url: SITE_URL,
    title:
      "手取り計算機｜年収から手取り・税金・社会保険料を即計算【無料】",
    description:
      "年収を入力するだけで手取り額をシミュレーション。所得税・住民税・社会保険料の内訳、手取り率、ふるさと納税の上限目安まで無料で即計算。",
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "手取り計算ナビ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <head>
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <GoogleAnalyticsPageview />
        <Analytics />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
        >
          メインコンテンツへスキップ
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <footer
          className="mt-16 border-t border-gray-200 bg-white"
          role="contentinfo"
        >
          <div className="mx-auto max-w-5xl px-4 py-8">
            <div className="grid gap-6 text-sm sm:grid-cols-2">
              <nav aria-label="フッターナビゲーション">
                <p className="font-bold text-gray-700">コンテンツ</p>
                <ul className="mt-2 space-y-0 text-gray-600">
                  <li>
                    <Link
                      href="/"
                      className="inline-flex min-h-[44px] items-center hover:text-primary-600"
                    >
                      手取り計算機トップ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tedori-keisan-houhou/"
                      className="inline-flex min-h-[44px] items-center hover:text-primary-600"
                    >
                      手取りの計算方法
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nennshu-500-tedori/"
                      className="inline-flex min-h-[44px] items-center hover:text-primary-600"
                    >
                      年収500万円の手取り
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shakai-hoken-ryou/"
                      className="inline-flex min-h-[44px] items-center hover:text-primary-600"
                    >
                      社会保険料はいくら？
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/furusato-nozei-jougen/"
                      className="inline-flex min-h-[44px] items-center hover:text-primary-600"
                    >
                      ふるさと納税の上限額
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav aria-label="サイト情報">
                <p className="font-bold text-gray-700">サイト情報</p>
                <ul className="mt-2 space-y-0 text-gray-600">
                  <li>
                    <Link
                      href="/about/"
                      className="inline-flex min-h-[44px] items-center hover:text-primary-600"
                    >
                      運営について
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact/"
                      className="inline-flex min-h-[44px] items-center hover:text-primary-600"
                    >
                      お問い合わせ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <hr className="my-6 border-gray-200" />
            <p className="text-center text-xs text-gray-600">
              ※本サイトの計算結果は一定の前提に基づく概算です。実際の税額・保険料は個々の状況により異なります。正確な金額は勤務先や税務署・自治体にご確認ください。
            </p>
            <p className="mt-2 text-center text-xs text-gray-600 space-x-3">
              <Link href="/about/" className="hover:text-primary-600 underline">
                運営について
              </Link>
              <span>·</span>
              <Link
                href="/contact/"
                className="hover:text-primary-600 underline"
              >
                お問い合わせ
              </Link>
            </p>
            <p className="mt-1 text-center text-xs text-gray-600">
              &copy; {new Date().getFullYear()} 手取り計算ナビ
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
