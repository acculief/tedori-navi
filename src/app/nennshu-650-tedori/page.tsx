import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "年収650万円の手取りはいくら？税金の内訳と早見表",
  description:
    "年収650万円の手取りは約496万円、月の手取りは約41万円。額面との差154万円の内訳（社会保険料・所得税・住民税）や、家族構成別・ボーナス別の手取りを早見表で解説します。",
  alternates: { canonical: "/nennshu-650-tedori/" },
};

const faqs = [
  {
    q: "年収650万円の手取りは月いくらですか？",
    a: "独身の場合、年間の手取りは約496万円で、12で割ると月あたり約41万円です。ボーナスがある場合は毎月の手取りはこれより少なくなり、その分ボーナス月にまとまって支給されます。",
  },
  {
    q: "年収650万円は高い方ですか？",
    a: "国税庁の民間給与実態統計調査では給与所得者の平均年収は約460万円前後です。年収650万円は平均を大きく上回り、給与所得者の上位2割程度に入る水準といえます。",
  },
  {
    q: "年収650万円で手取りを増やすには？",
    a: "iDeCoや小規模企業共済への拠出は全額が所得控除になり、年収650万円なら拠出額の約30%が税・社会保険の軽減につながります。ふるさと納税の実質負担も年間2,000円で済むため、あわせて活用すると手取りベースの余裕が増えます。",
  },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <article className="mx-auto max-w-2xl px-4 py-10">
      <JsonLd data={jsonLd} />

      <h1 className="text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl">
        年収650万円の手取りはいくら？税金の内訳と早見表
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        年収650万円の<strong>手取りは約496万円</strong>、月あたりにすると
        <strong>約41万円</strong>です（独身・40歳未満・協会けんぽ加入の概算）。
        額面の650万円との差、約154万円は税金と社会保険料として天引きされています。手取り率は約76%で、年収が上がるほどこの率は少しずつ下がっていきます。この記事では、その内訳と家族構成・ボーナス別の手取りを詳しく見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収650万円の天引き内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面650万円から差し引かれる内訳は次のとおりです（独身の場合）。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">項目</th>
              <th className="border border-gray-200 px-3 py-2">年間の金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">社会保険料</td>
              <td className="border border-gray-200 px-3 py-2">約95.9万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約24.2万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約34.3万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約154.4万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約495.6万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        天引きのうち最も大きいのは<strong>社会保険料の約95.9万円</strong>で、税金（所得税＋住民税）の合計約58.5万円を大きく上回ります。年収650万円では所得税に20%の税率区分がかかり始めるため、年収500万円台と比べて所得税の伸びがやや大きくなる点も特徴です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        同じ年収650万円でも、配偶者控除や扶養控除の有無で手取りは変わります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">家族構成</th>
              <th className="border border-gray-200 px-3 py-2">手取り（年）</th>
              <th className="border border-gray-200 px-3 py-2">手取り（月）</th>
              <th className="border border-gray-200 px-3 py-2">手取り率</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["独身", "約496万円", "約41万円", "76.3%"],
              ["片働き夫婦", "約507万円", "約42万円", "78.0%"],
              ["夫婦＋子1人", "約513万円", "約43万円", "78.9%"],
            ].map((row, i) => (
              <tr key={row[0]} className={i % 2 ? "bg-gray-50" : ""}>
                {row.map((c, j) => (
                  <td key={j} className="border border-gray-200 px-3 py-2">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        配偶者を扶養している「片働き夫婦」は独身より手取りが約11万円多くなります。年収650万円は所得税率20%の区分にかかるため、控除1万円あたりの節税効果が年収500万円台より大きく、扶養の恩恵も相対的に効いてきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        ボーナスあり・なしの月収イメージ
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年間手取り約496万円（独身）を、ボーナスの有無でどう受け取るかによって毎月の手取りは変わります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">支給パターン</th>
              <th className="border border-gray-200 px-3 py-2">毎月の手取り目安</th>
              <th className="border border-gray-200 px-3 py-2">ボーナス手取り目安</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">ボーナスなし（12分割）</td>
              <td className="border border-gray-200 px-3 py-2">約41万円</td>
              <td className="border border-gray-200 px-3 py-2">—</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">年2回・計4か月分</td>
              <td className="border border-gray-200 px-3 py-2">約31万円</td>
              <td className="border border-gray-200 px-3 py-2">約62万円 × 年2回</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        ※上表はイメージです。実際にはボーナスの社会保険料計算方法が月給と異なるため、金額は前後します。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収で手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          650万円以外の年収も、入力するだけで手取り・税金の内訳がわかります。
        </p>
        <Link href="/" className="btn-primary mt-4">
          手取り計算機を使う
        </Link>
      </div>

      <h2 className="mt-12 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        よくある質問
      </h2>
      <div className="mt-4 space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="card">
            <p className="font-bold text-gray-900">Q. {f.q}</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              A. {f.a}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-xs leading-relaxed text-gray-400">
        ※本記事の計算は給与収入のみ・40歳未満・協会けんぽ加入を想定した概算です。実際の税額・保険料は加入先や自治体、各種控除の適用状況により異なります。
      </p>
    </article>
  );
}
