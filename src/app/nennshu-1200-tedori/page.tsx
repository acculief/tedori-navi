import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "年収1200万円の手取りはいくら？高年収の税負担と対策",
  description:
    "年収1200万円の手取りは約851万円、月の手取りは約71万円。手取り率は70.9%まで下がります。天引きの内訳、配偶者控除が使えなくなる仕組み、家族構成別の早見表と節税策をわかりやすく解説します。",
  alternates: { canonical: "/nennshu-1200-tedori/" },
};

const faqs = [
  {
    q: "年収1200万円の手取りは月いくらですか？",
    a: "独身の場合、年間の手取りは約851万円で、12で割ると月あたり約71万円です。ボーナスがある場合は毎月の手取りはこれより少なくなり、その分ボーナス月にまとまって支給されます。",
  },
  {
    q: "年収1200万円で配偶者控除は使えますか？",
    a: "使えません。配偶者控除・配偶者特別控除は納税者本人の合計所得金額が1,000万円（給与収入で約1,195万円）を超えると適用外になります。年収1200万円はこのラインを超えるため、配偶者を扶養していても控除額はゼロで、片働きでも独身と手取りはほぼ同じです。",
  },
  {
    q: "年収1200万円の手取り率が低いのはなぜですか？",
    a: "所得税が累進課税で33%の税率帯に入り、給与所得控除も年195万円で頭打ちになるためです。加えて社会保険料も差し引かれるので、手取り率は年収500万円台の約78%に対し、約71%まで下がります。",
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
        年収1200万円の手取りはいくら？高年収の税負担と対策
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        年収1200万円の<strong>手取りは約851万円</strong>、月あたりにすると
        <strong>約71万円</strong>です（独身・40歳未満・協会けんぽ加入の概算）。
        額面の1200万円との差、約349万円が税金と社会保険料として天引きされます。手取り率は<strong>約70.9%</strong>で、年収500万円台の約78%と比べて7ポイントほど低いのが高年収帯の特徴です。この記事では、その内訳と配偶者控除が使えなくなる仕組み、家族構成別の手取りを詳しく見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収1200万円の天引き内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面1200万円から差し引かれる内訳は次のとおりです（独身の場合）。
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
              <td className="border border-gray-200 px-3 py-2">約138.6万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約127.3万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約82.9万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約348.8万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約851.2万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収500万円台では社会保険料が天引きの最大項目でしたが、年収1200万円では<strong>所得税127.3万円</strong>が急増し、社会保険料に迫ります。厚生年金保険料は標準報酬月額の上限（年約71万円）で頭打ちになる一方、所得税は累進で伸び続けるためです。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収1200万円では配偶者控除が適用外になるため、独身と片働き夫婦で手取りに差が出ないのが特徴です。
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
              ["独身", "約851万円", "約71万円", "70.9%"],
              ["片働き夫婦", "約851万円", "約71万円", "70.9%"],
              ["夫婦＋子1人（16歳以上）", "約863万円", "約72万円", "72.0%"],
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
        配偶者控除は本人の合計所得金額が1,000万円を超えると使えないため、専業主婦（夫）を扶養していても手取りは独身と変わりません。一方、16歳以上の子の扶養控除には所得制限がないため、「夫婦＋子1人」では年間で約12万円手取りが増えます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        ボーナスあり・なしの月収イメージ
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年間手取り約851万円（独身）を、ボーナスの有無でどう受け取るかによって毎月の手取りは変わります。
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
              <td className="border border-gray-200 px-3 py-2">約71万円</td>
              <td className="border border-gray-200 px-3 py-2">—</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">年2回・計4か月分</td>
              <td className="border border-gray-200 px-3 py-2">約53万円</td>
              <td className="border border-gray-200 px-3 py-2">約106万円 × 年2回</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        ※上表はイメージです。実際にはボーナスの社会保険料計算方法が月給と異なるため、金額は前後します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収1200万円でできる節税策
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        税率が高い高年収帯ほど、所得控除による節税効果は大きくなります。代表的な選択肢は次のとおりです。
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>iDeCo（個人型確定拠出年金）</strong>：掛金が全額所得控除。会社員なら年最大27.6万円の拠出で、所得税33%＋住民税10%帯なら年10万円超の節税になります。
        </li>
        <li>
          <strong>ふるさと納税</strong>：年収1200万円なら自己負担2,000円で寄付できる上限は目安で約24万〜34万円（家族構成による）。実質2,000円で返礼品を受け取れます。
        </li>
        <li>
          <strong>医療費控除・住宅ローン控除</strong>：高い税率帯では戻る税額も大きくなるため、確定申告での取りこぼしに注意します。
        </li>
      </ul>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収で手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          1200万円以外の年収も、入力するだけで手取り・税金の内訳がわかります。
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
