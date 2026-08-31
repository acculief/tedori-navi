import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "月収25万円の手取りはいくら？額面別の早見表",
  description:
    "月収25万円（額面）の手取りは約19.8万円。年収に換算すると300万円で年間手取りは約238万円です。天引きの内訳、月収22〜30万円の早見表、家族構成別の手取りをわかりやすく解説します。",
  alternates: { canonical: "/gessyuu-25man-tedori/" },
};

const faqs = [
  {
    q: "月収25万円の手取りはいくらですか？",
    a: "額面（総支給）で月25万円の場合、手取りは約19.8万円です。健康保険・厚生年金・雇用保険と所得税・住民税で毎月約5.2万円が天引きされます（独身・40歳未満・協会けんぽ加入・賞与なしの概算）。",
  },
  {
    q: "月収25万円は年収いくらですか？",
    a: "賞与なしなら月25万円×12か月で年収300万円です。賞与が年2回・計4か月分ある場合は年収約400万円になります。年収が上がる分、年間の手取り総額も増えます。",
  },
  {
    q: "月収25万円で一人暮らしはできますか？",
    a: "手取り約19.8万円のうち家賃を6万円前後に抑えれば、都市部でも一人暮らしは十分可能です。固定費（家賃・通信・保険）を手取りの5割以内に収めると、貯蓄や趣味に回す余裕が生まれます。",
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
        月収25万円の手取りはいくら？額面別の早見表
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        額面（総支給）で月収25万円の場合、<strong>手取りは約19.8万円</strong>です。
        毎月<strong>約5.2万円</strong>が税金と社会保険料として天引きされます（独身・40歳未満・協会けんぽ加入・賞与なしの概算）。
        年収に換算すると300万円で、年間の手取りは約238万円です。この記事では天引きの内訳と、月収別・家族構成別の手取りを見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        月収25万円の天引き内訳（月あたり）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面25万円から毎月引かれる内訳は次のとおりです（独身・賞与なし想定を12で割った目安）。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">項目</th>
              <th className="border border-gray-200 px-3 py-2">月あたりの金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">健康保険料</td>
              <td className="border border-gray-200 px-3 py-2">約1.25万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">厚生年金保険料</td>
              <td className="border border-gray-200 px-3 py-2">約2.29万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">雇用保険料</td>
              <td className="border border-gray-200 px-3 py-2">約0.15万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約0.47万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約1.01万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約5.16万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約19.84万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        もっとも大きいのは<strong>厚生年金保険料</strong>で、健康保険と合わせた社会保険料が天引きの約7割を占めます。所得税は月あたり約0.47万円と少なく、この年収帯では社会保険料の負担感が際立ちます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        月収（額面）別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        賞与なしで月々の額面が変わった場合の手取り目安です（独身・40歳未満）。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">月収（額面）</th>
              <th className="border border-gray-200 px-3 py-2">手取り（月）</th>
              <th className="border border-gray-200 px-3 py-2">年収換算</th>
              <th className="border border-gray-200 px-3 py-2">手取り率</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["22万円", "約17.5万円", "264万円", "79.7%"],
              ["24万円", "約19.1万円", "288万円", "79.5%"],
              ["25万円", "約19.8万円", "300万円", "79.4%"],
              ["26万円", "約20.6万円", "312万円", "79.3%"],
              ["28万円", "約22.2万円", "336万円", "79.1%"],
              ["30万円", "約23.7万円", "360万円", "78.9%"],
            ].map((row, i) => (
              <tr
                key={row[0]}
                className={row[0] === "25万円" ? "bg-primary-50 font-bold" : i % 2 ? "bg-gray-50" : ""}
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
        額面が増えるほど手取り率はわずかに下がります。所得税・住民税が累進的に増えるためで、月収が上がっても手取りが同じ割合では増えない点に注意が必要です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別の手取り早見表（月収25万円）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        同じ月収25万円（年収300万円）でも、配偶者控除や扶養控除の有無で手取りは変わります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">家族構成</th>
              <th className="border border-gray-200 px-3 py-2">手取り（月）</th>
              <th className="border border-gray-200 px-3 py-2">手取り（年）</th>
              <th className="border border-gray-200 px-3 py-2">手取り率</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["独身", "約19.8万円", "約238万円", "79.4%"],
              ["片働き夫婦", "約20.3万円", "約243万円", "81.1%"],
              ["夫婦＋子1人", "約20.7万円", "約249万円", "82.9%"],
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
        配偶者を扶養する「片働き夫婦」は独身より年間で約5万円、16歳以上の子も扶養する「夫婦＋子1人」では約11万円、手取りが多くなります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        賞与がある場合の年収
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        月収25万円でも賞与の有無で年収は大きく変わります。賞与にも社会保険料と税金がかかるため、額面がそのまま手取りになるわけではありません。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">賞与</th>
              <th className="border border-gray-200 px-3 py-2">年収（額面）</th>
              <th className="border border-gray-200 px-3 py-2">年間手取り目安</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">なし</td>
              <td className="border border-gray-200 px-3 py-2">300万円</td>
              <td className="border border-gray-200 px-3 py-2">約238万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">年2回・計2か月分</td>
              <td className="border border-gray-200 px-3 py-2">約350万円</td>
              <td className="border border-gray-200 px-3 py-2">約277万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">年2回・計4か月分</td>
              <td className="border border-gray-200 px-3 py-2">約400万円</td>
              <td className="border border-gray-200 px-3 py-2">約315万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        ※賞与の社会保険料は標準賞与額に対して計算されるため、実際の手取りは支給時期や回数で前後します。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収で手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          月収25万円以外でも、年収を入力するだけで手取り・税金の内訳がわかります。
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
