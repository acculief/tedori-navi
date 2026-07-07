import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "運営について",
  description:
    "手取り計算ナビのサイト概要・運営者情報・免責事項・プライバシーポリシーです。",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-2 text-2xl font-bold text-gray-900">運営について</h1>
      <p className="mb-10 text-xs text-gray-400">最終更新日：2026年7月</p>

      <div className="space-y-10 text-sm leading-relaxed text-gray-700">
        <section>
          <h2 className="mb-3 border-b border-gray-200 pb-1 text-base font-bold text-gray-900">
            サイトについて
          </h2>
          <p>
            「手取り計算ナビ」は、年収を入力するだけで手取り額・所得税・住民税・社会保険料の内訳を計算できる無料ツールです。
            年収別の手取り早見表や、社会保険料・ふるさと納税の上限額の解説など、給与所得者が自分のお金を把握するためのコンテンツを提供しています。
            すべての機能・記事は無料でご利用いただけます。
          </p>
        </section>

        <section>
          <h2 className="mb-3 border-b border-gray-200 pb-1 text-base font-bold text-gray-900">
            運営者情報
          </h2>
          <table className="w-full border-collapse text-sm">
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="whitespace-nowrap py-2.5 pr-4 text-gray-500">
                  サイト名
                </td>
                <td className="py-2.5">手取り計算ナビ</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="whitespace-nowrap py-2.5 pr-4 text-gray-500">
                  運営
                </td>
                <td className="py-2.5">手取り計算ナビ 運営部</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-2.5 pr-4 text-gray-500">
                  お問い合わせ
                </td>
                <td className="py-2.5">
                  <a
                    href="/contact/"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    お問い合わせページ
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="mb-3 border-b border-gray-200 pb-1 text-base font-bold text-gray-900">
            免責事項
          </h2>
          <p>
            当サイトの計算結果および掲載情報は、一定の前提（給与収入のみ・協会けんぽ加入・40歳未満など）に基づく概算です。
            実際の税額・社会保険料は、加入する健康保険組合や自治体、各種控除の適用状況によって異なります。
            正確な金額については、勤務先・税務署・お住まいの自治体等にご確認ください。当サイトの情報の利用によって生じたいかなる損害についても、運営者は責任を負いかねます。
          </p>
        </section>

        <section>
          <h2 className="mb-3 border-b border-gray-200 pb-1 text-base font-bold text-gray-900">
            プライバシーポリシー
          </h2>
          <p>
            当サイトでは、アクセス解析ツール（Google
            アナリティクス等）を利用する場合があります。これらはトラフィックデータ収集のために
            Cookie
            を使用しますが、個人を特定する情報は含まれません。ブラウザの設定により
            Cookie の使用を無効にすることができます。
          </p>
        </section>
      </div>
    </div>
  );
}
