import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "扶養控除はいくら？子供・親を扶養に入れる節税額と条件",
  description:
    "扶養控除は扶養親族1人につき所得税38万円・住民税33万円が基本。19〜22歳の特定扶養は所得税63万円。実際に減る税金は税率次第で、一般的な会社員なら1人あたり約7〜11万円です。区分別の控除額・税率別の節税額・扶養に入れる条件を早見表で解説します。",
  alternates: { canonical: "/fuyou-koujo-ikura/" },
};

const faqs = [
  {
    q: "扶養控除で実際にいくら税金が安くなりますか？",
    a: "控除額そのものが戻るわけではなく、控除額に税率をかけた分だけ税金が減ります。一般の扶養親族（所得税38万円・住民税33万円）を1人扶養する場合、課税所得が330万〜695万円の会社員なら年間で約11万円の節税になります。所得が低く税率5%の人は約5.2万円です。",
  },
  {
    q: "16歳未満の子供は扶養控除の対象になりますか？",
    a: "なりません。2011年に年少扶養控除が廃止され、16歳未満は児童手当の対象になったためです。扶養控除が使えるのは、その年の12月31日時点で16歳以上の扶養親族です。",
  },
  {
    q: "共働きの場合、子供はどちらの扶養に入れると得ですか？",
    a: "扶養控除は夫婦のどちらか一方でしか使えません。控除の節税効果は税率が高いほど大きいため、原則として年収（課税所得）が高いほうの扶養に入れると世帯全体の税金が少なくなります。",
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
        扶養控除はいくら？子供・親を扶養に入れる節税額と条件
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        扶養控除の金額は、扶養親族1人につき<strong>所得税で38万円、住民税で33万円</strong>が基本です。ただしこれは所得から差し引ける「控除額」であって、そのまま戻る金額ではありません。実際に減る税金（節税額）は税率次第で、<strong>一般的な会社員なら1人あたり年間およそ7〜11万円</strong>。19〜22歳の子を扶養する「特定扶養」ならさらに大きく、約11〜17万円になります。この記事では区分別の控除額・税率別の節税額・扶養に入れる条件を整理します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        扶養控除の金額（区分別）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        扶養控除は扶養親族の年齢や同居の有無によって金額が変わります。所得税と住民税で控除額が違う点に注意してください。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">区分（年齢）</th>
              <th className="border border-gray-200 px-3 py-2">所得税の控除</th>
              <th className="border border-gray-200 px-3 py-2">住民税の控除</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">一般の扶養親族（16〜18歳・23〜69歳）</td>
              <td className="border border-gray-200 px-3 py-2">38万円</td>
              <td className="border border-gray-200 px-3 py-2">33万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">特定扶養親族（19〜22歳）</td>
              <td className="border border-gray-200 px-3 py-2">63万円</td>
              <td className="border border-gray-200 px-3 py-2">45万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">老人扶養親族・同居老親（70歳以上）</td>
              <td className="border border-gray-200 px-3 py-2">58万円</td>
              <td className="border border-gray-200 px-3 py-2">45万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">老人扶養親族・同居以外（70歳以上）</td>
              <td className="border border-gray-200 px-3 py-2">48万円</td>
              <td className="border border-gray-200 px-3 py-2">38万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">16歳未満（年少扶養）</td>
              <td className="border border-gray-200 px-3 py-2">なし</td>
              <td className="border border-gray-200 px-3 py-2">なし</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        最も金額が大きいのは、大学生の年代にあたる<strong>特定扶養親族（19〜22歳）の所得税63万円</strong>です。教育費がかさむ時期に負担を軽くする趣旨で上乗せされています。一方、16歳未満は児童手当の対象になったため、扶養控除は使えません。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        実際にいくら安くなる？税率別の節税額
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        節税額は「控除額 × 税率」で決まります。所得税は課税所得によって税率が5〜45%と変わり、住民税は一律10%です。会社員が扶養親族1人を扶養したときの年間の節税額（所得税＋住民税、復興特別所得税込み）の目安は次のとおりです。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">所得税率（課税所得）</th>
              <th className="border border-gray-200 px-3 py-2">一般扶養</th>
              <th className="border border-gray-200 px-3 py-2">特定扶養</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["5%（195万円以下）", "約5.2万円", "約7.7万円"],
              ["10%（195万〜330万円）", "約7.2万円", "約10.9万円"],
              ["20%（330万〜695万円）", "約11.1万円", "約17.4万円"],
              ["23%（695万〜900万円）", "約12.2万円", "約19.3万円"],
              ["33%（900万〜1800万円）", "約16.2万円", "約25.7万円"],
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
        たとえば年収500万〜700万円台で所得税率20%の会社員が、大学生の子（特定扶養）を1人扶養すると、所得税で約12.9万円、住民税で4.5万円、合わせて<strong>年間約17.4万円</strong>の節税になります。税率が高い人ほど同じ控除でも減る税金は大きくなります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        扶養に入れる条件
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        扶養控除の対象になる「扶養親族」には、次のすべてを満たすことが必要です（その年の12月31日時点で判定）。
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
        <li>配偶者以外の親族（6親等内の血族・3親等内の姻族）であること。配偶者は「配偶者控除」の対象で扶養控除には含まれません。</li>
        <li>納税者と<strong>生計を一にしている</strong>こと。同居していなくても、仕送りなどで生活費を共にしていれば該当します。</li>
        <li>扶養親族の<strong>年間の合計所得金額が58万円以下</strong>（給与収入だけなら123万円以下）であること。</li>
        <li>青色事業専従者として給与を受けていない、または白色事業専従者でないこと。</li>
        <li>その年の12月31日時点で<strong>16歳以上</strong>であること。</li>
      </ul>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        合計所得の要件は2025年分から48万円以下（給与収入103万円以下）から引き上げられました。大学生などがアルバイトをしていても、給与収入が123万円以下なら扶養に入れます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        注意点
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
        <li><strong>税金の扶養と社会保険の扶養は別</strong>です。この記事の扶養控除は所得税・住民税の話で、健康保険の被扶養者（収入130万円未満など）とは基準も手続きも異なります。</li>
        <li>共働きでは、子や親を扶養に入れられるのは<strong>夫婦のどちらか一方だけ</strong>です。原則として税率が高いほうに入れると世帯の節税額が大きくなります。</li>
        <li>親を扶養に入れる場合、<strong>同居か別居か</strong>で老人扶養親族の控除額が変わります（同居58万円、別居48万円）。別居でも仕送りの実態があれば対象です。</li>
        <li>16歳未満の子は控除対象外ですが、住民税の非課税判定では扶養親族として数えられる場合があります。</li>
      </ul>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          扶養控除を反映した手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          家族構成を選ぶだけで、控除を反映した手取り・税金の内訳がわかります。
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
        ※本記事の控除額・税率は2026年（令和8年）時点の制度に基づく概算です。節税額は復興特別所得税を含めた目安で、実際の税額は他の所得控除や自治体により異なります。
      </p>
    </article>
  );
}
