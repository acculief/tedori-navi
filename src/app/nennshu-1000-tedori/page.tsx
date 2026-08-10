import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "年収1000万円の手取りはいくら？意外と少ない理由",
  description:
    "年収1000万円の手取りは約724万円、月あたり約60万円。額面との差276万円の内訳（社会保険料・所得税・住民税）と、手取り率が72%まで下がる「意外と少ない」理由を早見表つきで解説します。",
  alternates: { canonical: "/nennshu-1000-tedori/" },
};

const faqs = [
  {
    q: "年収1000万円の手取りは月いくらですか？",
    a: "独身の場合、年間の手取りは約724万円で、12で割ると月あたり約60万円です。ボーナスがある会社では毎月の手取りはこれより少なくなり、その分がボーナス月に上乗せされます。",
  },
  {
    q: "年収1000万円は税金でいくら引かれますか？",
    a: "独身で所得税が約85万円、住民税が約64万円、合わせて税金は約149万円です。これに社会保険料の約127万円が加わり、天引き合計は約276万円になります。",
  },
  {
    q: "なぜ年収1000万円でも手取りが少なく感じるのですか？",
    a: "給与所得控除が195万円で頭打ちになり、年収が増えても控除が増えないためです。加えて所得税は累進課税で限界税率が高く、社会保険料も大きいため、手取り率は72%前後まで下がります。児童手当などの所得制限にもかかりやすく、実感としての余裕はさらに小さくなります。",
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
        年収1000万円の手取りはいくら？意外と少ない理由
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        年収1000万円の<strong>手取りは約724万円</strong>、月あたりにすると
        <strong>約60万円</strong>です（独身・40歳未満・協会けんぽ加入の概算）。
        額面の1000万円との差、約276万円が税金と社会保険料として天引きされています。「大台」に届いても、手元に残るのは7割強。この記事では内訳と、手取りが思ったより少なくなる理由を見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収1000万円の天引き内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面1000万円から差し引かれる内訳は次のとおりです（独身の場合）。
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
              <td className="border border-gray-200 px-3 py-2">約127.4万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約84.9万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約64.1万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約276.4万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約723.6万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収500万円クラスでは社会保険料が最大の天引き項目でしたが、年収1000万円では<strong>税金（所得税＋住民税＝約149万円）が社会保険料（約127万円）を上回ります</strong>。累進課税で税負担の伸びが大きくなるのが、この年収帯の特徴です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        「意外と少ない」と感じる3つの理由
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収500万円の手取り率は約77.6%ですが、年収1000万円では<strong>約72.4%</strong>まで下がります。年収は2倍でも、手取りは約388万円から約724万円と<strong>1.87倍</strong>にしかなりません。理由は主に3つです。
      </p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>① 給与所得控除が頭打ち。</strong>
          給与所得控除は年収850万円を超えると195万円で固定されます。年収が増えても差し引ける控除が増えないため、課税対象が丸ごと増えていきます。
        </li>
        <li>
          <strong>② 所得税が累進課税。</strong>
          課税所得が増えるほど税率が上がります。年収1000万円では追加で稼いだ分の限界税率が高く、住民税10%と合わせて手取りの伸びを鈍らせます。
        </li>
        <li>
          <strong>③ 社会保険料も大きい。</strong>
          厚生年金には上限がありますが、健康保険料は年収に比例して増え続けます。結果、社会保険料だけで年約127万円に達します。
        </li>
      </ul>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        さらに、児童手当の所得制限や各種の所得制限つき給付から外れやすいのもこの年収帯です。額面の割に「余裕がない」と感じる背景には、こうした制度上の線引きもあります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        同じ年収1000万円でも、配偶者控除や扶養控除の有無で手取りは変わります。
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
              ["独身", "約723.6万円", "約60.3万円", "72.4%"],
              ["片働き夫婦", "約734.7万円", "約61.2万円", "73.5%"],
              ["夫婦＋子1人", "約745.8万円", "約62.1万円", "74.6%"],
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
        配偶者を扶養する「片働き夫婦」は独身より手取りが約11万円多く、16歳以上の子を扶養する「夫婦＋子1人」ではさらに約11万円多くなります。ただし配偶者の年収が上がると配偶者控除は段階的に縮小し、納税者本人の年収が高い場合は適用されなくなる点に注意が必要です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        手取りを増やす主な選択肢
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収1000万円は税率が高いぶん、控除を使ったときの節税効果も大きくなります。
      </p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>iDeCo（個人型確定拠出年金）。</strong>
          掛金が全額所得控除になります。税率が高い年収帯ほど、同じ掛金でも戻ってくる税金が大きくなります。
        </li>
        <li>
          <strong>ふるさと納税。</strong>
          控除上限が年収に応じて大きくなるため、年収1000万円では実質2000円の負担で受け取れる返礼品の幅が広がります。
        </li>
        <li>
          <strong>医療費控除・生命保険料控除など。</strong>
          年末調整や確定申告で申告漏れがないか確認するだけでも、課税所得を下げられます。
        </li>
      </ul>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収で手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          1000万円以外の年収も、入力するだけで手取り・税金の内訳がわかります。
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
