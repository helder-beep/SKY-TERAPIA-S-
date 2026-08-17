import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { AboutSection } from "@/components/home/AboutSection";
import { Process } from "@/components/home/Process";
import { Reviews } from "@/components/home/Reviews";
import { FAQs } from "@/components/home/FAQs";
import { CTA } from "@/components/home/CTA";
import { IntegratedServicesSummary } from "@/components/home/IntegratedServicesSummary";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [value, count, isInView]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-purple-500/30 bg-white">
      <Navbar />
      
      {/* HERO SECTION */}
      <div className="relative z-10 w-full">
        <Hero />
      </div>

      {/* Stats Bar */}
      <div className="relative z-20 w-full bg-white py-8 md:py-8 border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-8 xl:px-12 max-w-[1400px]">
          <div className="grid grid-cols-3 gap-3 md:gap-8 items-center text-center">
            {[
              { value: 4, label: "Anos de prática em tarot", suffix: "+" },
              { value: 8, label: "Terapias diferentes", suffix: "" },
              { value: 100, label: "Sigilo garantido", suffix: "%" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center gap-2 md:gap-4 group">
                <motion.span className="text-2xl md:text-6xl font-bold text-[#2B1B4E] leading-none tracking-tighter">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </motion.span>
                <div className="flex flex-col">
                  <span className="text-[#2B1B4E] text-[9px] md:text-xs font-bold uppercase tracking-tight leading-tight max-w-[70px] md:max-w-[120px]">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT - Order: Serviços, Sobre Nós, O Nosso Processo, Portfolio, Testemunhos, FAQs, CTA */}
      <div className="relative z-20 w-full">
        <div id="services">
          <Services />
        </div>

        <IntegratedServicesSummary />

        <div id="about">
          <AboutSection />
        </div>

        <Process />

        <div id="reviews">
          <Reviews />
        </div>

        <FAQs />

        <CTA />

        <Footer />
      </div>
    </div>
  );
}
