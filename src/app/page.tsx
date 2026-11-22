import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F5] dark:bg-[#0D1927] text-neutral-900 dark:text-white selection:bg-[#55D98A] selection:text-[#0D1927] transition-colors duration-200">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <SolutionsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
