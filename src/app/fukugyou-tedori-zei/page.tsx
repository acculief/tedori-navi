import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "副業の手取りと税金｜確定申告が必要な金額と計算",
  description:
    "会社員の副業は、所得（収入−経費）が年20万円を超えると確定申告が必要。副業所得は本業と合算して累進課税され、税率20%帯なら約30%が引かれます。20万円の壁と手取りの計算を早見表で解説。",
  alternates: { canonical: "/fukugyou-tedori-zei/" },
};

const faqs = [
  {
    q: "副業はいくらから確定申告が必要ですか？",
    a: "1か所から給与を受けている会社員の場合、給与以外の副業の所得（収入から経費を引いた額）が年20万円を超えると確定申告が必要です。20万円以下なら所得税の確定申告は不要ですが、住民税には20万円ルールがないため、別途お住まいの自治体へ住民税の申告が必要です。",
  },
  {
    q: "副業の税金はどれくらい引かれますか？",
    a: "副業の所得は本業の給与と合算して累進課税されます。本業で所得税率20%帯（課税所得330万〜695万円、おおむね年収500万〜900万円台）の人なら、副業の利益にも所得税約20%＋住民税10%で合計およそ30%がかかります。本業の年収が高いほど副業に乗る税率も高くなります。",
  },
  {
    q: "副業の収入から経費は引けますか？",
    a: "はい。副業の売上から、その仕事に直接かかった費用（材料費・通信費・交通費・仕事用の機材など）を経費として差し引けます。課税されるのは「収入」ではなく「所得（収入−経費）」なので、経費を正しく計上すると手取りが増えます。20万円・確定申告の判定もこの所得ベースで行います。",
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
        副業の手取りと税金｜確定申告が必要な金額と計算
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        会社員の副業は、<strong>所得（収入−経費）が年20万円を超えると確定申告が必要</strong>です。副業で得たお金はまるまる手取りにはならず、本業の給与と合算して課税されます。本業が所得税率20%帯の人なら、副業の利益からは
        <strong>およそ30%（所得税約20%＋住民税10%）</strong>
        が引かれる計算です。この記事では、20万円の壁の中身と、副業所得別の手取りを早見表で見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        「副業20万円の壁」とは
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        1か所から給与をもらう会社員は、給与以外の所得が年20万円を超えると所得税の確定申告義務が生じます。ここでいう「20万円」は売上ではなく、
        <strong>収入から経費を引いた所得</strong>で判定します。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">副業所得（年）</th>
              <th className="border border-gray-200 px-3 py-2">所得税の確定申告</th>
              <th className="border border-gray-200 px-3 py-2">住民税の申告</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">20万円以下</td>
              <td className="border border-gray-200 px-3 py-2">原則不要</td>
              <td className="border border-gray-200 px-3 py-2">必要</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">20万円超</td>
              <td className="border border-gray-200 px-3 py-2">必要</td>
              <td className="border border-gray-200 px-3 py-2">確定申告に含まれる</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        注意したいのは<strong>住民税には20万円ルールがない</strong>点です。副業所得が20万円以下で所得税の確定申告をしない場合でも、住民税は1円から課税対象なので、自治体への住民税申告が必要になります。また、医療費控除やふるさと納税で確定申告をする場合は、20万円以下の副業所得もすべて申告に含める必要があります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        副業にかかる税率は本業の年収で決まる
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        副業の所得は本業の給与所得に「上乗せ」されて課税されるため、適用される税率は本業の課税所得で決まります。所得税は累進課税、住民税は一律10%です。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">本業の課税所得（目安の年収）</th>
              <th className="border border-gray-200 px-3 py-2">所得税率</th>
              <th className="border border-gray-200 px-3 py-2">住民税</th>
              <th className="border border-gray-200 px-3 py-2">副業に乗る合計</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["195万円以下（〜年収400万円台）", "5%", "10%", "約15%"],
              ["330万円以下（〜年収500万円前後）", "10%", "10%", "約20%"],
              ["695万円以下（〜年収900万円前後）", "20%", "10%", "約30%"],
              ["900万円以下（〜年収1100万円前後）", "23%", "10%", "約33%"],
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
        年収の目安は独身・給与のみの概算です。所得税には別途、復興特別所得税2.1%が上乗せされます。本業の年収が高い人ほど副業の利益に対する税率も上がるため、同じ「副業で10万円の利益」でも手取りは人によって変わります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        副業所得別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        本業が所得税率20%帯（副業に約30%が乗るケース）を例に、副業の利益（収入−経費）別の手取りをまとめました。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">副業の利益（年）</th>
              <th className="border border-gray-200 px-3 py-2">所得税（約20.4%）</th>
              <th className="border border-gray-200 px-3 py-2">住民税（10%）</th>
              <th className="border border-gray-200 px-3 py-2">手取り</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["20万円", "約4.1万円", "約2.0万円", "約13.9万円"],
              ["50万円", "約10.2万円", "約5.0万円", "約34.8万円"],
              ["100万円", "約20.4万円", "約10.0万円", "約69.6万円"],
              ["200万円", "約40.8万円", "約20.0万円", "約139.2万円"],
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
        副業の利益のうち、手取りとして残るのはおおむね<strong>7割</strong>という目安です。本業が所得税率5%帯なら手取りは約85%、23%帯なら約67%と、本業の年収次第で残る割合は変わります。社会保険料は本業の給与で計算されるため、雑所得・事業所得の副業では原則として増えません。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        副業の所得区分に注意
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        副業の内容によって所得の種類（区分）が変わり、計算や申告方法も異なります。代表的なものは次のとおりです。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">区分</th>
              <th className="border border-gray-200 px-3 py-2">主な副業</th>
              <th className="border border-gray-200 px-3 py-2">ポイント</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">雑所得</td>
              <td className="border border-gray-200 px-3 py-2">ライティング・アフィリエイト・フリマ転売など</td>
              <td className="border border-gray-200 px-3 py-2">多くの副業が該当。赤字を給与と相殺できない</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">事業所得</td>
              <td className="border border-gray-200 px-3 py-2">継続・反復して事業規模で行う副業</td>
              <td className="border border-gray-200 px-3 py-2">青色申告で最大65万円控除・損益通算が可能</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">給与所得</td>
              <td className="border border-gray-200 px-3 py-2">アルバイト・パート（2か所目の勤務）</td>
              <td className="border border-gray-200 px-3 py-2">20万円ルールの対象外。原則すべて確定申告</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        アルバイトのように2か所目から給与をもらう場合は、20万円以下でも確定申告が原則必要です。20万円の壁は「給与以外の所得」に対するルールである点に注意してください。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          本業の手取りもまとめて確認
        </p>
        <p className="mt-1 text-sm text-gray-600">
          年収を入力すると、本業の手取りと税金の内訳がわかります。副業に乗る税率の目安づかみにも。
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
        ※本記事は2026年時点の制度に基づく概算です。税率帯・年収の対応はわかりやすさのための目安であり、実際の税額は各種控除や所得区分、自治体により異なります。副業の申告方法に迷う場合は税務署・税理士にご確認ください。
      </p>
    </article>
  );
}
