import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "年収850万円の手取りはいくら？給与所得控除の上限と税負担",
  description:
    "年収850万円の手取りは約625万円、月の手取りは約52万円。天引き約225万円の内訳、家族構成別の早見表、850万円で給与所得控除が195万円の上限に達する仕組み、所得金額調整控除で緩和される条件まで解説します。",
  alternates: { canonical: "/nennshu-850-tedori/" },
};

const faqs = [
  {
    q: "年収850万円の手取りは月いくらですか？",
    a: "独身の場合、年間の手取りは約625万円で、12で割ると月あたり約52万円です。ボーナスがある場合は毎月の手取りはこれより少なくなり、その分ボーナス月にまとまって支給されます。",
  },
  {
    q: "年収850万円で税金はいくら引かれますか？",
    a: "独身の場合、所得税が約56万円、住民税が約50万円で、税金の合計は約106万円です。これに社会保険料約119万円が加わり、天引き合計は約225万円になります。",
  },
  {
    q: "年収850万円で給与所得控除はどうなりますか？",
    a: "年収850万円で給与所得控除は195万円の上限に達します。これ以上は年収が増えても控除は増えません。ただし23歳未満の扶養親族や特別障害者の扶養親族などがいる場合は、所得金額調整控除で最大15万円が所得から差し引かれ、負担が一部緩和されます。",
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
        年収850万円の手取りはいくら？給与所得控除の上限と税負担
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        年収850万円の<strong>手取りは約625万円</strong>、月あたりにすると
        <strong>約52万円</strong>です（独身・40歳未満・協会けんぽ加入の概算）。
        額面の850万円との差、約225万円が税金と社会保険料として天引きされ、手取り率は約73.5%です。年収850万円は、<strong>給与所得控除が195万円の上限に達する年収</strong>という節目でもあります。ここを境に「年収が増えても控除は増えない」ゾーンに入るため、この記事では内訳と、850万円という数字の意味、負担が緩和される条件を見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収850万円の天引き内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面850万円から差し引かれる内訳は次のとおりです（独身の場合）。
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
              <td className="border border-gray-200 px-3 py-2">約119.0万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約56.0万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約49.9万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約224.9万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約625.1万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        社会保険料119.0万円の内訳は、健康保険が約42.5万円、厚生年金が約71.4万円、雇用保険が約5.1万円です。厚生年金は標準報酬月額65万円で上限に達するため、年収800万円台では<strong>年金保険料はすでに頭打ち</strong>です。したがって年収が上がっても増えるのは主に健康保険料と税金で、天引きの伸びは「税金」が中心になります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        同じ年収850万円でも、配偶者控除や扶養控除の有無で手取りは変わります。
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
              ["独身", "約625万円", "約52.1万円", "73.5%"],
              ["片働き夫婦", "約636万円", "約53.0万円", "74.8%"],
              ["夫婦＋子1人", "約647万円", "約53.9万円", "76.1%"],
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
        配偶者を扶養している「片働き夫婦」は独身より手取りが約11万円多く、16歳以上の子を扶養する「夫婦＋子1人」ではさらに約11万円多くなります。年収850万円はまだ配偶者控除が満額（38万円）で使える水準で、控除の効果がそのまま手取りに反映されます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収850万円で給与所得控除が頭打ちになる
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        給与所得控除は、給与収入から自動で差し引かれる「会社員の必要経費」にあたる控除です。年収が上がるほど金額も増えますが、<strong>年収850万円で195万円に達し、それ以上は一定</strong>になります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">年収</th>
              <th className="border border-gray-200 px-3 py-2">給与所得控除</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">700万円</td>
              <td className="border border-gray-200 px-3 py-2">180万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">800万円</td>
              <td className="border border-gray-200 px-3 py-2">190万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">850万円</td>
              <td className="border border-gray-200 px-3 py-2">195万円（上限）</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">900万円</td>
              <td className="border border-gray-200 px-3 py-2">195万円（変わらず）</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">1,000万円</td>
              <td className="border border-gray-200 px-3 py-2">195万円（変わらず）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        850万円を超えると控除が増えないため、増えた年収はほぼそのまま課税所得に上乗せされます。たとえば年収を850万円から900万円へ50万円上げても、給与所得控除は195万円のまま。その結果、年収900万円（独身）の手取りは約658万円で、850万円との差は約33万円にとどまります。50万円のうち約17万円が税・社会保険料に回る計算です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        所得金額調整控除で緩和されるケース
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        850万円超の負担増には、一定の人を対象にした緩和措置があります。<strong>所得金額調整控除</strong>で、次のいずれかに当てはまる場合は所得から追加で控除できます。
      </p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700">
        <li>本人が特別障害者</li>
        <li>23歳未満の扶養親族がいる（＝子育て世帯）</li>
        <li>特別障害者である同一生計配偶者または扶養親族がいる</li>
      </ul>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        控除額は「（年収−850万円）×10%」で、年収1,000万円で頭打ちの<strong>最大15万円</strong>です。年収850万円ちょうどでは0円ですが、たとえば子育て中で年収950万円なら10万円が所得から差し引かれます。会社員は年末調整で申告できるため、対象になりそうなら勤務先に扶養親族の情報を漏れなく提出しておきましょう。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        手取りを増やす対策
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収850万円は所得税率20%＋住民税10%で、課税所得を1万円圧縮すると約3,000円の節税につながる帯です。控除が頭打ちになる分、任意の所得控除を使う効果は相対的に大きくなります。
      </p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>iDeCo（個人型確定拠出年金）</strong>：掛金が全額所得控除。会社員（企業年金なし）なら年27.6万円まで拠出でき、年収850万円なら年8万円前後の節税に。
        </li>
        <li>
          <strong>ふるさと納税</strong>：年収850万円・独身なら年間の目安上限はおよそ14万円台。自己負担2,000円で返礼品を受け取れ、実質的に住民税・所得税の前払いになる。
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
          850万円以外の年収も、入力するだけで手取り・税金の内訳がわかります。
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
