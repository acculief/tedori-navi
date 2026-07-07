import type { Metadata } from "next";
import Link from "next/link";
import IncomeTaxCalculator from "@/components/IncomeTaxCalculator";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const articles = [
  {
    href: "/tedori-keisan-houhou/",
    title: "手取りの計算方法｜年収から手取りを計算する式を完全解説",
    desc: "額面から手取りを求める計算式を、給与所得控除・社会保険料・所得税・住民税の順に一つずつ解説します。",
  },
  {
    href: "/nennshu-500-tedori/",
    title: "年収500万円の手取りはいくら？月収・ボーナス別の早見表",
    desc: "年収500万円のリアルな手取り額を、独身・夫婦・子ありの家族構成別に早見表でチェック。",
  },
  {
    href: "/shakai-hoken-ryou/",
    title: "社会保険料はいくら引かれる？計算方法と早見表",
    desc: "健康保険・厚生年金・雇用保険の料率と計算方法、年収別に引かれる社会保険料の目安を解説。",
  },
  {
    href: "/furusato-nozei-jougen/",
    title: "ふるさと納税の上限額は年収でいくら？計算方法と早見表",
    desc: "自己負担2,000円で寄付できる上限額の目安を、年収・家族構成別の早見表で確認できます。",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "手取り計算ナビ",
        description:
          "年収から手取り・税金・社会保険料を無料で即計算できる手取りシミュレーションサイト。",
        inLanguage: "ja",
      },
      {
        "@type": "SoftwareApplication",
        name: "手取り計算機",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        url: SITE_URL,
        datePublished: CONTENT_PUBLISHED_DATE,
        description:
          "年収を入力するだけで手取り額・所得税・住民税・社会保険料の内訳を計算する無料ツール。",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "JPY",
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={jsonLd} />

      <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
        手取り計算機｜年収から手取りを即計算
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
        年収（額面）を入力するだけで、<strong>手取り額</strong>をその場でシミュレーションできる無料計算機です。
        給与から天引きされる<strong>所得税・住民税・社会保険料</strong>の内訳と<strong>手取り率</strong>まで一目で確認できます。
        独身・共働き・子育て世帯など家族構成に合わせて、月額・年額の手取りを比較してみましょう。
      </p>

      <section className="mt-8" aria-label="手取り計算機">
        <IncomeTaxCalculator />
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-gray-900">
          手取り・税金をもっと詳しく知る
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          計算の仕組みや年収別の手取り、社会保険料・ふるさと納税の上限額を解説した記事です。
        </p>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {articles.map((a) => (
            <li key={a.href}>
              <Link href={a.href} className="link-card h-full">
                <p className="font-bold text-gray-900">{a.title}</p>
                <p className="mt-1 text-sm text-gray-600">{a.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-2xl bg-primary-50 p-6">
        <h2 className="text-lg font-bold text-gray-900">
          手取り計算ナビでできること
        </h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
          <li>年収から手取り（月額・年額）と手取り率を即計算</li>
          <li>所得税・住民税・社会保険料の内訳を可視化</li>
          <li>独身・片働き夫婦・子ありなど家族構成別に比較</li>
          <li>年収別の手取り早見表や計算方法の解説記事</li>
        </ul>
      </section>
    </div>
  );
}
