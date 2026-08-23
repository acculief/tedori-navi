import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTENT_PUBLISHED_DATE } from "@/config/site";

export const metadata: Metadata = {
  title: "退職金の手取りはいくら？税金の計算方法と控除",
  description:
    "退職金は退職所得控除と1/2課税で大きく優遇され、勤続30年・2000万円なら手取りは約1959万円。退職所得控除の早見表、税金の計算4ステップ、勤続年数・金額別の手取り早見表で解説します。",
  alternates: { canonical: "/taishokukin-tedori/" },
};

const faqs = [
  {
    q: "退職金に税金はかからないって本当ですか？",
    a: "全額非課税になるのは退職金が退職所得控除の枠内に収まる場合です。勤続20年で控除は800万円、30年で1500万円あり、これを超えなければ税金はかかりません。超えた分も、さらに半分だけが課税対象になるため、給与に比べて税負担はかなり軽くなります。",
  },
  {
    q: "「退職所得の受給に関する申告書」を出さないとどうなりますか？",
    a: "この申告書を勤務先に提出しないと、退職所得控除や1/2課税が適用されず、退職金の全額に一律20.42%が源泉徴収されます。取られすぎた分は自分で確定申告すれば還付されますが、手間を避けるため退職前に必ず提出しておきましょう。",
  },
  {
    q: "勤続年数に1年未満の端数があるときはどう数えますか？",
    a: "退職所得控除の計算では、勤続年数の1年未満の端数はすべて切り上げます。たとえば勤続20年1か月なら21年として計算します。1か月でも在籍していれば1年分の控除（40万円または70万円）が上乗せされます。",
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
        退職金の手取りはいくら？税金の計算方法と控除
      </h1>
      <p className="mt-2 text-xs text-gray-400">
        公開日：{CONTENT_PUBLISHED_DATE}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        勤続30年で退職金が2000万円の場合、<strong>手取りは約1959万円</strong>です。
        額面との差はわずか約41万円。退職金は<strong>退職所得控除</strong>と
        <strong>2分の1課税</strong>という2つの優遇があるため、同じ金額を給与でもらう場合より税金が大幅に軽くなります。この記事では、なぜこれほど優遇されるのか、その計算方法と勤続年数・金額別の手取りを見ていきます。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        退職金の税金が軽い3つの理由
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        退職金（退職所得）は、長年の勤労に報いる性質から、次の3点で手厚く優遇されています。
      </p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>① 退職所得控除</strong>：勤続年数に応じて大きな控除がある。20年で800万円、30年で1500万円まで非課税。
        </li>
        <li>
          <strong>② 2分の1課税</strong>：控除を引いた後の金額を、さらに半分にしてから税率をかける。
        </li>
        <li>
          <strong>③ 分離課税</strong>：給与など他の所得と合算せず、退職金だけで税額を計算するため、税率が跳ね上がりにくい。
        </li>
      </ul>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        退職所得控除の早見表（勤続年数別）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        退職所得控除は勤続年数で決まります。20年までは1年あたり40万円、20年を超えた部分は1年あたり70万円で計算します。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">勤続年数</th>
              <th className="border border-gray-200 px-3 py-2">退職所得控除額</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["10年", "400万円"],
              ["15年", "600万円"],
              ["20年", "800万円"],
              ["25年", "1150万円"],
              ["30年", "1500万円"],
              ["35年", "1850万円"],
              ["40年", "2200万円"],
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
        計算式は、勤続20年以下が「40万円 × 勤続年数」（最低80万円）、20年超が「800万円 ＋ 70万円 ×（勤続年数 − 20年）」です。退職金がこの控除額の範囲内なら、税金はかかりません。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        手取りの計算方法（4ステップ）
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        勤続30年・退職金2000万円を例に、手取りを求める流れを見てみます。
      </p>
      <ol className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>1. 退職所得控除を引く</strong>：2000万円 − 1500万円 ＝ 500万円
        </li>
        <li>
          <strong>2. 半分にする（課税退職所得）</strong>：500万円 × 1/2 ＝ 250万円
        </li>
        <li>
          <strong>3. 所得税・住民税を計算</strong>：所得税 約15.6万円（復興特別所得税込み）、住民税 25万円（課税退職所得の10%）
        </li>
        <li>
          <strong>4. 退職金から差し引く</strong>：2000万円 − 40.6万円 ＝ <strong>手取り 約1959万円</strong>
        </li>
      </ol>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        所得税は課税退職所得250万円に速算表（税率10%・控除97,500円）を当てはめ、そこに復興特別所得税2.1%を加えた金額です。
      </p>

      <h2 className="mt-10 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        勤続年数・退職金額別の手取り早見表
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        「退職所得の受給に関する申告書」を提出済み（分離課税）の場合の手取り目安です。
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">勤続年数</th>
              <th className="border border-gray-200 px-3 py-2">退職金（額面）</th>
              <th className="border border-gray-200 px-3 py-2">税金合計</th>
              <th className="border border-gray-200 px-3 py-2">手取り</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["10年", "500万円", "約7.6万円", "約492万円"],
              ["20年", "1000万円", "約15.1万円", "約985万円"],
              ["25年", "1500万円", "約26.4万円", "約1474万円"],
              ["30年", "2000万円", "約40.6万円", "約1959万円"],
              ["38年", "2500万円", "約34.5万円", "約2466万円"],
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
        勤続38年・2500万円が30年・2000万円より税金が少ないのは、勤続年数が長いほど退職所得控除（2060万円）が大きく、課税対象がむしろ小さくなるためです。長く勤めるほど退職金は税制上有利になります。
      </p>

      <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
        <p className="text-sm font-bold text-gray-900">
          毎月の給与の手取りも計算できます
        </p>
        <p className="mt-1 text-sm text-gray-600">
          年収を入力するだけで、給与から引かれる税金・社会保険料の内訳がわかります。
        </p>
        <Link href="/" className="btn-primary mt-4">
          手取り計算機を使う
        </Link>
      </div>

      <h2 className="mt-12 border-l-4 border-primary-500 pl-3 text-xl font-bold text-gray-900">
        退職金の手取りで注意すべき点
      </h2>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700">
        <li>
          <strong>申告書の提出を忘れない</strong>：未提出だと控除も1/2課税も適用されず、全額に20.42%が源泉徴収される。
        </li>
        <li>
          <strong>iDeCo・企業型DCの一時金と合算される</strong>：退職金とiDeCoを近い時期に一時金で受け取ると、退職所得控除を共有するため課税が増えることがある。受け取る順番と時期の検討が有効。
        </li>
        <li>
          <strong>勤続5年以下の役員等・短期退職</strong>：勤続5年以下の退職金には、300万円を超える部分に1/2課税が使えないなどの制限がある。
        </li>
      </ul>

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
        ※本記事の税額は「退職所得の受給に関する申告書」を提出済み・退職金のみを受け取るケースの概算です。住民税は課税退職所得の10%（市区町村6%＋都道府県4%）、所得税には復興特別所得税2.1%を含みます。実際の金額は勤続年数の端数や他の所得の有無により異なります。
      </p>
    </article>
  );
}
