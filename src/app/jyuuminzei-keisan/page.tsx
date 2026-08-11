import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "住民税の計算方法｜年収からいくらか早見表つきで解説",
  description:
    "住民税は課税所得の約10％（所得割）に均等割約6,000円を足した額。年収500万円なら約24.5万円が目安です。計算のステップと年収別の早見表、安くする方法までわかりやすく解説します。",
  alternates: { canonical: "/jyuuminzei-keisan/" },
};

const faqs = [
  {
    q: "住民税は年収のどれくらいですか？",
    a: "おおまかには課税所得の約10％です。ただし課税所得は年収から給与所得控除・社会保険料・基礎控除などを引いた後の金額なので、年収に対する割合でみると独身で年収500万円なら約4.9％、年収300万円なら約4.0％程度になります。",
  },
  {
    q: "住民税はいつ引かれますか？",
    a: "住民税は前年（1〜12月）の所得に対して課税され、翌年6月から翌々年5月にかけて給与から天引き（特別徴収）されます。つまり今年の給与から引かれているのは、去年の所得に対する住民税です。新社会人の1年目に住民税が引かれないのはこのためです。",
  },
  {
    q: "住民税を安くする方法はありますか？",
    a: "ふるさと納税、iDeCo（個人型確定拠出年金）、医療費控除、生命保険料控除などで課税所得を下げると住民税も減ります。特にiDeCoは掛金が全額所得控除になり、所得割10％分がそのまま安くなります。",
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
        住民税の計算方法｜年収からいくらか早見表つきで解説
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        住民税は、ざっくり言うと<strong>課税所得の約10％（所得割）に、定額の均等割約6,000円を足した額</strong>です。年収500万円の独身なら
        <strong>年間で約24.5万円</strong>、月あたり約2万円が目安になります。この記事では、住民税がどう計算されるのかをステップで示し、年収別の早見表と安くする方法までまとめます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        住民税は「所得割」と「均等割」の合計
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        住民税（個人住民税）は都道府県民税と市区町村民税の合計で、大きく2つの部分に分かれます。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">区分</th>
              <th className="border border-gray-200 px-3 py-2">内容</th>
              <th className="border border-gray-200 px-3 py-2">金額の目安</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">所得割</td>
              <td className="border border-gray-200 px-3 py-2">課税所得に応じて課税</td>
              <td className="border border-gray-200 px-3 py-2">課税所得 × 10％</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">均等割</td>
              <td className="border border-gray-200 px-3 py-2">所得にかかわらず定額</td>
              <td className="border border-gray-200 px-3 py-2">年5,000円＋森林環境税1,000円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        所得割の税率10％は、道府県民税4％＋市町村民税6％の合計です（政令指定都市は2％／8％）。均等割は全国ほぼ共通の年5,000円に、2024年度から加わった<strong>森林環境税1,000円</strong>を足した6,000円が基本です（自治体により数百円の上乗せあり）。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        計算方法を4ステップで
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収500万円（独身・給与収入のみ）を例に、住民税が決まるまでの流れを追います。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">ステップ</th>
              <th className="border border-gray-200 px-3 py-2">計算</th>
              <th className="border border-gray-200 px-3 py-2">金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">① 給与所得</td>
              <td className="border border-gray-200 px-3 py-2">額面 − 給与所得控除144万円</td>
              <td className="border border-gray-200 px-3 py-2">356万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">② 課税所得</td>
              <td className="border border-gray-200 px-3 py-2">356万円 − 社会保険料73.8万円 − 基礎控除43万円</td>
              <td className="border border-gray-200 px-3 py-2">約239万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">③ 所得割</td>
              <td className="border border-gray-200 px-3 py-2">約239万円 × 10％</td>
              <td className="border border-gray-200 px-3 py-2">約23.9万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">④ 住民税</td>
              <td className="border border-gray-200 px-3 py-2">③ ＋ 均等割6,000円</td>
              <td className="border border-gray-200 px-3 py-2">約24.5万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        ポイントは、住民税の<strong>基礎控除は43万円</strong>で、所得税の48万円より5万円小さいこと。同じ課税所得でも計算のベースが少し違うため、住民税は「所得税より重く感じる」場面が多くなります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収別・住民税の早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        独身・給与収入のみ・40歳未満の概算です。年収に対する住民税の割合もあわせて示します。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">年収</th>
              <th className="border border-gray-200 px-3 py-2">住民税（年）</th>
              <th className="border border-gray-200 px-3 py-2">月あたり</th>
              <th className="border border-gray-200 px-3 py-2">年収比</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["300万円", "約12.1万円", "約1.0万円", "4.0%"],
              ["400万円", "約18.0万円", "約1.5万円", "4.5%"],
              ["500万円", "約24.5万円", "約2.0万円", "4.9%"],
              ["600万円", "約31.1万円", "約2.6万円", "5.2%"],
              ["700万円", "約38.0万円", "約3.2万円", "5.4%"],
              ["800万円", "約45.7万円", "約3.8万円", "5.7%"],
              ["1000万円", "約64.1万円", "約5.3万円", "6.4%"],
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
        所得割の税率自体は一律10％ですが、年収が上がるほど控除の割合が相対的に小さくなるため、年収比は少しずつ上がっていきます。とはいえ累進で跳ね上がる所得税と違い、住民税は<strong>ほぼ収入に比例</strong>するのが特徴です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        住民税で間違えやすい注意点
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>1年遅れで課税される。</strong>住民税は前年の所得が基準。退職・転職で収入が下がった翌年も、前年の高い所得をもとに請求が来るので資金繰りに注意。
        </li>
        <li>
          <strong>新社会人の1年目は原則ゼロ。</strong>前年に所得がないため、住民税が天引きされ始めるのは入社2年目の6月からです。
        </li>
        <li>
          <strong>ふるさと納税・iDeCoで下がる。</strong>寄付額や掛金が控除され、所得割10％分が軽くなります。ふるさと納税は住民税から差し引かれる形で還元されます。
        </li>
        <li>
          <strong>自治体で数百円の差。</strong>均等割や税率に独自の上乗せをしている自治体もありますが、差は年数百円〜千円程度で大きくはありません。
        </li>
      </ul>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          自分の住民税・手取りを計算
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
        ※本記事の計算は給与収入のみ・40歳未満・協会けんぽ加入を想定した概算です。実際の住民税は調整控除や自治体ごとの均等割、各種控除の適用状況により異なります。
      </p>
    </article>
  );
}
