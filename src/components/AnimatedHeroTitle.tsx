"use client";

import { useState, useEffect, useRef } from "react";

interface PhraseItem {
  text: string;
  badge: string;
  metric: string;
  colorClass: string;
}

const PHRASES: PhraseItem[] = [
  {
    text: "MARKETING ANALYTICS",
    badge: "MULTI-TOUCH ATTRIBUTION",
    metric: "4.82x BLENDED ROAS",
    colorClass: "from-[#059669] via-[#0284C7] to-[#059669] dark:from-[#5BE18E] dark:via-[#38BDF8] dark:to-[#5BE18E]",
  },
  {
    text: "REVENUE INTELLIGENCE",
    badge: "PREDICTIVE LTV PIPELINE",
    metric: "+142% PIPELINE VELOCITY",
    colorClass: "from-[#0284C7] via-[#6366F1] to-[#059669] dark:from-[#38BDF8] dark:via-[#818CF8] dark:to-[#5BE18E]",
  },
  {
    text: "ALGORITHMIC SCALING",
    badge: "AUTONOMOUS BIDDING ENGINE",
    metric: "99.4% ATTRIBUTION ACCURACY",
    colorClass: "from-[#D97706] via-[#059669] to-[#0284C7] dark:from-[#FBBF24] dark:via-[#5BE18E] dark:to-[#38BDF8]",
  },
  {
    text: "CREATIVE ATTRIBUTION",
    badge: "GEO & UGC VELOCITY RADAR",
    metric: "68.4% HOOK RATE",
    colorClass: "from-[#7C3AED] via-[#DB2777] to-[#059669] dark:from-[#C084FC] dark:via-[#F472B6] dark:to-[#5BE18E]",
  },
  {
    text: "DATA-DRIVEN DOMINANCE",
    badge: "FULL-FUNNEL AUDIT MATRIX",
    metric: "-38% BLENDED CAC",
    colorClass: "from-[#059669] via-[#0D9488] to-[#0284C7] dark:from-[#5BE18E] dark:via-[#2DD4BF] dark:to-[#38BDF8]",
  },
];

const GLYPHS = "0101#@$%&*<>~/[]_+=ΔΣΩ0123456789";

export default function AnimatedHeroTitle() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState(PHRASES[0].text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const scrambleRef = useRef<number | null>(null);

  const currentPhrase = PHRASES[index];

  // Scramble effect transition to target word
  const triggerScramble = (targetText: string) => {
    setIsScrambling(true);
    let step = 0;
    const totalSteps = 24;
    const stepDuration = 32; // ms per frame

    if (scrambleRef.current) {
      clearInterval(scrambleRef.current);
    }

    scrambleRef.current = window.setInterval(() => {
      step++;
      const progress = step / totalSteps;
      const revealedLength = Math.floor(progress * targetText.length);

      let scrambled = "";
      for (let i = 0; i < targetText.length; i++) {
        if (targetText[i] === " ") {
          scrambled += " ";
        } else if (i < revealedLength) {
          scrambled += targetText[i];
        } else {
          scrambled += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }

      setDisplayText(scrambled);

      if (step >= totalSteps) {
        if (scrambleRef.current) clearInterval(scrambleRef.current);
        setDisplayText(targetText);
        setIsScrambling(false);
      }
    }, stepDuration);
  };

  const advancePhrase = (nextIdx?: number) => {
    const nextIndex = nextIdx !== undefined ? nextIdx : (index + 1) % PHRASES.length;
    setIndex(nextIndex);
    triggerScramble(PHRASES[nextIndex].text);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % PHRASES.length;
        triggerScramble(PHRASES[next].text);
        return next;
      });
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (scrambleRef.current) clearInterval(scrambleRef.current);
    };
  }, []);

  return (
    <div className="space-y-4">
      {/* Live Telemetry Pill / Real-time Data Indicator */}
      <div 
        onClick={() => advancePhrase()} 
        className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-600/20 dark:border-emerald-400/30 text-emerald-700 dark:text-[#5BE18E] font-mono text-[11px] sm:text-xs tracking-wider cursor-pointer hover:bg-emerald-500/20 transition-all select-none shadow-sm group"
        title="Click to cycle next intelligence stream"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-[#5BE18E]"></span>
        </span>
        <span className="font-semibold uppercase tracking-wider">{currentPhrase.badge}</span>
        <span className="text-neutral-300 dark:text-white/20">•</span>
        <span className="font-bold text-neutral-800 dark:text-[#EDE8DC] group-hover:text-emerald-600 dark:group-hover:text-[#5BE18E] transition-colors">
          {currentPhrase.metric}
        </span>
        {/* Animated equalizer bars */}
        <div className="flex items-end gap-0.5 h-2.5 ml-1">
          <span className="w-0.5 bg-emerald-600 dark:bg-[#5BE18E] h-full animate-pulse" />
          <span className="w-0.5 bg-emerald-600 dark:bg-[#5BE18E] h-2 animate-bounce" />
          <span className="w-0.5 bg-sky-500 dark:bg-[#38BDF8] h-1.5 animate-pulse" />
          <span className="w-0.5 bg-emerald-600 dark:bg-[#5BE18E] h-full animate-bounce" />
        </div>
      </div>

      {/* Main Animated Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-neutral-900 dark:text-[#EDE8DC] leading-[0.98] uppercase max-w-5xl font-display transition-colors">
        <span className="block">THE NEW</span>
        <span className="block">STANDARD IN</span>
        
        {/* Dynamic Animated Target Line */}
        <span 
          onClick={() => advancePhrase()}
          className="relative inline-block mt-1 sm:mt-2 cursor-pointer group select-none"
          title="Click to cycle metrics"
        >
          {/* Subtle Glow Behind Text in Dark Mode */}
          <span 
            className="absolute -inset-1 blur-2xl opacity-30 dark:opacity-40 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-lg pointer-events-none transition-opacity duration-500"
            aria-hidden="true"
          />

          <span 
            className={`relative bg-gradient-to-r ${currentPhrase.colorClass} bg-clip-text text-transparent drop-shadow-sm transition-all duration-300 filter group-hover:brightness-125`}
            style={{
              backgroundSize: "200% auto",
              animation: "shimmer 6s ease infinite",
            }}
          >
            {displayText}
          </span>

          {/* Terminal Caret Cursor */}
          <span 
            className={`inline-block w-2 sm:w-3 md:w-3.5 h-[0.8em] ml-1.5 sm:ml-2 bg-[#059669] dark:bg-[#5BE18E] shadow-[0_0_15px_rgba(91,225,142,0.8)] align-baseline transition-opacity ${
              isScrambling ? "opacity-100 animate-ping" : "animate-pulse"
            }`}
          />
        </span>
      </h1>

      {/* Scramble Switcher Dots / Controls */}
      <div className="flex items-center gap-2 pt-1 font-mono text-xs text-neutral-400 dark:text-neutral-500 select-none">
        <span className="text-[11px] tracking-widest uppercase">STREAM:</span>
        {PHRASES.map((p, i) => (
          <button
            key={i}
            onClick={() => advancePhrase(i)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === index
                ? "w-8 bg-[#059669] dark:bg-[#5BE18E]"
                : "w-2 bg-neutral-300 dark:bg-white/20 hover:bg-neutral-400 dark:hover:bg-white/40"
            }`}
            title={p.text}
            aria-label={`Select ${p.text}`}
          />
        ))}
        <span className="ml-2 text-[10px] text-neutral-400 dark:text-neutral-500 font-mono">
          0{index + 1} / 0{PHRASES.length}
        </span>
      </div>
    </div>
  );
}
