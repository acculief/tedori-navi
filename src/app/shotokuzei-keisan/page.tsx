import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "所得税の計算方法｜税率表と年収別の早見表",
  description:
    "所得税は「課税所得×税率−控除額」で計算します。給与所得控除・基礎控除・社会保険料控除を引いた課税所得に5〜45%の7段階の税率を適用。速算表と年収別の早見表でわかりやすく解説します。",
  alternates: { canonical: "/shotokuzei-keisan/" },
};

const faqs = [
  {
    q: "所得税はどうやって計算しますか？",
    a: "給与収入から給与所得控除を引いて「給与所得」を出し、そこから基礎控除・社会保険料控除などを差し引いた「課税所得」に税率を掛けます。税率は課税所得に応じて5〜45%の7段階で、速算表の控除額を引いたうえで復興特別所得税2.1%を加えた額が、実際に納める所得税です。",
  },
  {
    q: "所得税と住民税の違いは何ですか？",
    a: "所得税は国に納める税金で、課税所得に応じて5〜45%の累進税率がかかります。住民税は自治体に納める税金で、税率はほぼ一律10%です。所得税はその年の所得に対して課され、住民税は前年の所得をもとに翌年課される点も異なります。",
  },
  {
    q: "課税所得はどこを見ればわかりますか？",
    a: "会社員なら年末に受け取る「源泉徴収票」でわかります。『給与所得控除後の金額』から『所得控除の額の合計額』を引いた金額が課税所得です。この額に税率を掛けると、その年の所得税が計算できます。",
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
        所得税の計算方法｜税率表と年収別の早見表
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        所得税は<strong>「課税所得 × 税率 − 控除額」</strong>で計算します。ポイントは、額面（給与収入）にそのまま税率を掛けるのではなく、
        <strong>各種控除を引いたあとの「課税所得」</strong>に対して課される点です。たとえば年収500万円の独身会社員なら、所得税は
        <strong>年間およそ14万円</strong>。この記事では、その計算の流れ・税率表（速算表）・年収別の早見表を順に見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        所得税を計算する4ステップ
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        会社員の所得税は、次の順番で求めます。
      </p>
      <ol className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>1. 給与所得を出す：</strong>給与収入 −
          給与所得控除。給与所得控除は年収に応じて決まる「みなし経費」で、年収500万円なら144万円です。
        </li>
        <li>
          <strong>2. 課税所得を出す：</strong>給与所得 −
          所得控除（基礎控除48万円・社会保険料控除・配偶者控除・扶養控除など）。ここで課税の対象になる金額が確定します。
        </li>
        <li>
          <strong>3. 税率を掛ける：</strong>課税所得 × 税率 −
          速算表の控除額。税率は5〜45%の7段階です（下表）。
        </li>
        <li>
          <strong>4. 復興特別所得税を足す：</strong>
          求めた税額に2.1%を上乗せ（2037年まで）。これが実際に納める所得税です。
        </li>
      </ol>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        所得税の速算表（税率表）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        課税所得に応じて、以下の税率と控除額を使います。「課税所得 × 税率 − 控除額」で一度に計算できるため速算表と呼ばれます。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">課税所得</th>
              <th className="border border-gray-200 px-3 py-2">税率</th>
              <th className="border border-gray-200 px-3 py-2">控除額</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["195万円以下", "5%", "0円"],
              ["195万〜330万円", "10%", "97,500円"],
              ["330万〜695万円", "20%", "427,500円"],
              ["695万〜900万円", "23%", "636,000円"],
              ["900万〜1,800万円", "33%", "1,536,000円"],
              ["1,800万〜4,000万円", "40%", "2,796,000円"],
              ["4,000万円超", "45%", "4,796,000円"],
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
        日本の所得税は<strong>累進課税</strong>で、課税所得が増えた分だけ高い税率がかかります。ただし全体に高い税率がかかるのではなく、超えた部分にだけ上の税率が適用されるため、速算表の控除額でその調整をしています。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収500万円で実際に計算してみる
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        独身・40歳未満・協会けんぽ加入の会社員を例に、4ステップをたどってみます。
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
              <td className="border border-gray-200 px-3 py-2">給与収入</td>
              <td className="border border-gray-200 px-3 py-2">5,000,000円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">− 給与所得控除</td>
              <td className="border border-gray-200 px-3 py-2">1,440,000円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">＝ 給与所得</td>
              <td className="border border-gray-200 px-3 py-2">3,560,000円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">− 社会保険料控除</td>
              <td className="border border-gray-200 px-3 py-2">約737,500円</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">− 基礎控除</td>
              <td className="border border-gray-200 px-3 py-2">480,000円</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">＝ 課税所得</td>
              <td className="border border-gray-200 px-3 py-2">約2,342,000円</td>
            </tr>
            <tr className="bg-primary-50 font-bold">
              <td className="border border-gray-200 px-3 py-2">所得税（復興税込み）</td>
              <td className="border border-gray-200 px-3 py-2">約14.0万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        課税所得234.2万円は「195万〜330万円」の区分なので税率10%。234.2万円 × 10% − 9.75万円 ＝
        <strong>約13.7万円</strong>、これに復興特別所得税2.1%を足して<strong>約14.0万円</strong>となります。額面500万円に対する所得税の割合は約2.8%で、思ったより低いと感じる人も多いはずです。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          自分の所得税と手取りをまとめて計算
        </p>
        <p className="mt-1 text-sm text-gray-600">
          年収を入力するだけで、所得税・住民税・社会保険料の内訳と手取り額が一度にわかります。
        </p>
        <Link href="/" className="btn-primary mt-4">
          手取り計算機を使う
        </Link>
      </div>

      <h2 className="mt-12 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        年収別の所得税 早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        独身・40歳未満・協会けんぽ加入の会社員の場合、年収ごとの所得税の目安は次のとおりです。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">年収</th>
              <th className="border border-gray-200 px-3 py-2">課税所得の目安</th>
              <th className="border border-gray-200 px-3 py-2">所得税（年）</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["300万円", "約104万円", "約5.6万円"],
              ["400万円", "約169万円", "約8.6万円"],
              ["500万円", "約234万円", "約14.0万円"],
              ["600万円", "約316万円", "約20.6万円"],
              ["700万円", "約388万円", "約31.7万円"],
              ["800万円", "約446万円", "約47.4万円"],
              ["1000万円", "約614万円", "約84.9万円"],
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
        年収が上がるほど所得税は急に増えます。これは累進課税に加え、課税所得が高い税率の区分に入っていくためです。年収700万円あたりから税率20%、900万円を超えると一部が23%の区分にかかってきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        所得税を抑えるには「控除」を増やす
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        所得税は課税所得に税率を掛けて決まるため、<strong>所得控除を増やして課税所得を下げる</strong>のが基本の節税です。会社員が使いやすい主な控除は次のとおりです。
      </p>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>iDeCo（小規模企業共済等掛金控除）：</strong>掛金の全額が所得控除になり、課税所得を直接下げられます。
        </li>
        <li>
          <strong>生命保険料控除・地震保険料控除：</strong>加入している保険に応じて一定額を控除。
        </li>
        <li>
          <strong>医療費控除：</strong>年間の医療費が10万円を超えた分を控除（確定申告が必要）。
        </li>
        <li>
          <strong>ふるさと納税（寄附金控除）：</strong>実質2,000円の負担で自己負担分を超えた寄附額が控除対象になります。
        </li>
      </ul>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        これらは所得税だけでなく住民税の軽減にもつながります。どれだけ手取りが変わるかは、控除額を加味して計算機で確かめるのが確実です。
      </p>

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
        ※本記事の計算は給与収入のみ・40歳未満・協会けんぽ加入を想定した概算です。実際の税額は各種控除の適用状況や自治体、加入先により異なります。速算表は2026年（令和8年）時点の所得税率にもとづきます。
      </p>
    </article>
  );
}
