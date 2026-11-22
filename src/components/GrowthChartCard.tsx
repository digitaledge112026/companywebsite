"use client";

import { useState } from "react";
import { TrendingUp, ArrowUpRight } from "lucide-react";

export default function GrowthChartCard() {
  const [activePoint, setActivePoint] = useState<number>(3); // Default to current peak

  const dataPoints = [
    { label: "M1", x: 12, y: 76, value: "1.2x", note: "Baseline Audit" },
    { label: "M2", x: 38, y: 68, value: "1.8x", note: "Creative Sprint" },
    { label: "M3", x: 62, y: 52, value: "2.9x", note: "PMax & Meta Scale" },
    { label: "M4", x: 88, y: 18, value: "4.82x", note: "Compounded Growth" },
  ];

  return (
    <div className="relative w-full rounded-2xl bg-white dark:bg-[#121418] border border-black/[0.08] dark:border-white/10 p-5 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.85)] font-sans overflow-hidden select-none group transition-colors duration-200">
      
      {/* Background Subtle Grid Accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-25"
        style={{
          backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Card Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-black/[0.08] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-[#059669] dark:bg-[#5BE18E] animate-ping" />
          <span className="font-semibold tracking-wider text-neutral-800 dark:text-white">THE GROWTH MINDSET</span>
        </div>
        <div className="flex items-center gap-1 text-[#059669] dark:text-[#5BE18E] text-xs font-mono font-bold">
          <TrendingUp className="w-4 h-4 stroke-[2.5]" />
          <span>+310%</span>
        </div>
      </div>

      {/* Interactive Graph Canvas Area */}
      <div className="relative z-10 mt-6 h-52 sm:h-56 w-full flex items-end">
        
        {/* Y-Axis Labels */}
        <div className="absolute left-0 top-0 bottom-4 flex flex-col justify-between font-mono text-[10px] sm:text-xs text-neutral-400 dark:text-neutral-500 pr-3 pointer-events-none">
          <span>4x</span>
          <span>3x</span>
          <span>2x</span>
          <span>1x</span>
        </div>

        {/* SVG Graph Curve */}
        <div className="relative ml-8 sm:ml-10 w-full h-full">
          
          {/* Horizontal Grid Guidelines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-15">
            <div className="w-full border-b border-black dark:border-white" />
            <div className="w-full border-b border-black dark:border-white" />
            <div className="w-full border-b border-black dark:border-white" />
            <div className="w-full border-b border-black dark:border-white" />
          </div>

          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="brandCurveGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#5BE18E" stopOpacity="0.4" />
                <stop offset="70%" stopColor="#5BE18E" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#5BE18E" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Area Fill Under Curve */}
            <path
              d="M 12 76 Q 25 72 38 68 T 62 52 T 88 18 L 88 100 L 12 100 Z"
              fill="url(#brandCurveGlow)"
            />

            {/* The Main Glowing Emerald Mint Curve */}
            <path
              d="M 12 76 Q 25 72 38 68 T 62 52 T 88 18"
              fill="none"
              stroke="#5BE18E"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="drop-shadow-[0_0_12px_rgba(91,225,142,0.6)]"
            />

            {/* Interactive Data Nodes */}
            {dataPoints.map((pt, i) => (
              <g 
                key={i} 
                className="cursor-pointer" 
                onClick={() => setActivePoint(i)}
                onMouseEnter={() => setActivePoint(i)}
              >
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={activePoint === i ? "4.5" : "3"}
                  className="fill-white dark:fill-[#0B0C0E] stroke-[#059669] dark:stroke-[#5BE18E] transition-all duration-200 hover:scale-125"
                  strokeWidth="2"
                />
                {activePoint === i && (
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r="8"
                    fill="none"
                    className="stroke-[#059669] dark:stroke-[#5BE18E] opacity-60 animate-ping"
                    strokeWidth="1"
                  />
                )}
              </g>
            ))}
          </svg>

          {/* Signature Floating Tilted Sticky Note / Badge (From Growthline) */}
          <div className="absolute top-1 sm:top-2 right-2 sm:right-6 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300 z-20">
            <div className="px-3.5 py-2 rounded-md bg-[#059669] text-white dark:bg-[#5BE18E] dark:text-[#0A0C10] font-bold text-xs sm:text-sm shadow-lg flex items-center gap-1.5 cursor-pointer">
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              <span className="tracking-tight">Built for what's next.</span>
            </div>
          </div>

          {/* Active Data Point Tooltip Pill */}
          <div className="absolute bottom-2 left-2 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-black/85 backdrop-blur-md border border-black/10 dark:border-white/10 font-mono text-xs shadow-sm">
              <span className="text-[#059669] dark:text-[#5BE18E] font-bold">{dataPoints[activePoint].value}</span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-700 dark:text-neutral-200">{dataPoints[activePoint].note}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Card Footer Bar */}
      <div className="relative z-10 mt-6 pt-4 border-t border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between font-mono text-[10px] sm:text-xs text-neutral-500">
        <span className="tracking-wider uppercase text-neutral-600 dark:text-neutral-400">TEST. LEARN. OPTIMISE. SCALE.</span>
        <span className="tracking-widest uppercase text-neutral-400 dark:text-neutral-600">CONCEPTUAL VISUAL</span>
      </div>

    </div>
  );
}
