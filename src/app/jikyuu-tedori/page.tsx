import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "時給から月収・手取りを計算｜パートの手取り早見表",
  description:
    "時給1200円・月160時間なら月収は約19.2万円、手取りは約15.4万円。時給から月収・年収・手取りを求める計算式と、時給別・労働時間別の早見表でわかりやすく解説します。",
  alternates: { canonical: "/jikyuu-tedori/" },
};

const faqs = [
  {
    q: "時給1200円でフルタイムだと手取りはいくらですか？",
    a: "月160時間（1日8時間×20日）働くと月収は約19.2万円、社会保険に加入している場合の手取りは月あたり約15.4万円です。年収では約230万円、手取り年約184万円が目安になります。",
  },
  {
    q: "時給から月収を計算する式は？",
    a: "月収（額面）＝ 時給 × 1日の労働時間 × 月の勤務日数 です。例えば時給1200円・1日8時間・月20日なら 1200×8×20＝192,000円。年収はこれを12倍します。",
  },
  {
    q: "パートでも税金や社会保険は引かれますか？",
    a: "年収が106万円または130万円の壁を超えて社会保険に加入すると、健康保険・厚生年金・雇用保険が天引きされます。加入しない範囲なら社会保険料はかからず、所得税・住民税も少額または非課税になります。",
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
        時給から月収・手取りを計算｜パートの手取り早見表
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        時給1200円で1日8時間・月20日（月160時間）働くと、月収は
        <strong>約19.2万円</strong>、社会保険に加入している場合の手取りは
        <strong>約15.4万円</strong>です。時給がわかれば、月収も年収も手取りも数式で求められます。この記事では計算式と、時給別・労働時間別の早見表を用意しました。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        時給から月収・年収を出す計算式
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        まずは額面ベースの計算です。手取りではなく「引かれる前の金額」を出します。
      </p>
      <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-800">
        <p className="font-bold">月収（額面）＝ 時給 × 1日の労働時間 × 月の勤務日数</p>
        <p className="mt-2 font-bold">年収（額面）＝ 月収 × 12</p>
        <p className="mt-2">
          例：時給1200円 × 8時間 × 20日 ＝ <strong>月19.2万円</strong> → 年
          <strong>230.4万円</strong>
        </p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        シフト制で勤務日数が月ごとに変わる場合は、直近3か月の平均勤務時間で計算すると実態に近くなります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        時給別の手取り早見表（月160時間の場合）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        1日8時間・月20日（月160時間）フルタイムで働き、社会保険に加入した場合の目安です。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">時給</th>
              <th className="border border-gray-200 px-3 py-2">月収（額面）</th>
              <th className="border border-gray-200 px-3 py-2">年収（額面）</th>
              <th className="border border-gray-200 px-3 py-2">手取り（月）</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1,000円", "16.0万円", "192万円", "約12.9万円"],
              ["1,100円", "17.6万円", "211万円", "約14.1万円"],
              ["1,200円", "19.2万円", "230万円", "約15.4万円"],
              ["1,300円", "20.8万円", "250万円", "約16.6万円"],
              ["1,500円", "24.0万円", "288万円", "約19.1万円"],
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
        手取り率はおおむね80%前後です。額面から社会保険料・所得税・住民税が引かれ、そのうち最も大きいのは社会保険料になります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        労働時間別の手取り早見表（時給1200円の場合）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        同じ時給1200円でも、月の労働時間によって月収・手取りは変わります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">月の労働時間</th>
              <th className="border border-gray-200 px-3 py-2">月収（額面）</th>
              <th className="border border-gray-200 px-3 py-2">年収（額面）</th>
              <th className="border border-gray-200 px-3 py-2">手取り（月）</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["120時間（週30時間程度）", "14.4万円", "173万円", "約11.7万円"],
              ["140時間", "16.8万円", "202万円", "約13.5万円"],
              ["160時間（フルタイム）", "19.2万円", "230万円", "約15.4万円"],
              ["173時間", "20.8万円", "249万円", "約16.6万円"],
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
        上表は社会保険に加入したケースです。加入しない範囲（後述の壁の内側）で働く場合、天引きが少なく手取り率は9割前後まで上がりますが、将来の年金額や保障は薄くなります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        パートで注意したい「年収の壁」
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        時給を上げたりシフトを増やしたりすると、次の年収ラインで手取りの伸び方が変わります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">年収ライン</th>
              <th className="border border-gray-200 px-3 py-2">何が変わるか</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">103万円</td>
              <td className="border border-gray-200 px-3 py-2">
                本人に所得税がかかり始める
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">106万円</td>
              <td className="border border-gray-200 px-3 py-2">
                一定規模の勤務先では社会保険の加入対象になる
              </td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">130万円</td>
              <td className="border border-gray-200 px-3 py-2">
                配偶者の扶養から外れ、社会保険に自分で加入
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        壁を超えて社会保険に入ると一時的に手取りは目減りしますが、厚生年金で将来の受給額が増え、傷病手当金などの保障も付きます。壁の詳細は
        <Link href="/fuyou-130man-kabe/">130万円の壁の記事</Link>や
        <Link href="/fuyou-106man-kabe/">106万円の壁の記事</Link>も参考にしてください。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの時給・勤務時間で手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          月収や年収を入力すれば、手取り・税金の内訳がすぐわかります。
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
        ※本記事の手取りは給与収入のみ・40歳未満・協会けんぽ加入を想定した概算です。実際の税額・保険料は勤務先や自治体、勤務時間、各種控除の適用状況により異なります。社会保険に加入しない範囲で働く場合は天引きが少なくなります。
      </p>
    </article>
  );
}
