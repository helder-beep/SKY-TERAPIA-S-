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
    <motion.div ref={ref} className="text-2xl md:text-6xl font-black text-[#2B1B4E] mb-1 md:mb-2 tracking-tighter leading-none">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.div>
  );
}

export default function About() {
  const values = [
    {
      title: "Formação Certificada",
      icon: <Target className="w-6 h-6 text-[#9B6DC9]" />,
      desc: "Formação DGERT em Terapias Holísticas e mais de 4 anos de experiência prática com clientes particulares."
    },
    {
      title: "Atendimento Próximo",
      icon: <Users className="w-6 h-6 text-[#9B6DC9]" />,
      desc: "Cada sessão é única e adaptada a ti — sem julgamentos, com escuta atenta e total disponibilidade."
    },
    {
      title: "Sigilo Total",
      icon: <Shield className="w-6 h-6 text-[#9B6DC9]" />,
      desc: "Tudo o que é partilhado nas sessões fica entre nós, num espaço reservado e acolhedor."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#2B1B4E] font-sans">
      <Navbar />
      <main className="pt-20">
        {/* Banner Hero */}
        <section className="relative h-[15vh] md:h-[20vh] min-h-[150px] overflow-hidden flex items-center mb-0 md:mb-0">
          <div className="absolute inset-0 bg-[#2B1B4E]" />
          <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px] relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
                QUEM <span className="font-display italic normal-case font-normal text-[#9B6DC9] lowercase tracking-normal px-2">somos?</span>
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
                    Somos uma marca de terapias holísticas com mais de 4 anos de experiência e formação certificada pela DGERT, dedicada a ajudar pessoas a encontrar clareza, cura e equilíbrio através do tarot, do reiki e de outras terapias energéticas.
                  </p>
                  <p>
                    Trabalhamos com clientes particulares em Santarém e também à distância, para quem prefere sessões online. Cada pessoa é acompanhada de forma individual, respeitando o seu ritmo e a sua história.
                  </p>
                  <p>
                    Oferecemos tarot cigano, terapia de vidas passadas, psicoterapia holística, reiki, defumações, mesa radiónica, EFT, cromoterapia, aromaterapia e trabalhos de proteção, amor e abundância — além de cursos e workshops que damos regularmente em feiras esotéricas.
                  </p>
                  <p className="font-black text-[#2B1B4E] uppercase tracking-tighter text-lg md:text-xl">
                    Sigilo total. Espaço acolhedor. Cuidado genuíno.
                  </p>
                  <p className="font-display italic normal-case font-normal text-[#2B1B4E]/80 text-base md:text-lg pt-2">
                    — Cláudia, Sky Terapia's
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 mb-10 md:mb-16 px-2 md:px-0">
                  {values.map((val, idx) => (
                    <div key={idx} className="bg-white p-6 md:p-8 rounded-[4px] shadow-sm border border-slate-100 text-center md:text-left">
                      <div className="mb-4 md:mb-6 flex justify-center md:justify-start">{val.icon}</div>
                      <h3 className="text-lg md:text-xl font-black text-[#2B1B4E] uppercase tracking-tighter mb-3 md:mb-4">{val.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{val.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-8 md:flex-row md:gap-4 justify-center px-4 md:px-0">
                  <Link href="/orcamento">
                    <Button 
                      className="bg-[#2B1B4E] hover:bg-[#9B6DC9] text-white font-black rounded-[4px] px-12 h-14 text-xs tracking-[0.2em] uppercase transition-all shadow-xl"
                    >
                      Contate-nos!
                    </Button>
                  </Link>
                  <a href="tel:+351923366826">
                    <Button variant="outline" className="border-2 border-[#2B1B4E] text-[#2B1B4E] hover:bg-[#2B1B4E] hover:text-white font-black rounded-[4px] px-12 h-14 text-xs tracking-[0.2em] uppercase transition-all">
                      Ligar Agora
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Parallax Quote Section */}
        <section className="relative h-[300px] md:h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2B1B4E]/30 to-[#9B6DC9]/20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M30%200L60%2030L30%2060L0%2030z%22%20fill%3D%22%234CAF50%22%20fill-opacity%3D%220.05%22%2F%3E%3C%2Fsvg%3E')]" />
          <div className="text-center z-10 px-4">
            <h3 className="text-2xl md:text-4xl font-black text-[#2B1B4E] uppercase tracking-tighter">
              "A cura começa quando nos permitimos ouvir a nossa própria alma."
            </h3>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-24 bg-white border-y border-slate-100">
          <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
            <div className="text-center mb-10 md:mb-16 px-4 md:px-0">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9B6DC9] mb-3 md:mb-4 block">SOBRE Nós</span>
            <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-[#2B1B4E] mb-4 md:mb-6 leading-tight">
                Experiência que <span className="font-display italic normal-case font-normal text-[#9B6DC9] lowercase tracking-normal">se sente</span>
              </h2>
              <p className="text-sm md:text-base text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto">
                Formação certificada, dedicação total e um espaço pensado para o teu bem-estar.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-px bg-slate-100 border border-slate-100">
              {[
                { value: 4, label: "Anos de experiência", suffix: "+" },
                { value: 8, label: "Terapias diferentes", suffix: "" },
                { value: 100, label: "Sigilo garantido", suffix: "%" }
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
