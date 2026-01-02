import React from 'react';
import { CalculationResults, BusinessMetrics } from '../types';
import { formatCurrency } from '../utils/calculations';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface ResultsSectionProps {
  results: CalculationResults;
  metrics: BusinessMetrics;
  onReset: () => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ results, metrics, onReset }) => {
  const chartData = [
    { name: 'Current Output', value: results.currentRevPerEmployee },
    { name: 'Bionic Potential', value: results.bionicRevPerEmployee },
  ];

  return (
    <div className="max-w-6xl w-full py-8 md:py-12 px-0 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      {/* Report Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 pb-6 md:pb-10 border-b-4 border-brand-navy text-left">
        <div className="w-full md:w-auto">
          <span className="bg-brand-red text-white px-3 py-1 md:px-4 md:py-1.5 text-[9px] md:text-[10px] font-extrabold uppercase tracking-[0.3em] md:tracking-[0.4em] inline-block mb-3 md:mb-0">Confidential Diagnostic Output</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy mt-2 md:mt-6 uppercase tracking-tighter leading-none break-words">Your AI Leverage Snapshot</h2>
          <p className="text-brand-muted mt-3 md:mt-4 font-bold text-[10px] md:text-xs uppercase tracking-widest break-all">Diagnostic ID: AUDIT-{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
        </div>
        <button onClick={onReset} className="mt-6 md:mt-0 w-full md:w-auto px-6 py-3 md:px-8 border-2 border-brand-navy text-brand-navy text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-brand-navy hover:text-white transition-all duration-300">
          Refine Parameters
        </button>
      </div>

      {/* Hero Callout - Moment of Dissonance */}
      <div className="bg-brand-navy text-white p-8 md:p-16 rounded-[4px] mb-10 md:mb-16 shadow-[0_20px_40px_-10px_rgba(0,0,34,0.4)] md:shadow-[0_40px_80px_-15px_rgba(0,0,34,0.4)] flex flex-col md:flex-row items-center gap-8 md:gap-12 border-l-[12px] md:border-l-[24px] border-brand-red relative overflow-hidden text-left">
        <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-brand-red rounded-full opacity-5 -translate-y-1/2 translate-x-1/2 blur-[80px]"></div>
        <div className="text-center md:text-left relative z-10 w-full md:w-auto border-b border-white/10 md:border-b-0 pb-6 md:pb-0">
          <div className="text-6xl md:text-9xl font-extrabold mb-2 leading-none text-brand-red">{results.efficiency}%</div>
          <div className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.3em] md:tracking-[0.5em] text-white opacity-60">Execution Capacity</div>
        </div>
        <div className="flex-1 text-lg md:text-4xl font-light leading-snug italic relative z-10 text-center md:text-left">
          "Your current operation is running at <span className="font-extrabold text-brand-red underline decoration-brand-orange decoration-thickness-2 md:decoration-thickness-4">{results.efficiency}% capacity</span> due to Headcount Dependency."
        </div>
      </div>

      {/* The 3 Core Pillars - Clinical & Brutal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-12 md:mb-20 text-left">
        <div className="bg-white p-6 md:p-8 rounded-sm border border-brand-border shadow-xl flex flex-col h-full border-t-8 border-t-brand-red hover:-translate-y-2 transition-transform duration-500">
          <h4 className="text-[10px] md:text-[11px] font-extrabold uppercase text-brand-red tracking-[0.1em] md:tracking-[0.3em] mb-4 md:mb-6 flex items-center gap-2 whitespace-nowrap">
            1. The Hiring Tax
          </h4>
          <div className="mb-6 md:mb-8 pb-6 md:pb-8 border-b border-brand-border">
            <div className="text-[9px] md:text-[10px] font-extrabold text-brand-red uppercase tracking-widest mb-2 opacity-60">Hidden Payroll Leak</div>
            <div className="text-2xl md:text-4xl font-extrabold text-brand-navy tracking-tight">{formatCurrency(results.hiringTax)} <span className="text-xs text-brand-muted">/ Year</span></div>
          </div>
          <p className="text-xs md:text-sm text-brand-navy leading-relaxed font-medium">
            You are currently paying a six-figure <span className="font-bold text-brand-red">"Manual Labor" penalty</span>. This is capital spent on manual coordination and administrative noise that an AI Operating System handles with zero friction.
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-sm border-2 border-brand-red shadow-2xl flex flex-col h-full relative overflow-hidden group border-t-8 border-t-brand-red hover:-translate-y-2 transition-transform duration-500">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
          <h4 className="text-[10px] md:text-[11px] font-extrabold uppercase text-brand-red tracking-[0.1em] md:tracking-[0.3em] mb-4 md:mb-6 flex items-center gap-2 whitespace-nowrap">
            2. Revenue At-Risk
          </h4>
          <div className="mb-6 md:mb-8 pb-6 md:pb-8 border-b border-brand-border">
            <div className="text-[9px] md:text-[10px] font-extrabold text-brand-red uppercase tracking-widest mb-2 opacity-60">Response Latency Decay</div>
            <div className="text-2xl md:text-4xl font-extrabold text-brand-red tracking-tight">{formatCurrency(results.revenueLeak)} <span className="text-[10px] md:text-xs text-brand-muted opacity-60">/ Year</span></div>
          </div>
          <p className="text-xs md:text-sm text-brand-navy leading-relaxed font-medium">
            Based on your <span className="font-bold">{metrics.responseTime} hour lag</span>, you are leaving substantial revenue on the table. Leads responded to within 5 minutes convert at 21x the rate of your current lag.
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-sm border border-brand-border shadow-xl flex flex-col h-full border-t-8 border-t-brand-orange hover:-translate-y-2 transition-transform duration-500">
          <h4 className="text-[10px] md:text-[11px] font-extrabold uppercase text-brand-orange tracking-[0.1em] md:tracking-[0.3em] mb-4 md:mb-6 flex items-center gap-2 whitespace-nowrap">
            3. Bionic Capacity
          </h4>
          <div className="mb-6 md:mb-8 pb-6 md:pb-8 border-b border-brand-border">
            <div className="text-[9px] md:text-[10px] font-extrabold text-brand-orange uppercase tracking-widest mb-2 opacity-60">Virtual Capacity Unlock</div>
            <div className="text-2xl md:text-4xl font-extrabold text-brand-navy tracking-tight">{results.virtualHeadcount.toFixed(1)} <span className="text-xl md:text-2xl">Virtual Heads</span></div>
          </div>
          <p className="text-xs md:text-sm text-brand-navy leading-relaxed font-medium">
            By installing a private Intelligence Layer, you unlock significant virtual capacity, allowing you to scale without adding to your headcount.
          </p>
        </div>
      </div>

      {/* Chart and Delta Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-24 items-center text-left">
        <div className="lg:col-span-7 bg-white p-6 md:p-12 rounded-sm shadow-2xl border border-brand-border relative">
          <h3 className="text-base md:text-2xl font-extrabold text-brand-navy mb-6 tracking-tight italic whitespace-nowrap">Architecture Audit: Output per FTE</h3>
          <p className="text-brand-muted text-[8px] md:text-[10px] font-extrabold uppercase tracking-[0.1em] md:tracking-[0.3em] mb-8 md:mb-12 whitespace-nowrap">Comparative Benchmark: Legacy vs. Bionic Scale</p>
          <div className="h-[300px] md:h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#000022', fontSize: 10, fontWeight: 900 }} dy={10} />
                <YAxis hide />
                <Tooltip
                  cursor={{ fill: '#f9f9f9' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-brand-navy text-white p-4 md:p-6 rounded-sm shadow-2xl border-b-8 border-brand-red">
                          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-extrabold mb-2 opacity-60">Value Creation / FTE</p>
                          <p className="text-2xl md:text-3xl font-extrabold italic">{formatCurrency(payload[0].value as number)}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="value" radius={[0, 0, 0, 0]} barSize={80}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#000022' : '#ef4124'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 md:space-y-10">
          <div className="p-6 md:p-10 bg-[#f8f8f8] rounded-sm border-l-[8px] md:border-l-[12px] border-brand-navy shadow-inner relative overflow-hidden group">
            <h5 className="text-[8px] md:text-[10px] font-extrabold text-brand-navy uppercase tracking-[0.1em] md:tracking-[0.4em] mb-6 md:mb-10 flex items-center gap-3 whitespace-nowrap">
              Internal Performance Delta
            </h5>
            <p className="text-lg md:text-3xl text-brand-navy font-bold leading-snug">
              "Your current team has <span className="font-extrabold text-brand-red">{results.virtualHeadcount.toFixed(0)} virtual heads</span> currently trapped in coordination cycles."
            </p>
          </div>

          <div className="p-6 md:p-10 bg-white border border-brand-border rounded-sm shadow-xl relative overflow-hidden group border-t-8 border-t-brand-orange">
            <div className="text-[10px] md:text-xs font-extrabold uppercase tracking-[0.3em] text-brand-orange mb-3 md:mb-4">Target: The 1:10 Bionic Ratio</div>
            <p className="text-sm md:text-base text-brand-navy font-medium leading-relaxed italic">
              "Achieving a 1:10 Bionic Ratio is a matter of <span className="font-bold underline text-brand-red">Private Intelligence Infrastructure</span>."
            </p>
          </div>
        </div>
      </div>

      {/* The Close */}
      <div className="bg-brand-navy text-white rounded-[4px] p-8 md:p-24 text-center relative shadow-[0_30px_60px_-15px_rgba(0,0,34,0.5)] md:shadow-[0_60px_120px_-20px_rgba(0,0,34,0.5)] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow"></div>
        <div className="relative z-10">
          <h3 className="text-2xl md:text-6xl font-extrabold mb-6 md:mb-10 uppercase tracking-tighter leading-tight md:leading-none">Stop Managing Noise. <br /> Start Architecting Leverage.</h3>

          <div className="max-w-4xl mx-auto space-y-6 md:space-y-10 mb-10 md:mb-16 text-lg md:text-2xl font-light leading-relaxed text-gray-300">
            <p>
              These numbers represent your <span className="text-white font-extrabold underline decoration-brand-red decoration-thickness-2 md:decoration-thickness-4">Cost of Delay</span>. Every week you operate without a private AOS, you pay a manual labor penalty.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 md:gap-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-5xl">
              <div className="text-center md:text-left px-0 md:px-12 py-0 md:py-6 border-b-2 md:border-b-0 md:border-r-2 border-white/10 w-full md:w-auto pb-6 md:pb-0">
                <div className="text-[10px] md:text-[11px] font-extrabold text-brand-red uppercase tracking-[0.4em] mb-2">Monthly Penalty</div>
                <div className="text-3xl md:text-5xl font-extrabold italic">{formatCurrency(results.monthlyPenalty)}</div>
              </div>
              <div className="flex-1 flex justify-center md:justify-start w-full">
                <button
                  onClick={() => window.open('https://ai.google.dev/gemini-api/docs/billing', '_blank')}
                  className="cta-button group bg-brand-red text-white w-full md:w-auto px-6 py-5 md:px-14 md:py-8 rounded-sm text-lg md:text-3xl font-extrabold uppercase tracking-[0.2em] md:tracking-[0.4em] flex items-center justify-center gap-4"
                >
                  <span>Execute Leverage Audit</span>
                  <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <div className="text-brand-red font-extrabold text-2xl md:text-3xl italic">$7,500</div>
              <p className="text-[8px] md:text-[10px] font-extrabold uppercase tracking-[0.2em] md:tracking-[0.5em] text-gray-400 opacity-80 max-w-sm md:max-w-xl leading-relaxed">
                A two-week diagnostic to map institutional memory, identify revenue leaks, and design your private AOS Roadmap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};