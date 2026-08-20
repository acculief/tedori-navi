import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "106万円の壁とは？パートの社会保険加入ラインをわかりやすく",
  description:
    "106万円の壁とは、パート・アルバイトが勤め先の社会保険に加入する年収ライン。月額賃金8.8万円が目安で、超えると手取りが年間約15万円減ります。加入条件・手取りの早見表・働き損を取り戻すラインまで解説します。",
  alternates: { canonical: "/fuyou-106man-kabe/" },
};

const faqs = [
  {
    q: "106万円の壁と130万円の壁はどう違いますか？",
    a: "106万円の壁は、従業員51人以上の企業などで働くパートが「勤め先の社会保険（厚生年金・健康保険）」に加入するラインです。一方130万円の壁は、勤め先の要件を満たさない人が「配偶者の扶養から外れる」ラインで、自分で国民年金・国民健康保険に入る必要が出ます。加入する保険の種類が異なります。",
  },
  {
    q: "106万円を超えると手取りはいくら減りますか？",
    a: "年収106万円で社会保険に加入すると、健康保険・厚生年金・雇用保険で年間約15万〜16万円が天引きされ、手取りは約90万円まで下がります。加入前の年収105万円のときより手取りが減る「働き損」が起こるため、超えるなら中途半端ではなくしっかり働くのが基本方針になります。",
  },
  {
    q: "社会保険に入るデメリットしかないのですか？",
    a: "いいえ。厚生年金に加入すると将来の年金が国民年金だけの人より上乗せされ、病気やケガで働けないときの傷病手当金、出産手当金も受け取れます。保険料の半分は会社が負担します。目先の手取りは減りますが、保障と将来の年金という見返りがあります。",
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
        106万円の壁とは？パートの社会保険加入ライン
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        106万円の壁とは、パート・アルバイトが<strong>勤め先の社会保険（厚生年金・健康保険）に加入する年収ライン</strong>のことです。正確には「月額賃金8.8万円以上（年収換算で約106万円）」を含む5つの条件をすべて満たすと加入対象になります。加入すると保険料が天引きされ、
        <strong>年収106万円なら手取りは約90万円</strong>まで下がります。この記事では、加入条件と手取りの変化、そして「働き損」を取り戻すラインを整理します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        106万円の壁で社会保険に加入する条件
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        以下の5つを<strong>すべて満たす</strong>と、勤め先の社会保険に加入します。ひとつでも欠けると106万円の壁の対象外です。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">条件</th>
              <th className="border border-gray-200 px-3 py-2">内容</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["労働時間", "週の所定労働時間が20時間以上"],
              ["賃金", "月額賃金が8.8万円以上（年収換算 約106万円）"],
              ["雇用期間", "2か月を超えて雇用される見込みがある"],
              ["学生", "学生ではない（夜間・通信制などは対象の場合あり）"],
              ["企業規模", "従業員51人以上の企業（2024年10月〜）"],
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
        月額賃金8.8万円の判定に、<strong>残業代・賞与・通勤手当は含めません</strong>。基本給と役職手当など、毎月決まって支払われる賃金で判断します。企業規模の要件は段階的に引き下げられてきており、今後さらに対象が広がる見直しが進められています。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        壁を超えると手取りはどう変わる？
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        社会保険に加入すると、給料から健康保険・厚生年金・雇用保険が天引きされます（本人負担は合計で額面の約15%）。加入前後で手取りを比べると次のようになります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">年収（額面）</th>
              <th className="border border-gray-200 px-3 py-2">社会保険</th>
              <th className="border border-gray-200 px-3 py-2">手取り（年）</th>
              <th className="border border-gray-200 px-3 py-2">手取り率</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["105万円（加入せず・扶養内）", "なし", "約105万円", "約100%"],
              ["106万円（加入）", "約16万円", "約90万円", "85.3%"],
              ["110万円（加入）", "約16万円", "約94万円", "85.3%"],
              ["120万円（加入）", "約18万円", "約101万円", "84.4%"],
              ["125万円（加入）", "約18万円", "約105万円", "83.9%"],
              ["130万円（加入）", "約19万円", "約109万円", "83.5%"],
            ].map((row, i) => (
              <tr
                key={row[0]}
                className={
                  row[0].startsWith("106")
                    ? "bg-primary-50 font-bold"
                    : i % 2
                      ? "bg-gray-50"
                      : ""
                }
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
        ※40歳未満・協会けんぽ加入を想定した概算。手取りには住民税・所得税も反映しています。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        「働き損」ゾーンと取り戻すライン
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        上の表でわかるとおり、年収105万円のとき手取りは約105万円ですが、106万円で加入すると手取りは<strong>約90万円まで一気に落ち込みます</strong>。ここが「働き損」の谷です。額面を増やしても、
        <strong>加入前の手取り（約105万円）に戻るのは年収125万円あたり</strong>。つまり105万〜125万円のゾーンは、働く時間を増やしても手取りがほとんど増えない、あるいは減る区間になります。
      </p>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        結論はシンプルで、<strong>106万円の壁は「超えるなら中途半端に超えない」</strong>のが基本です。105万円以内に抑えて扶養内で働くか、加入するなら125万円以上をしっかり狙うか、どちらかに寄せると手取りの効率が良くなります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        加入で得られるメリット
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        目先の手取りは減りますが、社会保険加入には見返りもあります。
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>将来の年金が増える</strong>：厚生年金は国民年金に上乗せされ、老後の受給額が増えます。
        </li>
        <li>
          <strong>保険料は会社と折半</strong>：本人負担は保険料の半分で、残りは勤め先が負担します。
        </li>
        <li>
          <strong>傷病手当金・出産手当金</strong>：病気やケガ、出産で働けない期間の所得補償が受けられます。
        </li>
      </ul>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        目先の15万円の負担を「将来の年金＋保障への投資」と見るか、「今の手取り優先」と見るか。世帯の状況と働き方で判断が分かれるところです。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収で手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          パート収入でも、入力するだけで手取り・税金・社会保険料の内訳がわかります。
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
        ※本記事は2026年時点の制度に基づく概算です。社会保険の加入判定や保険料は勤め先・加入先・自治体により異なります。制度改正が予定されているため、最新の適用条件は日本年金機構や勤め先にご確認ください。
      </p>
    </article>
  );
}
