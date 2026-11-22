const steps = [
  {
    title: "Understand",
    desc: "We learn about your business, customers and the areas you serve.",
  },
  {
    title: "Plan",
    desc: "We pick the right platform, write the ads and agree a budget with you.",
  },
  {
    title: "Launch",
    desc: "We set everything up and test that enquiries reach you properly.",
  },
  {
    title: "Improve",
    desc: "We check results with you regularly and adjust what isn't working.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-20 sm:py-24 bg-white dark:bg-[#0B1522] border-y border-black/[0.08] dark:border-white/[0.08] text-neutral-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-[#059669] dark:text-[#55D98A] mb-3">
          How we work
        </p>
        <h2 className="font-clash text-3xl sm:text-5xl font-bold tracking-tight leading-[1]">
          Simple, step by step.
        </h2>

        <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((st, i) => (
            <li key={st.title} className="border-t-2 border-[#55D98A] pt-5">
              <span className="text-sm text-neutral-400">Step {i + 1}</span>
              <h3 className="mt-1 font-clash text-xl font-bold">{st.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {st.desc}
              </p>
            </li>
          ))}
        </ol>

        {/* <p className="mt-14 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl">
          <strong className="text-neutral-900 dark:text-white">About budgets:</strong> our fee and your ad spend are
          separate. We agree both with you before anything goes live.
        </p> */}
      </div>
    </section>
  );
}
