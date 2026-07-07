import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "ふるさと納税の上限額は年収でいくら？計算方法と早見表",
  description:
    "ふるさと納税で自己負担2,000円に収まる上限額の目安を、年収・家族構成別の早見表で解説。上限額の計算方法や、上限を超えた場合の注意点もわかりやすく紹介します。",
  alternates: { canonical: "/furusato-nozei-jougen/" },
};

const faqs = [
  {
    q: "ふるさと納税の上限額はどうやって決まりますか？",
    a: "上限額は主に「住民税の所得割額」で決まります。年収が高く扶養家族が少ないほど住民税が多くなるため、上限額も大きくなります。逆に扶養家族が多いと住民税が下がり、上限額も小さくなります。",
  },
  {
    q: "上限額を超えて寄付するとどうなりますか？",
    a: "上限を超えた分は控除の対象外となり、自己負担が2,000円では済まなくなります。超過分は実質的に「多めに寄付しただけ」になるため、上限額の範囲内に収めるのが基本です。",
  },
  {
    q: "共働きの場合は上限額が増えますか？",
    a: "共働きで配偶者を扶養していない場合、配偶者控除が適用されないため住民税が高くなり、その分ふるさと納税の上限額も独身と同程度に大きくなります。片働きで配偶者を扶養している場合は上限額がやや小さくなります。",
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
        ふるさと納税の上限額は年収でいくら？計算方法と早見表
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        ふるさと納税は、実質<strong>自己負担2,000円</strong>で応援したい自治体に寄付ができ、返礼品も受け取れる制度です。
        ただし「2,000円の負担で済む金額」には<strong>年収や家族構成に応じた上限</strong>があります。
        この記事では、上限額の目安を早見表で確認し、その計算の考え方をわかりやすく解説します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収別・ふるさと納税の上限額早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        自己負担2,000円で寄付できる上限額の目安です（社会保険料控除のみを考慮した概算。単位：円）。家族構成によって金額が変わります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">年収</th>
              <th className="border border-gray-200 px-3 py-2">独身・共働き</th>
              <th className="border border-gray-200 px-3 py-2">夫婦（片働き）</th>
              <th className="border border-gray-200 px-3 py-2">夫婦＋子1人</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["300万円", "約28,000円", "約19,000円", "約11,000円"],
              ["400万円", "約42,000円", "約33,000円", "約25,000円"],
              ["500万円", "約61,000円", "約49,000円", "約40,000円"],
              ["600万円", "約77,000円", "約69,000円", "約60,000円"],
              ["700万円", "約108,000円", "約86,000円", "約78,000円"],
              ["800万円", "約129,000円", "約120,000円", "約110,000円"],
              ["1,000万円", "約180,000円", "約171,000円", "約162,000円"],
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
        ※上表は目安です。住宅ローン控除・医療費控除・iDeCoなど他の控除がある場合、住民税が下がり上限額も小さくなります。正確な金額は源泉徴収票をもとに算出してください。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        上限額の計算の考え方
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        ふるさと納税の控除は「所得税」「住民税（基本分）」「住民税（特例分）」の3つから成り立っています。このうち上限を左右するのが、住民税の所得割額の2割までと決められた<strong>特例分</strong>です。上限額はおおよそ次の式で求められます。
      </p>
      <div className="mt-4 rounded-xl bg-primary-50 p-5 text-center text-sm font-bold text-primary-900">
        上限額 ≒ 住民税の所得割額 × 20％ ÷（100％ − 住民税率10％ − 所得税率×1.021）＋ 2,000円
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        つまり<strong>住民税の所得割額が大きいほど上限が上がる</strong>のがポイントです。年収が高い、あるいは扶養家族が少なく課税所得が多い人ほど、上限額は大きくなります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        ふるさと納税で失敗しないための注意点
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
        <li>
          <strong>上限額を超えない</strong>：超過分は自己負担になります。年末に近づくと年収が確定しやすいので、余裕をもった金額にするのが安全です。
        </li>
        <li>
          <strong>ワンストップ特例は5自治体まで</strong>：確定申告をしない給与所得者は、寄付先が5自治体以内ならワンストップ特例で手続きが簡単になります。6自治体以上に寄付する場合は確定申告が必要です。
        </li>
        <li>
          <strong>控除は翌年の住民税で反映</strong>：寄付した年の所得税還付と、翌年6月以降の住民税減額という形で戻ってきます。
        </li>
      </ul>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          まずは自分の住民税額を把握しよう
        </p>
        <p className="mt-1 text-sm text-gray-600">
          年収を入力すると、住民税・所得税・手取りの内訳がわかります。上限額の目安を考える出発点になります。
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
        ※本記事の上限額は一定の前提に基づく概算です。実際の上限は各種控除の適用状況により異なります。寄付前に必ずご自身の源泉徴収票や各ふるさと納税サイトのシミュレーターで確認してください。
      </p>
    </article>
  );
}
