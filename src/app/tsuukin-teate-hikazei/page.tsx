import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "通勤手当は非課税？上限額と手取りへの影響",
  description:
    "通勤手当は電車・バス通勤なら月15万円まで非課税。マイカー通勤は片道距離で非課税限度額が決まります。限度額を超えた分の課税や、社会保険料には含まれる点まで早見表で解説します。",
  alternates: { canonical: "/tsuukin-teate-hikazei/" },
};

const faqs = [
  {
    q: "通勤手当はいくらまで非課税ですか？",
    a: "電車・バスなど公共交通機関を使う場合は、1か月あたり15万円までが非課税です。マイカーや自転車通勤は片道の通勤距離に応じて、2km以上10km未満なら月4,200円、10km以上15km未満なら7,100円というように非課税限度額が決まっています。",
  },
  {
    q: "通勤手当が非課税でも手取りは増えませんか？",
    a: "所得税・住民税はかかりませんが、通勤手当は健康保険・厚生年金・雇用保険の保険料を計算する報酬には含まれます。そのため通勤手当が多いと社会保険料がわずかに上がり、その分だけ手取りへの上乗せは満額にはなりません。",
  },
  {
    q: "非課税限度額を超えた通勤手当はどうなりますか？",
    a: "限度額を超えた部分は給与として扱われ、所得税・住民税の課税対象になります。たとえば公共交通機関で月16万円の定期代が支給された場合、15万円までは非課税、超えた1万円分が課税されます。",
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
        通勤手当は非課税？上限額と手取りへの影響
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        通勤手当は、電車・バス通勤なら<strong>月15万円まで非課税</strong>、マイカー・自転車通勤なら
        <strong>片道の距離に応じた限度額まで非課税</strong>です。限度額の範囲内であれば所得税・住民税はかかりません。ただし、非課税でも
        <strong>社会保険料の計算には含まれる</strong>ため、手取りへの上乗せは満額とは限りません。この記事で仕組みと早見表を整理します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        公共交通機関の非課税限度額
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        電車・バスなど公共交通機関で通勤する場合、経済的かつ合理的な経路の運賃・定期代であれば、
        <strong>1か月あたり15万円まで</strong>が非課税です。新幹線通勤の特急料金も「合理的」と認められれば非課税に含まれますが、グリーン車料金は対象外です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        マイカー・自転車通勤の非課税限度額（片道距離別）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        自動車や自転車などで通勤する場合は、片道の通勤距離に応じて1か月あたりの非課税限度額が決まっています。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">片道の通勤距離</th>
              <th className="border border-gray-200 px-3 py-2">非課税限度額（月）</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["2km未満", "全額課税（非課税なし）"],
              ["2km以上10km未満", "4,200円"],
              ["10km以上15km未満", "7,100円"],
              ["15km以上25km未満", "12,900円"],
              ["25km以上35km未満", "18,700円"],
              ["35km以上45km未満", "24,400円"],
              ["45km以上55km未満", "28,000円"],
              ["55km以上", "31,600円"],
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
        片道2km未満の近距離は非課税の枠がなく、支給された通勤手当は全額が課税対象になります。距離が長いほど限度額が上がり、55km以上では月31,600円までが非課税です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        限度額を超えた分は課税される
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        非課税限度額を超えて支給された通勤手当は、超過分が給与とみなされ、所得税・住民税の課税対象になります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">通勤方法</th>
              <th className="border border-gray-200 px-3 py-2">支給額（月）</th>
              <th className="border border-gray-200 px-3 py-2">非課税分</th>
              <th className="border border-gray-200 px-3 py-2">課税分</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">電車</td>
              <td className="border border-gray-200 px-3 py-2">16万円</td>
              <td className="border border-gray-200 px-3 py-2">15万円</td>
              <td className="border border-gray-200 px-3 py-2">1万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">マイカー（片道12km）</td>
              <td className="border border-gray-200 px-3 py-2">1万円</td>
              <td className="border border-gray-200 px-3 py-2">7,100円</td>
              <td className="border border-gray-200 px-3 py-2">2,900円</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        非課税でも社会保険料には含まれる
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        見落としやすいのが社会保険料です。通勤手当は<strong>所得税・住民税は非課税</strong>でも、
        <strong>健康保険・厚生年金・雇用保険の保険料を計算する「報酬」には含まれます</strong>。つまり通勤手当が多いと標準報酬月額が上がり、毎月の社会保険料もわずかに増えます。
      </p>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        たとえば通勤手当が月2万円あると、その分だけ社会保険料の計算基礎が増え、健康保険・厚生年金あわせて月数百円〜千数百円ほど保険料が上がるケースがあります。通勤手当は「まるまる手取りが増える」わけではない点に注意しましょう。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの手取りをまとめて計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          年収を入力するだけで、税金・社会保険料を差し引いた手取り額がわかります。
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
        ※非課税限度額は所得税法で定められた金額です（2026年時点）。実際の課税・社会保険料の扱いは勤務先の規程や加入先により異なる場合があります。最新の限度額は国税庁の情報もご確認ください。
      </p>
    </article>
  );
}
