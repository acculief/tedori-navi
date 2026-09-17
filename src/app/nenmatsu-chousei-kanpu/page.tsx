import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "年末調整の還付金はいくら？計算方法と戻る目安",
  description:
    "年末調整の還付金の平均は数千円〜数万円が目安。生命保険料控除や扶養の変更、住宅ローン控除などで戻る金額が決まります。還付金の計算方法と、いくら戻るかの目安を早見表つきで解説します。",
  alternates: { canonical: "/nenmatsu-chousei-kanpu/" },
};

const faqs = [
  {
    q: "年末調整の還付金の平均はいくらですか？",
    a: "人によって大きく異なりますが、生命保険料控除や扶養控除の申告がある会社員では、数千円〜3万円程度が戻るケースが多く見られます。住宅ローン控除の初年度以降や、年の途中で扶養家族が増えた場合は、10万円を超える還付になることもあります。",
  },
  {
    q: "還付金がゼロ、または追加徴収になることはありますか？",
    a: "あります。毎月の源泉徴収額が年間の正しい税額とちょうど一致していれば還付はゼロです。年の途中で扶養家族が減ったり、賞与が想定より多かった場合などは、逆に不足分を追加徴収されることもあります。",
  },
  {
    q: "還付金はいつ・どうやって受け取れますか？",
    a: "多くの会社では12月または1月の給与と一緒に振り込まれます。給与明細に「年末調整還付」などの名目で加算されるのが一般的です。支給時期は会社の経理処理によって前後します。",
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
        年末調整の還付金はいくら？計算方法と戻る目安
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        年末調整の還付金は、多くの会社員で
        <strong>数千円〜3万円程度</strong>が目安です。ただし金額は一律ではなく、
        <strong>「毎月天引きされた所得税」と「年間の正しい所得税」の差額</strong>
        で決まります。生命保険料控除や住宅ローン控除、扶養の変更があるほど戻りやすく、逆に差がなければ還付はゼロ、場合によっては追加徴収になります。この記事では、還付金がいくらになるかの決まり方と目安を解説します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        還付金が発生する仕組み
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        毎月の給与から天引きされる所得税（源泉徴収額）は、扶養人数と月給から機械的に決まる「仮の金額」です。生命保険料控除などは加味されていないため、多くの場合、実際の年税額より多めに引かれています。年末調整でこの1年分を精算し、
        <strong>引きすぎていた分が還付金として戻る</strong>という流れです。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">項目</th>
              <th className="border border-gray-200 px-3 py-2">内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">源泉徴収税額の合計</td>
              <td className="border border-gray-200 px-3 py-2">毎月＋賞与で天引きされた所得税の年間合計</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">年間の正しい所得税</td>
              <td className="border border-gray-200 px-3 py-2">各種控除を反映して計算し直した税額</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">還付金（または追徴）</td>
              <td className="border border-gray-200 px-3 py-2">源泉徴収額 − 正しい税額</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        計算結果がプラスなら還付、マイナスなら不足分の追加徴収になります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        還付金が増える主な要因
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        次のような控除を年末調整で申告すると、その分課税所得が下がり、還付金が増えます。カッコ内は還付額の目安です。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">要因</th>
              <th className="border border-gray-200 px-3 py-2">還付金への影響（目安）</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["生命保険料控除（上限まで）", "約6,000〜16,000円"],
              ["地震保険料控除", "約1,000〜5,000円"],
              ["iDeCo（小規模企業共済等掛金）", "掛金 × 税率ぶん（数万円も）"],
              ["配偶者控除・配偶者特別控除", "約4,000〜70,000円"],
              ["年の途中で扶養が増えた", "扶養1人あたり数万円"],
              ["住宅ローン控除（2年目以降）", "年末残高 × 0.7%（数万〜数十万円）"],
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
        控除額そのものがそのまま戻るわけではない点に注意してください。戻るのは
        <strong>「控除額 × あなたの所得税率」</strong>の分です。たとえば生命保険料控除で所得控除が8万円増えても、税率10%の人なら還付は約8,000円（＋翌年の住民税も軽くなる）です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        還付金のかんたんな計算方法
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年末に追加で申告する控除がある場合、還付金の目安は次の式でざっくり計算できます。
      </p>
      <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-gray-800">
        還付金の目安 ＝ <strong>追加される所得控除の合計 × 所得税率</strong>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        所得税率は課税所得に応じて5%〜45%です。年収400万〜600万円の会社員なら、税率10%（一部20%）が目安になります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">追加控除の合計</th>
              <th className="border border-gray-200 px-3 py-2">税率5%</th>
              <th className="border border-gray-200 px-3 py-2">税率10%</th>
              <th className="border border-gray-200 px-3 py-2">税率20%</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["4万円", "約2,000円", "約4,000円", "約8,000円"],
              ["8万円", "約4,000円", "約8,000円", "約16,000円"],
              ["20万円", "約1万円", "約2万円", "約4万円"],
              ["40万円", "約2万円", "約4万円", "約8万円"],
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
        ※復興特別所得税（2.1%）を含めると、上表より1〜2%ほど還付が増えます。住宅ローン控除は所得控除ではなく「税額控除」なので、控除額がほぼそのまま還付される点が異なります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        還付されない・追徴になるケース
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年末調整＝必ず戻る、ではありません。次のような場合は還付がゼロ、または不足分を追加で引かれます。
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-700">
        <li>申告する控除がなく、毎月の源泉徴収が正しく計算されていた</li>
        <li>年の途中で子の就職などにより扶養家族が減った</li>
        <li>賞与が想定より多く、源泉徴収が不足していた</li>
        <li>配偶者の年収が上がり、配偶者控除の対象外になった</li>
      </ul>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          自分の手取りと税額をチェック
        </p>
        <p className="mt-1 text-sm text-gray-600">
          年収を入力するだけで、所得税・住民税・社会保険料の内訳がわかります。還付金の前提になる税額の把握に。
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
        ※本記事の金額はいずれも概算の目安です。実際の還付金・追徴額は、所得や控除の適用状況、会社の計算方法により異なります。医療費控除やふるさと納税（ワンストップ特例を使わない場合）は年末調整では精算できず、確定申告が必要です。
      </p>
    </article>
  );
}
