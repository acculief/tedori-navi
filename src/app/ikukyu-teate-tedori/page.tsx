import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "育児休業給付金はいくら？手取りの何割かと計算方法",
  description:
    "育児休業給付金は最初の6か月は休業前賃金の67%、その後は50%。給付金は非課税で社会保険料も免除されるため、手取りベースでは育休前の約8割が残ります。月給別の早見表と計算方法を解説します。",
  alternates: { canonical: "/ikukyu-teate-tedori/" },
};

const faqs = [
  {
    q: "育児休業給付金は手取りの何割くらいですか？",
    a: "支給率は最初の180日（約6か月）が休業前賃金の67%、それ以降は50%です。ただし給付金は非課税で、育休中は社会保険料も免除されるため、手取りベースで比べると67%の期間は育休前の手取りの約8割が残る計算になります。",
  },
  {
    q: "育児休業給付金に税金や社会保険料はかかりますか？",
    a: "かかりません。育児休業給付金は非課税で所得税・住民税の対象外です。さらに育休中は健康保険料・厚生年金保険料が本人・会社ともに免除されます。額面の給付率が67%でも手残りが大きくなるのはこのためです。",
  },
  {
    q: "共働きで2人とも育休を取ると増えますか？",
    a: "はい。2025年4月に始まった出生後休業支援給付金により、両親がともに一定期間内に育休を取ると最大28日間、給付率が13%上乗せされます。育児休業給付金67%と合わせて80%となり、社会保険料免除・非課税を踏まえると実質的に手取り10割相当になります。",
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
        育児休業給付金はいくら？手取りの何割かと計算方法
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        育児休業給付金は、育休開始から最初の6か月が休業前賃金の
        <strong>67%</strong>、それ以降は<strong>50%</strong>が支給されます。額面だけ見ると「6〜7割に減る」ように思えますが、この給付金は
        <strong>非課税</strong>で、育休中は<strong>社会保険料も免除</strong>されます。そのため手取りで比べると、67%の期間は育休前の手取りの
        <strong>約8割</strong>が手元に残る計算になります。この記事で内訳と月給別の早見表を見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        育児休業給付金の計算式
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        給付額は「休業開始時賃金日額 × 支給日数 × 給付率」で決まります。賃金日額は、育休前6か月の賃金合計を180で割った金額です。ひと月（30日）あたりに直すと、実質的に
        <strong>育休前の月給 × 給付率</strong>とほぼ同じになります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">期間</th>
              <th className="border border-gray-200 px-3 py-2">給付率</th>
              <th className="border border-gray-200 px-3 py-2">月額の目安（月給30万円の場合）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">開始〜180日（約6か月）</td>
              <td className="border border-gray-200 px-3 py-2">67%</td>
              <td className="border border-gray-200 px-3 py-2">約201,000円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">181日目以降</td>
              <td className="border border-gray-200 px-3 py-2">50%</td>
              <td className="border border-gray-200 px-3 py-2">約150,000円</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        月給別の給付金早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        育休前の額面月給ごとに、給付金の月額目安を示します。給付金は非課税・社会保険料免除のため、下の金額がほぼそのまま手元に残ります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">育休前の月給（額面）</th>
              <th className="border border-gray-200 px-3 py-2">67%期間（月額）</th>
              <th className="border border-gray-200 px-3 py-2">50%期間（月額）</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["20万円", "約134,000円", "約100,000円"],
              ["25万円", "約167,500円", "約125,000円"],
              ["30万円", "約201,000円", "約150,000円"],
              ["35万円", "約234,500円", "約175,000円"],
              ["40万円", "約268,000円", "約200,000円"],
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
        給付金には上限があり、67%期間の月額はおよそ31万円で頭打ちになります（賃金日額の上限は毎年8月に改定）。育休前の月給がおおむね47万円を超える場合は、上表より支給額が抑えられます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        なぜ67%でも手取り約8割になるのか
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        通常の給与は、額面から所得税・住民税・社会保険料が引かれて手取りになります。手取り率はおおむね75〜80%です。一方、育児休業給付金はこれらがすべてかからないため、額面67%がほぼ満額で残ります。月給30万円の例で比べると次のとおりです。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">項目</th>
              <th className="border border-gray-200 px-3 py-2">育休前の給与</th>
              <th className="border border-gray-200 px-3 py-2">育休中（67%期間）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">額面・給付額</td>
              <td className="border border-gray-200 px-3 py-2">300,000円</td>
              <td className="border border-gray-200 px-3 py-2">201,000円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">税金・社会保険料</td>
              <td className="border border-gray-200 px-3 py-2">約60,000円</td>
              <td className="border border-gray-200 px-3 py-2">0円（非課税・免除）</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約240,000円</td>
              <td className="border border-gray-200 px-3 py-2">約201,000円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        育休前の手取り約24万円に対し、育休中も約20万円。手取りの減少は約8割の水準にとどまります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        受給の主な条件と注意点
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        雇用保険の被保険者で、育休開始前2年間に賃金支払基礎日数11日以上の月が12か月以上あることが原則です。支給は2か月ごとの申請単位で、原則子が1歳になるまで（保育所に入れないなどの場合は最長2歳まで延長可）受け取れます。育休中に働いて賃金を受け取ると、金額によって給付金が減額される点にも注意が必要です。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          育休前の手取りを確認しておこう
        </p>
        <p className="mt-1 text-sm text-gray-600">
          給付金は育休前の賃金がベースです。まずは今の年収の手取りを把握しておきましょう。
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
        ※本記事は2026年時点の制度をもとにした概算です。給付率・上限額・支給条件は法改正や毎年8月の賃金日額改定により変わります。正確な金額はハローワーク・勤務先にご確認ください。
      </p>
    </article>
  );
}
