import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Digital Edge completely revolutionized how the market perceives our brand. In less than 5 months, our blended ROAS leaped from 1.8x to 5.1x while lowering our customer acquisition cost by 40%. They don’t act like an agency; they operate like an elite growth partner.",
      name: "Marcus Vance",
      title: "Founder & CEO, Vance Horology",
      company: "Vance Luxury Group",
      metric: "+340% Annual Revenue",
      avatar: "MV",
    },
    {
      quote:
        "The team's mastery of both luxury brand aesthetics and ruthless performance marketing is unparalleled. Our Next.js site speed increased by 300%, and demo-to-close rates nearly doubled within weeks of launch.",
      name: "Elena Rostova",
      title: "Chief Marketing Officer",
      company: "Nexus FinTech Solutions",
      metric: "$18.4M Tracked Pipeline",
      avatar: "ER",
    },
    {
      quote:
        "Before working with Digital Edge, we were burning cash on generic ad agencies. Digital Edge rebuilt our creative flywheel from scratch and unlocked generative AI search channels that nobody else knew how to tap.",
      name: "David Chen",
      title: "Co-Founder & VP Growth",
      company: "Verde Bio Organics",
      metric: "5.2x Omni-Channel ROAS",
      avatar: "DC",
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#070B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111C38] border border-[#C5A059]/30 text-xs font-semibold text-[#DFC794]">
            Client Validation
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Endorsed by <span className="gold-gradient-text">Visionary Leaders</span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg">
            Hear directly from the founders and executives who partnered with Digital Edge to transform their trajectory.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl p-8 bg-gradient-to-b from-slate-900/90 via-[#0B132B]/60 to-[#070B18] border border-slate-800 hover:border-[#C5A059]/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative"
            >
              <div>
                {/* Stars & Metric Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#C5A059] text-[#C5A059]"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-full bg-[#C5A059]/10 text-[#DFC794] border border-[#C5A059]/30">
                    {item.metric}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-6 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#0B132B] to-[#C5A059] flex items-center justify-center font-bold text-sm text-[#070B18] shadow-md border border-[#DFC794]">
                  {item.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className="text-xs text-slate-400">
                    {item.title} • {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
