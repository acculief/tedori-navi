import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "医療費控除でいくら戻る？計算方法と対象・確定申告のやり方",
  description:
    "医療費控除は1年間の医療費が10万円を超えた分が対象。戻る金額は「超えた分×(所得税率＋住民税10%)」で、医療費30万円・税率20%なら約6万円が軽減されます。計算式・医療費別の早見表・対象になる費用・申告方法を解説します。",
  alternates: { canonical: "/iryouhi-koujo/" },
};

const faqs = [
  {
    q: "医療費控除はいくらから受けられますか？",
    a: "原則として、1年間（1月1日〜12月31日）に支払った医療費が10万円を超えた分が対象です。ただし総所得金額等が200万円未満の人は、10万円ではなく総所得金額等の5%を超えた分が対象になります。10万円に届かなくても、所得の低い人は控除を受けられる場合があります。",
  },
  {
    q: "家族の医療費も合算できますか？",
    a: "できます。生計を一にする家族（配偶者・子ども・仕送りしている親など）の医療費は、まとめて1人が申告できます。一般に、家族の中で所得が高く税率の高い人がまとめて申告するほど、戻る金額が大きくなります。",
  },
  {
    q: "会社員でも確定申告が必要ですか？",
    a: "必要です。医療費控除は年末調整では受けられないため、会社員でも自分で確定申告（還付申告）を行います。還付申告は翌年以降5年間さかのぼって提出できるので、過去に申告し忘れた分も取り戻せます。",
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
        医療費控除でいくら戻る？計算方法と対象・確定申告のやり方
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        医療費控除は、1年間に支払った医療費が<strong>10万円</strong>を超えたとき、その超えた分を所得から差し引ける制度です。戻る金額は控除そのものではなく、
        <strong>超えた分 ×（所得税率＋住民税10%）</strong>が目安になります。たとえば医療費が年30万円で所得税率20%の人なら、控除額20万円に対して
        <strong>約6万円</strong>の税負担が軽くなります。この記事では計算式と医療費別の早見表、対象になる費用、申告のやり方を整理します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        医療費控除の計算式
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        控除額（所得から差し引ける金額）は次の式で求めます。
      </p>
      <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-800">
        控除額 =（1年間に支払った医療費 − 保険金などで補填された金額）− 10万円
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        「保険金などで補填された金額」とは、生命保険の入院給付金や健康保険の高額療養費・出産育児一時金などです。控除額の
        <strong>上限は200万円</strong>。総所得金額等が200万円未満の人は、式の「10万円」が「総所得金額等の5%」に置き換わります。
      </p>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        実際に戻る（軽くなる）金額は、この控除額に税率を掛けたものです。所得税は確定申告で還付され、住民税は翌年度の税額が下がる形で反映されます。
      </p>
      <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-800">
        戻る金額の目安 = 控除額 ×（所得税率 ＋ 住民税率10%）
      </div>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        医療費別・税率別の還付額早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年間の医療費と所得税率ごとに、戻る金額（所得税還付＋住民税の軽減）の目安をまとめました。保険金での補填はゼロとして計算しています。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">年間の医療費</th>
              <th className="border border-gray-200 px-3 py-2">控除額</th>
              <th className="border border-gray-200 px-3 py-2">税率5%＋住民税</th>
              <th className="border border-gray-200 px-3 py-2">税率10%＋住民税</th>
              <th className="border border-gray-200 px-3 py-2">税率20%＋住民税</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["20万円", "10万円", "約1.5万円", "約2.0万円", "約3.0万円"],
              ["30万円", "20万円", "約3.0万円", "約4.0万円", "約6.0万円"],
              ["50万円", "40万円", "約6.0万円", "約8.0万円", "約12.0万円"],
              ["100万円", "90万円", "約13.5万円", "約18.0万円", "約27.0万円"],
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
        所得税率は課税所得によって決まります。年収が高く税率の高い人ほど、同じ医療費でも戻る金額が大きくなります。家族分をまとめて所得の高い人が申告した方が有利なのはこのためです。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        対象になる費用・ならない費用
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        「治療のために必要な支出」が対象で、「予防・美容・健康増進のための支出」は対象外です。判断に迷いやすいものを整理します。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">対象になる（○）</th>
              <th className="border border-gray-200 px-3 py-2">対象にならない（×）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">診療・治療費、入院費</td>
              <td className="border border-gray-200 px-3 py-2">人間ドック・健康診断（異常なしの場合）</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">治療のための市販薬</td>
              <td className="border border-gray-200 px-3 py-2">ビタミン剤・健康食品・サプリ</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">通院の公共交通費（電車・バス）</td>
              <td className="border border-gray-200 px-3 py-2">自家用車のガソリン代・駐車場代</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">歯の治療、治療目的の歯列矯正</td>
              <td className="border border-gray-200 px-3 py-2">美容目的の歯列矯正・美容整形</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">出産費用（妊婦健診・分娩）</td>
              <td className="border border-gray-200 px-3 py-2">予防接種、自己都合の差額ベッド代</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        なお、健康診断や人間ドックでも、その結果として重大な病気が見つかり治療につながった場合は、検診費用も対象に含められます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        セルフメディケーション税制との違い
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        医療費が10万円に届かない場合は、特例の「セルフメディケーション税制」を使える場合があります。対象の市販薬（スイッチOTC医薬品）の年間購入額が
        <strong>1万2,000円</strong>を超えた分（上限8万8,000円）を控除できる制度で、健康診断などを受けていることが条件です。通常の医療費控除とは
        <strong>どちらか一方のみ</strong>を選択します。医療費が多い年は通常の医療費控除、市販薬中心で少額の年はセルフメディケーション税制、と使い分けます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        確定申告のやり方
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        医療費控除は年末調整では受けられないため、確定申告が必要です。手順はシンプルです。
      </p>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
        <li>1年分の領収書を集め、「医療費控除の明細書」に人・病院ごとの金額を記入する（領収書の提出は不要だが5年間保存）。</li>
        <li>健康保険組合から届く「医療費のお知らせ」があれば、明細書の記入を簡略化できる。</li>
        <li>確定申告書に控除額を記載し、源泉徴収票の内容とあわせてe-Taxまたは税務署へ提出する。</li>
      </ol>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        還付は申告からおおむね1〜1か月半で指定口座に振り込まれます。申告し忘れていても、その年の翌年から5年以内なら還付申告が可能です。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          自分の所得税率を確認しよう
        </p>
        <p className="mt-1 text-sm text-gray-600">
          戻る金額は所得税率で変わります。まずは今の年収の手取りと税率の目安を把握しておきましょう。
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
        ※本記事は2026年時点の制度をもとにした概算です。控除額・税率・対象範囲は個々の状況や法改正により異なります。正確な取り扱いは国税庁の情報や税務署・税理士にご確認ください。
      </p>
    </article>
  );
}
