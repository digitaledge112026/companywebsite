"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Phone, MessageCircle } from "lucide-react";
import BrandLogo from "./BrandLogo";
import ThemeToggle from "./ThemeToggle";
import { CONTACT_FORM_HREF, goToContactForm } from "./goToContactForm";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#0D1927]/95 backdrop-blur-md border-b border-black/[0.08] dark:border-white/[0.08] py-3 sm:py-3.5 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Official Brand Logo */}
          <div className="shrink-0">
            <BrandLogo size="md" />
          </div>

          {/* Center Navigation Links: visible on md (768px) and up, with strict whitespace-nowrap and responsive gaps */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-7 xl:gap-8 font-sans text-xs lg:text-sm text-neutral-600 dark:text-neutral-300 shrink-0">
            <Link
              href="/#about"
              className="hover:text-[#059669] dark:hover:text-[#55D98A] transition-colors font-medium whitespace-nowrap"
            >
              About Us
            </Link>
            <Link
              href="/#services"
              className="hover:text-[#059669] dark:hover:text-[#55D98A] transition-colors font-medium whitespace-nowrap"
            >
              What We Do
            </Link>
            <Link
              href="/#process"
              className="hover:text-[#059669] dark:hover:text-[#55D98A] transition-colors font-medium whitespace-nowrap"
            >
              How We Work
            </Link>
            <Link
              href="/#sectors"
              className="hover:text-[#059669] dark:hover:text-[#55D98A] transition-colors font-medium whitespace-nowrap"
            >
              Industries
            </Link>
          </nav>

          {/* Right Action Bar: Direct Phone (only on wide screens xl) + Theme Toggle + Contact CTA */}
          <div className="hidden sm:flex items-center gap-2.5 lg:gap-3.5 shrink-0">
            {/* Phone link: ONLY visible on wide desktop (>= 1280px) to prevent collision on tablet/laptop */}
            <a
              href="tel:+918248316794"
              className="hidden xl:flex items-center gap-1.5 font-mono text-xs text-neutral-600 dark:text-neutral-300 hover:text-[#059669] dark:hover:text-[#55D98A] transition-colors pr-1 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#059669] dark:text-[#55D98A] shrink-0" />
              <span>+91 824 831 6794</span>
            </a>

            <ThemeToggle className="w-9 h-9 sm:w-10 sm:h-10 shrink-0" />

            <Link
              href={CONTACT_FORM_HREF}
              onClick={goToContactForm}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm text-[#0D1927] bg-[#55D98A] hover:bg-[#42C274] transition-all duration-200 shadow-[0_0_20px_rgba(85,217,138,0.25)] hover:scale-[1.02] active:scale-[0.98] font-sans whitespace-nowrap shrink-0"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3] shrink-0" />
            </Link>
          </div>

          {/* Mobile Bar (< md): Theme Toggle + Call/WhatsApp quick icon + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle className="w-9 h-9" />

            <a
              href="https://wa.me/918248316794"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-800 dark:text-white hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-800 dark:text-white hover:text-[#55D98A] transition-colors cursor-pointer"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
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
        <div className="md:hidden fixed inset-x-0 top-[57px] sm:top-[61px] bg-white/98 dark:bg-[#0D1927]/98 backdrop-blur-xl border-b border-black/10 dark:border-white/10 px-6 py-6 space-y-4 font-sans text-sm shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-65px)] overflow-y-auto">
          <Link
            href="/#about"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between text-neutral-800 dark:text-neutral-200 hover:text-[#55D98A] py-2.5 border-b border-black/5 dark:border-white/5 font-medium"
          >
            <span>01 / About Us</span>
            <span className="text-[#55D98A]">↗</span>
          </Link>
          <Link
            href="/#services"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between text-neutral-800 dark:text-neutral-200 hover:text-[#55D98A] py-2.5 border-b border-black/5 dark:border-white/5 font-medium"
          >
            <span>02 / What We Do</span>
            <span className="text-[#55D98A]">↗</span>
          </Link>
          <Link
            href="/#process"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between text-neutral-800 dark:text-neutral-200 hover:text-[#55D98A] py-2.5 border-b border-black/5 dark:border-white/5 font-medium"
          >
            <span>03 / How We Work</span>
            <span className="text-[#55D98A]">↗</span>
          </Link>
          <Link
            href="/#sectors"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between text-neutral-800 dark:text-neutral-200 hover:text-[#55D98A] py-2.5 border-b border-black/5 dark:border-white/5 font-medium"
          >
            <span>04 / Industries</span>
            <span className="text-[#55D98A]">↗</span>
          </Link>

          {/* Direct Contact Options in Drawer */}
          <div className="pt-2 pb-1 space-y-2 border-b border-black/5 dark:border-white/5">
            <a
              href="tel:+918248316794"
              className="flex items-center gap-2.5 py-2 text-neutral-700 dark:text-neutral-300 font-mono text-xs hover:text-[#55D98A]"
            >
              <Phone className="w-3.5 h-3.5 text-[#55D98A]" />
              <span>+91 824 831 6794</span>
            </a>
            <a
              href="https://wa.me/918248316794"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 py-2 text-neutral-700 dark:text-neutral-300 text-xs hover:text-[#25D366]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="pt-2">
            <Link
              href={CONTACT_FORM_HREF}
              onClick={(e) => {
                setIsOpen(false);
                goToContactForm(e);
              }}
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
