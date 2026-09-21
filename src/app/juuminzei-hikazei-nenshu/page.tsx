import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "住民税がかからない年収はいくら？非課税の条件と早見表",
  description:
    "住民税がかからない年収は、単身なら100万円が目安。扶養家族がいると156万円・206万円…と上がります。均等割と所得割の非課税ライン、家族構成別の年収早見表をわかりやすく解説します。",
  alternates: { canonical: "/juuminzei-hikazei-nenshu/" },
};

const faqs = [
  {
    q: "住民税がかからない年収はいくらですか？",
    a: "扶養家族がいない単身者の場合、給与収入100万円以下なら住民税はかかりません。給与所得控除55万円を引いた合計所得45万円が、住民税（均等割・所得割）の非課税ラインだからです。扶養家族がいると非課税になる年収は上がります。",
  },
  {
    q: "所得税はかからないのに住民税はかかるのはなぜですか？",
    a: "所得税の非課税ライン（給与収入103万円）より、住民税の非課税ライン（単身で100万円）の方が低いためです。年収100万〜103万円の範囲では、所得税はゼロでも住民税だけがかかることがあります。",
  },
  {
    q: "住民税非課税世帯になると何かメリットはありますか？",
    a: "はい。国民健康保険料や介護保険料の軽減、高額療養費の自己負担上限の引き下げ、給付金・補助金の対象になるなど、さまざまな優遇を受けられます。世帯全員が非課税であることが条件です。",
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
        住民税がかからない年収はいくら？非課税の条件と早見表
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        扶養家族のいない単身者の場合、住民税がかからない年収は
        <strong>給与収入100万円以下</strong>が目安です。給与所得控除55万円を引いた
        <strong>合計所得45万円</strong>が住民税の非課税ラインにあたります。扶養家族がいる場合は、この年収がさらに上がります。この記事では、住民税が非課税になる仕組みと、家族構成別の年収ラインを早見表で解説します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        住民税は「均等割」と「所得割」の2つ
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        住民税は、所得に関係なく定額でかかる<strong>均等割</strong>（年5,000円程度＋森林環境税1,000円）と、所得に応じてかかる<strong>所得割</strong>（税率10%）の2階建てです。「住民税がかからない」とは、この
        <strong>両方がゼロ</strong>になる状態を指します。それぞれに非課税の基準（非課税限度額）があり、より低い均等割の基準を下回れば住民税は完全にかかりません。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        単身者は年収100万円まで非課税
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        扶養家族のいない人は、前年の合計所得金額が
        <strong>45万円以下</strong>なら住民税がかかりません。給与収入で言うと、給与所得控除55万円を足した
        <strong>100万円</strong>が境目です。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">項目</th>
              <th className="border border-gray-200 px-3 py-2">金額（単身）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">給与収入</td>
              <td className="border border-gray-200 px-3 py-2">100万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">給与所得控除</td>
              <td className="border border-gray-200 px-3 py-2">▲55万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">合計所得金額</td>
              <td className="border border-gray-200 px-3 py-2">45万円（非課税ライン）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収100万円を1円でも超えると、超えた分に対して住民税がかかり始めます。ただし急に高額になるわけではなく、100万円を少し超えた程度なら住民税は年数千円〜1万円台にとどまります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別の非課税ライン早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        扶養家族（配偶者や子など）がいると、非課税になる合計所得金額は「35万円 ×（本人＋扶養人数）＋10万円＋21万円」まで引き上げられます。給与収入に換算すると次のとおりです。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">家族構成</th>
              <th className="border border-gray-200 px-3 py-2">非課税の合計所得</th>
              <th className="border border-gray-200 px-3 py-2">給与収入の目安</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["単身（扶養なし）", "45万円", "100万円"],
              ["扶養1人（配偶者など）", "101万円", "約156万円"],
              ["扶養2人", "136万円", "約206万円"],
              ["扶養3人", "171万円", "約256万円"],
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
        ※上表は東京23区などの1級地の基準です。均等割の非課税限度額は自治体の級地区分により異なり、2級地・3級地ではやや低くなります。お住まいの市区町村の基準を確認してください。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        所得割だけがかからないライン
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        均等割の非課税ラインを超えても、所得割だけは別の基準で非課税になる場合があります。所得割の非課税限度額は「35万円 ×（本人＋扶養人数）＋10万円＋32万円」で、均等割より11万円高く設定されています。この範囲では、定額の均等割（約6,000円）だけがかかり、所得に応じた所得割はゼロになります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        「100万円の壁」と混同しやすい点
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        住民税がかかり始める100万円は、いわゆる「100万円の壁」とも呼ばれます。所得税がかかり始める
        <strong>103万円の壁</strong>より低いため、パートやアルバイトでは
        <strong>所得税ゼロでも住民税だけ発生する</strong>ゾーン（年収100万〜103万円）があります。手取りへの影響を正確に知りたい場合は、年収を入力して確認するのが確実です。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収の税金・手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          年収を入力するだけで、住民税・所得税・社会保険料の内訳と手取りがわかります。
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
        ※本記事は給与収入のみを前提とした概算です。住民税の非課税限度額は自治体の級地区分により異なり、実際の判定は前年の合計所得金額と扶養状況に基づきます。詳しくはお住まいの市区町村にご確認ください。
      </p>
    </article>
  );
}
