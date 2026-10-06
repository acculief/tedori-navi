import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "個人事業主の手取りはいくら？会社員との税金・保険料の違い",
  description:
    "所得500万円の個人事業主の手取りは約364万円（青色申告65万円控除）。同じ年収500万円の会社員（約388万円）より約24万円少なくなります。国民健康保険・国民年金・個人事業税の内訳と、所得300万〜1000万円の比較表で解説します。",
  alternates: { canonical: "/shain-boot-kojin-jigyou-zei/" },
};

const faqs = [
  {
    q: "個人事業主の手取りは会社員より少ないですか？",
    a: "同じ500万円で比べると、個人事業主（売上−経費＝500万円、青色申告65万円控除）の手取りは約364万円、会社員は約388万円で、個人事業主の方が約24万円少なくなります。国民健康保険は会社負担がなく全額自己負担になること、個人事業税がかかることが主な理由です。",
  },
  {
    q: "青色申告と白色申告で手取りはどれくらい変わりますか？",
    a: "所得500万円の場合、青色申告特別控除65万円を使うと手取りは約364万円、控除なしの白色申告では約340万円です。所得税・住民税だけでなく国民健康保険料も下がるため、差は年間約23万円になります。",
  },
  {
    q: "個人事業税は誰でもかかりますか？",
    a: "個人事業税は法律で定められた業種（物品販売業・飲食店業・デザイン業・コンサルタント業など70業種）が対象で、所得から事業主控除290万円を引いた額に原則5%がかかります。文筆業など対象外の業種もあり、所得290万円以下なら課税されません。",
  },
];

