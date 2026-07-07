import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "手取り計算ナビへのお問い合わせはこちらからどうぞ。",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-2 text-2xl font-bold text-gray-900">お問い合わせ</h1>
      <p className="mb-10 text-xs text-gray-400">手取り計算ナビ 運営部</p>

      <div className="space-y-6 text-sm leading-relaxed text-gray-700">
        <p>
          計算結果に関するご質問・ご意見、不具合のご報告など、お気軽にお問い合わせください。
          内容を確認のうえ、順次対応いたします。お返事までにお時間をいただく場合がございますので、あらかじめご了承ください。
        </p>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
          <p className="mb-3 text-xs text-gray-500">お問い合わせ先</p>
          <p className="text-base font-medium text-gray-800">
            準備中です。近日中に受付フォームを公開予定です。
          </p>
        </div>

        <div className="space-y-1 pt-2 text-xs text-gray-400">
          <p>※ 税務・投資に関する個別相談には対応しておりません。</p>
          <p>※ 広告・スパムメールへのご返信はしかねます。</p>
        </div>
      </div>
    </div>
  );
}
