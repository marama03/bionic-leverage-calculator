import React from 'react';
import { BusinessMetrics } from '../types';

interface InputSectionProps {
  metrics: BusinessMetrics;
  setMetrics: (m: BusinessMetrics) => void;
  onCalculate: () => void;
}

export const InputSection: React.FC<InputSectionProps> = ({ metrics, setMetrics, onCalculate }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMetrics({ ...metrics, [name]: parseFloat(value) || 0 });
  };

  return (
    <div className="diagnostic-card w-full p-8 md:p-[60px] text-left mb-10">
      <div className="text-center mb-11">
        <div className="card-badge inline-block bg-brand-red text-white text-[11px] font-extrabold px-[14px] py-[6px] uppercase tracking-[2px] mb-5 rounded-[2px]">
          Private AOS Diagnostic
        </div>
        <h2 className="text-white text-2xl md:text-[28px] font-bold mb-3 tracking-[-0.5px]">
          Quantify Your Execution Drag
        </h2>
        <p className="text-[#b0b0b0] text-[14px] mb-0 leading-[1.5] max-w-[520px] mx-auto font-normal">
          Provide the baseline metrics to diagnose your current AI Leverage. Precise numbers yield the most accurate financial impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        <div className="md:col-span-2 flex flex-col">
          <label className="text-[11px] font-bold uppercase mb-2.5 text-white tracking-[1px] block">
            Current Annual Revenue ($)
          </label>
          <input
            type="number"
            name="revenue"
            value={metrics.revenue || ''}
            onChange={handleChange}
            placeholder="12000000"
            className="w-full bg-white text-brand-navy p-4 rounded-[3px] text-base font-bold font-sans focus:outline-none border-none box-border"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[11px] font-bold uppercase mb-2.5 text-white tracking-[1px] block">
            Total Headcount (FTE)
          </label>
          <input
            type="number"
            name="headcount"
            value={metrics.headcount || ''}
            onChange={handleChange}
            placeholder="45"
            className="w-full bg-white text-brand-navy p-4 rounded-[3px] text-base font-bold font-sans focus:outline-none border-none box-border"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[11px] font-bold uppercase mb-2.5 text-white tracking-[1px] block">
            Avg. Fully Loaded Cost / Employee
          </label>
          <input
            type="number"
            name="costPerEmployee"
            value={metrics.costPerEmployee || ''}
            onChange={handleChange}
            placeholder="100000"
            className="w-full bg-white text-brand-navy p-4 rounded-[3px] text-base font-bold font-sans focus:outline-none border-none box-border"
          />
          <div className="text-[10px] text-[#777] mt-2 font-semibold">
            Salary + Benefits + Overhead
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-[11px] font-bold uppercase mb-2.5 text-white tracking-[1px] block">
            Avg. Lead Response Time (Hours)
          </label>
          <input
            type="number"
            name="responseTime"
            value={metrics.responseTime || ''}
            onChange={handleChange}
            placeholder="4"
            className="w-full bg-white text-brand-navy p-4 rounded-[3px] text-base font-bold font-sans focus:outline-none border-none box-border"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[11px] font-bold uppercase mb-2.5 text-white tracking-[1px] block">
            Weekly "Manual Glue" Hours
          </label>
          <input
            type="number"
            name="coordinationHours"
            value={metrics.coordinationHours || ''}
            onChange={handleChange}
            placeholder="12"
            className="w-full bg-white text-brand-navy p-4 rounded-[3px] text-base font-bold font-sans focus:outline-none border-none box-border"
          />
          <div className="text-[10px] text-[#777] mt-2 font-semibold">
            Emails, manual entry, status updates, internal reporting.
          </div>
        </div>
      </div>

      {/* Twin Button Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <button
          onClick={onCalculate}
          className="cta-button w-full bg-brand-red text-white py-[22px] text-[13px] font-extrabold uppercase tracking-[2.5px] cursor-pointer rounded-[3px] hover:bg-[#d1361d]"
        >
          Run Diagnostic
        </button>
        <button
          onClick={() => window.open('https://ai.google.dev/gemini-api/docs/billing', '_blank')}
          className="cta-button secondary-btn w-full py-[22px] text-[13px] font-extrabold uppercase tracking-[2.5px] cursor-pointer rounded-[3px]"
        >
          Book $7,500 Audit
        </button>
      </div>

      <div className="text-center mt-10 text-[10px] text-[#555] uppercase tracking-[2px] leading-loose font-bold">
        PROPRIETARY INTELLIGENCE LAYER DIAGNOSTIC FRAMEWORK V4.2<br />
        © 2025 DANIEL MARAMA. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};