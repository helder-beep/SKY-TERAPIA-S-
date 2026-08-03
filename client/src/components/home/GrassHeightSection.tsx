import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const heights = [
  {
    id: "info",
    label: "VISÃO GERAL",
    title: "Qual sessão escolher?",
    isOverview: true,
    description: "Cada pessoa chega até mim numa fase diferente. Aqui fica um guia rápido para escolheres a sessão mais adequada ao que precisas agora.",
    points: [
      { label: "Tarot Cigano", text: "ideal para quem procura orientação rápida sobre uma dúvida concreta — amor, trabalho ou decisões do dia a dia." },
      { label: "Vidas Passadas", text: "indicado para quem sente padrões repetitivos ou bloqueios que parecem não ter origem no presente." },
      { label: "Reiki / Psicoterapia", text: "recomendado para um acompanhamento mais profundo, focado em equilíbrio emocional e energético contínuo." }
    ],
    image: "[Imagem de visão geral: mesa de tarot com velas]"
  },
  {
    id: "short",
    label: "TAROT CIGANO",
    title: "Orientação Rápida",
    description: "Uma leitura de tarot cigano focada numa questão específica.",
    details: "Perfeita para quem precisa de clareza imediata sobre uma situação — uma decisão a tomar, uma dúvida no amor ou no trabalho. A sessão é direta, intuitiva e feita com total sigilo.",
    recommended: "dúvidas pontuais, decisões urgentes, orientação sobre amor e trabalho.",
    image: "[Imagem: leitura de tarot cigano]"
  },
  {
    id: "medium",
    label: "VIDAS PASSADAS",
    title: "Terapia Profunda",
    description: "Uma sessão de regressão para trabalhar bloqueios emocionais mais enraizados.",
    details: "Através da terapia de vidas passadas, exploramos a origem de medos, padrões e bloqueios que se repetem na tua vida atual, promovendo libertação e compreensão.",
    recommended: "padrões repetitivos, medos sem explicação aparente, bloqueios emocionais antigos.",
    image: "[Imagem: sessão de regressão]"
  },
  {
    id: "high",
    label: "REIKI & PSICOTERAPIA",
    title: "Acompanhamento Contínuo",
    description: "Um percurso de várias sessões para trabalhar o teu equilíbrio a longo prazo.",
    details: "Combinando Reiki, psicoterapia holística e outras técnicas energéticas, construímos um acompanhamento contínuo, adaptado à tua evolução e às tuas necessidades ao longo do tempo.",
    recommended: "ansiedade, transições de vida, quem procura um acompanhamento regular.",
    image: "[Imagem: sessão de Reiki]"
  }
];

export function GrassHeightSection() {
  const [activeTab, setActiveTab] = useState(heights[0]);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6 md:px-8 xl:px-12 max-w-[1400px]">
        {/* Header matching screenshot */}
        <div className="relative mb-8">
          <div className="text-center mb-4">
            <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight text-[#2B1B4E]">
              Encontra a <span className="font-display italic normal-case font-normal text-[#9B6DC9] lowercase tracking-normal">tua sessão</span>
            </h2>
          </div>
          <div className="w-full h-[2px] bg-[#2B1B4E]"></div>
        </div>

        {/* Navigation Tabs matching screenshot */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-12 mb-12">
          {heights.map((h) => (
            <button
              key={h.id}
              onClick={() => setActiveTab(h)}
              className={cn(
                "text-[10px] md:text-xs font-black uppercase tracking-widest py-2 transition-all relative",
                activeTab.id === h.id 
                  ? "text-[#2B1B4E]" 
                  : "text-slate-400 hover:text-slate-600"
              )}
            >
              {h.label}
              {activeTab.id === h.id && (
                <motion.div 
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2B1B4E]"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Side: Image - Glued to the edge */}
        <div className="w-full lg:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full"
            >
              <ImagePlaceholder
                label={activeTab.image}
                width={800}
                height={600}
                className="w-full aspect-[4/3]"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Content - Keeping container alignment */}
        <div className="w-full lg:w-1/2">
          <div className="max-w-[700px] px-6 md:px-8 xl:px-12 py-12 lg:py-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <p className="text-[#2B1B4E]/70 text-sm md:text-base leading-relaxed font-medium">
                  {activeTab.description}
                </p>

                {activeTab.isOverview ? (
                  <ul className="space-y-6">
                    {activeTab.points?.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#9B6DC9] mt-1.5 font-black">•</span>
                        <p className="text-[#2B1B4E]/80 text-sm md:text-base leading-relaxed">
                          <span className="font-black uppercase text-xs tracking-tighter text-[#2B1B4E]">{point.label}:</span> {point.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <p className="text-[#2B1B4E]/80 text-sm md:text-base leading-relaxed">
                      {activeTab.details}
                    </p>
                    <div className="pt-4 border-l-2 border-[#9B6DC9] pl-4">
                      <p className="text-[#2B1B4E] text-sm md:text-base font-black uppercase tracking-widest mb-1">
                        Recomendados especialmente para:
                      </p>
                      <p className="text-[#2B1B4E]/70 font-medium italic lowercase">
                        {activeTab.recommended}
                      </p>
                    </div>
                  </>
                )}

                {/* Sub-label/Action matching screenshot but with brand styling */}
                <div className="pt-10 flex justify-center lg:justify-start">
                  <button 
                    onClick={() => window.location.href = "/orcamento"}
                    className="bg-[#2B1B4E] hover:bg-[#9B6DC9] text-white font-black uppercase tracking-[0.2em] px-10 py-5 rounded-sm shadow-xl transition-all hover:scale-105 text-xs md:text-sm"
                  >
                    {activeTab.isOverview ? "QUAL SESSÃO ESCOLHER?" : "MARCAR ESTA SESSÃO"}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
