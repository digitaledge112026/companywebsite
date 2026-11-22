"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { CONTACT_FORM_HREF, goToContactForm } from "./goToContactForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 bg-[#FAF9F5] dark:bg-[#0D1927] text-neutral-900 dark:text-white transition-colors duration-200">
      {/* Ambient Radial Mint Glow behind the visual */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] sm:w-[550px] lg:w-[750px] h-[350px] sm:h-[550px] lg:h-[750px] bg-[#55D98A]/10 dark:bg-[#55D98A]/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      {/* Subtle Technical Grid Lines in background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography, Narrative & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Main Headline */}
            <h1 className="font-clash text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] font-bold tracking-tight leading-[1] sm:leading-[0.98] uppercase select-none text-neutral-950 dark:text-white break-words">
              <span className="block">MAKE EVERY</span>
              <span className="block">CAMPAIGN</span>
              <span className="block text-[#059669] dark:text-[#55D98A] drop-shadow-[0_0_35px_rgba(85,217,138,0.35)]">
                COUNT.
              </span>
            </h1>

            {/* Signature Sand Brand Accent Bar */}
            <div className="w-14 sm:w-16 h-1.5 bg-[#C8A97E] rounded-full mt-4 sm:mt-6" />

            {/* Sub-headline / Copy */}
            <p className="mt-4 sm:mt-6 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base md:text-lg max-w-lg font-normal leading-relaxed">
              We help ambitious businesses across Worldwide turn advertising
              budgets into real, measurable customer enquiries — without jargon,
              vanity metrics, or wasted spend.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href={CONTACT_FORM_HREF}
                onClick={goToContactForm}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-neutral-950 bg-[#55D98A] hover:bg-[#42C274] transition-all duration-200 shadow-[0_0_25px_rgba(85,217,138,0.3)] hover:scale-[1.02] active:scale-[0.98] font-sans whitespace-nowrap"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.8]" />
              </Link>

              <a
                href="https://wa.me/918248316794"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-sans text-sm sm:text-base font-semibold border border-black/10 dark:border-white/15 text-neutral-800 dark:text-neutral-200 hover:border-[#55D98A] hover:text-[#059669] dark:hover:text-[#55D98A] bg-white/70 dark:bg-white/5 backdrop-blur-sm transition-all duration-200 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Visual Floating Seamlessly */}
          <div className="lg:col-span-6 w-full relative flex items-center justify-center mt-4 lg:mt-0">
            {/* The Visual Container with natural soft radial mask */}
            <div className="relative w-full aspect-[1202/790] max-w-xl lg:max-w-2xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0D1927] border border-[#55D98A]/20 shadow-[0_30px_70px_-25px_rgba(13,25,39,0.55)] dark:bg-transparent dark:border-0 dark:shadow-none dark:rounded-none dark:overflow-visible">
              {/* Soft inner glow, light mode only */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_45%,rgba(85,217,138,0.18),transparent_65%)] dark:hidden" />
              <Image
                src="/hero-visual-sharp.png"
                alt="Digital Edge Campaign Growth and Performance Analytics"
                fill
                priority
                unoptimized
                className="object-contain"
                style={{
                  mixBlendMode: "screen",
                  maskImage:
                    "radial-gradient(ellipse 50% 50% at 50% 50%, black 80%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 50% 50% at 50% 50%, black 80%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
