import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "手取り20万円の年収・月収はいくら？額面の逆算早見表",
  description:
    "手取り20万円（月）に必要な年収は約303万円、額面の月収は約25万円です。手取りから額面を逆算する方法、天引きの内訳、手取り17〜23万円の早見表でわかりやすく解説します。",
  alternates: { canonical: "/tesyudori-20man-nennshu/" },
};

const faqs = [
  {
    q: "手取り20万円の年収はいくらですか？",
    a: "独身・40歳未満の会社員の場合、月の手取り20万円に必要な年収は約303万円です。額面の月収にすると約25万円が目安で、ここから税金と社会保険料が差し引かれて手取り20万円になります。",
  },
  {
    q: "手取り20万円だと額面の月収はいくら必要ですか？",
    a: "額面月収で約25万円が目安です。額面25万円からは社会保険料・所得税・住民税として毎月約5万円が天引きされ、手取りが約20万円になります。手取り率はおよそ79%です。",
  },
  {
    q: "手取り20万円は年収300万円くらいですか？",
    a: "はい。手取り20万円×12か月＝年間手取り約240万円で、これに対応する額面年収は約303万円です。ボーナスがある場合は毎月の手取りが下がり、その分がボーナスで支給されるため、年収300万円前後が目安になります。",
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
        手取り20万円の年収・月収はいくら？額面の逆算早見表
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        月の手取り20万円に必要な年収は<strong>約303万円</strong>、額面の月収にすると
        <strong>約25万円</strong>です（独身・40歳未満・協会けんぽ加入の概算）。
        額面25万円から税金と社会保険料として毎月約5万円が引かれ、手元に残るのが約20万円という計算です。この記事では、手取りから額面を逆算する考え方と、その内訳を詳しく見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        手取り20万円に必要な額面
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        手取り20万円を受け取るために必要な額面は、年収・月収で次のとおりです（独身）。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">項目</th>
              <th className="border border-gray-200 px-3 py-2">金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">手取り（月）</td>
              <td className="border border-gray-200 px-3 py-2">約20万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">手取り（年）</td>
              <td className="border border-gray-200 px-3 py-2">約240万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">額面の月収</td>
              <td className="border border-gray-200 px-3 py-2">約25万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">額面の年収</td>
              <td className="border border-gray-200 px-3 py-2">約303万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        手取りから額面を逆算するときのポイントは、<strong>手取り率がおよそ8割</strong>という点です。手取り20万円なら「20万円 ÷ 0.79 ≒ 25万円」が額面月収の目安になります。年収が上がるほど手取り率は少しずつ下がるため、高収入ほど割り戻す額面は大きくなります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収303万円の天引き内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面303万円から差し引かれる内訳は次のとおりです（独身）。
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
              <td className="border border-gray-200 px-3 py-2">約44.6万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約5.7万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約12.2万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約62.5万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約240万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        天引きの大半は<strong>社会保険料（約44.6万円）</strong>で、税金（所得税＋住民税）の合計約17.9万円を大きく上回ります。この年収帯では所得税率が低いため、額面と手取りの差は税金より社会保険料で決まります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        手取り額から年収を逆算する早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        毎月の手取りごとに、必要な額面の年収・月収をまとめました（独身・概算）。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">手取り（月）</th>
              <th className="border border-gray-200 px-3 py-2">額面の年収</th>
              <th className="border border-gray-200 px-3 py-2">額面の月収</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["17万円", "約256万円", "約21.3万円"],
              ["18万円", "約272万円", "約22.6万円"],
              ["19万円", "約287万円", "約23.9万円"],
              ["20万円", "約303万円", "約25.2万円"],
              ["21万円", "約318万円", "約26.5万円"],
              ["22万円", "約334万円", "約27.8万円"],
              ["23万円", "約350万円", "約29.1万円"],
            ].map((row, i) => (
              <tr
                key={row[0]}
                className={row[0] === "20万円" ? "bg-primary-50 font-bold" : i % 2 ? "bg-gray-50" : ""}
              >
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
        手取りを1万円増やすには、額面の月収で約1.3万円の上乗せが必要です。差額の約3割が税金・社会保険料として引かれるためで、昇給交渉や転職時の目安になります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別の手取り（年収303万円）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        同じ年収303万円でも、配偶者控除や扶養控除の有無で手取りは変わります。
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
              ["独身", "約240万円", "約20.0万円", "79.3%"],
              ["片働き夫婦", "約245万円", "約20.4万円", "81.1%"],
              ["夫婦＋子1人", "約250万円", "約20.9万円", "82.8%"],
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
        配偶者を扶養する「片働き夫婦」は独身より手取りが年約5万円多く、16歳以上の子を扶養する場合はさらに増えます。つまり同じ手取り20万円でも、扶養家族がいる人は必要な額面がやや少なくて済みます。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収で手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          年収を入力するだけで、手取り・税金・社会保険料の内訳がすぐわかります。
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
