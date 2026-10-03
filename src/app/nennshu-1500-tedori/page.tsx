import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "年収1500万円の手取りはいくら？高所得者の税負担と対策",
  description:
    "年収1500万円の手取りは約1019万円、月の手取りは約85万円。額面との差481万円の内訳（所得税214万円・住民税111万円・社会保険料155万円）や、配偶者控除が消える高所得者ならではの注意点と節税対策を早見表で解説します。",
  alternates: { canonical: "/nennshu-1500-tedori/" },
};

const faqs = [
  {
    q: "年収1500万円の手取りは月いくらですか？",
    a: "独身の場合、年間の手取りは約1019万円で、12で割ると月あたり約85万円です。ボーナスがある場合は毎月の手取りはこれより少なくなり、その分ボーナス月にまとまって支給されます。",
  },
  {
    q: "年収1500万円だと手取り率はなぜ7割を切るのですか？",
    a: "所得税が累進課税で課税所得1800万円以下の税率33%ゾーンに入るためです。年収500万円台では手取り率が約78%ありますが、年収1500万円では所得税負担が大きく約68%まで下がります。",
  },
  {
    q: "年収1500万円でも配偶者控除は使えますか？",
    a: "使えません。配偶者控除は本人の合計所得金額が1000万円（年収約1195万円）を超えると適用外になります。年収1500万円は合計所得が1000万円を超えるため、配偶者がいても配偶者控除・配偶者特別控除は受けられません。",
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
        年収1500万円の手取りはいくら？高所得者の税負担と対策
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        年収1500万円の<strong>手取りは約1019万円</strong>、月あたりにすると
        <strong>約85万円</strong>です（独身・40歳未満・協会けんぽ加入の概算）。
        額面1500万円との差、約481万円が税金と社会保険料として天引きされています。年収が上がるほど手取り率は下がり、1500万円では<strong>手取り率は約68%</strong>。この記事では内訳と、高所得者ならではの注意点・対策を見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収1500万円の天引き内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面1500万円から差し引かれる内訳は次のとおりです（独身の場合）。
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
              <td className="border border-gray-200 px-3 py-2">約155.4万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約214.3万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約111.3万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約480.9万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約1019.0万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収500万円台までは社会保険料が天引きの最大項目でしたが、年収1500万円では逆転し<strong>所得税（約214万円）が最大の負担</strong>になります。これは所得税が累進課税で、課税所得1800万円以下の部分に33%の税率がかかるためです。一方、厚生年金は標準報酬月額に上限があり、保険料は年71.4万円で頭打ちになります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収1500万円では配偶者控除が使えないため、独身と片働き夫婦の手取りは同じになります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">家族構成</th>
              <th className="border border-gray-200 px-3 py-2">手取り（年）</th>
              <th className="border border-gray-200 px-3 py-2">手取り（月）</th>
              <th className="border border-gray-200 px-3 py-2">手取り率</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["独身", "約1019万円", "約85万円", "67.9%"],
              ["片働き夫婦", "約1019万円", "約85万円", "67.9%"],
              ["夫婦＋子1人", "約1035万円", "約86万円", "69.0%"],
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
        配偶者を扶養していても、本人の合計所得金額が1000万円を超えると配偶者控除・配偶者特別控除はゼロになります。そのため「片働き夫婦」でも手取りは独身と変わりません。手取りが増えるのは、16歳以上の子など配偶者以外の扶養親族がいる場合（扶養控除は所得制限なし）で、子1人で年約16万円手取りが増えます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収が上がると手取り率が下がる
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        同じ「手取り」でも、年収帯によって手取り率は大きく変わります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">年収</th>
              <th className="border border-gray-200 px-3 py-2">手取り（年）</th>
              <th className="border border-gray-200 px-3 py-2">手取り率</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["500万円", "約388万円", "77.6%"],
              ["1000万円", "約724万円", "72.4%"],
              ["1500万円", "約1019万円", "67.9%"],
              ["2000万円", "約1285万円", "64.2%"],
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
        年収が2倍（500万→1000万）になっても手取りは2倍にならず、1500万円では額面の約3割が税・社会保険で消えます。累進課税のため、昇給や副業で収入を増やすほど増えた分への税率は高くなる点は押さえておきたいところです。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        高所得者向けの節税・手取り対策
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        課税所得が大きいほど、所得控除1円あたりの節税額（＝適用される税率）も大きくなります。年収1500万円で有効な対策は次のとおりです。
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>iDeCo（個人型確定拠出年金）</strong>：掛金が全額所得控除。所得税率33%＋住民税10%なら、掛金の約43%が戻る計算。
        </li>
        <li>
          <strong>ふるさと納税</strong>：年収1500万円なら上限の目安は約37〜39万円（独身・社会保険料控除後の概算）。実質2000円で返礼品を受け取れる。
        </li>
        <li>
          <strong>住宅ローン控除・医療費控除</strong>：該当すれば課税所得を直接圧縮できる。
        </li>
        <li>
          <strong>企業型DCのマッチング拠出</strong>：勤務先に制度があれば、給与天引きで同様に全額所得控除。
        </li>
      </ul>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収で手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          1500万円以外の年収も、入力するだけで手取り・税金の内訳がわかります。
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
        ※本記事の計算は給与収入のみ・40歳未満・協会けんぽ加入を想定した概算です。実際の税額・保険料は加入先や自治体、各種控除の適用状況により異なります。
      </p>
    </article>
  );
}
