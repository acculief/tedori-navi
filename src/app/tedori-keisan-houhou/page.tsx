import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "手取りの計算方法｜年収から手取りを計算する式を完全解説",
  description:
    "額面の年収から手取りを求める計算式を完全解説。給与所得控除・社会保険料・所得税・住民税を一つずつ計算し、年収500万円を例に手取りの求め方をわかりやすく説明します。",
  alternates: { canonical: "/tedori-keisan-houhou/" },
};

const faqs = [
  {
    q: "手取りは年収の何割くらいですか？",
    a: "年収300〜500万円台なら手取りはおおむね額面の75〜80%が目安です。年収が上がるほど所得税・社会保険料の負担が増えるため、年収800万円で約74%、1,000万円で約72%と手取り率は下がっていきます。",
  },
  {
    q: "ボーナスがある場合も同じ計算ですか？",
    a: "基本的な考え方は同じですが、社会保険料は月給とボーナスで別々に「標準報酬」に対して計算されます。当サイトの計算機は年収を12等分した簡易計算のため、ボーナス比率が高い場合は実際の手取りと数万円程度ずれることがあります。",
  },
  {
    q: "手取りを増やすにはどうすればいいですか？",
    a: "iDeCo（個人型確定拠出年金）や生命保険料控除、ふるさと納税などの所得控除・税額控除を活用すると、課税所得が下がり所得税・住民税が軽くなります。ふるさと納税は実質2,000円の負担で返礼品を受け取れる制度です。",
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
        手取りの計算方法｜年収から手取りを計算する式を完全解説
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        給与明細の「額面」と「手取り」が大きく違って驚いた経験はありませんか。
        額面（総支給額）から税金と社会保険料が天引きされた残りが、実際に口座へ振り込まれる「手取り」です。
        この記事では、年収から手取りを求める計算式を、実際の順番どおりに一つずつ解説します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        手取りの基本の計算式
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        手取りは、額面から「社会保険料」「所得税」「住民税」の3つを差し引いて求めます。式にすると次のとおりです。
      </p>
      <div className="mt-4 rounded-xl bg-primary-50 p-5 text-center text-sm font-bold text-primary-900 sm:text-base">
        手取り ＝ 額面 −（社会保険料 ＋ 所得税 ＋ 住民税）
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        ポイントは、所得税と住民税を計算するには先に「課税所得」を求める必要があり、その途中で
        <strong>給与所得控除</strong>や<strong>社会保険料控除</strong>を差し引くことです。順を追って見ていきましょう。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        ステップ1：給与所得控除を引く
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        会社員には、必要経費の代わりとして「給与所得控除」が認められています。額面（給与収入）に応じて金額が決まります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">給与収入</th>
              <th className="border border-gray-200 px-3 py-2">給与所得控除額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">162.5万円以下</td>
              <td className="border border-gray-200 px-3 py-2">55万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">180万円超〜360万円以下</td>
              <td className="border border-gray-200 px-3 py-2">収入×30％＋8万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">360万円超〜660万円以下</td>
              <td className="border border-gray-200 px-3 py-2">収入×20％＋44万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">660万円超〜850万円以下</td>
              <td className="border border-gray-200 px-3 py-2">収入×10％＋110万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">850万円超</td>
              <td className="border border-gray-200 px-3 py-2">195万円（上限）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        たとえば年収500万円なら「500万×20％＋44万＝144万円」が給与所得控除です。差し引いた
        <strong>356万円</strong>が給与所得となります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        ステップ2：社会保険料を計算する
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        給与から毎月天引きされる社会保険料は、主に次の3つです（40歳未満・協会けんぽ加入を想定）。
      </p>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
        <li>
          <strong>健康保険料</strong>：額面のおよそ5％（労使折半後の本人負担分）
        </li>
        <li>
          <strong>厚生年金保険料</strong>：額面の9.15％（標準報酬月額に上限あり）
        </li>
        <li>
          <strong>雇用保険料</strong>：額面の0.6％（一般の事業）
        </li>
      </ul>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収500万円の場合、健康保険25.0万円＋厚生年金45.8万円＋雇用保険3.0万円で、合計はおよそ
        <strong>73.8万円</strong>になります。社会保険料は所得税・住民税を計算するときに全額が控除されます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        ステップ3：所得税を計算する
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        所得税は「課税所得」に税率をかけて求めます。課税所得は、給与所得からさらに基礎控除（48万円）・社会保険料控除・配偶者控除などを引いた金額です。
      </p>
      <div className="mt-4 rounded-xl bg-gray-50 p-5 text-sm text-gray-800">
        <p className="font-bold">年収500万円・独身の場合</p>
        <p className="mt-2">
          課税所得 ＝ 356万（給与所得）− 48万（基礎控除）− 73.8万（社会保険料）≒ 234万円
        </p>
        <p className="mt-1">
          所得税 ＝ 234万 × 10％ − 9.75万 ≒ 13.7万円（復興特別所得税2.1％込みで約
          <strong>14.0万円</strong>）
        </p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        所得税は課税所得が増えるほど税率が上がる「累進課税」です。税率は5％〜45％の7段階で、各段階に控除額が設定されています。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        ステップ4：住民税を計算する
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        住民税は課税所得の約10％（所得割）に、均等割約5,000円と森林環境税1,000円を加えた金額です。
        住民税の基礎控除は所得税より少し低い43万円で計算されるため、課税所得は所得税より若干高くなります。
        年収500万円・独身なら、住民税はおよそ<strong>24.5万円</strong>です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        ここまでの計算をまとめると、年収別の手取りは次のようになります（独身・40歳未満・協会けんぽ想定の概算）。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">年収</th>
              <th className="border border-gray-200 px-3 py-2">手取り（年）</th>
              <th className="border border-gray-200 px-3 py-2">手取り（月）</th>
              <th className="border border-gray-200 px-3 py-2">手取り率</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["300万円", "約238万円", "約20万円", "79.4%"],
              ["400万円", "約314万円", "約26万円", "78.6%"],
              ["500万円", "約388万円", "約32万円", "77.6%"],
              ["600万円", "約460万円", "約38万円", "76.6%"],
              ["700万円", "約527万円", "約44万円", "75.3%"],
              ["800万円", "約591万円", "約49万円", "73.8%"],
              ["1,000万円", "約724万円", "約60万円", "72.4%"],
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

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収の手取りをその場で計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          年収と家族構成を入力するだけで、手取り・税金・社会保険料の内訳がわかります。
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
