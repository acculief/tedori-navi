import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "年収200万円の手取りはいくら？月収と生活費の目安",
  description:
    "年収200万円の手取りは約161万円、月の手取りは約13.4万円。社会保険料・所得税・住民税の内訳、家族構成別の手取り（扶養2人なら税金ゼロ）、月々の生活費の目安を早見表で解説します。",
  alternates: { canonical: "/nennshu-200-tedori/" },
};

const faqs = [
  {
    q: "年収200万円の手取りは月いくらですか？",
    a: "独身の場合、年間の手取りは約161万円で、12で割ると月あたり約13.4万円です。ボーナスがある場合は毎月の手取りはこれより少なくなり、その分がボーナス月にまとめて支給されます。",
  },
  {
    q: "年収200万円は月収でいくらですか？",
    a: "額面の年収200万円をボーナスなしで12等分すると、月の額面は約16.7万円です。ここから社会保険料と税金が引かれ、手取りは月約13.4万円になります。",
  },
  {
    q: "年収200万円だと住民税は非課税になりますか？",
    a: "独身の会社員では非課税になりません。住民税は年間約6.6万円かかります。一方、配偶者と16歳以上の子を扶養している場合は所得税・住民税ともにゼロになり、天引きは社会保険料の約29.5万円だけです（自治体により基準は多少異なります）。",
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
        年収200万円の手取りはいくら？月収と生活費の目安
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        年収200万円の<strong>手取りは約161万円</strong>、月あたりにすると
        <strong>約13.4万円</strong>です（独身・40歳未満・協会けんぽ加入の概算）。
        額面との差、約39万円が税金と社会保険料として天引きされています。この記事では、その内訳と家族構成別の手取り、毎月の生活費の目安をまとめます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収200万円の天引き内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面200万円から差し引かれる内訳は次のとおりです（独身の場合）。
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
              <td className="border border-gray-200 px-3 py-2">健康保険料</td>
              <td className="border border-gray-200 px-3 py-2">約10.0万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">厚生年金保険料</td>
              <td className="border border-gray-200 px-3 py-2">約18.3万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">雇用保険料</td>
              <td className="border border-gray-200 px-3 py-2">約1.2万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約2.8万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約6.6万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約38.8万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約161.2万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        社会保険料の合計は約29.5万円で、所得税＋住民税の約9.3万円の<strong>約3倍</strong>です。年収200万円の天引きは、ほぼ社会保険料と考えてよい水準です。その代わり厚生年金に加入しているため、将来の年金は国民年金だけの人より上乗せされます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        同じ年収200万円でも、配偶者控除や扶養控除の有無で税金が変わります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">家族構成</th>
              <th className="border border-gray-200 px-3 py-2">税金（所得税＋住民税）</th>
              <th className="border border-gray-200 px-3 py-2">手取り（年）</th>
              <th className="border border-gray-200 px-3 py-2">手取り（月）</th>
              <th className="border border-gray-200 px-3 py-2">手取り率</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["独身", "約9.3万円", "約161万円", "約13.4万円", "80.6%"],
              ["片働き夫婦", "約4.1万円", "約166万円", "約13.9万円", "83.2%"],
              ["夫婦＋子1人", "0円", "約171万円", "約14.2万円", "85.3%"],
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
        配偶者を扶養すると税金がおよそ半分になり、手取りは年約5.2万円増えます。さらに16歳以上の子を扶養する「夫婦＋子1人」では課税所得がゼロになり、所得税も住民税もかかりません。社会保険料は家族構成に関係なく同額なので、手取りの差はすべて税金の差です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        月13.4万円での生活費の目安
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        独身・ボーナスなしの場合、毎月の手取りは約13.4万円です。単身で地方〜郊外に住む想定のモデルケースは次のとおりです。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">項目</th>
              <th className="border border-gray-200 px-3 py-2">目安</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">家賃</td>
              <td className="border border-gray-200 px-3 py-2">約4.5万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">食費</td>
              <td className="border border-gray-200 px-3 py-2">約3.0万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">水道光熱・通信</td>
              <td className="border border-gray-200 px-3 py-2">約1.8万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">日用品・交際・娯楽</td>
              <td className="border border-gray-200 px-3 py-2">約2.5万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">残り（貯蓄可能額）</td>
              <td className="border border-gray-200 px-3 py-2">約1.6万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        家賃を手取りの3分の1（約4.5万円）に収められるかが分かれ目です。都市部で家賃が6万円を超えると貯蓄はほぼゼロになるため、格安SIMへの切り替えなど通信費・固定費の削減が効きます。年収が50万円上がった場合の手取りは
        <Link href="/nennshu-250-tedori/" className="text-primary-600 underline">
          年収250万円の手取り
        </Link>
        で確認できます。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収で手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          200万円以外の年収も、入力するだけで手取り・税金の内訳がわかります。
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
        ※本記事の計算は給与収入のみ・40歳未満・協会けんぽ加入を想定した概算です。実際の税額・保険料は加入先や自治体、各種控除の適用状況により異なります。生活費の配分はモデルケースであり、居住地や個人の事情で変動します。
      </p>
    </article>
  );
}
