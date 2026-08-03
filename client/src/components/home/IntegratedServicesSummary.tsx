import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function IntegratedServicesSummary() {
  const summaryItems = [
    { title: "[Serviço 1]", desc: "[Descrição curta do serviço 1.]", icon: "✓", slug: "servico-1" },
    { title: "[Serviço 2]", desc: "[Descrição curta do serviço 2.]", icon: "⚡", slug: "servico-2" },
    { title: "[Serviço 3]", desc: "[Descrição curta do serviço 3.]", icon: "⚽", slug: "servico-3" },
    { title: "[Serviço 4]", desc: "[Descrição curta do serviço 4.]", icon: "🌿", slug: "servico-4" }
  ];

  return (
    <div className="bg-[#1B5E20] p-6 md:p-16 border-t border-[#4CAF50]/30 relative overflow-hidden mx-0">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#4CAF50]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-8 md:gap-12 items-center">
        <div className="max-w-xl text-center lg:text-left px-2 md:px-0">
          <div className="inline-flex items-center gap-2 bg-[#4CAF50] text-white px-3 py-1 rounded-sm mb-4 md:mb-6 shadow-lg">
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">[Selo/Etiqueta]</span>
          </div>
          <h3 className="text-white text-2xl md:text-5xl font-black uppercase tracking-tighter mb-4 md:mb-6 leading-[0.9]">
            [Título de <br/>
            <span className="text-[#4CAF50]">Resumo]</span>
          </h3>
          <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic border-l-4 border-[#4CAF50] pl-4 md:pl-6 py-2 uppercase tracking-widest">
            [Texto curto a resumir a proposta de valor da empresa.]
          </p>
        </div>
        
        <div className="w-full lg:w-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {summaryItems.map((item, i) => (
            <Link href={`/servicos/${item.slug}`} key={i}>
              <div className="bg-white/5 backdrop-blur-sm p-5 md:p-6 border border-white/10 hover:border-[#4CAF50]/50 transition-all group cursor-pointer h-full flex items-center gap-4 md:block">
                <div className="flex md:justify-between items-start md:mb-2 shrink-0">
                  <div className="text-[#4CAF50] text-xl font-black group-hover:scale-120 transition-transform">{item.icon}</div>
                  <ArrowRight className="hidden md:block w-4 h-4 text-[#4CAF50] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white text-xs md:text-sm font-black uppercase tracking-widest mb-1 md:mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-[10px] md:text-xs font-bold leading-tight uppercase tracking-tight">{item.desc}</p>
                </div>
                <ArrowRight className="md:hidden w-4 h-4 text-[#4CAF50] shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
