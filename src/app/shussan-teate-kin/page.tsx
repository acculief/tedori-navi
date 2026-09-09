import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "出産手当金はいくら？計算方法と手取りへの影響",
  description:
    "出産手当金は1日あたり標準報酬月額の平均÷30×2/3。月給30万円なら産休98日で約65万円。計算方法・支給期間・非課税の扱い・出産育児一時金との違いを早見表つきで解説します。",
  alternates: { canonical: "/shussan-teate-kin/" },
};

const faqs = [
  {
    q: "出産手当金はいつ振り込まれますか？",
    a: "産休が終わってから勤務先経由で健康保険に申請するのが一般的で、振込は申請からおよそ1〜2か月後です。産前・産後で分けて申請することもできますが、その分だけ振込回数が増えます。まとまったお金が入るのは出産後2〜3か月先になると考えておくと安心です。",
  },
  {
    q: "出産手当金と出産育児一時金は両方もらえますか？",
    a: "はい、別々の制度なので両方受け取れます。出産育児一時金は出産の費用に対して原則50万円が支給されるもの、出産手当金は産休で給与が出ない間の生活を支えるものです。目的が違うため、どちらも要件を満たせば併給できます。",
  },
  {
    q: "専業主婦や国民健康保険でも出産手当金はもらえますか？",
    a: "原則もらえません。出産手当金は本人が勤務先の健康保険（協会けんぽ・健保組合）の被保険者であることが条件です。夫の扶養に入っている専業主婦や、自営業などで国民健康保険に加入している人は対象外となります（出産育児一時金は国保でも支給されます）。",
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
        出産手当金はいくら？計算方法と手取りへの影響
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        出産手当金は、1日あたり
        <strong>「標準報酬月額の平均 ÷ 30 × 3分の2」</strong>
        で計算します。月給（標準報酬月額）が30万円の人なら1日あたり約6,667円、産休98日分で
        <strong>合計およそ65万円</strong>です。産休で給与が止まる間の生活を支える、健康保険からの給付です。この記事で計算方法と支給期間、手取りへの影響を整理します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        出産手当金の計算式
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        1日あたりの支給額は次の式で決まります。
      </p>
      <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-800">
        1日あたりの支給額 ＝ 支給開始日以前12か月の標準報酬月額を平均した額 ÷ 30 ×{" "}
        <strong>2/3</strong>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        標準報酬月額とは、毎月の社会保険料を計算するもとになる金額で、おおむね額面の月給に近い値です。これを日額に直し、その3分の2が1日あたりに支給されます。あとは支給される日数（後述）を掛けると総額が出ます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        月給別の出産手当金 早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        単胎（1人）出産で産休98日を満額取得した場合の目安です。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">月給（標準報酬月額）</th>
              <th className="border border-gray-200 px-3 py-2">1日あたり</th>
              <th className="border border-gray-200 px-3 py-2">98日分の合計</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["20万円", "約4,444円", "約43.6万円"],
              ["25万円", "約5,556円", "約54.4万円"],
              ["30万円", "約6,667円", "約65.3万円"],
              ["35万円", "約7,778円", "約76.2万円"],
              ["40万円", "約8,889円", "約87.1万円"],
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
        ※実際の計算では日額を10円単位、支給額を1円単位に丸めるため、上表とは数百円〜数千円ずれることがあります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        支給される期間（日数）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        出産手当金は、産前・産後の休業で給与が支払われない日について支給されます。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">区分</th>
              <th className="border border-gray-200 px-3 py-2">産前</th>
              <th className="border border-gray-200 px-3 py-2">産後</th>
              <th className="border border-gray-200 px-3 py-2">合計</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">単胎（1人）</td>
              <td className="border border-gray-200 px-3 py-2">42日</td>
              <td className="border border-gray-200 px-3 py-2">56日</td>
              <td className="border border-gray-200 px-3 py-2 font-bold">98日</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">多胎（双子以上）</td>
              <td className="border border-gray-200 px-3 py-2">98日</td>
              <td className="border border-gray-200 px-3 py-2">56日</td>
              <td className="border border-gray-200 px-3 py-2 font-bold">154日</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        産前は出産予定日を含む42日（多胎は98日）、産後は出産日翌日から56日が基本です。出産が予定日より遅れた場合は、その遅れた日数分も産前として支給されます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        手取りへの影響：実質は8割近くカバー
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面ベースでは「3分の2（約67%）」ですが、出産手当金には次の特徴があります。
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>非課税</strong>：所得税・住民税がかからない。
        </li>
        <li>
          <strong>社会保険料が免除</strong>：産休・育休中は健康保険料・厚生年金保険料の本人負担が免除される。
        </li>
      </ul>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        働いていたときの給与は税金と社会保険料で2割前後が引かれています。出産手当金はこれらが引かれないため、額面の3分の2でも
        <strong>ふだんの手取りと比べると8割前後をカバー</strong>
        する感覚になります。「思ったより減らない」と言われるのはこのためです。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        混同しやすい3つの給付
      </h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">給付</th>
              <th className="border border-gray-200 px-3 py-2">いつ</th>
              <th className="border border-gray-200 px-3 py-2">金額の目安</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">出産育児一時金</td>
              <td className="border border-gray-200 px-3 py-2">出産時</td>
              <td className="border border-gray-200 px-3 py-2">原則50万円（一律）</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">出産手当金</td>
              <td className="border border-gray-200 px-3 py-2">産休中（98日）</td>
              <td className="border border-gray-200 px-3 py-2">給与の約2/3</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">育児休業給付金</td>
              <td className="border border-gray-200 px-3 py-2">育休中（産後57日目〜）</td>
              <td className="border border-gray-200 px-3 py-2">給与の67%→50%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        出産手当金は「産休中」の給付です。産後56日を過ぎて育休に入ると、次は雇用保険の
        <Link href="/ikukyu-teate-tedori/" className="text-primary-600 underline">
          育児休業給付金
        </Link>
        にバトンタッチします。時期でもらえる制度が変わる点に注意しましょう。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          復帰後の手取りもチェック
        </p>
        <p className="mt-1 text-sm text-gray-600">
          職場復帰後の年収から、毎月の手取りと税金の内訳を計算できます。
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
        ※本記事は協会けんぽの標準的な取り扱いに基づく概算です。実際の支給額・要件は加入している健康保険や休業中の給与支給の有無により異なります。詳しくは勤務先または加入先の健康保険にご確認ください。
      </p>
    </article>
  );
}
