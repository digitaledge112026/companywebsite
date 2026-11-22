const sectors = [
  { name: "Salons & beauty", desc: "Bookings and walk-ins" },
  { name: "Retail stores", desc: "Store visits and calls" },
  { name: "Education", desc: "Admissions and course enquiries" },
  { name: "Construction", desc: "Site visits and project leads" },
  { name: "Interior design", desc: "Home and office design consultations" },
  { name: "Local services", desc: "Calls from people nearby" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-white dark:bg-[#0B1522] border-y border-black/[0.08] dark:border-white/[0.08] text-neutral-900 dark:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-[#059669] dark:text-[#55D98A] mb-3">About us</p>
        <h2 className="font-clash text-4xl sm:text-5xl font-bold tracking-tight leading-[1]">
          Clarity in every click.
        </h2>
        <p className="mt-6 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl">
          Digital Edge Marketing Service is based in Tamil Nadu. We plan and manage ads for businesses that want
          more enquiries, and we explain what we&apos;re doing in plain language.
        </p>

        <p id="sectors" className="mt-14 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
          Who we work with
        </p>
      </div>

      {/* Scrolling industries strip */}
      <div className="marquee mt-1 py-8 relative overflow-hidden">
        {/* Edge fades (overlays instead of mask-image, which renders blank on some mobile browsers) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-24 bg-gradient-to-r from-white dark:from-[#0B1522] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-24 bg-gradient-to-l from-white dark:from-[#0B1522] to-transparent" />

        <ul className="marquee-track flex w-max">
          {[...sectors, ...sectors].map((s, i) => (
            <li
              key={i}
              aria-hidden={i >= sectors.length}
              className="shrink-0 mr-5 px-6 py-5 rounded-xl bg-neutral-50 dark:bg-[#13273D] border border-[#059669]/30 dark:border-[#55D98A]/30 transition-all duration-300 hover:border-[#55D98A]/80 hover:shadow-[0_0_16px_rgba(85,217,138,0.28)]"
            >
              <span className="block font-clash text-lg font-semibold whitespace-nowrap">{s.name}</span>
              <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap">{s.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
