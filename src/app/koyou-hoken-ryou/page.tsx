import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "雇用保険料はいくら？料率と計算方法をわかりやすく",
  description:
    "雇用保険料は毎月の賃金（賞与含む）×労働者負担0.6%で計算します。一般の事業なら月給30万円で月1,800円。2026年度の料率早見表と、月収・年収別の保険料、他の社会保険との違いを解説します。",
  alternates: { canonical: "/koyou-hoken-ryou/" },
};

const faqs = [
  {
    q: "雇用保険料は誰でも給与から引かれますか？",
    a: "雇用保険に加入している人が対象です。週の所定労働時間が20時間以上で、31日以上の雇用見込みがある場合は、正社員だけでなくパート・アルバイトでも加入し、賃金から保険料が天引きされます。",
  },
  {
    q: "ボーナス（賞与）からも雇用保険料は引かれますか？",
    a: "はい。雇用保険料は月給だけでなく賞与を含む賃金総額にかかります。健康保険・厚生年金のような標準報酬月額の上限がなく、支払われた賃金にそのまま料率を掛けて計算します。",
  },
  {
    q: "雇用保険料と社会保険料は同じですか？",
    a: "雇用保険は広い意味では社会保険の一つですが、健康保険・厚生年金とは別の制度です。失業時の基本手当（失業給付）や育児休業給付などの財源になり、料率も労使で折半ではなく事業主の負担割合が大きいのが特徴です。",
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
        雇用保険料はいくら？料率と計算方法をわかりやすく
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        雇用保険料（労働者負担分）は
        <strong>毎月の賃金（賞与を含む）× 0.6%</strong>で計算します（一般の事業・2026年度）。たとえば月給30万円なら
        <strong>月1,800円</strong>、年収500万円なら<strong>年間約3万円</strong>です。給与から天引きされる社会保険料のなかでは最も小さく、健康保険料や厚生年金保険料の10分の1以下にとどまります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        雇用保険料の計算方法
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        雇用保険料は次のシンプルな式で決まります。
      </p>
      <div className="mt-4 rounded-xl bg-gray-50 p-4 text-center text-sm font-bold text-gray-900">
        労働者負担の雇用保険料 ＝ その月の賃金総額 × 労働者負担料率（一般の事業0.6%）
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        健康保険や厚生年金が「標準報酬月額」という区切りの表で決まるのに対し、雇用保険料は
        <strong>実際に支払われた賃金にそのまま料率を掛ける</strong>のが特徴です。上限もないため、賃金が高いほど保険料もそのまま比例して増えます。賞与（ボーナス）も賃金総額に含めて計算します。
      </p>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        たとえば月給30万円の会社員（一般の事業）なら、300,000円 × 0.6% ＝
        <strong>1,800円</strong>がその月の給与から引かれます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        2026年度（令和8年度）の雇用保険料率
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        雇用保険料率は事業の種類によって3区分に分かれます。多くの会社員が働く「一般の事業」の料率は次のとおりです。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">事業の種類</th>
              <th className="border border-gray-200 px-3 py-2">労働者負担</th>
              <th className="border border-gray-200 px-3 py-2">事業主負担</th>
              <th className="border border-gray-200 px-3 py-2">合計</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">一般の事業</td>
              <td className="border border-gray-200 px-3 py-2">0.6%</td>
              <td className="border border-gray-200 px-3 py-2">0.95%</td>
              <td className="border border-gray-200 px-3 py-2">1.55%</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">
                農林水産・清酒製造の事業
              </td>
              <td className="border border-gray-200 px-3 py-2">0.7%</td>
              <td className="border border-gray-200 px-3 py-2">1.05%</td>
              <td className="border border-gray-200 px-3 py-2">1.75%</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">建設の事業</td>
              <td className="border border-gray-200 px-3 py-2">0.7%</td>
              <td className="border border-gray-200 px-3 py-2">1.15%</td>
              <td className="border border-gray-200 px-3 py-2">1.85%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        健康保険料や厚生年金保険料が労使で半分ずつの「折半」なのに対し、雇用保険は
        <strong>事業主の負担割合が労働者より大きい</strong>のがポイントです。事業主負担分には、失業給付の財源だけでなく雇用安定事業・能力開発事業（雇用保険二事業）の分が上乗せされています。なお料率は毎年見直されるため、最新の数値はお勤め先の給与明細や厚生労働省の公表資料で確認してください。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        月収・年収別の雇用保険料 早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        一般の事業（労働者負担0.6%）の場合の、労働者が負担する雇用保険料の目安です。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">月の賃金（額面）</th>
              <th className="border border-gray-200 px-3 py-2">月の雇用保険料</th>
              <th className="border border-gray-200 px-3 py-2">年収（賞与込み）</th>
              <th className="border border-gray-200 px-3 py-2">年間の雇用保険料</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["20万円", "1,200円", "300万円", "1.8万円"],
              ["25万円", "1,500円", "400万円", "2.4万円"],
              ["30万円", "1,800円", "500万円", "3.0万円"],
              ["40万円", "2,400円", "600万円", "3.6万円"],
              ["50万円", "3,000円", "800万円", "4.8万円"],
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
        年間ベースでは「年収 × 0.6%」でおおまかに計算できます。年収500万円なら約3万円、年収600万円でも約3.6万円と、負担額そのものは小さめです。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        雇用保険料の3つの注意点
      </h2>
      <ul className="mt-3 space-y-3 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>加入条件がある</strong>：週の所定労働時間20時間以上、かつ31日以上の雇用見込みが加入の目安です。条件を満たせばパート・アルバイトでも加入し、保険料が引かれます。
        </li>
        <li>
          <strong>賞与にもかかる・上限がない</strong>：標準報酬月額の上限がある健康保険・厚生年金と違い、賞与を含む賃金総額に料率をそのまま掛けます。
        </li>
        <li>
          <strong>見返りは失業給付など</strong>：支払った雇用保険料は、失業したときの基本手当や、育児休業給付・教育訓練給付などの財源になります。掛け捨てではなく、いざというときの給付につながります。
        </li>
      </ul>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          雇用保険料も含めた手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          年収を入れるだけで、雇用保険・健康保険・厚生年金・税金を差し引いた手取り額がわかります。
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
        ※本記事の料率・金額は一般の事業（2026年度想定）の概算です。雇用保険料率は毎年見直され、事業の種類によっても異なります。実際の保険料は給与明細や厚生労働省・お勤め先の情報でご確認ください。
      </p>
    </article>
  );
}
