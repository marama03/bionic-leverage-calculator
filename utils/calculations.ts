
import { BusinessMetrics, CalculationResults } from '../types';

export const calculateLeverage = (metrics: BusinessMetrics): CalculationResults => {
  const { revenue: R, headcount: H, costPerEmployee: C, responseTime: L, coordinationHours: W } = metrics;

  // 1. THE HIRING TAX (Manual Coordination Waste)
  // Formula: (W / 40) * H * C
  const hiringTax = (W / 40) * H * C;

  // 2. REVENUE LEAKAGE (Speed-to-Lead Decay)
  // Formula: (R * 0.15) * (1 - 1 / (L + 1))
  const revenueLeak = (R * 0.15) * (1 - 1 / (L + 1));

  // 3. THE BIONIC CAPACITY (Virtual Headcount)
  // Formula: H * (W / 40) - uses actual manual glue percentage
  const virtualHeadcount = H * (W / 40);

  // 4. EXECUTION EFFICIENCY SCORE
  // Formula: 100 * (1 - W / 40)
  const efficiency = Math.round(100 * (1 - W / 40));

  // 5. MONTHLY PENALTY (For CTA)
  const monthlyPenalty = (hiringTax + revenueLeak) / 12;

  // Additional helper metrics for visualization
  const currentRevPerEmployee = R / H;
  const bionicRevPerEmployee = R / (H * (1 - W/40)); // Reclaiming actual manual glue time
  const headcountGap = Math.round(H * (W / 40));

  let riskLevel: 'Low' | 'Moderate' | 'High' | 'Critical' = 'Low';
  if (L > 4 || efficiency < 60) riskLevel = 'Critical';
  else if (L > 1 || efficiency < 80) riskLevel = 'High';
  else if (L > 0.5) riskLevel = 'Moderate';

  return {
    hiringTax,
    revenueLeak,
    efficiency,
    virtualHeadcount,
    monthlyPenalty,
    riskLevel,
    currentRevPerEmployee,
    bionicRevPerEmployee,
    headcountGap
  };
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
};
