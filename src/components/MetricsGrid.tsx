"use client";

export default function MetricsGrid() {
  const metrics = [
    {
      value: "4.82x",
      label: "AVERAGE BLENDED ROAS",
      sub: "+142% vs client baseline",
    },
    {
      value: "$42M+",
      label: "REVENUE GENERATED",
      sub: "Across e-comm & tech brands",
    },
    {
      value: "99.4%",
      label: "ATTRIBUTION ACCURACY",
      sub: "First-party pixel intelligence",
    },
    {
      value: "-38%",
      label: "BLENDED CAC REDUCTION",
      sub: "Within first 90 days",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0B0C0E] border-t border-b border-black/[0.08] dark:border-white/[0.08] transition-colors duration-200">
      
      {/* 4-Column Metric Grid with Clean Dividing Lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.08] dark:divide-white/[0.08]">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="py-10 sm:py-14 px-4 sm:px-8 flex flex-col justify-center transition-colors group hover:bg-black/[0.015] dark:hover:bg-white/[0.015]"
            >
              <div className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white group-hover:text-[#059669] dark:group-hover:text-[#5BE18E] transition-colors tracking-tight">
                {item.value}
              </div>
              <div className="mt-3 font-mono text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                {item.label}
              </div>
              <div className="mt-1 font-sans text-xs text-[#059669] dark:text-[#5BE18E] font-medium">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
