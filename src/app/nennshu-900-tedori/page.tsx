import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "年収900万円の手取りはいくら？税金の内訳と対策",
  description:
    "年収900万円の手取りは約658万円、月の手取りは約55万円。額面との差242万円の内訳（社会保険料・所得税・住民税）と、配偶者控除が縮小し始めるラインや手取りを増やす対策を早見表つきで解説します。",
  alternates: { canonical: "/nennshu-900-tedori/" },
};

const faqs = [
  {
    q: "年収900万円の手取りは月いくらですか？",
    a: "独身の場合、年間の手取りは約658万円で、12で割ると月あたり約55万円です。ボーナスがある場合は毎月の手取りはこれより少なくなり、その分ボーナス月にまとまって支給されます。",
  },
  {
    q: "年収900万円で税金が急に重く感じるのはなぜですか？",
    a: "所得税は課税所得が増えるほど税率が上がる累進課税で、年収900万円帯の課税所得には23%の税率がかかります。加えて給与所得控除が850万円超で上限（195万円）に達するため、収入が増えても控除は増えず、増えた分に高い税率が乗るためです。",
  },
  {
    q: "年収900万円は配偶者控除の対象ですか？",
    a: "対象ですが満額ではありません。配偶者控除は納税者本人の合計所得金額が900万円（年収ベースで約1,095万円）を超えると段階的に縮小します。年収900万円（合計所得約705万円）ならまだ満額の38万円が適用されます。",
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
        年収900万円の手取りはいくら？税金の内訳と対策
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        年収900万円の<strong>手取りは約658万円</strong>、月あたりにすると
        <strong>約55万円</strong>です（独身・40歳未満・協会けんぽ加入の概算）。
        額面の900万円との差、約242万円が税金と社会保険料として天引きされています。手取り率は73.1%まで下がり、額面の増加ほどには手取りが伸びません。この記事では内訳と、手取りを守るための対策を見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収900万円の天引き内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面900万円から差し引かれる内訳は次のとおりです（独身の場合）。
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
              <td className="border border-gray-200 px-3 py-2">約121.8万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約65.6万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約54.6万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約242.0万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約658.0万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収500万円台までは社会保険料が最大の天引き項目でしたが、年収900万円になると<strong>税金（所得税＋住民税で約120万円）が社会保険料（約122万円）とほぼ並びます</strong>。所得税の課税所得には23%の税率がかかり、ここから税負担の伸びが加速します。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        同じ年収900万円でも、配偶者控除や扶養控除の有無で手取りは変わります。
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
              ["独身", "約658万円", "約55万円", "73.1%"],
              ["片働き夫婦", "約669万円", "約56万円", "74.3%"],
              ["夫婦＋子1人", "約680万円", "約57万円", "75.6%"],
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
        配偶者を扶養している「片働き夫婦」は独身より手取りが約11万円多く、さらに16歳以上の子を扶養する「夫婦＋子1人」では約22万円多くなります。年収900万円は配偶者控除が満額適用される上限に近く、これを超えると控除が縮小し始める点に注意が必要です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収900万円前後で意識したい「壁」
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収900万円帯には、収入が増えるほど税制優遇が細くなる境目がいくつかあります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">ライン</th>
              <th className="border border-gray-200 px-3 py-2">起きること</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">給与収入 850万円超</td>
              <td className="border border-gray-200 px-3 py-2">給与所得控除が上限195万円で頭打ち。収入増がそのまま課税所得増に</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">合計所得 900万円超（年収 約1,095万円）</td>
              <td className="border border-gray-200 px-3 py-2">配偶者控除・配偶者特別控除が段階的に縮小</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">課税所得 900万円超</td>
              <td className="border border-gray-200 px-3 py-2">所得税率が23%→33%に上昇</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収900万円ちょうどなら、給与所得控除はすでに上限に達していますが、配偶者控除は満額・所得税率は23%の範囲内です。ここから年収が上がると、上の2つの境目を順に越えて税負担の伸びが速くなります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        手取りを増やす対策
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収900万円帯は所得税率23%が乗るため、控除を1万円増やすと所得税・住民税あわせて約3,300円戻る計算になり、節税の効きが大きい層です。代表的な手段は次のとおりです。
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>iDeCo（個人型確定拠出年金）</strong>：掛金が全額所得控除。会社員（企業年金なし）の上限は月2.3万円・年27.6万円で、税率23%帯なら年約6.3万円の節税。
        </li>
        <li>
          <strong>ふるさと納税</strong>：年収900万円・独身なら控除上限の目安は約15万円前後。自己負担2,000円で返礼品を受け取れる、実質的な手取り改善。
        </li>
        <li>
          <strong>医療費控除・生命保険料控除</strong>：年間の医療費が10万円を超えた分や、保険料の一部が控除対象。忘れず確定申告・年末調整で申告する。
        </li>
        <li>
          <strong>NISAの活用</strong>：直接の節税ではないが、運用益が非課税になるため手元に残るお金を効率的に増やせる。
        </li>
      </ul>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収で手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          900万円以外の年収も、入力するだけで手取り・税金の内訳がわかります。
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
