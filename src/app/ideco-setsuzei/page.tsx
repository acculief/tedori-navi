import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "iDeCoの節税効果はいくら？年収別の手取りアップ額",
  description:
    "iDeCoの掛金は全額が所得控除になり、年収500万円なら月2.3万円の拠出で年間約5.6万円の節税に。年収別の節税額と、20年続けた場合の合計を早見表で解説します。",
  alternates: { canonical: "/ideco-setsuzei/" },
};

const faqs = [
  {
    q: "iDeCoの節税効果は年収でどれくらい違いますか？",
    a: "掛金額が同じでも、税率が高い高年収の方が節税額は大きくなります。月2.3万円（年27.6万円）を拠出する場合、年収300万円で年間約4.2万円、年収500万円で約5.6万円、年収700万円以上で約8.4万円の節税になります。",
  },
  {
    q: "iDeCoの掛金の上限はいくらですか？",
    a: "職業や勤務先の年金制度で異なります。企業年金のない会社員と専業主婦（第3号被保険者）は月2.3万円、公務員や企業型DC加入者は月2万円、自営業（第1号被保険者）は月6.8万円が上限です。",
  },
  {
    q: "iDeCoの節税はいつ受けられますか？",
    a: "会社員は年末調整、自営業などは確定申告で申告すると、その年の所得税が還付され、翌年の住民税が軽くなります。掛金を払った年ごとに毎年受けられます。",
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
        iDeCoの節税効果はいくら？年収別の手取りアップ額
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        iDeCo（個人型確定拠出年金）の掛金は<strong>全額が所得控除</strong>になります。年収500万円の会社員が月2.3万円（年27.6万円）を拠出すると、
        <strong>年間で約5.6万円</strong>、20年間では約111万円もの税金が軽くなります。この記事では、節税額が年収でどう変わるかを早見表で見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        なぜiDeCoで節税できるのか
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        iDeCoの掛金は「小規模企業共済等掛金控除」として、その年の課税所得から全額差し引かれます。課税所得が減ると、それにかかる<strong>所得税と住民税の両方</strong>が下がるしくみです。
      </p>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        節税額はおおまかに<strong>「年間の掛金 ×（所得税率＋住民税率10%）」</strong>で決まります。住民税率は一律10%なので、所得税率が高い高年収ほど節税効果が大きくなります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収別の節税額早見表（月2.3万円の場合）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        企業年金のない会社員・専業主婦の上限である月2.3万円（年27.6万円）を拠出したときの、独身・40歳未満での概算です。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">年収</th>
              <th className="border border-gray-200 px-3 py-2">年間の節税額</th>
              <th className="border border-gray-200 px-3 py-2">20年間の合計</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["300万円", "約4.2万円", "約83万円"],
              ["400万円", "約4.2万円", "約83万円"],
              ["500万円", "約5.6万円", "約111万円"],
              ["600万円", "約5.6万円", "約111万円"],
              ["700万円", "約8.4万円", "約168万円"],
              ["800万円", "約8.4万円", "約168万円"],
              ["1000万円", "約8.4万円", "約168万円"],
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
        年収300万円と400万円が同額なのは、どちらも所得税率5%の範囲に収まるためです。年収500万円で所得税率10%、年収700万円で20%に上がるタイミングで、節税額が段階的に増えます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        掛金の上限は職業で変わる
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        iDeCoの掛金には職業・勤務先の年金制度ごとに上限があります。上限が大きいほど、節税に使える枠も大きくなります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">区分</th>
              <th className="border border-gray-200 px-3 py-2">月額上限</th>
              <th className="border border-gray-200 px-3 py-2">年額上限</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">会社員（企業年金なし）</td>
              <td className="border border-gray-200 px-3 py-2">2.3万円</td>
              <td className="border border-gray-200 px-3 py-2">27.6万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">会社員（企業型DCあり）・公務員</td>
              <td className="border border-gray-200 px-3 py-2">2.0万円</td>
              <td className="border border-gray-200 px-3 py-2">24.0万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">専業主婦・主夫（第3号）</td>
              <td className="border border-gray-200 px-3 py-2">2.3万円</td>
              <td className="border border-gray-200 px-3 py-2">27.6万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">自営業（第1号）</td>
              <td className="border border-gray-200 px-3 py-2">6.8万円</td>
              <td className="border border-gray-200 px-3 py-2">81.6万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        自営業（第1号被保険者）は上限が月6.8万円と大きく、その分節税効果も会社員の約3倍まで狙えます。ただし国民年金基金や付加保険料と枠を共有する点に注意してください。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        注意点
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
        <li>
          原則<strong>60歳まで引き出せません</strong>。生活防衛資金や近い将来使うお金は別に確保したうえで拠出しましょう。
        </li>
        <li>
          専業主婦（第3号）はもともと所得税・住民税を払っていない場合、掛金の<strong>所得控除による節税は受けられません</strong>（運用益非課税のメリットは残ります）。
        </li>
        <li>
          受け取り時には課税対象になりますが、退職所得控除や公的年金等控除で軽減されます。「拠出時に節税→受取時に一部課税」の繰り延べである点は理解しておきましょう。
        </li>
      </ul>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの手取りを計算してみる
        </p>
        <p className="mt-1 text-sm text-gray-600">
          いまの年収の手取りと税金の内訳を確認すれば、iDeCoで下げられる税額の目安もつかめます。
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
        ※節税額は給与収入のみ・40歳未満・各種控除は基礎控除と社会保険料控除のみを想定した概算です。実際の金額は他の所得や控除、掛金額により異なります。制度の詳細は加入前に運営管理機関や公式資料でご確認ください。
      </p>
    </article>
  );
}
