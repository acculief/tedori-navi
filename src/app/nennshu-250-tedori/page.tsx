import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "年収250万円の手取りはいくら？月収と生活レベル",
  description:
    "年収250万円の手取りは約200万円、月の手取りは約16.6万円。天引きの内訳（社会保険料・所得税・住民税）や家族構成別の手取り、月々の生活レベルを早見表でわかりやすく解説します。",
  alternates: { canonical: "/nennshu-250-tedori/" },
};

const faqs = [
  {
    q: "年収250万円の手取りは月いくらですか？",
    a: "独身の場合、年間の手取りは約200万円で、12で割ると月あたり約16.6万円です。ボーナスがある場合は毎月の手取りはこれより少なくなり、その分がボーナス月にまとまって支給されます。",
  },
  {
    q: "年収250万円は月収でいくらですか？",
    a: "額面の年収250万円をボーナスなしで12等分すると、月の額面は約20.8万円です。ここから社会保険料と税金が引かれ、手取りは月約16.6万円になります。",
  },
  {
    q: "年収250万円で天引きが一番大きいのは何ですか？",
    a: "社会保険料です。年収250万円では社会保険料が約36.9万円で、所得税（約4.2万円）と住民税（約9.3万円）を合わせた税金約13.5万円よりもはるかに大きくなります。",
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
        年収250万円の手取りはいくら？月収と生活レベル
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        年収250万円の<strong>手取りは約200万円</strong>、月あたりにすると
        <strong>約16.6万円</strong>です（独身・40歳未満・協会けんぽ加入の概算）。
        額面の250万円との差、約50万円は税金と社会保険料として天引きされています。この記事では、その内訳と家族構成別の手取り、毎月の生活レベルの目安を見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収250万円の天引き内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面250万円から差し引かれる内訳は次のとおりです（独身の場合）。
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
              <td className="border border-gray-200 px-3 py-2">約36.9万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約4.2万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約9.3万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約50.4万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約199.6万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        天引きのうち、もっとも大きいのは<strong>社会保険料</strong>です。所得税＋住民税の合計約13.5万円に対し、社会保険料は約36.9万円と、税金の2倍以上を占めます。年収が低いほど、税金より社会保険料の負担感が相対的に大きくなるのが特徴です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        同じ年収250万円でも、配偶者控除や扶養控除の有無で手取りは変わります。
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
              ["独身", "約200万円", "約16.6万円", "79.8%"],
              ["片働き夫婦", "約205万円", "約17.1万円", "81.9%"],
              ["夫婦＋子1人", "約210万円", "約17.5万円", "84.0%"],
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
        配偶者を扶養している「片働き夫婦」は独身より手取りが約5万円多く、さらに16歳以上の子を扶養する「夫婦＋子1人」では約10万円多くなります。ただし年収250万円は課税所得がもともと小さいため、控除による手取りの伸びは高年収帯ほど大きくありません。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        月収と生活レベルの目安
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        独身・ボーナスなしの場合、毎月の手取りは約16.6万円です。ここから家賃・食費・光熱費などを配分したモデルケースは次のとおりです（単身・地方〜郊外を想定）。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">項目</th>
              <th className="border border-gray-200 px-3 py-2">目安</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">家賃</td>
              <td className="border border-gray-200 px-3 py-2">約5.5万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">食費</td>
              <td className="border border-gray-200 px-3 py-2">約3.5万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">水道光熱・通信</td>
              <td className="border border-gray-200 px-3 py-2">約2.0万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">日用品・交際・娯楽</td>
              <td className="border border-gray-200 px-3 py-2">約3.0万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">残り（貯蓄可能額）</td>
              <td className="border border-gray-200 px-3 py-2">約2.6万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        単身であれば、家賃を手取りの3分の1程度に抑えられれば毎月数万円の貯蓄も可能です。一方で都市部で家賃が高い場合や、ボーナスなしで賞与を当てにできない場合は、固定費の見直しが家計改善の鍵になります。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収で手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          250万円以外の年収も、入力するだけで手取り・税金の内訳がわかります。
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
        ※本記事の計算は給与収入のみ・40歳未満・協会けんぽ加入を想定した概算です。実際の税額・保険料は加入先や自治体、各種控除の適用状況により異なります。生活費の配分はモデルケースであり、居住地や個人の事情で変動します。
      </p>
    </article>
  );
}
