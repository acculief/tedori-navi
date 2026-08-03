import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "年収600万円の手取りはいくら？税金の内訳と早見表",
  description:
    "年収600万円の手取りは約460万円、月の手取りは約38万円。額面との差140万円の内訳（社会保険料・所得税・住民税）や、独身・夫婦・子あり別、ボーナス別の手取りを早見表で解説します。",
  alternates: { canonical: "/nennshu-600-tedori/" },
};

const faqs = [
  {
    q: "年収600万円の手取りは月いくらですか？",
    a: "独身の場合、年間の手取りは約460万円で、12で割ると月あたり約38万円です。ボーナスがある場合、毎月の手取りはこれより少なくなり、その分がボーナス月にまとめて支給されます。",
  },
  {
    q: "年収600万円は高い方ですか？",
    a: "国税庁の民間給与実態統計調査では給与所得者の平均年収は約460万円前後です。年収600万円は平均を100万円以上上回り、給与所得者のなかでは上位に位置する水準です。",
  },
  {
    q: "年収600万円で扶養家族がいると手取りは増えますか？",
    a: "はい。配偶者控除や扶養控除で課税所得が下がり、所得税・住民税が軽くなります。年収600万円では、独身より16歳以上の子を扶養する家庭の方が年間で約14万円手取りが多くなります。",
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
        年収600万円の手取りはいくら？税金の内訳と早見表
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        年収600万円の<strong>手取りは約460万円</strong>、月あたりにすると
        <strong>約38万円</strong>です（独身・40歳未満・協会けんぽ加入の概算）。
        額面600万円との差、約140万円が税金と社会保険料として天引きされています。年収500万円のときより額面は100万円増えますが、手取りの増加は約72万円にとどまります。この記事では、その内訳と家族構成・ボーナス別の手取りを詳しく見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収600万円の天引き内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面600万円から差し引かれる内訳は次のとおりです（独身の場合）。
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
              <td className="border border-gray-200 px-3 py-2">約88.5万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約20.6万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約31.1万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約140.2万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約459.8万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        天引きのうち最大は<strong>社会保険料の約88.5万円</strong>で、税金（所得税＋住民税）の合計約51.7万円を上回ります。所得税は年収500万円のときの約1.5倍に増えていますが、これは所得税が課税所得に応じて税率が上がる累進課税だからです。年収600万円の課税所得は所得税率20%の区分に入ります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        社会保険料の内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収600万円で天引きされる社会保険料88.5万円の内訳は次のとおりです（従業員負担分）。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">保険料</th>
              <th className="border border-gray-200 px-3 py-2">年間の金額</th>
              <th className="border border-gray-200 px-3 py-2">目安の料率</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">厚生年金</td>
              <td className="border border-gray-200 px-3 py-2">約54.9万円</td>
              <td className="border border-gray-200 px-3 py-2">9.15%</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">健康保険</td>
              <td className="border border-gray-200 px-3 py-2">約30.0万円</td>
              <td className="border border-gray-200 px-3 py-2">約5.0%</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">雇用保険</td>
              <td className="border border-gray-200 px-3 py-2">約3.6万円</td>
              <td className="border border-gray-200 px-3 py-2">0.6%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        もっとも負担が大きいのは厚生年金です。40歳以上になると、これに介護保険料（約1.6%）が上乗せされるため、同じ年収600万円でも手取りは年間で数万円減ります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        同じ年収600万円でも、配偶者控除や扶養控除の有無で手取りは変わります。
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
              ["独身", "約460万円", "約38万円", "76.6%"],
              ["片働き夫婦", "約467万円", "約39万円", "77.8%"],
              ["夫婦＋子1人", "約474万円", "約40万円", "79.0%"],
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
        配偶者を扶養している「片働き夫婦」は独身より手取りが約7万円多く、さらに16歳以上の子を扶養する「夫婦＋子1人」では約14万円多くなります。控除が課税所得を押し下げ、所得税・住民税の両方が軽くなるためです。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        ボーナスあり・なしの月収イメージ
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年間手取り約460万円（独身）を、ボーナスの有無でどう受け取るかによって毎月の手取りは変わります。
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
              <td className="border border-gray-200 px-3 py-2">約38万円</td>
              <td className="border border-gray-200 px-3 py-2">—</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">年2回・計4か月分</td>
              <td className="border border-gray-200 px-3 py-2">約29万円</td>
              <td className="border border-gray-200 px-3 py-2">約57万円 × 年2回</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        ※上表はイメージです。実際にはボーナスの社会保険料の計算方法が月給と異なるため、金額は前後します。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収で手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          600万円以外の年収も、入力するだけで手取り・税金の内訳がわかります。
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
