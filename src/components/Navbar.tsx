"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Phone } from "lucide-react";
import BrandLogo from "./BrandLogo";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#0D1927]/95 backdrop-blur-md border-b border-black/[0.08] dark:border-white/[0.08] py-3.5 sm:py-4 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Brand Logo */}
          <BrandLogo size="md" />

          {/* Center Navigation Links based on Profile */}
          <nav className="hidden md:flex items-center gap-8 font-sans text-sm text-neutral-600 dark:text-neutral-300">
            <Link
              href="/#about"
              className="hover:text-[#55D98A] transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              href="/#services"
              className="hover:text-[#55D98A] transition-colors font-medium"
            >
              What We Do
            </Link>
            <Link
              href="/#process"
              className="hover:text-[#55D98A] transition-colors font-medium"
            >
              How We Work
            </Link>
            <Link
              href="/#sectors"
              className="hover:text-[#55D98A] transition-colors font-medium"
            >
              Industries
            </Link>
          </nav>

          {/* Right Action Bar: Direct Phone + Theme Toggle + Contact CTA */}
          <div className="hidden sm:flex items-center gap-3.5">
            <a
              href="tel:+918248316794"
              className="hidden lg:flex items-center gap-1.5 font-mono text-xs text-neutral-600 dark:text-neutral-300 hover:text-[#55D98A] transition-colors pr-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#55D98A]" />
              <span>+91 824 831 6794</span>
            </a>

            <ThemeToggle />

            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm text-[#0D1927] bg-[#55D98A] hover:bg-[#42C274] transition-all duration-200 shadow-[0_0_20px_rgba(85,217,138,0.3)] hover:scale-[1.02] active:scale-[0.98] font-sans"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </Link>
          </div>

          {/* Mobile Bar: Toggle + Hamburger */}
          <div className="flex sm:hidden items-center gap-2.5">
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-800 dark:text-white hover:text-[#55D98A] transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[65px] bg-white/98 dark:bg-[#0D1927]/98 border-b border-black/10 dark:border-white/10 p-6 space-y-4 font-sans text-sm shadow-2xl animate-in fade-in transition-colors">
          <Link
            href="/#about"
            onClick={() => setIsOpen(false)}
            className="block text-neutral-800 dark:text-neutral-200 hover:text-[#55D98A] py-2.5 border-b border-black/5 dark:border-white/5 font-medium"
          >
            01 / About Us ↗
          </Link>
          <Link
            href="/#services"
            onClick={() => setIsOpen(false)}
            className="block text-neutral-800 dark:text-neutral-200 hover:text-[#55D98A] py-2.5 border-b border-black/5 dark:border-white/5 font-medium"
          >
            02 / What We Do (Paid Media) ↗
          </Link>
          <Link
            href="/#process"
            onClick={() => setIsOpen(false)}
            className="block text-neutral-800 dark:text-neutral-200 hover:text-[#55D98A] py-2.5 border-b border-black/5 dark:border-white/5 font-medium"
          >
            03 / How We Work ↗
          </Link>
          <Link
            href="/#sectors"
            onClick={() => setIsOpen(false)}
            className="block text-neutral-800 dark:text-neutral-200 hover:text-[#55D98A] py-2.5 border-b border-black/5 dark:border-white/5 font-medium"
          >
            Built For Your Needs ↗
          </Link>
          <div className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-bold text-sm text-[#0D1927] bg-[#55D98A] hover:bg-[#42C274] transition-colors shadow-md"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
