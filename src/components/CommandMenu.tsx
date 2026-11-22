"use client";

import { useState, useEffect } from "react";
import { 
  Search, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Calculator, 
  ShieldCheck, 
  Palette, 
  X,
  Laptop
} from "lucide-react";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open via custom event or props
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const commands = [
    {
      title: "Claim Free Strategy & Brand Audit",
      subtitle: "Confidential 45-min teardown with senior growth partners",
      icon: Sparkles,
      href: "#audit",
      category: "Action",
    },
    {
      title: "Interactive Growth ROI Simulator",
      subtitle: "Model incremental revenue, ROAS, and CAC reduction",
      icon: Calculator,
      href: "#calculator",
      category: "Tool",
    },
    {
      title: "Explore Client Case Studies",
      subtitle: "Real evidence from Aura Luxury, Nexus FinTech, and Verde Bio",
      icon: TrendingUp,
      href: "#case-studies",
      category: "Portfolio",
    },
    {
      title: "Brand Strategy & Visual Identity",
      subtitle: "Monograms, design systems, and luxury positioning",
      icon: Palette,
      href: "#services",
      category: "Service",
    },
    {
      title: "High-Conversion Web & Next.js Lab",
      subtitle: "Sub-second load times and continuous CRO experiments",
      icon: Laptop,
      href: "#services",
      category: "Service",
    },
    {
      title: "Partnership Pricing & Plans",
      subtitle: "Growth Catalyst, Edge Dominance, and Enterprise Bespoke",
      icon: ShieldCheck,
      href: "#pricing",
      category: "Investment",
    },
  ];

  const filtered = commands.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl rounded-2xl bg-[#0D1117] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-[#090C10]">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/5 text-xs font-mono"
          >
            ESC
          </button>
        </div>

        {/* Command List */}
        <div className="p-2 max-h-80 overflow-y-auto space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-500">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20 group-hover:bg-[#C5A059]/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#DFC794] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-400">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {item.category}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </div>
                </a>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#090C10] border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Digital Edge Command Palette</span>
          <span>Use ↑↓ to navigate • ↵ to select</span>
        </div>
      </div>
    </div>
  );
}
