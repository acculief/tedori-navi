import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "年収450万円の手取りはいくら？平均年収の手取り額",
  description:
    "年収450万円の手取りは約352万円、月の手取りは約29万円。給与所得者の平均年収に近い450万円について、税金・社会保険料の内訳と、家族構成・ボーナス別の手取りを早見表で解説します。",
  alternates: { canonical: "/nennshu-450-tedori/" },
};

const faqs = [
  {
    q: "年収450万円の手取りは月いくらですか？",
    a: "独身の場合、年間の手取りは約352万円で、12で割ると月あたり約29万円です。ボーナスがある場合は毎月の手取りはこれより少なくなり、その分ボーナス月にまとまって支給されます。",
  },
  {
    q: "年収450万円は平均年収と比べてどうですか？",
    a: "国税庁の民間給与実態統計調査では給与所得者の平均年収は約460万円前後です。年収450万円はほぼ平均に近い、標準的な水準といえます。",
  },
  {
    q: "年収450万円で天引きが一番大きいのは何ですか？",
    a: "社会保険料です。年間で約66万円が健康保険・厚生年金・雇用保険として引かれ、所得税約11万円・住民税約21万円を合わせた税金より大きくなります。",
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
        年収450万円の手取りはいくら？平均年収の手取り額
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        年収450万円の<strong>手取りは約352万円</strong>、月あたりにすると
        <strong>約29万円</strong>です（独身・40歳未満・協会けんぽ加入の概算）。
        給与所得者の平均年収に近い水準ですが、額面の450万円との差、約98万円は税金と社会保険料として天引きされています。この記事では、その内訳と家族構成・ボーナス別の手取りを詳しく見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収450万円の天引き内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面450万円から差し引かれる内訳は次のとおりです（独身の場合）。
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
              <td className="border border-gray-200 px-3 py-2">約66.4万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約10.6万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約21.3万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約98.3万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約351.7万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        天引きのうち、もっとも大きいのは<strong>社会保険料</strong>です。税金（所得税＋住民税）の合計約31.9万円に対し、社会保険料は約66.4万円と2倍以上を占めます。年収450万円帯では所得税率が低いため、手取りを左右するのは主に社会保険料です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        同じ年収450万円でも、配偶者控除や扶養控除の有無で手取りは変わります。
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
              ["独身", "約352万円", "約29万円", "78.2%"],
              ["片働き夫婦", "約357万円", "約30万円", "79.4%"],
              ["夫婦＋子1人", "約363万円", "約30万円", "80.6%"],
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
        配偶者を扶養している「片働き夫婦」は独身より手取りが約6万円多く、さらに16歳以上の子を扶養する「夫婦＋子1人」では約11万円多くなります。控除が効くのは所得税・住民税の部分だけで、社会保険料は家族構成に関わらず変わりません。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        ボーナスあり・なしの月収イメージ
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年間手取り約352万円（独身）を、ボーナスの有無でどう受け取るかによって毎月の手取りは変わります。
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
              <td className="border border-gray-200 px-3 py-2">約29万円</td>
              <td className="border border-gray-200 px-3 py-2">—</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">年2回・計4か月分</td>
              <td className="border border-gray-200 px-3 py-2">約22万円</td>
              <td className="border border-gray-200 px-3 py-2">約44万円 × 年2回</td>
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
          450万円以外の年収も、入力するだけで手取り・税金の内訳がわかります。
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
