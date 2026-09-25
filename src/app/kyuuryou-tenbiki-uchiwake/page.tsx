import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "給料の天引きの内訳｜額面から引かれるもの一覧と割合",
  description:
    "給料から天引きされるのは健康保険・厚生年金・雇用保険・所得税・住民税の5つ。年収400万円なら天引き合計は約86万円で手取りは約314万円。額面から引かれるものの一覧と割合、額面別の早見表でわかりやすく解説します。",
  alternates: { canonical: "/kyuuryou-tenbiki-uchiwake/" },
};

const faqs = [
  {
    q: "給料から天引きされるものは何ですか？",
    a: "会社員の給料からは、社会保険料（健康保険・厚生年金・雇用保険）と税金（所得税・住民税）の5つが天引きされます。40歳以上はこれに介護保険料が加わります。手取りは額面からこれらを差し引いた金額です。",
  },
  {
    q: "額面と手取りの差はどのくらいですか？",
    a: "手取りは額面のおおむね75〜80%です。年収300万円なら手取り率は約79%、年収500万円では約78%、年収800万円を超えると税率が上がり手取り率は70%台前半まで下がります。年収が高いほど天引きの割合は大きくなります。",
  },
  {
    q: "天引きで一番大きいのは税金ですか？",
    a: "多くの年収帯では税金よりも社会保険料の方が大きくなります。たとえば年収400万円では、所得税＋住民税の合計約27万円に対し、社会保険料は約59万円です。手取りを増やしたいなら、社会保険料の負担が大きいことを理解しておくことが大切です。",
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
        給料の天引きの内訳｜額面から引かれるもの一覧と割合
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        会社員の給料から天引きされるのは、<strong>健康保険・厚生年金・雇用保険・所得税・住民税の5つ</strong>です（40歳以上は介護保険料も加わります）。額面の給料からこれらを差し引いた残りが「手取り」です。年収400万円の場合、天引き合計は<strong>約86万円</strong>で、手取りは<strong>約314万円</strong>になります。この記事では、給与明細の控除欄に並ぶ天引きの中身を一つずつ、金額と割合とともに解説します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        給料から天引きされるもの一覧
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        天引きは大きく「社会保険料」と「税金」の2グループに分かれます。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">項目</th>
              <th className="border border-gray-200 px-3 py-2">区分</th>
              <th className="border border-gray-200 px-3 py-2">内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">健康保険料</td>
              <td className="border border-gray-200 px-3 py-2">社会保険</td>
              <td className="border border-gray-200 px-3 py-2">医療費の自己負担を軽くする保険。会社と折半</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">厚生年金保険料</td>
              <td className="border border-gray-200 px-3 py-2">社会保険</td>
              <td className="border border-gray-200 px-3 py-2">将来の年金の原資。会社と折半（本人負担18.3%の半分）</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">雇用保険料</td>
              <td className="border border-gray-200 px-3 py-2">社会保険</td>
              <td className="border border-gray-200 px-3 py-2">失業給付などの財源。本人負担は0.6%（2026年度）</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">介護保険料</td>
              <td className="border border-gray-200 px-3 py-2">社会保険</td>
              <td className="border border-gray-200 px-3 py-2">40歳以上のみ。健康保険料に上乗せして徴収</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">税金</td>
              <td className="border border-gray-200 px-3 py-2">国に納める税。年末調整で過不足を精算</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">税金</td>
              <td className="border border-gray-200 px-3 py-2">自治体に納める税。前年の所得をもとに翌年6月から天引き</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        社会保険料は会社が半分を負担しているため、給与明細に表示されるのは本人負担分だけです。住民税だけは「前年の所得」に対してかかるため、新社会人の1年目は天引きされず、2年目の6月から引かれ始める点に注意しましょう。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        天引きの内訳（年収400万円の例）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収400万円・独身・40歳未満・協会けんぽ加入の場合、年間の天引き内訳は次のとおりです。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">項目</th>
              <th className="border border-gray-200 px-3 py-2">年間の金額</th>
              <th className="border border-gray-200 px-3 py-2">額面に対する割合</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">健康保険料</td>
              <td className="border border-gray-200 px-3 py-2">約20.0万円</td>
              <td className="border border-gray-200 px-3 py-2">5.0%</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">厚生年金保険料</td>
              <td className="border border-gray-200 px-3 py-2">約36.6万円</td>
              <td className="border border-gray-200 px-3 py-2">9.2%</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">雇用保険料</td>
              <td className="border border-gray-200 px-3 py-2">約2.4万円</td>
              <td className="border border-gray-200 px-3 py-2">0.6%</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約8.6万円</td>
              <td className="border border-gray-200 px-3 py-2">2.2%</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約18.0万円</td>
              <td className="border border-gray-200 px-3 py-2">4.5%</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約85.6万円</td>
              <td className="border border-gray-200 px-3 py-2">21.4%</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約314.4万円</td>
              <td className="border border-gray-200 px-3 py-2">78.6%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        内訳を見ると、天引きの中心は<strong>社会保険料（合計約59万円）</strong>で、税金（所得税＋住民税で約27万円）の2倍以上です。「税金が高い」と感じがちですが、実際に手取りを削っているのは社会保険料の方が大きい、というのが給与明細の実態です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        額面と手取りの差はどのくらい？（年収別早見表）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        天引き合計と手取りは年収によって変わります。独身・40歳未満の目安は次のとおりです。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">額面年収</th>
              <th className="border border-gray-200 px-3 py-2">天引き合計</th>
              <th className="border border-gray-200 px-3 py-2">手取り（年）</th>
              <th className="border border-gray-200 px-3 py-2">手取り率</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["300万円", "約62万円", "約238万円", "79.4%"],
              ["400万円", "約86万円", "約314万円", "78.6%"],
              ["500万円", "約112万円", "約388万円", "77.6%"],
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
        手取り率は年収が上がるほど下がります。これは所得税が累進課税（所得が多いほど高い税率）で、住民税や社会保険料も所得に応じて増えるためです。額面が2倍になっても手取りが2倍にならないのはこのためです。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        天引きを減らして手取りを増やす方法
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        社会保険料は給与額でほぼ決まるため自分で減らしにくいですが、税金は控除を使って軽くできます。代表的なのが次の3つです。
      </p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700">
        <li>
          ・<strong>iDeCo（個人型確定拠出年金）</strong>：掛金が全額所得控除になり、所得税・住民税が下がります。
        </li>
        <li>
          ・<strong>ふるさと納税</strong>：実質2,000円の負担で住民税・所得税が控除され、返礼品も受け取れます。
        </li>
        <li>
          ・<strong>生命保険料控除・医療費控除</strong>：支払った保険料や医療費に応じて課税所得を圧縮できます。
        </li>
      </ul>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        これらは天引きされる税金そのものを減らす仕組みで、年末調整や確定申告で適用します。社会保険料は変わらなくても、税金部分を数万円単位で軽くできるケースがあります。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの給料の手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          年収を入力するだけで、天引きの内訳と手取り額がすぐわかります。
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
        ※本記事の金額は給与収入のみ・40歳未満・協会けんぽ加入を想定した概算です。実際の天引き額は加入する健康保険組合の料率、お住まいの自治体、各種控除の適用状況により異なります。
      </p>
    </article>
  );
}
