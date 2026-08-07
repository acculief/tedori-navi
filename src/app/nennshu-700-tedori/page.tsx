import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "年収700万円の手取りはいくら？高年収の税負担を解説",
  description:
    "年収700万円の手取りは約527万円、月の手取りは約44万円。所得税率が20%に上がるライン、天引きの内訳、家族構成別の早見表、月収イメージまでわかりやすく解説します。",
  alternates: { canonical: "/nennshu-700-tedori/" },
};

const faqs = [
  {
    q: "年収700万円の手取りは月いくらですか？",
    a: "独身の場合、年間の手取りは約527万円で、12で割ると月あたり約44万円です。ボーナスがある場合は毎月の手取りはこれより少なくなり、その分ボーナス月にまとまって支給されます。",
  },
  {
    q: "年収700万円は高い方ですか？",
    a: "国税庁の民間給与実態統計調査では給与所得者の平均年収は約460万円前後です。年収700万円は給与所得者のおおむね上位1〜2割に入る水準で、高めの年収といえます。",
  },
  {
    q: "年収700万円で税金が急に増えるというのは本当ですか？",
    a: "課税所得が330万円を超えると所得税率が10%から20%に上がります。年収700万円はちょうどこの境目にかかるため、額面が増えても手取りが伸びにくく感じられます。ただし天引きで最も大きいのは依然として社会保険料です。",
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
        年収700万円の手取りはいくら？高年収の税負担を解説
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        年収700万円の<strong>手取りは約527万円</strong>、月あたりにすると
        <strong>約44万円</strong>です（独身・40歳未満・協会けんぽ加入の概算）。
        額面の700万円との差、約173万円が税金と社会保険料として天引きされています。年収700万円は<strong>所得税率が20%に上がるライン</strong>にさしかかる水準で、額面が増えても手取りが伸びにくくなり始めるのが特徴です。この記事で内訳と家族構成別の手取りを詳しく見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収700万円の天引き内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面700万円から差し引かれる内訳は次のとおりです（独身の場合）。
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
              <td className="border border-gray-200 px-3 py-2">約103.3万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約31.7万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約38.0万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約172.9万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約527.1万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        「高年収だから税金で持っていかれる」というイメージがありますが、実際に最も大きいのは<strong>社会保険料の約103万円</strong>です。所得税と住民税を合わせても約70万円で、社会保険料の方が上回ります。
      </p>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        社会保険料の内訳は、健康保険が約35.0万円、厚生年金が約64.1万円、雇用保険が約4.2万円です。厚生年金は標準報酬月額に上限があるため、年収がこれ以上増えても保険料の伸びは緩やかになります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        700万円は所得税率が上がる境目
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        所得税は課税所得に応じて税率が段階的に上がる累進課税です。年収700万円あたりは、課税所得が330万円を超えて<strong>税率が10%から20%へ切り替わる</strong>ゾーンにあたります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">課税所得</th>
              <th className="border border-gray-200 px-3 py-2">所得税率</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">195万円以下</td>
              <td className="border border-gray-200 px-3 py-2">5%</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">195万〜330万円</td>
              <td className="border border-gray-200 px-3 py-2">10%</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">330万〜695万円</td>
              <td className="border border-gray-200 px-3 py-2">20%</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">695万〜900万円</td>
              <td className="border border-gray-200 px-3 py-2">23%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収700万円（独身）の課税所得は約369万円で、20%の区分に入ります。ここから昇給しても、増えた分にはより高い税率がかかるため、額面アップほど手取りは増えません。iDeCoやふるさと納税といった控除を使うと、この区分の負担を抑えられます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        同じ年収700万円でも、配偶者控除や扶養控除の有無で手取りは変わります。
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
              ["独身", "約527万円", "約44万円", "75.3%"],
              ["片働き夫婦", "約538万円", "約45万円", "76.9%"],
              ["夫婦＋子1人", "約545万円", "約45万円", "77.9%"],
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
        配偶者を扶養している「片働き夫婦」は独身より手取りが約11万円多く、さらに16歳以上の子を扶養する「夫婦＋子1人」では約27万円多くなります。所得税率が20%区分のため、同じ控除額でも税の軽減効果が年収500万円台より大きく効くのがこの年収帯の特徴です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        ボーナスあり・なしの月収イメージ
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年間手取り約527万円（独身）を、ボーナスの有無でどう受け取るかによって毎月の手取りは変わります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">支給パターン</th>
              <th className="border border-gray-200 px-3 py-2">毎月の手取り目安</th>
              <th className="border border-gray-200 px-3 py-2">ボーナス手取り目安</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">ボーナスなし（12分割）</td>
              <td className="border border-gray-200 px-3 py-2">約44万円</td>
              <td className="border border-gray-200 px-3 py-2">—</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">年2回・計4か月分</td>
              <td className="border border-gray-200 px-3 py-2">約33万円</td>
              <td className="border border-gray-200 px-3 py-2">約66万円 × 年2回</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        ※上表はイメージです。実際にはボーナスの社会保険料計算方法が月給と異なるため、金額は前後します。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収で手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          700万円以外の年収も、入力するだけで手取り・税金の内訳がわかります。
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
