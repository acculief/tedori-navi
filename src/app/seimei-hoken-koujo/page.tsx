import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "生命保険料控除でいくら戻る？計算方法と上限額",
  description:
    "生命保険料控除で戻る税金は「控除額×税率」で決まり、多くの人で年数千円〜約1.9万円。新制度の控除額の計算式、払込額別の早見表、税率別に戻る金額をわかりやすく解説します。",
  alternates: { canonical: "/seimei-hoken-koujo/" },
};

const faqs = [
  {
    q: "生命保険料控除でいくら戻りますか？",
    a: "戻る（軽くなる）金額は「控除額×税率」で決まります。新制度で一般の生命保険を年8万円以上払っている人の控除額は所得税4万円・住民税2.8万円。所得税率10%の人なら、所得税4,000円＋住民税2,800円で年約6,800円が軽減されます。",
  },
  {
    q: "生命保険料控除の上限はいくらですか？",
    a: "2012年以降契約の新制度では、一般・介護医療・個人年金の3区分を合計して所得税12万円・住民税7万円が上限です。2011年以前契約の旧制度は一般・個人年金の2区分で所得税10万円・住民税7万円が上限です。",
  },
  {
    q: "年末調整と確定申告どちらで申請しますか？",
    a: "会社員は年末調整で、保険会社から届く「生命保険料控除証明書」を添付して申請できます。証明書の提出を忘れた場合や自営業の人は、確定申告で申請します。",
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
        生命保険料控除でいくら戻る？計算方法と上限額
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        生命保険料控除で戻る（軽くなる）税金は、多くの人で
        <strong>年 数千円〜約1.9万円</strong>です。ここで勘違いしやすいのが、
        <strong>控除額そのものが戻るわけではない</strong>という点。実際の軽減額は
        <strong>「控除額 × 税率」</strong>で決まります。この記事では、新制度の控除額の計算方法、払込額別の早見表、そして税率別に実際いくら戻るかを整理します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        まず「控除額」と「戻る額」は別物
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        生命保険料控除は<strong>所得控除</strong>です。課税所得を控除額の分だけ小さくし、その結果として税金が下がります。たとえば控除額が4万円でも、そのまま4万円戻るのではなく、
        <strong>4万円 × あなたの税率</strong>だけ税金が軽くなります。所得税率が10%なら軽減は4,000円です。住民税はほぼ一律10%で計算します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        新制度の控除額の計算式
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        2012年1月以降に契約した保険は「新制度」です。年間の払込保険料に応じて、区分ごとに次の式で控除額を計算します。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">年間払込保険料</th>
              <th className="border border-gray-200 px-3 py-2">所得税の控除額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">2万円以下</td>
              <td className="border border-gray-200 px-3 py-2">払込額の全額</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">2万円超〜4万円以下</td>
              <td className="border border-gray-200 px-3 py-2">払込額×1/2＋1万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">4万円超〜8万円以下</td>
              <td className="border border-gray-200 px-3 py-2">払込額×1/4＋2万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">8万円超</td>
              <td className="border border-gray-200 px-3 py-2">一律4万円（上限）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        住民税は式が異なり、上限は1区分あたり2.8万円です。所得税・住民税とも、
        <strong>一般生命保険料・介護医療保険料・個人年金保険料</strong>の3区分それぞれで計算し、合計します（所得税は合計12万円、住民税は合計7万円が上限）。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        払込保険料別・控除額の早見表（新制度・1区分）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        1つの区分（たとえば一般の生命保険）だけで払った場合の、所得税・住民税それぞれの控除額です。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">年間払込</th>
              <th className="border border-gray-200 px-3 py-2">所得税の控除額</th>
              <th className="border border-gray-200 px-3 py-2">住民税の控除額</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["2万円", "2.0万円", "1.6万円"],
              ["4万円", "3.0万円", "2.4万円"],
              ["6万円", "3.5万円", "2.8万円"],
              ["8万円以上", "4.0万円", "2.8万円"],
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
        住民税は払込5.6万円超で上限2.8万円に達します。つまり、1区分では
        <strong>年8万円まで払えば控除は満額</strong>で、それ以上払っても控除は増えません。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        実際いくら戻る？税率別の軽減額
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        一般の生命保険を年8万円以上払い、控除が満額（所得税4万円・住民税2.8万円）になった場合に、実際に軽くなる税金は次のとおりです。住民税は10%で計算しています。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">所得税率</th>
              <th className="border border-gray-200 px-3 py-2">所得税の軽減</th>
              <th className="border border-gray-200 px-3 py-2">住民税の軽減</th>
              <th className="border border-gray-200 px-3 py-2">合計で戻る額</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["5%", "2,000円", "2,800円", "約4,800円"],
              ["10%", "4,000円", "2,800円", "約6,800円"],
              ["20%", "8,000円", "2,800円", "約1.08万円"],
              ["23%", "9,200円", "2,800円", "約1.2万円"],
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
        3区分（一般・介護医療・個人年金）すべてを上限まで使うと、控除は所得税12万円・住民税7万円。所得税率10%なら合計で
        <strong>年約1.9万円</strong>、20%なら<strong>年約3.1万円</strong>が軽くなります。ただし3区分をフルに使える人は多くなく、現実的な軽減額は数千円〜1万円台が中心です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        申請の注意点
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
        <li>
          10月頃に保険会社から届く<strong>「生命保険料控除証明書」</strong>が必要。会社員は年末調整でこれを提出します。
        </li>
        <li>
          提出を忘れた・自営業の場合は<strong>確定申告</strong>で申請すれば戻ります（5年前まで遡って申請可）。
        </li>
        <li>
          そもそも納めている所得税・住民税が少ない人は、控除しきれず戻る額も小さくなります。
        </li>
      </ul>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          年収を入れるだけで、税金・社会保険料の内訳と手取り額がわかります。
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
        ※本記事は2012年以降契約の新制度を中心にした概算です。旧制度（2011年以前契約）は控除の計算式・上限が異なります。実際の控除額・税額は契約内容や所得状況により異なります。
      </p>
    </article>
  );
}
