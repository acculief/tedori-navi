import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "年収350万円の手取りはいくら？月収別早見表",
  description:
    "年収350万円の手取りは約277万円、月の手取りは約23万円。税金・社会保険料の内訳と、家族構成・ボーナス別の手取りを月収別の早見表で解説します。",
  alternates: { canonical: "/nennshu-350-tedori/" },
};

const faqs = [
  {
    q: "年収350万円の手取りは月いくらですか？",
    a: "独身の場合、年間の手取りは約277万円で、12で割ると月あたり約23万円です。ボーナスがある場合は毎月の手取りはこれより少なくなり、その分ボーナス月にまとまって支給されます。",
  },
  {
    q: "年収350万円は額面月収にするといくらですか？",
    a: "ボーナスがない場合、額面350万円を12で割ると月あたり約29万円です。ボーナスが年間で数か月分ある場合は、毎月の額面はこれより少なくなります。",
  },
  {
    q: "年収350万円で天引きが一番大きいのは何ですか？",
    a: "社会保険料です。年間で約51.6万円が健康保険・厚生年金・雇用保険として引かれ、所得税約7.0万円・住民税約14.8万円を合わせた税金（約21.9万円）の2倍以上になります。",
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
        年収350万円の手取りはいくら？月収別早見表
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        年収350万円の<strong>手取りは約277万円</strong>、月あたりにすると
        <strong>約23万円</strong>です（独身・40歳未満・協会けんぽ加入の概算）。
        額面の350万円との差、約73万円が税金と社会保険料として天引きされています。この記事では、その内訳と月収換算、家族構成・ボーナス別の手取りを早見表で詳しく見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収350万円の天引き内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面350万円から差し引かれる内訳は次のとおりです（独身の場合）。
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
              <td className="border border-gray-200 px-3 py-2">約51.6万円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">約7.0万円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">約14.8万円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約73.5万円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約276.5万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        天引きのうち、もっとも大きいのは<strong>社会保険料</strong>です。税金（所得税＋住民税）の合計約21.9万円に対し、社会保険料は約51.6万円と2倍以上を占めます。年収350万円帯は所得税率が5〜10%と低いため、手取りを左右するのは主に社会保険料です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        月収別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        年収350万円を毎月どう受け取るかは、ボーナスの割合で変わります。額面の月収と、そこからの手取り月収の目安は次のとおりです。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">支給パターン</th>
              <th className="border border-gray-200 px-3 py-2">額面の月収</th>
              <th className="border border-gray-200 px-3 py-2">手取り月収の目安</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["ボーナスなし（12分割）", "約29.2万円", "約23.0万円"],
              ["年2回・計2か月分", "約25.0万円", "約19.8万円"],
              ["年2回・計4か月分", "約21.9万円", "約17.3万円"],
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
        ボーナスの分だけ毎月の額面は下がりますが、年間の手取り総額（約277万円）は変わりません。たとえば年2回・計4か月分のボーナスなら、毎月の手取りは約17万円で、ボーナス月に約35万円が別途支給されるイメージです。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        家族構成別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        同じ年収350万円でも、配偶者控除や扶養控除の有無で手取りは変わります。
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
              ["独身", "約277万円", "約23.0万円", "79.0%"],
              ["片働き夫婦", "約282万円", "約23.5万円", "80.5%"],
              ["夫婦＋子1人", "約287万円", "約24.0万円", "82.0%"],
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
        配偶者を扶養している「片働き夫婦」は独身より手取りが約5万円多く、さらに16歳以上の子を扶養する「夫婦＋子1人」では約10万円多くなります。控除が効くのは所得税・住民税の部分だけで、社会保険料は家族構成に関わらず変わりません。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収で手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          350万円以外の年収も、入力するだけで手取り・税金の内訳がわかります。
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
