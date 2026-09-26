import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "手取り25万円の年収はいくら？額面の逆算と早見表",
  description:
    "手取り月25万円なら額面の年収は約381万円、月の額面は約32万円が目安。手取りから額面を逆算する方法と、天引きの内訳・家族構成別・手取り月額別の早見表でわかりやすく解説します。",
  alternates: { canonical: "/nennshu-500-tesyudori-kudai/" },
};

const faqs = [
  {
    q: "手取り25万円の年収はいくらですか？",
    a: "毎月の手取りが25万円なら、額面の年収はおよそ381万円が目安です（独身・40歳未満・協会けんぽ加入・ボーナスなしの概算）。月の額面にすると約32万円で、そこから税金と社会保険料が約7万円引かれて手取り25万円になります。",
  },
  {
    q: "手取り25万円だと月の額面（総支給）はいくらですか？",
    a: "額面（総支給）は月およそ32万円です。手取り25万円との差の約7万円が、健康保険・厚生年金・雇用保険の社会保険料と、所得税・住民税として天引きされています。",
  },
  {
    q: "同じ手取り25万円でも扶養家族がいると額面は下がりますか？",
    a: "はい。配偶者控除や扶養控除で税金が軽くなるため、家族を扶養していると同じ手取り25万円でも必要な額面は下がります。独身は約381万円ですが、片働き夫婦なら約374万円、夫婦＋子1人なら約367万円が目安です。",
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
        手取り25万円の年収はいくら？額面の逆算と早見表
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        毎月の手取りが25万円なら、<strong>額面の年収は約381万円</strong>、月の
        <strong>額面（総支給）は約32万円</strong>が目安です（独身・40歳未満・協会けんぽ加入・ボーナスなしの概算）。手取り25万円と月の額面32万円との差、約7万円が税金と社会保険料として天引きされています。この記事では、手取りから額面を逆算する考え方と、内訳・家族構成別・手取り月額別の早見表を見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        手取り25万円の年収・月収まとめ
      </h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">項目</th>
              <th className="border border-gray-200 px-3 py-2">金額の目安</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">手取り（月）</td>
              <td className="border border-gray-200 px-3 py-2">25万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">手取り（年）</td>
              <td className="border border-gray-200 px-3 py-2">約300万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">額面（月・総支給）</td>
              <td className="border border-gray-200 px-3 py-2">約32万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">額面（年収）</td>
              <td className="border border-gray-200 px-3 py-2">約381万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">手取り率</td>
              <td className="border border-gray-200 px-3 py-2">約78.8%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        手取りは額面のおよそ<strong>75〜80%</strong>になるのが一般的です。年収400万円前後の場合、手取り率は約78〜79%なので、「手取り＝額面 × 約0.79」でざっくり逆算できます。手取り25万円 ÷ 0.79 ≒ 額面32万円、という計算です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        額面年収381万円の天引き内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        手取り25万円のもとになる額面年収381万円（独身）から、実際に何がいくら引かれているかを見ると次のとおりです。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">項目</th>
              <th className="border border-gray-200 px-3 py-2">年間の金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">社会保険料</td>
              <td className="border border-gray-200 px-3 py-2">約56.2万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約8.0万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約16.8万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約81.0万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約300.0万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        天引きの中でいちばん大きいのは<strong>社会保険料の約56万円</strong>で、税金（所得税＋住民税）の合計約25万円を大きく上回ります。手取りを増やしたい場合、税額より社会保険料の負担が重い点を押さえておくと考えやすくなります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        手取り月額から額面年収を逆算する早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        目標の手取り月額から、必要な額面（月・年）の目安を早見表にしました（独身・40歳未満の概算）。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">手取り（月）</th>
              <th className="border border-gray-200 px-3 py-2">額面（月）</th>
              <th className="border border-gray-200 px-3 py-2">額面（年収）</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["20万円", "約25万円", "約303万円"],
              ["22万円", "約28万円", "約334万円"],
              ["24万円", "約30万円", "約365万円"],
              ["25万円", "約32万円", "約381万円"],
              ["26万円", "約33万円", "約397万円"],
              ["28万円", "約36万円", "約429万円"],
              ["30万円", "約38万円", "約462万円"],
            ].map((row, i) => (
              <tr
                key={row[0]}
                className={
                  row[0] === "25万円"
                    ? "bg-primary-50 font-bold"
                    : i % 2
                      ? "bg-gray-50"
                      : ""
                }
              >
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
        手取りが増えるほど税率が上がるため、手取りを2倍にするには額面は2倍より多く必要になります。手取り20万円→30万円（1.5倍）にするには、額面年収は約303万円→約462万円（約1.53倍）が目安です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別｜手取り25万円に必要な額面
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        同じ手取り25万円でも、扶養家族がいると配偶者控除・扶養控除で税金が軽くなるため、必要な額面は下がります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">家族構成</th>
              <th className="border border-gray-200 px-3 py-2">必要な額面（年収）</th>
              <th className="border border-gray-200 px-3 py-2">手取り率</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["独身", "約381万円", "78.8%"],
              ["片働き夫婦", "約374万円", "80.2%"],
              ["夫婦＋子1人", "約367万円", "81.7%"],
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
        配偶者を扶養する片働き夫婦は独身より約7万円低い額面で、16歳以上の子も扶養する夫婦＋子1人なら約14万円低い額面で、同じ手取り25万円に届きます。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収で手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          気になる年収を入力するだけで、手取り・税金・社会保険料の内訳がわかります。
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
        ※本記事の計算は給与収入のみ・40歳未満・協会けんぽ加入・ボーナスなし（年収を12等分）を想定した概算です。実際の額面・税額・保険料は加入先や自治体、各種控除の適用状況により異なります。
      </p>
    </article>
  );
}
