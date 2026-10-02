import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "介護保険料はいくら？40歳から引かれる金額と計算方法",
  description:
    "介護保険料は40歳になった月から給与天引きされます。本人負担は額面の約0.8%で、月収30万円なら月あたり約2,385円。協会けんぽの料率と計算方法、月収別の早見表、65歳以降の扱いまで解説します。",
  alternates: { canonical: "/kaigo-hoken-ryou/" },
};

const faqs = [
  {
    q: "介護保険料はいつから引かれますか？",
    a: "40歳に達した月（誕生日の前日が属する月）から徴収が始まります。会社員の場合は健康保険料と一緒に給与から天引きされ、65歳になると給与天引きは終わり、以降は原則として年金からの天引きに切り替わります。",
  },
  {
    q: "介護保険料は月いくらくらいですか？",
    a: "協会けんぽの本人負担は額面の約0.8%です。月収30万円なら月あたり約2,385円、年間で約2.9万円が目安です。料率は毎年度見直され、加入している健康保険組合によっても異なります。",
  },
  {
    q: "介護保険料も会社と折半ですか？",
    a: "はい。会社員（第2号被保険者）の介護保険料は健康保険料と同様に会社と折半で、給与明細に表示される金額は本人負担分です。自営業などの国民健康保険加入者は折半がなく、計算方法も異なります。",
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
        介護保険料はいくら？40歳から引かれる金額と計算方法
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        会社員の介護保険料は、40歳になった月から健康保険料と一緒に給与天引きされます。本人負担は
        <strong>額面のおよそ0.8%</strong>で、月収30万円なら<strong>月あたり約2,385円</strong>、
        年間で約2.9万円が目安です（協会けんぽ・2025年度の介護保険料率1.59%を労使折半した場合）。
        この記事では、いつから・いくら引かれるのか、計算方法と月収別の早見表、65歳以降の扱いまで整理します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        介護保険料は40歳から引かれる
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        介護保険の被保険者は年齢で2種類に分かれます。会社員が給与から介護保険料を引かれるのは、
        <strong>40歳以上65歳未満の「第2号被保険者」</strong>の期間です。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">区分</th>
              <th className="border border-gray-200 px-3 py-2">年齢</th>
              <th className="border border-gray-200 px-3 py-2">保険料の納め方</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">対象外</td>
              <td className="border border-gray-200 px-3 py-2">40歳未満</td>
              <td className="border border-gray-200 px-3 py-2">負担なし</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">第2号被保険者</td>
              <td className="border border-gray-200 px-3 py-2">40歳〜64歳</td>
              <td className="border border-gray-200 px-3 py-2">給与・賞与から天引き（会社と折半）</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">第1号被保険者</td>
              <td className="border border-gray-200 px-3 py-2">65歳以上</td>
              <td className="border border-gray-200 px-3 py-2">原則として年金から天引き（自治体が決定）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        徴収が始まるのは、40歳の誕生日の前日が属する月からです。たとえば8月1日が誕生日の人は前日が7月31日なので、7月分から徴収されます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        介護保険料の計算方法
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        会社員（第2号被保険者）の介護保険料は、健康保険と同じ<strong>標準報酬月額</strong>に介護保険料率をかけて計算し、会社と折半します。
      </p>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        <strong>本人負担 ＝ 標準報酬月額 × 介護保険料率 ÷ 2</strong>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        協会けんぽの介護保険料率は2025年度（令和7年度）で<strong>1.59%</strong>。労使折半後の本人負担率は約0.795%です。
        標準報酬月額が30万円の人なら、30万円 × 1.59% ＝ 4,770円が全体の保険料、その半分の<strong>2,385円</strong>が毎月の給与から引かれます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        月収別の介護保険料 早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        料率1.59%・労使折半で計算した、本人負担分の月額・年額の目安です（標準報酬月額を月収とみなした概算）。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">月収（標準報酬月額）</th>
              <th className="border border-gray-200 px-3 py-2">介護保険料（月・本人負担）</th>
              <th className="border border-gray-200 px-3 py-2">年額の目安</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["20万円", "約1,590円", "約1.9万円"],
              ["25万円", "約1,988円", "約2.4万円"],
              ["30万円", "約2,385円", "約2.9万円"],
              ["35万円", "約2,783円", "約3.3万円"],
              ["40万円", "約3,180円", "約3.8万円"],
              ["50万円", "約3,975円", "約4.8万円"],
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
        賞与にも同じ料率がかかり、標準賞与額 × 1.59% ÷ 2 が本人負担です。40歳になると、この分だけ手取りが毎月2,000〜4,000円ほど減る計算になります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        65歳からは納め方が変わる
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        65歳になると第1号被保険者に切り替わり、給与天引きは終わります。以降は住んでいる市区町村が所得に応じて保険料を決め、原則として
        <strong>年金からの天引き（特別徴収）</strong>で納めます。年金額が一定未満の場合は納付書での納付（普通徴収）になります。
        自営業など国民健康保険に加入している40〜64歳の人は、介護保険料が国保の保険料に上乗せされる形で世帯ごとに計算されます。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          介護保険料込みの手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          年収を入れるだけで、社会保険料や税金を差し引いた手取りの目安がわかります。
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
        ※本記事は協会けんぽ・2025年度（令和7年度）の介護保険料率1.59%をもとにした概算です。料率は毎年度見直され、加入している健康保険組合や自治体によって金額は異なります。最新の料率はご自身の加入先でご確認ください。
      </p>
    </article>
  );
}
