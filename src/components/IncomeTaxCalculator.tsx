"use client";

import { useState, useMemo, useCallback } from "react";
import NumberInput from "@/components/NumberInput";
import { trackEvent } from "@/lib/analytics";
import {
  calcTakeHome,
  FAMILY_PATTERNS,
  getFamilyLabel,
  type FamilyPattern,
} from "@/lib/income-tax";

function man(yen: number): string {
  return Math.round(yen / 10_000).toLocaleString();
}

export default function IncomeTaxCalculator() {
  const [income, setIncome] = useState(500); // 万円
  const [family, setFamily] = useState<FamilyPattern>("single");

  const gross = Math.max(0, income) * 10_000;
  const r = useMemo(() => calcTakeHome(gross, family), [gross, family]);

  const handleIncome = useCallback((v: number) => {
    const clamped = Math.min(5000, Math.max(0, v));
    setIncome(clamped);
    trackEvent("income_calc", { income: clamped });
  }, []);

  // 額面に対する各項目の構成比（バー用）
  const pct = (v: number) => (gross > 0 ? (v / gross) * 100 : 0);

  return (
    <div className="rounded-2xl border-2 border-primary-200 bg-white p-5 shadow-sm sm:p-6">
      {/* 入力 */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-8">
        <div className="flex-1">
          <label
            htmlFor="income-input"
            className="block text-sm font-bold text-gray-800"
          >
            年収（額面）
          </label>
          <div className="mt-2 flex items-center gap-2">
            <NumberInput
              id="income-input"
              value={income}
              onValueChange={handleIncome}
              min={0}
              max={5000}
              step={10}
              className="w-32 rounded-lg border border-gray-300 px-3 py-2 text-right text-lg font-bold text-gray-900 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
              aria-label="年収（万円）"
            />
            <span className="text-sm font-medium text-gray-600">万円</span>
          </div>
          <input
            type="range"
            min={100}
            max={2000}
            step={10}
            value={Math.min(2000, income)}
            onChange={(e) => handleIncome(Number(e.target.value))}
            className="mt-3 w-full accent-primary-600"
            aria-label="年収スライダー"
          />
        </div>

        <div>
          <span className="block text-sm font-bold text-gray-800">
            家族構成
          </span>
          <div className="mt-2 inline-flex rounded-lg border border-gray-300 p-0.5">
            {FAMILY_PATTERNS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => {
                  setFamily(f);
                  trackEvent("income_calc_family", { family: f });
                }}
                className={
                  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors " +
                  (family === f
                    ? "bg-primary-600 text-white"
                    : "text-gray-600 hover:bg-gray-100")
                }
                aria-pressed={family === f}
              >
                {getFamilyLabel(f)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 結果 */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-primary-50 p-4 text-center">
          <p className="text-xs font-medium text-primary-700">手取り（月額）</p>
          <p className="mt-1 text-3xl font-extrabold text-primary-800">
            {man(r.takeHomeMonthly)}
            <span className="ml-0.5 text-base font-bold">万円</span>
          </p>
        </div>
        <div className="rounded-xl bg-gray-50 p-4 text-center">
          <p className="text-xs font-medium text-gray-600">手取り（年額）</p>
          <p className="mt-1 text-3xl font-extrabold text-gray-800">
            {man(r.takeHomeAnnual)}
            <span className="ml-0.5 text-base font-bold">万円</span>
          </p>
        </div>
        <div className="rounded-xl bg-gray-50 p-4 text-center">
          <p className="text-xs font-medium text-gray-600">手取り率</p>
          <p className="mt-1 text-3xl font-extrabold text-gray-800">
            {r.takeHomeRate}
            <span className="ml-0.5 text-base font-bold">%</span>
          </p>
        </div>
      </div>

      {/* 構成バー */}
      <div className="mt-5">
        <div className="flex h-6 w-full overflow-hidden rounded-lg text-[10px] font-bold leading-6 text-white">
          <div
            className="bg-primary-600 text-center"
            style={{ width: `${pct(r.takeHomeAnnual)}%` }}
            title="手取り"
          >
            手取り
          </div>
          <div
            className="bg-amber-500 text-center"
            style={{ width: `${pct(r.socialInsurance.total)}%` }}
            title="社会保険料"
          />
          <div
            className="bg-rose-500 text-center"
            style={{ width: `${pct(r.incomeTax)}%` }}
            title="所得税"
          />
          <div
            className="bg-rose-700 text-center"
            style={{ width: `${pct(r.residentTax)}%` }}
            title="住民税"
          />
        </div>
        <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm sm:grid-cols-4">
          <div className="flex justify-between sm:block">
            <dt className="text-gray-500">社会保険料</dt>
            <dd className="font-bold text-gray-800">{man(r.socialInsurance.total)}万円</dd>
          </div>
          <div className="flex justify-between sm:block">
            <dt className="text-gray-500">所得税</dt>
            <dd className="font-bold text-gray-800">{man(r.incomeTax)}万円</dd>
          </div>
          <div className="flex justify-between sm:block">
            <dt className="text-gray-500">住民税</dt>
            <dd className="font-bold text-gray-800">{man(r.residentTax)}万円</dd>
          </div>
          <div className="flex justify-between sm:block">
            <dt className="text-gray-500">天引き合計</dt>
            <dd className="font-bold text-gray-800">{man(r.totalDeductions)}万円</dd>
          </div>
        </dl>
      </div>

      <p className="mt-4 text-[11px] text-gray-400">
        ※給与収入のみ・40歳未満・協会けんぽ加入を想定した概算。ふるさと納税・iDeCo・住宅ローン控除等は未考慮。
      </p>
    </div>
  );
}
