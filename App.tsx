import React, { useState } from 'react';
import { BusinessMetrics, CalculationResults } from './types';
import { InputSection } from './components/InputSection';
import { ResultsSection } from './components/ResultsSection';
import { calculateLeverage } from './utils/calculations';

const App: React.FC = () => {
  const [metrics, setMetrics] = useState<BusinessMetrics>({
    revenue: 12000000,
    headcount: 45,
    costPerEmployee: 100000,
    responseTime: 4,
    coordinationHours: 12,
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleCalculate = () => {
    const calcResults = calculateLeverage(metrics);
    setResults(calcResults);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setResults(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans antialiased flex flex-col items-center px-4 pt-20">
      {/* Page Wrapper */}
      <main className="pb-32 w-full max-w-[900px] flex flex-col items-center text-center">
        {!results ? (
          <>
            <h1 className="text-[42px] md:text-[52px] font-extrabold text-brand-navy mb-[25px] tracking-[-1.5px] leading-[1.1]">
              Quantify Your <span className="hiring-tax-span">Hiring Tax</span>
            </h1>
            <p className="text-[18px] text-brand-muted font-normal max-w-[820px] mx-auto leading-[1.6] mb-[60px]">
              Your current operation is effectively a <strong>hidden tax</strong> on your wealth. Identify the Execution Drag currently anchoring your profitability and define the path to high-velocity output.
            </p>
            <InputSection 
              metrics={metrics} 
              setMetrics={setMetrics} 
              onCalculate={handleCalculate} 
            />
          </>
        ) : (
          <ResultsSection results={results} metrics={metrics} onReset={handleReset} />
        )}
      </main>

      {/* Centered Legal Footer */}
      <footer className="w-full py-16 border-t border-brand-border bg-white flex flex-col items-center">
        <div className="text-center text-[10px] text-[#bbbbbb] uppercase tracking-[1.5px] leading-[2] font-semibold">
          AOS ARCHITECTURE & PRIVATE INTELLIGENCE LAYERS<br />
          RESERVED FOR ORGANIZATIONS WITH $5M+ IN ANNUAL REVENUE.
        </div>
        <div className="mt-4 text-[10px] uppercase tracking-[0.3em] font-extrabold text-brand-navy opacity-40">
          &copy; {new Date().getFullYear()} Daniel Marama. All Rights Reserved. 
        </div>
      </footer>
    </div>
  );
};

export default App;