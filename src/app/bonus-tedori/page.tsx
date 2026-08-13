import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "ボーナスの手取りはいくら？額面から引かれる税金と計算方法",
  description:
    "ボーナスの手取りは額面の約8割。額面50万円なら手取りは約41万円です。健康保険・厚生年金・雇用保険・所得税の引かれ方と、住民税がかからない理由、額面別の早見表でわかりやすく解説します。",
  alternates: { canonical: "/bonus-tedori/" },
};

const faqs = [
  {
    q: "ボーナスの手取りは額面の何割ですか？",
    a: "おおむね額面の約8割です。40歳未満・協会けんぽ加入の場合、社会保険料で約14.7%、所得税で数%が引かれ、手取り率はおよそ78〜82%になります。額面50万円なら手取りは約41万円が目安です。",
  },
  {
    q: "ボーナスから住民税は引かれますか？",
    a: "引かれません。住民税は前年の所得をもとに計算され、毎月の給与から12回に分けて天引きされる仕組みのため、賞与から差し引かれることはありません。ボーナスの手取り率が月給より高くなりやすいのはこのためです。",
  },
  {
    q: "ボーナスの所得税はなぜ月給と計算方法が違うのですか？",
    a: "賞与の所得税は「前月の給与（社会保険料を引いた額）」と「扶養親族の数」で税率が決まり、社会保険料を引いた後のボーナスにその税率を掛けて計算します。年末調整で年間を通した正しい税額に精算されるため、賞与時点はあくまで概算の源泉徴収です。",
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
        ボーナスの手取りはいくら？額面から引かれる税金と計算方法
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        ボーナスの<strong>手取りは額面の約8割</strong>です。たとえば額面
        <strong>50万円のボーナスなら手取りは約41万円</strong>（40歳未満・協会けんぽ・扶養なしの概算）。
        額面との差、約9万円は社会保険料と所得税として天引きされています。月給と違い
        <strong>住民税は引かれない</strong>ため、手取り率は毎月の給与より高めになります。この記事では引かれる項目と計算方法、額面別の早見表を見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        ボーナスから引かれるもの
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        賞与から天引きされるのは次の4つです。<strong>住民税は含まれません</strong>。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">項目</th>
              <th className="border border-gray-200 px-3 py-2">料率の目安（本人負担）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">健康保険料</td>
              <td className="border border-gray-200 px-3 py-2">約5.0%</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">厚生年金保険料</td>
              <td className="border border-gray-200 px-3 py-2">9.15%</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">雇用保険料</td>
              <td className="border border-gray-200 px-3 py-2">約0.6%</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税</td>
              <td className="border border-gray-200 px-3 py-2">前月給与と扶養人数で変動（数%）</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">住民税</td>
              <td className="border border-gray-200 px-3 py-2">かからない</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        社会保険料（健康保険＋厚生年金＋雇用保険）の合計は約
        <strong>14.7%</strong>。40歳以上は介護保険料（約0.8%）が加わり約15.5%になります。健康保険料は加入先の健保組合や都道府県で料率が異なります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        額面50万円ボーナスの内訳
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        額面50万円・前月給与25万円（社会保険料控除後）・扶養なしのケースで計算すると次のようになります。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">項目</th>
              <th className="border border-gray-200 px-3 py-2">金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">健康保険料（5.0%）</td>
              <td className="border border-gray-200 px-3 py-2">約25,000円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">厚生年金保険料（9.15%）</td>
              <td className="border border-gray-200 px-3 py-2">約45,750円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">雇用保険料（0.6%）</td>
              <td className="border border-gray-200 px-3 py-2">約3,000円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">所得税（課税対象×4.084%）</td>
              <td className="border border-gray-200 px-3 py-2">約17,400円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">天引き合計</td>
              <td className="border border-gray-200 px-3 py-2">約91,150円</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-200 px-3 py-2">手取り</td>
              <td className="border border-gray-200 px-3 py-2">約408,850円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        所得税は「額面 − 社会保険料」＝426,250円に税率4.084%を掛けて算出します。手取りは約
        <strong>40.9万円</strong>、手取り率は約81.8%です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        額面別 ボーナス手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        手取り率を約80%として、額面別のボーナス手取りの目安をまとめました。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">額面</th>
              <th className="border border-gray-200 px-3 py-2">社会保険料（約14.7%）</th>
              <th className="border border-gray-200 px-3 py-2">手取り目安</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["20万円", "約2.9万円", "約16.4万円"],
              ["30万円", "約4.4万円", "約24.5万円"],
              ["50万円", "約7.4万円", "約40.9万円"],
              ["80万円", "約11.8万円", "約64.7万円"],
              ["100万円", "約14.7万円", "約80.5万円"],
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
        額面が大きくなるほど所得税率が上がるため、手取り率はやや下がります。上表は前月給与や扶養状況により前後する概算です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        所得税率の決まり方
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        賞与の所得税は「賞与に対する源泉徴収税額の算出率の表」で決まります。<strong>前月の給与（社会保険料控除後）</strong>と<strong>扶養親族の数</strong>で税率が変わり、社会保険料を引いた後のボーナスに掛けて計算します。前月給与が高いほど、また扶養が少ないほど税率は高くなります。ここで引かれるのはあくまで概算で、年末調整で年間の正しい税額に精算されます。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          あなたの年収で手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          年収を入力するだけで、税金・社会保険料の内訳と手取りがわかります。
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
        ※本記事の計算は給与収入のみ・40歳未満・協会けんぽ加入・扶養なしを想定した概算です。実際の保険料・所得税は加入先や都道府県、前月給与、扶養の状況により異なります。
      </p>
    </article>
  );
}
