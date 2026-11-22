"use client";

export default function LogoCloud() {
  const brands = [
    { name: "GYMSHARK", category: "DTC Apparel" },
    { name: "GLOSSIER", category: "Beauty & Skincare" },
    { name: "SHOPIFY PLUS", category: "Commerce Infrastructure" },
    { name: "ATHLETIC GREENS", category: "Wellness Subscription" },
    { name: "CASPER", category: "Home Goods" },
    { name: "HIMS & HERS", category: "Digital Health" },
    { name: "OLLIPOP", category: "CPG Beverage" },
    { name: "TRACKSMITH", category: "Performance Wear" },
  ];

  return (
    <section className="py-10 sm:py-12 bg-neutral-100/60 dark:bg-[#0B0C0E] border-b border-black/[0.08] dark:border-white/[0.08] overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
          TRUSTED BY 120+ HIGH-GROWTH BRANDS
        </p>
        <span className="hidden sm:inline-block font-mono text-xs text-[#059669] dark:text-[#5BE18E] font-medium">
          ● $42M+ AD SPEND MANAGED
        </span>
      </div>

      {/* Infinite Scrolling Ticker */}
      <div className="relative w-full flex overflow-x-hidden select-none">
        
        {/* Left & Right Gradient Shadows */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-neutral-100 dark:from-[#0B0C0E] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-neutral-100 dark:from-[#0B0C0E] to-transparent z-10 pointer-events-none" />

        <div className="flex shrink-0 animate-marquee items-center gap-6 sm:gap-10 py-2">
          {brands.concat(brands).map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-md bg-white dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#059669]/40 dark:hover:border-[#5BE18E]/40 shadow-xs dark:shadow-none transition-colors group cursor-default"
            >
              <span className="font-headline text-lg sm:text-xl font-bold tracking-wider text-neutral-800 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                {brand.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600 group-hover:bg-[#059669] dark:group-hover:bg-[#5BE18E] transition-colors" />
              <span className="font-mono text-[11px] text-neutral-500 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
