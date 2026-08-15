import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "健康保険料の計算方法｜協会けんぽの料率と早見表",
  description:
    "健康保険料は標準報酬月額に料率をかけて計算し、会社と折半。協会けんぽ全国平均は約10％で本人負担は約5％。標準報酬月額30万円なら本人負担は月約15,000円。計算方法と早見表、40歳からの介護保険料まで解説します。",
  alternates: { canonical: "/kenkou-hoken-ryou/" },
};

const faqs = [
  {
    q: "健康保険料は全額自分で払うのですか？",
    a: "いいえ。健康保険料は会社と従業員で半分ずつ負担する「労使折半」です。協会けんぽの保険料率は全国平均で約10％ですが、給与から天引きされるのは本人負担分の約5％で、残りは会社が支払っています。",
  },
  {
    q: "健康保険料は都道府県で違いますか？",
    a: "はい。協会けんぽの保険料率は都道府県ごとに異なり、全国平均は約10％ですが、地域によって9.9％前後から10.4％程度まで差があります。医療費水準の高い地域ほど料率が高くなる傾向があります。",
  },
  {
    q: "40歳になると健康保険料が上がるのはなぜですか？",
    a: "40歳から64歳までは、健康保険料に加えて介護保険料（協会けんぽで約1.6％、本人負担約0.8％）が上乗せされるためです。給与が同じでも、40歳の誕生日を迎えた月から天引き額が増えます。",
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
        健康保険料の計算方法｜協会けんぽの料率と早見表
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        健康保険料は、給与そのものではなく「標準報酬月額」に保険料率をかけて計算します。協会けんぽの料率は全国平均で<strong>約10％</strong>ですが、会社と折半するため<strong>本人負担は約5％</strong>です。たとえば標準報酬月額30万円の人なら、毎月の本人負担は<strong>約15,000円</strong>（年間約18万円）。給与明細で「健康保険」として天引きされているのがこの金額です。この記事では計算のしくみと、給与水準ごとの早見表を見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        健康保険料の計算方法
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        健康保険料は、厚生年金と同じく「標準報酬月額」という等級ごとの金額に保険料率をかけて求めます。式にすると次のとおりです。
      </p>
      <div className="mt-4 rounded-2xl bg-gray-50 p-4 text-center text-sm font-bold text-gray-900">
        標準報酬月額 × 保険料率（約10％）÷ 2 ＝ 毎月の本人負担
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        標準報酬月額は毎年4〜6月の給与（残業代・各種手当を含む）の平均をもとに決まり、健康保険では1〜50等級に区分されます。協会けんぽの保険料率は都道府県ごとに定められており、全国平均は約10％です。この料率を会社と従業員で半分ずつ負担するため、天引きされるのは約5％になります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        標準報酬月額別の保険料早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        主な標準報酬月額の本人負担分（料率10％・折半後5％で計算）は次のとおりです。会社負担分も同額なので、実際には表の2倍が納められています。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">標準報酬月額</th>
              <th className="border border-gray-200 px-3 py-2">本人負担（月）</th>
              <th className="border border-gray-200 px-3 py-2">本人負担（年）</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["20万円", "10,000円", "約12.0万円"],
              ["24万円", "12,000円", "約14.4万円"],
              ["28万円", "14,000円", "約16.8万円"],
              ["30万円", "15,000円", "約18.0万円"],
              ["36万円", "18,000円", "約21.6万円"],
              ["41万円", "20,500円", "約24.6万円"],
              ["47万円", "23,500円", "約28.2万円"],
              ["50万円", "25,000円", "約30.0万円"],
              ["65万円", "32,500円", "約39.0万円"],
            ].map((row, i) => (
              <tr
                key={row[0]}
                className={i === 3 ? "bg-primary-50 font-bold" : i % 2 ? "bg-gray-50" : ""}
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
        健康保険は厚生年金（標準報酬月額65万円が上限）と違い、標準報酬月額139万円まで50等級に区分されています。高い給与では厚生年金より健康保険料の方が重くなる場合があります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        40歳からは介護保険料が上乗せ
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        40歳から64歳までは、健康保険料に<strong>介護保険料</strong>が上乗せされます。協会けんぽの介護保険料率は約1.6％で、これも労使折半のため本人負担は約0.8％です。
      </p>
      <div className="mt-4 rounded-2xl bg-gray-50 p-4 text-center text-sm font-bold text-gray-900">
        標準報酬月額 × 介護保険料率（約1.6％）÷ 2 ＝ 介護保険の本人負担
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        たとえば標準報酬月額30万円なら、介護保険料の本人負担は月約2,400円。健康保険料15,000円と合わせて月約17,400円が天引きされる計算です。給与が変わっていないのに40歳から手取りが減るのはこのためです。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        ボーナスにかかる健康保険料
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        賞与からも健康保険料が引かれます。1,000円未満を切り捨てた「標準賞与額」に同じ料率をかけて計算します。
      </p>
      <div className="mt-4 rounded-2xl bg-gray-50 p-4 text-center text-sm font-bold text-gray-900">
        標準賞与額 × 保険料率（約10％）÷ 2 ＝ ボーナスの本人負担
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        たとえば額面50万円のボーナスなら、健康保険の本人負担は50万円 × 5％ ＝ 約25,000円です。なお健康保険の標準賞与額には、年間573万円という上限があります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        知っておきたい注意点
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
        <li>
          健康保険料は<strong>労使折半</strong>。給与から引かれるのは全体の約半分で、会社が同額を上乗せして納めています。
        </li>
        <li>
          協会けんぽの料率は<strong>都道府県ごとに異なる</strong>ため、同じ給与でも住む地域（勤務先の所在地）で保険料は少し変わります。
        </li>
        <li>
          大企業の<strong>健康保険組合</strong>に加入している場合は、協会けんぽとは別の独自料率になり、平均より低いこともあります。
        </li>
        <li>
          標準報酬月額は4〜6月の給与で決まるため、この時期に残業が多いと1年間の保険料が上がりやすくなります。
        </li>
      </ul>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          社会保険料を引いた手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          健康保険・厚生年金・税金をまとめて差し引いた手取り額が、年収を入力するだけでわかります。
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
        ※本記事は協会けんぽ・全国平均の保険料率（健康保険約10％、介護保険約1.6％）をもとにした概算です。標準報酬月額の等級区分や実際の料率は、都道府県・加入先・算定時期により異なります。
      </p>
    </article>
  );
}
