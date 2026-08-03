import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const heights = [
  {
    id: "info",
    label: "[OPÇÃO 1]",
    title: "[Título da secção]",
    isOverview: true,
    description: "[Texto introdutório explicando como escolher entre as opções abaixo.]",
    points: [
      { label: "[Opção A]", text: "[explicação curta sobre quando usar a opção A.]" },
      { label: "[Opção B]", text: "[explicação curta sobre quando usar a opção B.]" },
      { label: "[Opção C]", text: "[explicação curta sobre quando usar a opção C.]" }
    ],
    image: "[Imagem de visão geral]"
  },
  {
    id: "short",
    label: "[OPÇÃO A]",
    title: "[Título da secção]",
    description: "[Descrição curta da opção A.]",
    details: "[Texto detalhado sobre a opção A, explicando características e vantagens.]",
    recommended: "[lista de casos de uso recomendados para a opção A.]",
    image: "[Imagem da opção A]"
  },
  {
    id: "medium",
    label: "[OPÇÃO B]",
    title: "[Título da secção]",
    description: "[Descrição curta da opção B.]",
    details: "[Texto detalhado sobre a opção B, explicando características e vantagens.]",
    recommended: "[lista de casos de uso recomendados para a opção B.]",
    image: "[Imagem da opção B]"
  },
  {
    id: "high",
    label: "[OPÇÃO C]",
    title: "[Título da secção]",
    description: "[Descrição curta da opção C.]",
    details: "[Texto detalhado sobre a opção C, explicando características e vantagens.]",
    recommended: "[lista de casos de uso recomendados para a opção C.]",
    image: "[Imagem da opção C]"
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
            <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight text-[#1B5E20]">
              [Título da <span className="font-display italic normal-case font-normal text-[#4CAF50] lowercase tracking-normal">secção]</span>
            </h2>
          </div>
          <div className="w-full h-[2px] bg-[#1B5E20]"></div>
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
                  ? "text-[#1B5E20]" 
                  : "text-slate-400 hover:text-slate-600"
              )}
            >
              {h.label}
              {activeTab.id === h.id && (
                <motion.div 
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1B5E20]"
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
                <p className="text-[#1B5E20]/70 text-sm md:text-base leading-relaxed font-medium">
                  {activeTab.description}
                </p>

                {activeTab.isOverview ? (
                  <ul className="space-y-6">
                    {activeTab.points?.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#4CAF50] mt-1.5 font-black">•</span>
                        <p className="text-[#1B5E20]/80 text-sm md:text-base leading-relaxed">
                          <span className="font-black uppercase text-xs tracking-tighter text-[#1B5E20]">{point.label}:</span> {point.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <p className="text-[#1B5E20]/80 text-sm md:text-base leading-relaxed">
                      {activeTab.details}
                    </p>
                    <div className="pt-4 border-l-2 border-[#4CAF50] pl-4">
                      <p className="text-[#1B5E20] text-sm md:text-base font-black uppercase tracking-widest mb-1">
                        Recomendados especialmente para:
                      </p>
                      <p className="text-[#1B5E20]/70 font-medium italic lowercase">
                        {activeTab.recommended}
                      </p>
                    </div>
                  </>
                )}

                {/* Sub-label/Action matching screenshot but with brand styling */}
                <div className="pt-10 flex justify-center lg:justify-start">
                  <button 
                    onClick={() => window.location.href = "/orcamento"}
                    className="bg-[#1B5E20] hover:bg-[#4CAF50] text-white font-black uppercase tracking-[0.2em] px-10 py-5 rounded-sm shadow-xl transition-all hover:scale-105 text-xs md:text-sm"
                  >
                    {activeTab.isOverview ? "QUE ALTURA ESCOLHER?" : "PEDIR ORÇAMENTO"}
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
