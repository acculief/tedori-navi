import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "住宅ローン控除でいくら戻る？控除額の計算と年収別早見表",
  description:
    "住宅ローン控除は年末ローン残高の0.7％が最大13年間、所得税・住民税から戻る制度。残高3000万円なら年21万円が目安です。控除額の計算方法、借入限度額、年収別に実際いくら戻るかを早見表で解説します。",
  alternates: { canonical: "/juutaku-loan-koujo/" },
};

const faqs = [
  {
    q: "住宅ローン控除はいくら戻りますか？",
    a: "年末のローン残高の0.7％が1年あたりの控除額です。残高3000万円なら年21万円、4000万円なら年28万円が目安になります。ただし実際に戻るのは、その年に納めた所得税と住民税（住民税は上限あり）が限度です。",
  },
  {
    q: "住宅ローン控除は何年受けられますか？",
    a: "2024年以降に入居した新築・買取再販住宅は13年間、既存（中古）住宅は10年間です。毎年の年末残高に0.7％を掛けた額が、その期間にわたり所得税・住民税から差し引かれます。",
  },
  {
    q: "住宅ローン控除を受けるには確定申告が必要ですか？",
    a: "会社員でも初年度は必ず確定申告が必要です。2年目以降は、税務署から届く控除証明書と金融機関の残高証明書を勤務先に提出すれば、年末調整で手続きが完結します。",
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
        住宅ローン控除でいくら戻る？控除額の計算と年収別早見表
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        住宅ローン控除で戻る額は、<strong>年末のローン残高 × 0.7％</strong>が基本です。残高3000万円なら
        <strong>年21万円</strong>、4000万円なら<strong>年28万円</strong>が1年あたりの控除額の目安になります。
        ただし実際に戻るのは、その年に納めた所得税と住民税（住民税は上限あり）が限度です。この記事では計算方法と、年収別に実際いくら戻るかを早見表で見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        住宅ローン控除の基本（2024年以降入居）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        住宅ローン控除（住宅借入金等特別控除）は、住宅ローンを組んでマイホームを取得した人の税負担を軽くする制度です。主なポイントは次の3つです。
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-700">
        <li>控除率は年末ローン残高の<strong>0.7％</strong></li>
        <li>控除期間は新築・買取再販で<strong>13年間</strong>、中古住宅で10年間</li>
        <li>所得税から引ききれない分は<strong>住民税からも控除</strong>（上限あり）</li>
      </ul>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        控除額の計算方法
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        1年あたりの控除額は「その年の12月末時点のローン残高 × 0.7％」で計算します。残高は返済が進むほど減るので、控除額も年々少しずつ小さくなります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">年末ローン残高</th>
              <th className="border border-gray-200 px-3 py-2">控除額（年）</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["2000万円", "14.0万円"],
              ["3000万円", "21.0万円"],
              ["4000万円", "28.0万円"],
              ["5000万円", "35.0万円"],
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
        ここで出るのは<strong>控除の上限額</strong>です。実際に戻るのは、この額とその年に納めた所得税・住民税のうち、<strong>少ない方</strong>までとなります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        借入限度額（住宅の種類別）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        控除の対象になるローン残高には上限（借入限度額）があります。2024〜2025年入居の新築では、省エネ性能によって次のように区分されています。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">住宅の種類</th>
              <th className="border border-gray-200 px-3 py-2">借入限度額</th>
              <th className="border border-gray-200 px-3 py-2">年間の控除上限</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["認定長期優良・低炭素住宅", "4500万円", "31.5万円"],
              ["ZEH水準省エネ住宅", "3500万円", "24.5万円"],
              ["省エネ基準適合住宅", "3000万円", "21.0万円"],
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
        ※子育て世帯・若者夫婦世帯（19歳未満の子がいる、または夫婦のいずれかが40歳未満）は、2025年入居分について借入限度額が上乗せされる優遇があります。2024年以降の新築は原則として省エネ基準を満たすことが条件です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収別・実際に戻る額の早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        控除額（残高×0.7％）が大きくても、納めた税金が少なければ全額は戻りません。下表は、ローン残高3000万円（控除上限21万円）の場合に、年収別でどこまで戻るかの目安です（独身・その他控除は考慮しない概算）。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">年収</th>
              <th className="border border-gray-200 px-3 py-2">所得税＋住民税から戻る目安</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["300万円", "約12〜14万円（税額が上限）"],
              ["400万円", "約17〜19万円"],
              ["500万円", "約21万円（ほぼ満額）"],
              ["700万円以上", "21万円（満額）"],
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
        年収が低いほど納める税金も少ないため、控除しきれず戻る額が上限額より小さくなりやすい点に注意します。所得税で引ききれない分は住民税から差し引かれますが、住民税からの控除には<strong>年9.75万円（課税総所得の5％）</strong>という上限があります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        利用時の注意点
      </h2>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-700">
        <li>合計所得金額<strong>2000万円以下</strong>の年しか控除を受けられない</li>
        <li>床面積は原則<strong>50㎡以上</strong>（新築で合計所得1000万円以下なら40㎡以上）</li>
        <li>返済期間が<strong>10年以上</strong>のローンが対象</li>
        <li><strong>初年度は確定申告が必須</strong>。2年目以降は年末調整で完結</li>
      </ul>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          自分の年収での手取り・税額を確認
        </p>
        <p className="mt-1 text-sm text-gray-600">
          住宅ローン控除で戻る上限は、納める所得税・住民税で決まります。まず自分の税額をチェックしましょう。
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
        ※本記事は2024〜2025年入居を前提とした概算です。控除額・借入限度額・住民税からの控除上限は入居年や住宅の性能、各種控除の適用状況により異なります。最新の要件は国税庁の情報をご確認ください。
      </p>
    </article>
  );
}
