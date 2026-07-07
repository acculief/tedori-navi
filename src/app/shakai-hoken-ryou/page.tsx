import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "社会保険料はいくら引かれる？計算方法と早見表",
  description:
    "給与から引かれる社会保険料（健康保険・厚生年金・雇用保険）の料率と計算方法を解説。年収300万〜1,000万円の社会保険料を月額・年額の早見表でチェックできます。",
  alternates: { canonical: "/shakai-hoken-ryou/" },
};

const faqs = [
  {
    q: "社会保険料は年収の何割くらい引かれますか？",
    a: "会社員の場合、本人負担分はおおむね額面の14〜15%が目安です。健康保険約5%・厚生年金9.15%・雇用保険0.6%の合計で、年収500万円なら年間約73.8万円になります。",
  },
  {
    q: "40歳になると社会保険料は増えますか？",
    a: "はい。40歳から64歳までは介護保険料（健康保険料に上乗せ、約0.9%前後）が加わるため、その分だけ手取りが減ります。本記事の早見表は40歳未満（介護保険料なし）で計算しています。",
  },
  {
    q: "厚生年金の保険料に上限はありますか？",
    a: "あります。厚生年金は標準報酬月額65万円が上限で、年間の本人負担は約71.4万円で頭打ちになります。そのため年収800万円を超えると、厚生年金の負担額はほぼ一定になります。",
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
        社会保険料はいくら引かれる？計算方法と早見表
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        給与明細を見ると、税金よりも大きな金額が「社会保険料」として引かれていることに気づきます。
        会社員の社会保険料は<strong>健康保険・厚生年金・雇用保険</strong>の3つが中心で、本人負担分は
        <strong>額面のおよそ14〜15％</strong>にのぼります。この記事では、それぞれの料率と計算方法、年収別の目安を早見表で解説します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        社会保険料の3つの内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        会社員（協会けんぽ加入・40歳未満）の場合、本人が負担する社会保険料の料率は次のとおりです。健康保険と厚生年金は会社と労働者で半分ずつ負担する「労使折半」です。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">保険の種類</th>
              <th className="border border-gray-200 px-3 py-2">本人負担の料率</th>
              <th className="border border-gray-200 px-3 py-2">内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">健康保険</td>
              <td className="border border-gray-200 px-3 py-2">約5.0%</td>
              <td className="border border-gray-200 px-3 py-2">医療費の自己負担軽減・傷病手当金など</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">厚生年金</td>
              <td className="border border-gray-200 px-3 py-2">9.15%</td>
              <td className="border border-gray-200 px-3 py-2">老後の年金・障害年金・遺族年金</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">雇用保険</td>
              <td className="border border-gray-200 px-3 py-2">0.6%</td>
              <td className="border border-gray-200 px-3 py-2">失業給付・育児休業給付など</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        健康保険料率は加入する健康保険組合や都道府県によって差があり、協会けんぽの全国平均はおよそ10％（本人負担は折半後の約5％）です。40歳以上になると、これに介護保険料が上乗せされます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        社会保険料の計算方法
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        実際の社会保険料は、毎月の給与を等級分けした「標準報酬月額」に料率をかけて計算します。おおまかには、額面に本人負担の料率を掛けた金額と考えれば目安がつかめます。
      </p>
      <div className="mt-4 rounded-xl bg-gray-50 p-5 text-sm text-gray-800">
        <p className="font-bold">年収500万円の場合（概算）</p>
        <p className="mt-2">健康保険：500万 × 5.0％ ＝ 25.0万円</p>
        <p className="mt-1">厚生年金：500万 × 9.15％ ＝ 45.8万円</p>
        <p className="mt-1">雇用保険：500万 × 0.6％ ＝ 3.0万円</p>
        <p className="mt-2 font-bold">合計 ＝ 約73.8万円（月あたり約6.1万円）</p>
      </div>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収別・社会保険料の早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収別に、本人が負担する社会保険料の年額・月額の目安をまとめました（40歳未満・協会けんぽ想定の概算）。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">年収</th>
              <th className="border border-gray-200 px-3 py-2">社会保険料（年）</th>
              <th className="border border-gray-200 px-3 py-2">社会保険料（月）</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["300万円", "約44.3万円", "約3.7万円"],
              ["400万円", "約59.0万円", "約4.9万円"],
              ["500万円", "約73.8万円", "約6.1万円"],
              ["600万円", "約88.5万円", "約7.4万円"],
              ["700万円", "約103.3万円", "約8.6万円"],
              ["800万円", "約116.2万円", "約9.7万円"],
              ["1,000万円", "約127.4万円", "約10.6万円"],
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
        年収800万円と1,000万円で社会保険料があまり変わらないのは、厚生年金に上限があるためです。上限を超えた分の年収には厚生年金保険料がかからないので、高年収ほど「額面に対する社会保険料の割合」は下がっていきます。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          社会保険料と手取りをまとめて計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          年収を入力すると、社会保険料・所得税・住民税を差し引いた手取りがわかります。
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
        ※本記事の計算は給与収入のみ・40歳未満・協会けんぽ加入を想定した概算です。健康保険料率は加入先や都道府県により異なります。
      </p>
    </article>
  );
}
