import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Users, Shield, Target } from "lucide-react";
import { Link } from "wouter";

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
    <motion.div ref={ref} className="text-2xl md:text-6xl font-black text-[#1B5E20] mb-1 md:mb-2 tracking-tighter leading-none">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.div>
  );
}

export default function About() {
  const values = [
    {
      title: "[Valor 1]",
      icon: <Target className="w-6 h-6 text-[#4CAF50]" />,
      desc: "[Descrição curta do valor/missão 1 da empresa.]"
    },
    {
      title: "[Valor 2]",
      icon: <Users className="w-6 h-6 text-[#4CAF50]" />,
      desc: "[Descrição curta do valor/missão 2 da empresa.]"
    },
    {
      title: "[Valor 3]",
      icon: <Shield className="w-6 h-6 text-[#4CAF50]" />,
      desc: "[Descrição curta do valor/missão 3 da empresa.]"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1B5E20] font-sans">
      <Navbar />
      <main className="pt-20">
        {/* Banner Hero */}
        <section className="relative h-[15vh] md:h-[20vh] min-h-[150px] overflow-hidden flex items-center mb-0 md:mb-0">
          <div className="absolute inset-0 bg-[#1B5E20]" />
          <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px] relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
                QUEM <span className="font-display italic normal-case font-normal text-[#4CAF50] lowercase tracking-normal px-2">somos?</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Story Section - Text Only on White Background */}
        <section className="py-12 md:py-24 bg-white border-b border-slate-50">
          <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-sm md:text-lg text-slate-700 leading-relaxed font-medium mb-10 md:mb-12 space-y-4 md:space-y-6 px-4 md:px-0">
                  <p>
                    [Parágrafo 1 sobre a história e experiência da empresa.]
                  </p>
                  <p>
                    [Parágrafo 2 sobre o tipo de clientes e áreas servidas.]
                  </p>
                  <p>
                    [Parágrafo 3 sobre os serviços e soluções disponibilizadas.]
                  </p>
                  <p className="font-black text-[#1B5E20] uppercase tracking-tighter text-lg md:text-xl">
                    [Frase de destaque/tagline da empresa.]
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 mb-10 md:mb-16 px-2 md:px-0">
                  {values.map((val, idx) => (
                    <div key={idx} className="bg-white p-6 md:p-8 rounded-[4px] shadow-sm border border-slate-100 text-center md:text-left">
                      <div className="mb-4 md:mb-6 flex justify-center md:justify-start">{val.icon}</div>
                      <h3 className="text-lg md:text-xl font-black text-[#1B5E20] uppercase tracking-tighter mb-3 md:mb-4">{val.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{val.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-8 md:flex-row md:gap-4 justify-center px-4 md:px-0">
                  <Link href="/orcamento">
                    <Button 
                      className="bg-[#1B5E20] hover:bg-[#4CAF50] text-white font-black rounded-[4px] px-12 h-14 text-xs tracking-[0.2em] uppercase transition-all shadow-xl"
                    >
                      Contate-nos!
                    </Button>
                  </Link>
                  <a href="tel:+000000000">
                    <Button variant="outline" className="border-2 border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white font-black rounded-[4px] px-12 h-14 text-xs tracking-[0.2em] uppercase transition-all">
                      Ligar Agora
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Parallax Quote Section */}
        <section className="relative h-[300px] md:h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1B5E20]/30 to-[#4CAF50]/20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M30%200L60%2030L30%2060L0%2030z%22%20fill%3D%22%234CAF50%22%20fill-opacity%3D%220.05%22%2F%3E%3C%2Fsvg%3E')]" />
          <div className="text-center z-10 px-4">
            <h3 className="text-2xl md:text-4xl font-black text-[#1B5E20] uppercase tracking-tighter">
              [Frase de destaque em citação]
            </h3>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-24 bg-white border-y border-slate-100">
          <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
            <div className="text-center mb-10 md:mb-16 px-4 md:px-0">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4CAF50] mb-3 md:mb-4 block">SOBRE Nós</span>
            <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-[#1B5E20] mb-4 md:mb-6 leading-tight">
                Resultados que <span className="font-display italic normal-case font-normal text-[#4CAF50] lowercase tracking-normal">falam por si</span>
              </h2>
              <p className="text-sm md:text-base text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto">
                [Frase curta a reforçar a experiência e qualidade da empresa.]
              </p>
            </div>

            <div className="grid grid-cols-3 gap-px bg-slate-100 border border-slate-100">
              {[
                { value: 5, label: "Anos de experiência", suffix: "+" },
                { value: 100, label: "Projectos concluídos", suffix: "+" },
                { value: 100, label: "Satisfação garantida", suffix: "%" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-4 md:p-10 flex flex-col items-center text-center justify-center">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 max-w-[70px] md:max-w-[150px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
