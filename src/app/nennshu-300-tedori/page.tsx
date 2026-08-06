import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "年収300万円の手取りはいくら？生活レベルと早見表",
  description:
    "年収300万円の手取りは約238万円、月の手取りは約20万円。税金と社会保険料の内訳、家族構成別の早見表、一人暮らしの生活レベルまで具体的な数字でわかりやすく解説します。",
  alternates: { canonical: "/nennshu-300-tedori/" },
};

const faqs = [
  {
    q: "年収300万円の手取りは月いくらですか？",
    a: "独身の場合、年間の手取りは約238万円で、12で割ると月あたり約20万円です。ボーナスがある場合は毎月の手取りはこれより少なくなり、その分ボーナス月にまとまって支給されます。",
  },
  {
    q: "年収300万円で一人暮らしはできますか？",
    a: "月の手取り約20万円のうち、家賃を3割の約6万円に抑えれば、食費・光熱費・通信費を払っても数万円の余裕が残ります。家賃相場の低い地域なら貯蓄も可能ですが、都心では節約が前提になります。",
  },
  {
    q: "年収300万円の税金はいくらですか？",
    a: "独身で所得税が約5.6万円、住民税が約12.1万円、合わせて年約18万円です。これより社会保険料の約44万円の方がはるかに大きく、天引きの中心は税金ではなく社会保険料です。",
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
        年収300万円の手取りはいくら？生活レベルと早見表
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        年収300万円の<strong>手取りは約238万円</strong>、月あたりにすると
        <strong>約20万円</strong>です（独身・40歳未満・協会けんぽ加入の概算）。
        額面の300万円との差、約62万円は税金と社会保険料として天引きされています。この記事では、その内訳と家族構成別の手取り、そして月20万円でどんな暮らしができるのかを見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収300万円の天引き内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面300万円から差し引かれる内訳は次のとおりです（独身の場合）。
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
              <td className="border border-gray-200 px-3 py-2">約44.3万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約5.6万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約12.1万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約61.9万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約238.1万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        天引きのうち、もっとも大きいのは<strong>社会保険料</strong>です。税金（所得税＋住民税）の合計約17.7万円に対し、社会保険料は約44.3万円と2倍以上あります。年収300万円帯では、手取りを増やすうえで社会保険料の重さが効いてきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        同じ年収300万円でも、配偶者控除や扶養控除の有無で手取りは変わります。
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
              ["独身", "約238万円", "約20.0万円", "79.4%"],
              ["片働き夫婦", "約243万円", "約20.3万円", "81.1%"],
              ["夫婦＋子1人", "約249万円", "約20.7万円", "82.9%"],
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
        配偶者を扶養している「片働き夫婦」は独身より手取りが約5万円多く、さらに16歳以上の子を扶養する「夫婦＋子1人」では約11万円多くなります。控除が課税所得を押し下げ、所得税・住民税が軽くなるためです。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        手取り月20万円の生活レベル
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        独身・一人暮らしを想定した、手取り20万円の家計イメージです（地域や生活スタイルで変動します）。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">項目</th>
              <th className="border border-gray-200 px-3 py-2">目安金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">家賃</td>
              <td className="border border-gray-200 px-3 py-2">約6万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">食費</td>
              <td className="border border-gray-200 px-3 py-2">約4万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">水道光熱費・通信費</td>
              <td className="border border-gray-200 px-3 py-2">約2.5万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">日用品・交際費・娯楽</td>
              <td className="border border-gray-200 px-3 py-2">約4万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">貯蓄に回せる目安</td>
              <td className="border border-gray-200 px-3 py-2">約3.5万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        家賃を手取りの3割（約6万円）に抑えられれば、月3〜4万円を貯蓄に回す余地が生まれます。逆に都心で家賃が8万円を超えると貯蓄はほぼ難しくなるため、住居費のコントロールが最大の分かれ目です。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収で手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          300万円以外の年収も、入力するだけで手取り・税金の内訳がわかります。
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
