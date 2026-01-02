
export interface BusinessMetrics {
  revenue: number;
  headcount: number;
  costPerEmployee: number;
  responseTime: number;
  coordinationHours: number;
}

export interface CalculationResults {
  hiringTax: number;
  revenueLeak: number;
  efficiency: number;
  virtualHeadcount: number;
  monthlyPenalty: number;
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Critical';
  currentRevPerEmployee: number;
  bionicRevPerEmployee: number;
  headcountGap: number;
}
