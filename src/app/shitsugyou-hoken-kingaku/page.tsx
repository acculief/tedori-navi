import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "失業保険はいくらもらえる？給付額と給付日数の計算方法",
  description:
    "失業保険（雇用保険の基本手当）は、離職前の賃金の約50〜80％が目安。基本手当日額の上限や年齢別・退職理由別の給付日数、月あたりの受給額まで早見表で解説します。",
  alternates: { canonical: "/shitsugyou-hoken-kingaku/" },
};

const faqs = [
  {
    q: "失業保険は毎月いくらもらえますか？",
    a: "基本手当日額×28日（4週間ごと）が振り込まれます。基本手当日額は離職前の賃金日額の約50〜80％で、たとえば月給30万円だった人なら日額約6,000円前後、月あたり約17万円が目安です。賃金が高い人ほど給付率は下がり、上限額で頭打ちになります。",
  },
  {
    q: "失業保険はいつからもらえますか？",
    a: "会社都合退職なら7日間の待期期間の後すぐに受給が始まります。自己都合退職の場合は待期7日に加えて原則2か月（5年以内に3回目以降は3か月）の給付制限があり、最初の振り込みまで時間がかかります。",
  },
  {
    q: "パートやアルバイトでも失業保険はもらえますか？",
    a: "週20時間以上で31日以上の雇用見込みがあり、雇用保険に加入していれば対象です。離職前2年間に被保険者期間が通算12か月以上（会社都合は1年間に6か月以上）あることが受給の条件です。",
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
        失業保険はいくらもらえる？給付額と給付日数の計算方法
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        失業保険（雇用保険の<strong>基本手当</strong>）の受給額は、
        <strong>離職前の賃金のおおむね50〜80％</strong>が目安です。もらえる総額は「
        <strong>基本手当日額 × 給付日数</strong>」で決まり、賃金が低い人ほど給付率は高く、高い人ほど低くなります。この記事では、基本手当日額の計算方法・年齢別の上限・退職理由別の給付日数を早見表つきで解説します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        失業保険の計算式
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        受給総額は、次の2つの掛け算で求めます。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">項目</th>
              <th className="border border-gray-200 px-3 py-2">計算方法</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">賃金日額</td>
              <td className="border border-gray-200 px-3 py-2">
                離職前6か月の賃金総額 ÷ 180
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">基本手当日額</td>
              <td className="border border-gray-200 px-3 py-2">
                賃金日額 × 給付率（50〜80％）
              </td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">受給総額</td>
              <td className="border border-gray-200 px-3 py-2">
                基本手当日額 × 給付日数
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        賃金日額の計算に使う「賃金」には残業代や通勤手当などの各種手当を含みますが、賞与（ボーナス）は含みません。給付率は賃金日額が低いほど高く設定され、生活の下支えが手厚くなる仕組みです。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        月給別・受給額の早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        離職前の月給（賞与を除く）ごとの、基本手当日額と月あたり受給額の目安です。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">離職前の月給</th>
              <th className="border border-gray-200 px-3 py-2">賃金日額</th>
              <th className="border border-gray-200 px-3 py-2">基本手当日額</th>
              <th className="border border-gray-200 px-3 py-2">月あたり目安</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["20万円", "約6,700円", "約4,700円", "約13万円"],
              ["25万円", "約8,300円", "約5,400円", "約15万円"],
              ["30万円", "約10,000円", "約6,000円", "約17万円"],
              ["40万円", "約13,300円", "約6,700円", "約19万円"],
              ["50万円", "約16,700円", "約7,800円", "約22万円"],
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
        ※月あたりは基本手当日額×28日で概算。30〜44歳の基本手当日額の上限は約7,800円のため、月給40万円を超えると受給額はほぼ頭打ちになります。上限額は毎年8月に改定されます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        基本手当日額の年齢別上限
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        高収入だった人でも、基本手当日額には年齢ごとの上限があります（目安）。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">年齢</th>
              <th className="border border-gray-200 px-3 py-2">基本手当日額の上限</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["29歳以下", "約7,100円"],
              ["30〜44歳", "約7,800円"],
              ["45〜59歳", "約8,600円"],
              ["60〜64歳", "約7,400円"],
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
        60〜64歳は現役世代より上限も給付率も低く設定されています。正確な最新額はハローワークの案内で確認してください。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        給付日数（もらえる期間）の早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        もらえる日数は、退職理由と雇用保険の加入期間で変わります。自己都合退職は年齢に関係なく一律です。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">加入期間</th>
              <th className="border border-gray-200 px-3 py-2">自己都合</th>
              <th className="border border-gray-200 px-3 py-2">会社都合（35〜44歳）</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1年未満", "—", "90日"],
              ["1〜5年未満", "90日", "120日"],
              ["5〜10年未満", "90日", "180日"],
              ["10〜20年未満", "120日", "240日"],
              ["20年以上", "150日", "270日"],
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
        会社都合（倒産・解雇などの特定受給資格者）は自己都合より給付日数が長く、年齢が上がるほど手厚くなります。上表は35〜44歳の例で、他の年齢では日数が異なります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        受給の注意点
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>待期期間</strong>：どの理由でも最初の7日間は支給されません。
        </li>
        <li>
          <strong>給付制限</strong>：自己都合退職は待期後さらに原則2か月間受給できません（5年以内に3回目以降は3か月）。
        </li>
        <li>
          <strong>受給要件</strong>：離職前2年間に被保険者期間が通算12か月以上（会社都合は1年間に6か月以上）必要です。
        </li>
        <li>
          <strong>認定日</strong>：4週間に1度ハローワークで求職活動を報告する「失業認定」を受けて初めて支給されます。
        </li>
      </ul>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          働いていたときの手取りも確認
        </p>
        <p className="mt-1 text-sm text-gray-600">
          再就職後の年収から手取り・税金・社会保険料の内訳がすぐわかります。
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
        ※本記事の金額は概算です。基本手当日額の上限・給付率は毎年8月に改定され、給付日数や給付制限は退職理由・年齢・加入期間により異なります。正確な受給額は管轄のハローワークでご確認ください。
      </p>
    </article>
  );
}
