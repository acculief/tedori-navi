import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "月収40万円の手取りはいくら？額面別の早見表",
  description:
    "月収40万円（額面）の手取りは約31.1万円。年収に換算すると480万円で年間手取りは約373万円です。天引きの内訳、月収35〜45万円の早見表、家族構成別・賞与ありの手取りをわかりやすく解説します。",
  alternates: { canonical: "/gessyuu-40man-tedori/" },
};

const faqs = [
  {
    q: "月収40万円の手取りはいくらですか？",
    a: "額面（総支給）で月40万円の場合、手取りは約31.1万円です。健康保険・厚生年金・雇用保険と所得税・住民税で毎月約8.9万円が天引きされます（独身・40歳未満・協会けんぽ加入・賞与なしの概算）。",
  },
  {
    q: "月収40万円は年収いくらですか？",
    a: "賞与なしなら月40万円×12か月で年収480万円です。賞与が年2回・計4か月分ある場合は年収約640万円になります。年収が上がる分、年間の手取り総額も増えます。",
  },
  {
    q: "月収40万円で手取りを増やす方法はありますか？",
    a: "iDeCoやふるさと納税、生命保険料控除などを使うと課税所得が下がり、所得税・住民税が軽くなります。配偶者や16歳以上の子を扶養している場合も控除で手取りが増えます。",
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
        月収40万円の手取りはいくら？額面別の早見表
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        額面（総支給）で月収40万円の場合、<strong>手取りは約31.1万円</strong>です。
        毎月<strong>約8.9万円</strong>が税金と社会保険料として天引きされます（独身・40歳未満・協会けんぽ加入・賞与なしの概算）。
        年収に換算すると480万円で、年間の手取りは約373万円です。この記事では天引きの内訳と、月収別・家族構成別の手取り、賞与がある場合の手取りを見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        月収40万円の天引き内訳（月あたり）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面40万円から毎月引かれる内訳は次のとおりです（独身・賞与なし想定を12で割った目安）。
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
              <td className="border border-gray-200 px-3 py-2">約2.0万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">厚生年金保険料</td>
              <td className="border border-gray-200 px-3 py-2">約3.7万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">雇用保険料</td>
              <td className="border border-gray-200 px-3 py-2">約0.2万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約1.1万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約1.9万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約8.9万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約31.1万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        もっとも大きいのは<strong>厚生年金保険料</strong>で、健康保険と合わせた社会保険料が天引きの約6.6割を占めます。税金（所得税＋住民税）は月あたり約3.0万円で、月収30万円の頃より所得税の負担が増えているのが特徴です。
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
              ["35万円", "約27.5万円", "420万円", "78.4%"],
              ["38万円", "約29.7万円", "456万円", "78.1%"],
              ["40万円", "約31.1万円", "480万円", "77.8%"],
              ["43万円", "約33.3万円", "516万円", "77.4%"],
              ["45万円", "約34.7万円", "540万円", "77.1%"],
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
        額面が上がるほど手取り率はわずかに下がります。所得税が超過累進課税で、収入が増えた部分ほど高い税率がかかるためです。月収40万円あたりからは所得税率10%の区分に入り、税負担の伸びが大きくなります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別の手取り（月収40万円）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        同じ月収40万円でも、配偶者控除や扶養控除の有無で手取りは変わります。
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
              ["独身", "約31.1万円", "約373万円", "77.8%"],
              ["片働き夫婦", "約31.7万円", "約380万円", "79.2%"],
              ["夫婦＋子1人", "約32.1万円", "約385万円", "80.2%"],
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
        配偶者を扶養する「片働き夫婦」は独身より年約7万円、16歳以上の子も扶養する「夫婦＋子1人」では年約12万円手取りが多くなります。控除で課税所得が下がり、所得税・住民税が軽くなるためです。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        賞与（ボーナス）がある場合
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        月収40万円に加えて賞与が年2回・計4か月分（160万円）出る場合、年収は約640万円になります。この場合の年間手取りは約489万円（手取り率76.4%）で、毎月の手取り約31.1万円は変わらず、賞与月にまとまった金額が加わるイメージです。賞与にも社会保険料と所得税がかかるため、額面160万円がそのまま手取りに加わるわけではなく、おおむね8割弱が手取りとして残ります。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          年収を入力するだけで、手取り・税金・社会保険料の内訳がわかります。
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
