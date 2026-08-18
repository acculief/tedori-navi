import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "103万円の壁とは？扶養と手取りへの影響を解説",
  description:
    "103万円の壁とは、パートやアルバイトの給与収入が103万円を超えると本人に所得税がかかり始めるライン。内訳は給与所得控除55万円＋基礎控除48万円。実は超えても手取りはほぼ減らず、影響が大きいのは106万・130万の社会保険の壁です。年収の壁を早見表で整理します。",
  alternates: { canonical: "/fuyou-103man-kabe/" },
};

const faqs = [
  {
    q: "103万円を1円でも超えると損しますか？",
    a: "いいえ。103万円を超えても、超えた分に対して所得税が約5%かかるだけです。たとえば年収104万円なら所得税は年約500円で、手取りが年収103万円を下回る「逆転」は起きません。手取りが大きく減るのは、社会保険に加入する106万円・130万円の壁です。",
  },
  {
    q: "103万円の壁と130万円の壁の違いは何ですか？",
    a: "103万円は「税金（所得税）の壁」で、超えても影響は小さいです。130万円は「社会保険の壁」で、超えると配偶者や親の扶養から外れて自分で健康保険・年金を払うことになり、手取りが年十数万円単位で減る可能性があります。負担が大きいのは130万円（一部の勤務先では106万円）の壁です。",
  },
  {
    q: "配偶者が103万円を超えると夫の税金は増えますか？",
    a: "すぐには増えません。配偶者の給与収入が103万円を超えても、150万円までは配偶者特別控除で配偶者控除と同額（最大38万円）が受けられます。夫（納税者）の税負担が増え始めるのは配偶者の年収150万円を超えてからで、201万円を超えると控除がなくなります。",
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
        103万円の壁とは？扶養と手取りへの影響を解説
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        103万円の壁とは、パートやアルバイトの給与収入が
        <strong>年103万円を超えると本人に所得税がかかり始める</strong>
        ラインのことです。内訳は
        <strong>給与所得控除55万円＋基礎控除48万円＝103万円</strong>。ただし超えても税負担はごくわずかで、手取りが逆転することはありません。手取りが本当に大きく減るのは、社会保険に入る
        <strong>106万円・130万円の壁</strong>です。この記事で年収の壁を整理します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        103万円の壁の内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        給与収入から差し引ける2つの控除の合計が103万円になるため、収入がこの範囲なら課税所得がゼロになり、所得税がかかりません。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">控除</th>
              <th className="border border-gray-200 px-3 py-2">金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">給与所得控除（最低）</td>
              <td className="border border-gray-200 px-3 py-2">55万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">基礎控除</td>
              <td className="border border-gray-200 px-3 py-2">48万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">合計（＝103万円の壁）</td>
              <td className="border border-gray-200 px-3 py-2">103万円</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        「年収の壁」早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収の壁は103万円だけではありません。何がいつ起きるかを整理すると、負担が大きいのは税ではなく社会保険の壁だとわかります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">年収の壁</th>
              <th className="border border-gray-200 px-3 py-2">何が起きる</th>
              <th className="border border-gray-200 px-3 py-2">手取りへの影響</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["約100万円", "住民税がかかり始める", "小（年数千円〜）"],
              ["103万円", "本人に所得税がかかり始める", "小（超過分に約5%）"],
              ["106万円", "一定要件の勤務先で社会保険に加入", "大（月1万円台の保険料）"],
              ["130万円", "扶養を外れ社会保険に加入", "大（年十数万円減）"],
              ["150万円", "配偶者特別控除が減り始める", "中（扶養者側の税増）"],
              ["201万円", "配偶者特別控除がなくなる", "中"],
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
        住民税の課税ラインは自治体により年収93万〜100万円前後と幅があります。103万円は税の壁として有名ですが、超えたときの負担はごく小さい点がポイントです。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        103万円を少し超えても手取りは逆転しない
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        「103万円を超えると損」というのは誤解です。所得税は超えた分にだけかかるため、年収が増えれば手取りも増えます。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">給与収入</th>
              <th className="border border-gray-200 px-3 py-2">所得税（本人）</th>
              <th className="border border-gray-200 px-3 py-2">実質の手取り</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">103万円</td>
              <td className="border border-gray-200 px-3 py-2">0円</td>
              <td className="border border-gray-200 px-3 py-2">約103万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">104万円</td>
              <td className="border border-gray-200 px-3 py-2">約500円</td>
              <td className="border border-gray-200 px-3 py-2">約104万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">110万円</td>
              <td className="border border-gray-200 px-3 py-2">約3,600円</td>
              <td className="border border-gray-200 px-3 py-2">約110万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        ※社会保険に加入しない範囲（130万円未満・かつ106万円要件に非該当）の場合の目安です。所得税は超過分に5%（＋復興特別所得税2.1%）でかかります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        本当に注意すべきは106万・130万の壁
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        手取りが実際に減る「逆転」が起きうるのは社会保険の壁です。130万円を超えて配偶者や親の扶養を外れると、自分で健康保険料と厚生年金（または国民年金・国民健康保険）を払うことになり、年収130万円台では手取りが数十万円下がるケースがあります。勤務先が社会保険の適用拡大対象なら、106万円で同じことが起こります。逆に言えば、社会保険に入っても年収を150万〜160万円以上に増やせば手取りは再び上向きます。
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
        ※本記事は給与収入のみ・協会けんぽ加入を想定した概算です。住民税の課税ラインや社会保険の適用要件は自治体・勤務先により異なります。最新の制度は勤務先や自治体の案内でご確認ください。
      </p>
    </article>
  );
}
