import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "130万円の壁とは？社会保険の扶養と手取り",
  description:
    "130万円の壁とは、年収130万円以上になると配偶者や親の社会保険の扶養から外れ、自分で健康保険・年金を払うライン。超えると手取りが年20万円前後減り、130万〜150万円台は働き損になりやすい。逆転が解消する目安は年収160万円前後。106万円の壁との違いや対策も早見表で解説します。",
  alternates: { canonical: "/fuyou-130man-kabe/" },
};

const faqs = [
  {
    q: "130万円を超えると手取りはどのくらい減りますか？",
    a: "扶養を外れて自分で社会保険料（健康保険・年金）を払うと、年収130万円台では年20万円前後の負担が新たに発生します。そのため年収129万円のときより手取りが下がる「働き損」が起きます。手取りが元に戻る目安は年収160万円前後です。",
  },
  {
    q: "130万円の壁と106万円の壁の違いは何ですか？",
    a: "どちらも社会保険に加入するラインですが、106万円は従業員51人以上などの要件を満たす勤務先で適用されます。要件に当てはまらない勤務先で働く人は130万円が扶養を外れるラインになります。106万円の対象なら、130万円を待たず106万円で社会保険料の負担が始まります。",
  },
  {
    q: "一時的に130万円を超えても扶養のままでいられますか？",
    a: "残業などによる一時的な収入増であれば、勤務先の証明があれば連続2回まで扶養を継続できる仕組み（年収の壁・支援強化パッケージ）があります。恒常的に130万円を超える見込みの場合は扶養を外れる必要があります。",
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
        130万円の壁とは？社会保険の扶養と手取り
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        130万円の壁とは、パートやアルバイトの年収が
        <strong>130万円以上になると、配偶者や親の社会保険の扶養から外れる</strong>
        ラインのことです。扶養を外れると自分で健康保険料と年金保険料を払うため、
        <strong>年20万円前後の負担が新たに発生</strong>します。その結果、年収129万円のときより手取りが減る「働き損」が起きるのが、この壁の特徴です。手取りが元の水準に戻る目安は
        <strong>年収160万円前後</strong>です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        130万円を超えると何が起きる？
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        130万円未満なら、配偶者や親の健康保険に「被扶養者」として保険料負担ゼロで入っていられます。130万円以上になると被扶養者の資格を失い、次のいずれかで自分の保険料を払います。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">加入先</th>
              <th className="border border-gray-200 px-3 py-2">払うもの</th>
              <th className="border border-gray-200 px-3 py-2">目安（年）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">勤務先の社会保険</td>
              <td className="border border-gray-200 px-3 py-2">健康保険＋厚生年金</td>
              <td className="border border-gray-200 px-3 py-2">約19万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">国民健康保険＋国民年金</td>
              <td className="border border-gray-200 px-3 py-2">保険料＋年金保険料</td>
              <td className="border border-gray-200 px-3 py-2">約30万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        勤務先の社会保険に入れる場合は保険料の半分を会社が負担するため、国民健康保険・国民年金を自分で全額払うより負担が軽くなります。将来もらえる年金も厚生年金の分だけ増えます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        「働き損」ゾーンの手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収を130万円ちょうどに増やすと、社会保険料の負担で手取りがかえって減ります。勤務先の社会保険に加入した場合の目安は次のとおりです。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">年収</th>
              <th className="border border-gray-200 px-3 py-2">社会保険料など</th>
              <th className="border border-gray-200 px-3 py-2">手取り目安</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["129万円（扶養内）", "0円", "約129万円"],
              ["130万円（扶養外）", "約22万円", "約107万円"],
              ["140万円", "約24万円", "約115万円"],
              ["150万円", "約27万円", "約122万円"],
              ["160万円", "約29万円", "約130万円"],
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
        年収130万円で手取りは約107万円まで下がり、129万円のときより約22万円少なくなります。この減った分を働いて取り戻すには、
        <strong>年収160万円前後</strong>
        まで増やす必要があります。中途半端に130万〜150万円に留めるのが最も損になりやすいゾーンです。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        106万円の壁との違い
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        社会保険に入るラインは勤務先の規模などによって106万円と130万円に分かれます。自分がどちらに当てはまるかで、負担が始まる年収が変わります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">壁</th>
              <th className="border border-gray-200 px-3 py-2">対象</th>
              <th className="border border-gray-200 px-3 py-2">加入先</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">106万円</td>
              <td className="border border-gray-200 px-3 py-2">従業員51人以上など要件を満たす勤務先</td>
              <td className="border border-gray-200 px-3 py-2">勤務先の社会保険</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">130万円</td>
              <td className="border border-gray-200 px-3 py-2">106万円の要件に当てはまらない人</td>
              <td className="border border-gray-200 px-3 py-2">勤務先の社保 or 国保・国民年金</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        106万円の壁は、週20時間以上・月額賃金8.8万円以上・2か月を超える雇用見込み・学生でない、などの要件をすべて満たす場合に適用されます。この要件に当てはまらない働き方なら、130万円が扶養を外れるラインになります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        一時的な超過は扶養を継続できる場合がある
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        繁忙期の残業など一時的な理由で130万円を超えた場合は、勤務先が事情を証明すれば連続2回まで扶養を継続できる仕組み（年収の壁・支援強化パッケージ）があります。ただし恒常的に130万円を超える見込みなら扶養を外れる必要があり、扶養の判定基準は加入する健康保険組合によって細かい運用が異なります。実際の手続きは配偶者や親の勤務先・保険者に確認してください。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          自分の手取りを正確に計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          年収を入力するだけで、税金・社会保険料を差し引いた手取りの内訳がわかります。
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
        ※本記事の手取り・保険料は概算です。国民健康保険料は自治体や前年所得、社会保険料は勤務先の料率により異なります。扶養の判定・手続きは加入先の健康保険や勤務先の案内で最新情報をご確認ください。
      </p>
    </article>
  );
}
