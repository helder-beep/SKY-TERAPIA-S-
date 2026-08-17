import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function IntegratedServicesSummary() {
  const summaryItems = [
    { title: "Tarot Cigano", desc: "Orientação rápida e intuitiva.", icon: "🔮", slug: "tarot-cigano" },
    { title: "Vidas Passadas", desc: "Cura de padrões e bloqueios.", icon: "✨", slug: "vidas-passadas" },
    { title: "Psicoterapia", desc: "Acompanhamento emocional.", icon: "💜", slug: "psicoterapia" },
    { title: "Reiki", desc: "Equilíbrio energético.", icon: "🌿", slug: "reiki" }
  ];

  return (
    <div className="bg-[#2B1B4E] p-6 md:p-16 border-t border-[#9B6DC9]/30 relative overflow-hidden mx-0">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#9B6DC9]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-8 md:gap-12 items-center">
        <div className="max-w-xl text-center lg:text-left px-2 md:px-0">
          <div className="inline-flex items-center gap-2 bg-[#9B6DC9] text-white px-3 py-1 rounded-md mb-4 md:mb-6 shadow-lg">
            <span className="text-[10px] font-bold uppercase tracking-[0.1em]">Terapias Mais Procuradas</span>
          </div>
          <h3 className="text-white text-2xl md:text-5xl font-bold uppercase tracking-tighter mb-4 md:mb-6 leading-[0.9]">
            Um Caminho de <br/>
            <span className="text-[#9B6DC9]">Autoconhecimento</span>
          </h3>
          <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic border-l-4 border-[#9B6DC9] pl-4 md:pl-6 py-2 uppercase tracking-wider">
            Tarot, terapia da alma e energia — tudo num só espaço, com sigilo total.
          </p>
        </div>
        
        <div className="w-full lg:w-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {summaryItems.map((item, i) => (
            <Link href={`/servicos/${item.slug}`} key={i}>
              <div className="bg-white/5 backdrop-blur-sm p-5 md:p-6 border border-white/10 hover:border-[#9B6DC9]/50 transition-all group cursor-pointer h-full flex items-center gap-4 md:block">
                <div className="flex md:justify-between items-start md:mb-2 shrink-0">
                  <div className="text-[#9B6DC9] text-xl font-bold group-hover:scale-120 transition-transform">{item.icon}</div>
                  <ArrowRight className="hidden md:block w-4 h-4 text-[#9B6DC9] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white text-xs md:text-sm font-bold uppercase tracking-wider mb-1 md:mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-[10px] md:text-xs font-bold leading-tight uppercase tracking-tight">{item.desc}</p>
                </div>
                <ArrowRight className="md:hidden w-4 h-4 text-[#9B6DC9] shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
