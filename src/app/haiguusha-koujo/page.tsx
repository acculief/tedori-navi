import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "配偶者控除・配偶者特別控除で手取りはいくら変わる？",
  description:
    "配偶者を扶養すると所得税で最大38万円・住民税で最大33万円が控除され、本人の年収に応じて手取りが年5万〜11万円増えます。配偶者控除と配偶者特別控除の違い、配偶者の年収別の控除額早見表、150万・201万円の壁までわかりやすく解説します。",
  alternates: { canonical: "/haiguusha-koujo/" },
};

const faqs = [
  {
    q: "配偶者控除と配偶者特別控除の違いは何ですか？",
    a: "配偶者の給与収入が103万円以下なら配偶者控除、103万円超201万6千円未満なら配偶者特別控除が適用されます。控除の枠組みが分かれているだけで、150万円までは所得税38万円・住民税33万円の満額が受けられる点は同じです。",
  },
  {
    q: "配偶者控除で手取りはいくら増えますか？",
    a: "満額の控除が受けられる場合、本人の年収400万円で年約5万円、年収600万円で年約7万円、年収800万円で年約11万円ほど手取りが増えます。所得税率が高い人ほど効果は大きくなります。",
  },
  {
    q: "共働きでも配偶者控除は受けられますか？",
    a: "配偶者の給与収入が201万6千円未満なら、共働きでも配偶者特別控除を受けられます。控除額は配偶者の収入が増えるほど段階的に小さくなり、201万6千円以上でゼロになります。",
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
        配偶者控除・配偶者特別控除で手取りはいくら変わる？
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        配偶者を扶養すると、所得税で<strong>最大38万円</strong>、住民税で
        <strong>最大33万円</strong>が課税所得から差し引かれます。実際に増える手取りは本人の年収によって変わり、
        <strong>年収400万円で年約5万円、年収600万円で年約7万円、年収800万円で年約11万円</strong>
        ほどです。この記事では、配偶者控除と配偶者特別控除の違い、配偶者の年収による控除額の変化、注意すべき「壁」を整理します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        配偶者控除と配偶者特別控除の違い
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        どちらも「配偶者を扶養している本人」の税金を軽くする制度ですが、配偶者の収入で使い分けます。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">制度</th>
              <th className="border border-gray-200 px-3 py-2">配偶者の給与収入</th>
              <th className="border border-gray-200 px-3 py-2">控除額（所得税）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">配偶者控除</td>
              <td className="border border-gray-200 px-3 py-2">103万円以下</td>
              <td className="border border-gray-200 px-3 py-2">38万円（満額）</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">配偶者特別控除</td>
              <td className="border border-gray-200 px-3 py-2">103万円超〜201万6千円未満</td>
              <td className="border border-gray-200 px-3 py-2">38万円〜1万円（段階的に減少）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        ポイントは、配偶者特別控除でも<strong>給与収入150万円までは38万円の満額</strong>が受けられること。「103万円を超えると急に損をする」わけではなく、150万円までは本人側の控除は減りません。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        配偶者の年収別・控除額の早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        本人の合計所得が900万円以下（給与収入で約1,095万円以下）の場合の控除額です。配偶者の収入が増えるほど段階的に小さくなります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">配偶者の給与収入</th>
              <th className="border border-gray-200 px-3 py-2">所得税の控除</th>
              <th className="border border-gray-200 px-3 py-2">住民税の控除</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["103万円以下", "38万円", "33万円"],
              ["103万円超〜150万円以下", "38万円", "33万円"],
              ["150万円超〜155万円以下", "36万円", "33万円"],
              ["155万円超〜160万円以下", "31万円", "31万円"],
              ["160万円超〜175万円以下", "21〜26万円", "21〜26万円"],
              ["175万円超〜190万円以下", "11〜16万円", "11〜16万円"],
              ["190万円超〜201万6千円未満", "1〜6万円", "1〜6万円"],
              ["201万6千円以上", "0円", "0円"],
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
        なお、本人の合計所得が900万円を超えると控除額は段階的に縮小し、
        <strong>1,000万円超（給与収入で約1,195万円超）では配偶者控除・配偶者特別控除ともにゼロ</strong>になります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        本人の年収別・手取りアップ額
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        満額（所得税38万円・住民税33万円）の控除を受けたとき、独身の場合と比べて手取りがどれだけ増えるかの目安です。所得税率が上がる高年収ほど効果が大きくなります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">本人の年収</th>
              <th className="border border-gray-200 px-3 py-2">所得税の軽減</th>
              <th className="border border-gray-200 px-3 py-2">住民税の軽減</th>
              <th className="border border-gray-200 px-3 py-2">手取り増（年）</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["300万円", "約1.9万円", "約3.3万円", "約5.2万円"],
              ["400万円", "約1.9万円", "約3.3万円", "約5.2万円"],
              ["500万円", "約3.9万円", "約3.3万円", "約7.2万円"],
              ["600万円", "約3.9万円", "約3.3万円", "約7.2万円"],
              ["800万円", "約7.8万円", "約3.3万円", "約11.1万円"],
              ["1000万円", "約7.8万円", "約3.3万円", "約11.1万円"],
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
        住民税の軽減額はどの年収でも一律約3.3万円（控除33万円×税率10%）ですが、所得税は税率が5%→10%→20%と上がるほど軽減額も増えます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        知っておきたい注意点
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>150万円の壁</strong>：配偶者の給与収入が150万円を超えると、本人が受けられる控除が徐々に減り始めます。ただし減るのは控除であって、世帯全体の手取りは配偶者が働くほど増えるのが基本です。
        </li>
        <li>
          <strong>201万6千円の壁</strong>：配偶者の給与収入がここを超えると、配偶者特別控除はゼロになります。
        </li>
        <li>
          <strong>配偶者自身の「社会保険の壁」は別</strong>：手取りに大きく影響するのは106万円・130万円で配偶者本人に社会保険料が発生する壁です。本記事の配偶者控除とは仕組みが異なるので分けて考えます。
        </li>
      </ul>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          控除込みであなたの手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          家族構成を選ぶだけで、配偶者控除を反映した手取り・税金の内訳がわかります。
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
        ※本記事は2026年時点の制度に基づく概算です。控除額の逓減区分は簡略化しており、実際の適用額は配偶者の合計所得や本人の所得により異なります。正確な金額は国税庁の資料や勤務先の年末調整でご確認ください。
      </p>
    </article>
  );
}
