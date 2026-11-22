import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  Sparkles, 
  Palette, 
  BarChart3,
} from "lucide-react";

export const metadata = {
  title: "Solutions | Digital Edge Analytics & Branding",
  description:
    "Explore the 5 core pillars of Digital Edge: Attribution Modeling, Audience Intelligence, Campaign Forecasting, Prestige Brand Architecture, and Generative Engine Optimization.",
};

export default function SolutionsPage() {
  const deepSolutions = [
    {
      num: "01",
      title: "ATTRIBUTION MODELING",
      tagline: "First-Party Server-Side Telemetry",
      icon: BarChart3,
      overview:
        "Modern ad platforms report inflated, duplicate conversions while missing the cross-device customer journey. Digital Edge deploys a private server-side event pipeline that bridges the gap between ad click and bank deposit.",
      capabilities: [
        "First-Party Conversions API (Meta CAPI, Google Ads Server-Side, TikTok Events API)",
        "Multi-touch algorithmic attribution weighting (Linear, Time-Decay, and Custom Shapley Value models)",
        "Offline CRM conversion reconciliation (Stripe, HubSpot, Salesforce, Shopify)",
        "Zero-reliance on deprecated third-party tracking cookies or fragile browser pixels",
      ],
      impact: "38% Average reduction in wasted ad spend within 45 days.",
      deliverable: "Private Real-Time Executive Telemetry Dashboard + Bi-Weekly Attribution Audit",
    },
    {
      num: "02",
      title: "AUDIENCE INTELLIGENCE",
      tagline: "Behavioral Intent & Cohort LTV Modeling",
      icon: TrendingUp,
      overview:
        "Demographic targeting is obsolete. We cluster your customer database by behavioral frequency, average order value velocity, and pre-purchase intent signals to target only high-lifetime-value prospects.",
      capabilities: [
        "Predictive Customer Lifetime Value (pLTV) cohort segmentation",
        "Algorithmic churn risk identification and automated retention triggers",
        "Custom lookalike seed generation fed directly into programmatic ad auctions",
        "Zero-party preference quizzes and interactive data-capture funnels",
      ],
      impact: "2.4x Increase in repeat purchase rate across active client cohorts.",
      deliverable: "Dynamic Audience Graph updated in real time across Meta, Google & Email systems",
    },
    {
      num: "03",
      title: "CAMPAIGN FORECASTING",
      tagline: "Algorithmic ROAS & Capital Allocation",
      icon: Layers,
      overview:
        "Stop letting media buyers gamble with ad budgets. We run continuous Monte-Carlo simulations against real historical auction volatility to forecast customer acquisition costs before you allocate budget.",
      capabilities: [
        "Predictive ROAS modeling with statistical confidence intervals",
        "Cross-channel budget rebalancing across Google, Meta, TikTok, and LinkedIn",
        "Diminishing-return threshold alerts to prevent saturation waste",
        "Unit economics and gross-margin guardrails embedded into media strategies",
      ],
      impact: "4.8x Average verified return on ad spend across client portfolio.",
      deliverable: "Weekly Capital Allocation Briefing with automated bidding rule guardrails",
    },
    {
      num: "04",
      title: "PRESTIGE BRAND ARCHITECTURE",
      tagline: "Monogram Identity & Executive Authority",
      icon: Palette,
      overview:
        "Performance marketing without brand authority leads to commoditization and discounting. We craft timeless monogram identities, bespoke typography, and high-prestige editorial narratives that command market respect.",
      capabilities: [
        "Bespoke Monogram & Geometric Logo System Design",
        "Executive Brand Narrative, Voice & Tone, and Messaging Frameworks",
        "Complete multi-channel design token systems (Figma, React/Tailwind tokens)",
        "Luxury product packaging, investor decks, and editorial art direction",
      ],
      impact: "+42% Average lift in pricing power and gross margin expansion.",
      deliverable: "Comprehensive 120-Page Brand Guidelines & Multi-Platform Production Asset Vault",
    },
    {
      num: "05",
      title: "GENERATIVE ENGINE OPTIMIZATION (GEO)",
      tagline: "AI Search Citation Domination",
      icon: Sparkles,
      overview:
        "Over 40% of high-intent purchase searches now occur inside generative AI engines. We structure your digital entity graph so that ChatGPT, Perplexity, and Google AI Overviews cite your brand as the definitive authority.",
      capabilities: [
        "Entity authority mapping and knowledge graph optimization",
        "Perplexity & ChatGPT citation share monitoring and optimization",
        "Programmatic high-intent content clusters that AI models ingest and index",
        "Tier-1 Digital PR and authoritative editorial backlink placement",
      ],
      impact: "82% Citation presence for high-intent category queries in LLM models.",
      deliverable: "Monthly GEO Visibility Index & Zero-Click Citations Report",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] dark:bg-[#0A0C10] text-neutral-900 dark:text-[#EDE8DC] selection:bg-[#5BE18E] selection:text-[#0A0C10] transition-colors duration-200">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="pt-20 pb-16 bg-white dark:bg-[#0A0C10] border-b border-black/[0.08] dark:border-white/[0.08] relative transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs uppercase tracking-widest text-[#059669] dark:text-[#5BE18E] mb-4">
              DIGITAL EDGE / ARCHITECTURAL SUITE
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-neutral-900 dark:text-[#EDE8DC] uppercase tracking-tight max-w-4xl leading-[1.02] font-display">
              INTEGRATED SOLUTIONS <br />
              <span className="text-[#059669] dark:text-[#5BE18E]">FOR HIGH-GROWTH BRANDS</span>
            </h1>

            <p className="mt-6 font-mono text-xs sm:text-base text-neutral-600 dark:text-[#8F9CAE] max-w-3xl leading-relaxed">
              Every capability is engineered to eliminate fragmentation. We combine precision attribution telemetry with timeless brand architecture to give your company the definitive market edge.
            </p>
          </div>
        </section>

        {/* Detailed Solutions Breakdown */}
        <section className="py-20 bg-neutral-50 dark:bg-[#080A0E] transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {deepSolutions.map((sol, index) => {
              const Icon = sol.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl bg-white dark:bg-[#0D1117] border border-neutral-200 dark:border-white/[0.08] p-8 sm:p-12 hover:border-[#059669]/40 dark:hover:border-[#5BE18E]/40 transition-colors shadow-sm dark:shadow-2xl relative overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-neutral-200 dark:border-white/[0.08]">
                    <div className="flex items-start gap-6">
                      <span className="font-mono text-5xl sm:text-7xl font-bold text-neutral-300 dark:text-white/10 select-none">
                        {sol.num}
                      </span>
                      <div>
                        <div className="font-mono text-xs uppercase tracking-widest text-[#059669] dark:text-[#5BE18E]">
                          {sol.tagline}
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-[#EDE8DC] tracking-tight uppercase mt-1 font-display">
                          {sol.title}
                        </h2>
                      </div>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-[#059669]/10 dark:bg-[#5BE18E]/10 border border-[#059669]/20 dark:border-[#5BE18E]/20 flex items-center justify-center text-[#059669] dark:text-[#5BE18E] shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Body & Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
                    <div className="lg:col-span-5 space-y-4">
                      <div className="font-mono text-xs text-[#059669] dark:text-[#5BE18E] uppercase tracking-wider font-bold">
                        Core Philosophy
                      </div>
                      <p className="font-mono text-xs sm:text-sm text-neutral-600 dark:text-[#8F9CAE] leading-relaxed">
                        {sol.overview}
                      </p>

                      <div className="p-4 rounded-xl bg-neutral-100 dark:bg-black/40 border border-neutral-200 dark:border-white/5 space-y-1.5 mt-6">
                        <div className="font-mono text-[10px] text-neutral-500 dark:text-slate-500 uppercase">
                          Verified Benchmark Lift
                        </div>
                        <div className="font-mono text-sm font-bold text-[#059669] dark:text-[#5BE18E]">
                          {sol.impact}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                      <div className="font-mono text-xs text-neutral-900 dark:text-[#EDE8DC] uppercase tracking-wider font-bold">
                        Engineered Capabilities:
                      </div>
                      <div className="space-y-3 font-mono text-xs text-neutral-700 dark:text-slate-300">
                        {sol.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-white/[0.02] border border-neutral-200 dark:border-white/5">
                            <CheckCircle2 className="w-4 h-4 text-[#059669] dark:text-[#5BE18E] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 font-mono text-xs text-neutral-500 dark:text-slate-400">
                        <span>Deliverable: </span>
                        <span className="text-neutral-900 dark:text-[#EDE8DC] font-medium">{sol.deliverable}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA Bar */}
        <section className="py-20 bg-white dark:bg-[#0A0C10] border-t border-black/[0.08] dark:border-white/[0.08] transition-colors">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h3 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-[#EDE8DC] uppercase tracking-tight font-display">
              Ready to Upgrade Your Marketing Infrastructure?
            </h3>
            <p className="font-mono text-xs sm:text-sm text-neutral-600 dark:text-[#8F9CAE] max-w-xl mx-auto">
              Schedule a confidential 45-minute architectural walkthrough with our senior growth directors.
            </p>
            <div className="pt-2">
              <Link
                href="/#audit"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-sm text-white dark:text-[#0A0C10] bg-[#059669] dark:bg-[#5BE18E] hover:bg-[#047857] dark:hover:bg-[#4ADE80] transition-colors font-sans uppercase tracking-wider shadow-md"
              >
                <span>Request Architectural Audit</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