const compareRows = [
  ["300万円", "約228.9万円（76.3%）", "約238.1万円（79.4%）", "約9.2万円"],
  ["400万円", "約297.8万円（74.4%）", "約314.4万円（78.6%）", "約16.6万円"],
  ["500万円", "約363.8万円（72.8%）", "約387.8万円（77.6%）", "約24.0万円"],
  ["600万円", "約422.1万円（70.4%）", "約459.8万円（76.6%）", "約37.7万円"],
  ["800万円", "約536.0万円（67.0%）", "約590.8万円（73.8%）", "約54.8万円"],
  ["1000万円", "約655.8万円（65.6%）", "約723.6万円（72.4%）", "約67.8万円"],
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
        個人事業主の手取りはいくら？会社員との税金・保険料の違い
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        売上から経費を引いた所得が500万円の個人事業主の
        <strong>手取りは約364万円</strong>、月あたり約30万円です（独身・40歳未満・青色申告65万円控除の概算）。
        同じ年収500万円の会社員の手取りは約388万円なので、個人事業主の方が
        <strong>年間約24万円少なく</strong>なります。この記事では、その差がどこから生まれるのかを内訳から見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        所得500万円の天引き内訳（個人事業主と会社員）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        個人事業主は「売上−経費＝500万円」、会社員は「額面年収500万円」で比べています。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">項目</th>
              <th className="border border-gray-200 px-3 py-2">個人事業主</th>
              <th className="border border-gray-200 px-3 py-2">会社員</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["健康保険", "約49.1万円（国保）", "約25.0万円（協会けんぽ）"],
              ["年金", "約21.5万円（国民年金）", "約45.8万円（厚生年金）"],
              ["雇用保険", "なし", "約3.0万円"],
              ["所得税", "約22.3万円", "約14.0万円"],
              ["住民税", "約32.7万円", "約24.5万円"],
              ["個人事業税", "約10.5万円", "なし"],
            ].map((row, i) => (
              <tr key={row[0]} className={i % 2 ? "bg-gray-50" : ""}>
                {row.map((c, j) => (
                  <td key={j} className="border border-gray-200 px-3 py-2">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">負担合計</td>
              <td className="border border-gray-200 px-3 py-2">約136.2万円</td>
              <td className="border border-gray-200 px-3 py-2">約112.2万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約363.8万円</td>
              <td className="border border-gray-200 px-3 py-2">約387.8万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        社会保険料の合計は個人事業主が約70.6万円、会社員が約73.8万円とほぼ同じです。差がつくのは税金の方で、会社員には
        <strong>給与所得控除（500万円なら144万円）</strong>があるのに対し、個人事業主の青色申告特別控除は最大65万円。課税所得が大きくなる分、所得税と住民税が高くなり、さらに個人事業税が上乗せされます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        所得別の手取り比較表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        所得が上がるほど、会社員との手取りの差は広がります。（　）内は手取り率です。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">所得・年収</th>
              <th className="border border-gray-200 px-3 py-2">個人事業主</th>
              <th className="border border-gray-200 px-3 py-2">会社員</th>
              <th className="border border-gray-200 px-3 py-2">差額</th>
            </tr>
          </thead>
          <tbody>
            {compareRows.map((row, i) => (
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
        所得300万円では差は約9万円ですが、1000万円では約68万円まで開きます。個人事業税（所得290万円超の部分に5%）と、給与所得控除との差が所得に比例して効いてくるためです。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        個人事業主の手取りの計算方法
      </h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>事業所得</strong>＝売上−経費−青色申告特別控除（最大65万円）
        </li>
        <li>
          <strong>国民健康保険料</strong>＝（事業所得−43万円）×所得割率＋均等割。本記事は所得割11%・均等割6万円で試算（自治体で差が大きい）
        </li>
        <li>
          <strong>国民年金保険料</strong>＝月17,920円×12か月＝年215,040円（2026年度・所得に関係なく定額）
        </li>
        <li>
          <strong>所得税・住民税</strong>＝事業所得から基礎控除と社会保険料控除（国保＋国民年金の全額）を引いた課税所得にかける
        </li>
        <li>
          <strong>個人事業税</strong>＝（青色申告特別控除前の所得−事業主控除290万円）×5%
        </li>
      </ol>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        手取り＝売上−経費−（国保＋国民年金＋所得税＋住民税＋個人事業税）です。個人事業税は青色申告特別控除を差し引く前の所得にかかる点に注意してください。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        青色申告と白色申告の差
      </h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">所得500万円</th>
              <th className="border border-gray-200 px-3 py-2">青色（65万円控除）</th>
              <th className="border border-gray-200 px-3 py-2">白色</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["国民健康保険料", "約49.1万円", "約56.3万円"],
              ["所得税", "約22.3万円", "約32.8万円"],
              ["住民税", "約32.7万円", "約38.5万円"],
              ["手取り", "約363.8万円", "約340.4万円"],
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
        65万円控除は税金だけでなく国保の所得割も下げるため、効果は年約23万円。複式簿記での記帳と、e-Taxでの申告（または電子帳簿保存）が条件です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        手取り以外で見落としやすい違い
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>将来の年金</strong>：会社員は厚生年金が上乗せされるが、個人事業主は国民年金のみ。老後に備えるならiDeCo（上限月7.5万円）や付加年金で自分で上乗せする必要があります。
        </li>
        <li>
          <strong>会社負担分</strong>：会社員の社会保険料は会社も同額を負担しています。企業側から見ると、年収500万円の会社員には約570万円のコストがかかっています。
        </li>
        <li>
          <strong>経費にできる範囲</strong>：自宅家賃・通信費・車両費などを事業按分で経費にできれば所得自体が下がり、手取りの差は縮まります。
        </li>
        <li>
          <strong>傷病手当金・失業給付</strong>：国保には原則として傷病手当金がなく、雇用保険もないため、休業時の保障は自分で用意します。
        </li>
      </ul>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          会社員の手取りと比べてみる
        </p>
        <p className="mt-1 text-sm text-gray-600">
          独立前の今の年収で、会社員としての手取り・税金の内訳を確認できます。
        </p>
        <Link href="/" className="btn-primary mt-4">
          手取り計算機で自分の手取りを計算
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
        ※本記事の計算は独身・40歳未満・扶養なしを想定した概算です。個人事業主の国民健康保険料は所得割11%・均等割6万円、個人事業税は税率5%の業種として試算しています。会社員は給与収入のみ・協会けんぽ加入で、当サイトの手取り計算機と同じロジックです。実際の金額は自治体・業種・各種控除により異なります。
      </p>
    </article>
  );
}
