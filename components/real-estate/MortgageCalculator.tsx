"use client";

import { useMemo, useState } from "react";
import { formatPrice } from "@/lib/format";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

export function MortgageCalculator({
  defaultPrice = 500000,
}: {
  defaultPrice?: number;
}) {
  const [price, setPrice] = useState(defaultPrice);
  const [downPercent, setDownPercent] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const monthly = useMemo(() => {
    const down = price * (downPercent / 100);
    const principal = price - down;
    const monthlyRate = rate / 100 / 12;
    const n = years * 12;
    if (monthlyRate === 0) return principal / n;
    return (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1)
    );
  }, [price, downPercent, rate, years]);

  return (
    <Card className="p-6">
      <h3 className="font-display text-xl text-estate-charcoal">
        Mortgage Calculator
      </h3>
      <p className="mt-1 text-xs text-estate-charcoal/55">
        Estimate monthly payments. For planning only — not a loan offer.
      </p>

      <div className="mt-5 grid gap-3">
        <label className="grid gap-1">
          <span className="text-xs text-estate-charcoal/60">Home price</span>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </label>
        <label className="grid gap-1">
          <span className="text-xs text-estate-charcoal/60">
            Down payment (%)
          </span>
          <Input
            type="number"
            value={downPercent}
            onChange={(e) => setDownPercent(Number(e.target.value))}
          />
        </label>
        <label className="grid gap-1">
          <span className="text-xs text-estate-charcoal/60">
            Interest rate (%)
          </span>
          <Input
            type="number"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </label>
        <label className="grid gap-1">
          <span className="text-xs text-estate-charcoal/60">Loan term</span>
          <Select
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
          >
            <option value={15}>15 years</option>
            <option value={20}>20 years</option>
            <option value={30}>30 years</option>
          </Select>
        </label>
      </div>

      <div className="mt-5 rounded-xl bg-estate-beige p-4 text-center">
        <p className="text-xs text-estate-charcoal/55">Estimated monthly</p>
        <p className="mt-1 text-2xl font-semibold text-estate-charcoal">
          {formatPrice(Math.round(monthly))}
          <span className="text-sm font-normal text-estate-charcoal/50">
            /mo
          </span>
        </p>
      </div>
    </Card>
  );
}
