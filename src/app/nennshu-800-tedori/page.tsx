import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "年収800万円の手取りはいくら？増税ラインと対策",
  description:
    "年収800万円の手取りは約591万円、月の手取りは約49万円。天引き約209万円の内訳、家族構成別の早見表、年収850万円で給与所得控除が頭打ちになる増税ライン、iDeCoやふるさと納税で手取りを増やす対策まで解説します。",
  alternates: { canonical: "/nennshu-800-tedori/" },
};

const faqs = [
  {
    q: "年収800万円の手取りは月いくらですか？",
    a: "独身の場合、年間の手取りは約591万円で、12で割ると月あたり約49万円です。ボーナスがある場合は毎月の手取りはこれより少なくなり、その分ボーナス月にまとまって支給されます。",
  },
  {
    q: "年収800万円で税金はいくら引かれますか？",
    a: "独身の場合、所得税が約47万円、住民税が約46万円で、税金の合計は約93万円です。これに社会保険料約116万円が加わり、天引き合計は約209万円になります。",
  },
  {
    q: "年収850万円を超えると手取りはどう変わりますか？",
    a: "年収850万円で給与所得控除が195万円の上限に達し、それ以上は年収が増えても控除が増えません。23歳未満の扶養親族などがいる場合は所得金額調整控除で一部緩和されますが、該当しなければ850万円超は税負担の伸びがやや大きくなります。",
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
        年収800万円の手取りはいくら？増税ラインと対策
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        年収800万円の<strong>手取りは約591万円</strong>、月あたりにすると
        <strong>約49万円</strong>です（独身・40歳未満・協会けんぽ加入の概算）。
        額面の800万円との差、約209万円が税金と社会保険料として天引きされ、手取り率は約73.8%まで下がります。年収500万円のときの手取り率77.6%と比べると、同じ「稼ぎ」でも手元に残る割合は小さくなります。この記事では内訳と、年収800万円台で意識したい増税ライン、その対策を見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収800万円の天引き内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面800万円から差し引かれる内訳は次のとおりです（独身の場合）。
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
              <td className="border border-gray-200 px-3 py-2">約116.2万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約47.4万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約45.7万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約209.2万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約590.8万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        社会保険料116.2万円の内訳は、健康保険が約40.0万円、厚生年金が約71.4万円、雇用保険が約4.8万円です。厚生年金は標準報酬月額65万円で上限に達するため、年収800万円ではすでに<strong>年金保険料が頭打ち</strong>になっています。一方で所得税・住民税は年収に応じて増え続けるため、天引きの主役は500万円台の「社会保険料」から、この年収帯では「税金」の比重が高まっていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        同じ年収800万円でも、配偶者控除や扶養控除の有無で手取りは変わります。
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
              ["独身", "約591万円", "約49.2万円", "73.8%"],
              ["片働き夫婦", "約602万円", "約50.2万円", "75.2%"],
              ["夫婦＋子1人", "約613万円", "約51.1万円", "76.6%"],
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
        配偶者を扶養している「片働き夫婦」は独身より手取りが約11万円多く、さらに16歳以上の子を扶養する「夫婦＋子1人」では約22万円多くなります。年収800万円はまだ配偶者控除が満額で使える水準で、控除の効果がそのまま手取りに反映されます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収800万円台で意識したい「増税ライン」
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収800万円は、いくつかの負担増ラインの「手前」に位置します。昇給や転職で年収が上がるときは、次の境界を意識すると手取りの伸び方が読めます。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">ライン</th>
              <th className="border border-gray-200 px-3 py-2">何が起きるか</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">年収850万円</td>
              <td className="border border-gray-200 px-3 py-2">給与所得控除が195万円で頭打ち。これ以上は年収が増えても控除は増えない（23歳未満の扶養等があれば所得金額調整控除で一部緩和）。</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">課税所得695万円超</td>
              <td className="border border-gray-200 px-3 py-2">所得税率が20%から23%へ。年収でおおむね1,000万円前後で到達し、増えた分にかかる税率が一段上がる。</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">合計所得900万円超（年収約1,095万円）</td>
              <td className="border border-gray-200 px-3 py-2">配偶者控除が満額（38万円）から段階的に縮小し始める。</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">年収960万〜1,200万円</td>
              <td className="border border-gray-200 px-3 py-2">児童手当の所得制限にかかりやすい帯。世帯の扶養人数で基準は変わる。</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収800万円時点の課税所得（所得税ベース）は約446万円で、所得税率は20%ゾーンです。まだ最初の増税ラインである850万円に届いていないため、この年収帯は「控除をフルに使える最後のゾーン」といえます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        手取りを増やす対策
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収800万円は所得税率20%＋住民税10%で、課税所得を1万円圧縮すると約3,000円の節税につながる帯です。使いやすい対策は次の3つです。
      </p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>iDeCo（個人型確定拠出年金）</strong>：掛金が全額所得控除。会社員（企業年金なし）なら年27.6万円まで拠出でき、年収800万円なら年8万円前後の節税に。
        </li>
        <li>
          <strong>ふるさと納税</strong>：年収800万円・独身なら年間の目安上限はおよそ12万円台。自己負担2,000円で返礼品を受け取れ、実質的に住民税・所得税の前払いになる。
        </li>
        <li>
          <strong>生命保険料控除・医療費控除</strong>：加入状況や医療費に応じて課税所得を圧縮。年末調整や確定申告で忘れず申告する。
        </li>
      </ul>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        iDeCoとふるさと納税を組み合わせるだけでも、年間で10万円以上手取りを押し上げられるケースがあります。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収で手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          800万円以外の年収も、入力するだけで手取り・税金の内訳がわかります。
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
        ※本記事の計算は給与収入のみ・40歳未満・協会けんぽ加入を想定した概算です。実際の税額・保険料は加入先や自治体、各種控除の適用状況により異なります。ふるさと納税やiDeCoの上限は年により変わるため、最新の制度をご確認ください。
      </p>
    </article>
  );
}
