import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "厚生年金保険料はいくら？計算方法と早見表",
  description:
    "厚生年金の保険料率は18.3％で会社と折半、本人負担は9.15％。標準報酬月額30万円なら本人負担は月27,450円。計算方法と標準報酬月額別の早見表、ボーナスの扱いまで解説します。",
  alternates: { canonical: "/kousei-nenkin-hokenryou/" },
};

const faqs = [
  {
    q: "厚生年金保険料は全額自分で払うのですか？",
    a: "いいえ。厚生年金の保険料率は18.3％ですが、会社と従業員で半分ずつ負担する「労使折半」です。給与から天引きされるのは本人負担分の9.15％で、残りは会社が支払っています。",
  },
  {
    q: "標準報酬月額とは何ですか？",
    a: "毎月の給与を区切りのよい金額に当てはめた等級のことです。4〜6月の給与の平均をもとに1〜32等級に分類し、その等級の金額に保険料率をかけて保険料を計算します。残業代や通勤手当も含めて算定されます。",
  },
  {
    q: "厚生年金保険料に上限はありますか？",
    a: "あります。標準報酬月額は65万円が上限（最高等級）で、それ以上の給与でも保険料は増えません。本人負担は月59,475円、年間で約71.4万円が上限です。",
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
        厚生年金保険料はいくら？計算方法と早見表
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        厚生年金の保険料率は<strong>18.3％</strong>ですが、会社と折半するため
        <strong>本人負担は9.15％</strong>です。たとえば標準報酬月額30万円の人なら、
        毎月の本人負担は<strong>27,450円</strong>（年間約32.9万円）。給与明細で「厚生年金」として天引きされているのがこの金額です。この記事では計算のしくみと、給与水準ごとの早見表を見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        厚生年金保険料の計算方法
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        厚生年金保険料は、給与そのものではなく「標準報酬月額」という等級ごとの金額に保険料率をかけて計算します。式にすると次のとおりです。
      </p>
      <div className="mt-4 rounded-2xl bg-gray-50 p-4 text-center text-sm font-bold text-gray-900">
        標準報酬月額 × 18.3％ ÷ 2 ＝ 毎月の本人負担
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        保険料率18.3％は2017年以降、全国一律で固定されています。標準報酬月額は毎年4〜6月の給与（残業代・各種手当を含む）の平均をもとに決まり、1〜32等級に区分されます。したがって、昇給や残業の増減で等級が変わると保険料も変わります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        標準報酬月額別の保険料早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        主な標準報酬月額の本人負担分（9.15％）は次のとおりです。会社負担分も同額なので、実際には表の2倍が納められています。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">標準報酬月額</th>
              <th className="border border-gray-200 px-3 py-2">本人負担（月）</th>
              <th className="border border-gray-200 px-3 py-2">本人負担（年）</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["20万円", "18,300円", "約22.0万円"],
              ["24万円", "21,960円", "約26.4万円"],
              ["28万円", "25,620円", "約30.7万円"],
              ["30万円", "27,450円", "約32.9万円"],
              ["36万円", "32,940円", "約39.5万円"],
              ["41万円", "37,515円", "約45.0万円"],
              ["47万円", "43,005円", "約51.6万円"],
              ["50万円", "45,750円", "約54.9万円"],
              ["59万円", "53,985円", "約64.8万円"],
              ["65万円（上限）", "59,475円", "約71.4万円"],
            ].map((row, i) => (
              <tr
                key={row[0]}
                className={i === 9 ? "bg-primary-50 font-bold" : i % 2 ? "bg-gray-50" : ""}
              >
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
        標準報酬月額は65万円が上限（最高等級）です。月給がそれ以上でも本人負担は月59,475円で頭打ちになり、年間の負担は約71.4万円が上限になります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        ボーナスにかかる厚生年金保険料
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        賞与からも厚生年金保険料が引かれます。こちらは月給とは別に、1,000円未満を切り捨てた「標準賞与額」に同じ料率をかけます。
      </p>
      <div className="mt-4 rounded-2xl bg-gray-50 p-4 text-center text-sm font-bold text-gray-900">
        標準賞与額 × 18.3％ ÷ 2 ＝ ボーナスの本人負担
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        たとえば額面50万円のボーナスなら、本人負担は50万円 × 9.15％ ＝ 約45,750円です。なお標準賞与額には1か月あたり150万円という上限があります。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        知っておきたい注意点
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
        <li>
          保険料率18.3％は<strong>労使折半</strong>。給与から引かれるのは半分の9.15％だけで、会社が同額を上乗せして納めています。
        </li>
        <li>
          標準報酬月額は4〜6月の給与で決まるため、この時期に残業が多いと1年間の保険料が上がりやすくなります。
        </li>
        <li>
          40歳以上になると別途<strong>介護保険料</strong>が健康保険に上乗せされますが、厚生年金保険料そのものは年齢で変わりません。
        </li>
        <li>
          国民年金（自営業者などが加入・定額）と違い、厚生年金は<strong>給与に比例</strong>して負担も将来の年金額も増えます。
        </li>
      </ul>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          社会保険料を引いた手取りを計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          厚生年金・健康保険・税金をまとめて差し引いた手取り額が、年収を入力するだけでわかります。
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
        ※本記事は協会けんぽ・2026年度の保険料率18.3％をもとにした概算です。標準報酬月額の等級区分や実際の保険料は、加入先や算定時期により異なります。
      </p>
    </article>
  );
}
