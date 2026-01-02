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
    <div className="max-w-6xl w-full py-12 px-0 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      {/* Report Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-10 border-b-4 border-brand-navy text-left">
        <div>
          <span className="bg-brand-red text-white px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.4em]">Confidential Diagnostic Output</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mt-6 uppercase tracking-tighter leading-none">Your AI Leverage Snapshot</h2>
          <p className="text-brand-muted mt-4 font-bold text-xs uppercase tracking-widest">Diagnostic ID: AUDIT-{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
        </div>
        <button onClick={onReset} className="mt-8 md:mt-0 px-8 py-3 border-2 border-brand-navy text-brand-navy text-[11px] font-extrabold uppercase tracking-[0.3em] hover:bg-brand-navy hover:text-white transition-all duration-300">
          Refine Parameters
        </button>
      </div>

      {/* Hero Callout - Moment of Dissonance */}
      <div className="bg-brand-navy text-white p-12 md:p-16 rounded-[4px] mb-16 shadow-[0_40px_80px_-15px_rgba(0,0,34,0.4)] flex flex-col md:flex-row items-center gap-12 border-l-[24px] border-brand-red relative overflow-hidden text-left">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red rounded-full opacity-5 -translate-y-1/2 translate-x-1/2 blur-[80px]"></div>
        <div className="text-center md:text-left relative z-10">
          <div className="text-8xl md:text-9xl font-extrabold mb-2 leading-none text-brand-red">{results.efficiency}%</div>
          <div className="text-[11px] font-extrabold uppercase tracking-[0.5em] text-white opacity-60">Execution Capacity</div>
        </div>
        <div className="flex-1 text-2xl md:text-4xl font-light leading-snug italic relative z-10">
          "Your current operation is running at <span className="font-extrabold text-brand-red underline decoration-brand-orange decoration-thickness-4">{results.efficiency}% capacity</span> due to Headcount Dependency."
        </div>
      </div>

      {/* The 3 Core Pillars - Clinical & Brutal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20 text-left">
        <div className="bg-white p-10 rounded-sm border border-brand-border shadow-xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-500">
          <h4 className="text-[11px] font-extrabold uppercase text-brand-navy tracking-[0.3em] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-red"></span>
            1. The Hiring Tax
          </h4>
          <div className="mb-8 pb-8 border-b border-brand-border">
            <div className="text-[10px] font-extrabold text-brand-muted uppercase tracking-widest mb-2 opacity-60">Hidden Payroll Leak</div>
            <div className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">{formatCurrency(results.hiringTax)} <span className="text-xs text-brand-muted">/ Year</span></div>
          </div>
          <p className="text-sm text-brand-navy leading-relaxed font-medium">
            You are currently paying a six-figure <span className="font-bold text-brand-red">"Manual Labor" penalty</span>. This is capital spent on manual coordination and administrative noise that an AI Operating System handles with zero friction.
          </p>
        </div>

        <div className="bg-white p-10 rounded-sm border-2 border-brand-red shadow-2xl flex flex-col h-full relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
          <h4 className="text-[11px] font-extrabold uppercase text-brand-red tracking-[0.3em] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
            2. Revenue At-Risk
          </h4>
          <div className="mb-8 pb-8 border-b border-brand-border">
            <div className="text-[10px] font-extrabold text-brand-red uppercase tracking-widest mb-2 opacity-60">Response Latency Decay</div>
            <div className="text-4xl md:text-5xl font-extrabold text-brand-red tracking-tight">{formatCurrency(results.revenueLeak)} <span className="text-xs text-brand-muted opacity-60">/ Year</span></div>
          </div>
          <p className="text-sm text-brand-navy leading-relaxed font-medium">
            Based on your <span className="font-bold">{metrics.responseTime} hour lag</span>, you are leaving substantial revenue on the table. Leads responded to within 5 minutes convert at 21x the rate of your current lag.
          </p>
        </div>

        <div className="bg-white p-10 rounded-sm border border-brand-border shadow-xl flex flex-col h-full border-t-8 border-t-brand-orange hover:-translate-y-2 transition-transform duration-500">
          <h4 className="text-[11px] font-extrabold uppercase text-brand-orange tracking-[0.3em] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
            3. Bionic Capacity
          </h4>
          <div className="mb-8 pb-8 border-b border-brand-border">
            <div className="text-[10px] font-extrabold text-brand-orange uppercase tracking-widest mb-2 opacity-60">Virtual Capacity Unlock</div>
            <div className="text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight">{results.virtualHeadcount.toFixed(1)} Virtual Heads</div>
          </div>
          <p className="text-sm text-brand-navy leading-relaxed font-medium">
            By installing a private Intelligence Layer, you unlock significant virtual capacity, allowing you to scale without adding to your headcount.
          </p>
        </div>
      </div>

      {/* Chart and Delta Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center text-left">
        <div className="lg:col-span-7 bg-white p-12 rounded-sm shadow-2xl border border-brand-border relative">
          <h3 className="text-2xl font-extrabold text-brand-navy mb-2 tracking-tight italic">Architecture Audit: Output per FTE</h3>
          <p className="text-brand-muted text-[10px] font-extrabold uppercase tracking-[0.3em] mb-12">Comparative Benchmark: Legacy vs. Bionic Scale</p>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#000022', fontSize: 10, fontWeight: 900}} dy={10} />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: '#f9f9f9'}}
                  content={({active, payload}) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-brand-navy text-white p-6 rounded-sm shadow-2xl border-b-8 border-brand-red">
                          <p className="text-[10px] uppercase tracking-[0.4em] font-extrabold mb-2 opacity-60">Value Creation / FTE</p>
                          <p className="text-3xl font-extrabold italic">{formatCurrency(payload[0].value as number)}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="value" radius={[0, 0, 0, 0]} barSize={110}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#000022' : '#ef4124'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
          <div className="p-10 bg-[#f8f8f8] rounded-sm border-l-[12px] border-brand-navy shadow-inner relative overflow-hidden group">
             <h5 className="text-[10px] font-extrabold text-brand-navy uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-navy rounded-full"></span>
                Internal Performance Delta
             </h5>
             <p className="text-2xl md:text-3xl text-brand-navy font-bold leading-snug">
               "Your current team has <span className="font-extrabold text-brand-red">{results.virtualHeadcount.toFixed(0)} virtual heads</span> currently trapped in coordination cycles."
             </p>
          </div>
          
          <div className="p-10 bg-white border border-brand-border rounded-sm shadow-xl relative overflow-hidden group border-t-8 border-t-brand-orange">
            <div className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-orange mb-4">Target: The 1:10 Bionic Ratio</div>
            <p className="text-base text-brand-navy font-medium leading-relaxed italic">
              "Achieving a 1:10 Bionic Ratio is a matter of <span className="font-bold underline text-brand-red">Private Intelligence Infrastructure</span>."
            </p>
          </div>
        </div>
      </div>

      {/* The Close */}
      <div className="bg-brand-navy text-white rounded-[4px] p-16 md:p-24 text-center relative shadow-[0_60px_120px_-20px_rgba(0,0,34,0.5)] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow"></div>
        <div className="relative z-10">
          <h3 className="text-4xl md:text-6xl font-extrabold mb-10 uppercase tracking-tighter leading-none">Stop Managing Noise. <br /> Start Architecting Leverage.</h3>
          
          <div className="max-w-4xl mx-auto space-y-10 mb-16 text-xl md:text-2xl font-light leading-relaxed text-gray-300">
            <p>
              These numbers represent your <span className="text-white font-extrabold underline decoration-brand-red decoration-thickness-4">Cost of Delay</span>. Every week you operate without a private AOS, you pay a manual labor penalty.
            </p>
          </div>

          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl">
               <div className="text-center md:text-left px-12 py-6 border-b-2 md:border-b-0 md:border-r-2 border-white/10 w-full md:w-auto">
                 <div className="text-[11px] font-extrabold text-brand-red uppercase tracking-[0.4em] mb-2">Monthly Penalty</div>
                 <div className="text-5xl font-extrabold italic">{formatCurrency(results.monthlyPenalty)}</div>
               </div>
               <div className="flex-1 flex justify-center md:justify-start w-full">
                 <button 
                    onClick={() => window.open('https://ai.google.dev/gemini-api/docs/billing', '_blank')}
                    className="cta-button group bg-brand-red text-white px-14 py-8 rounded-sm text-2xl md:text-3xl font-extrabold uppercase tracking-[0.4em] flex items-center justify-center gap-4 w-full md:w-auto"
                  >
                    <span>Execute Leverage Audit</span>
                    <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </button>
               </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="text-brand-red font-extrabold text-3xl italic">$7,500</div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.5em] text-gray-400 opacity-80 max-w-xl leading-relaxed">
                A 2-week diagnostic to map institutional memory, identify revenue leaks, and design your private AOS Roadmap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};