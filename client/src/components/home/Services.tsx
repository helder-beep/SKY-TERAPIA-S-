import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const services = [
  {
    title: "[Título do Serviço 1]",
    subtitle: "[SUBTÍTULO CURTO EM MAIÚSCULAS]",
    description: "[Descrição curta do serviço 1, uma frase]",
    details: "[Texto mais detalhado sobre o serviço 1, explicando vantagens e características.]",
    slug: "servico-1",
    thumbnails: ["[Detalhe 1]", "[Detalhe 2]"]
  },
  {
    title: "[Título do Serviço 2]",
    subtitle: "[SUBTÍTULO CURTO EM MAIÚSCULAS]",
    description: "[Descrição curta do serviço 2, uma frase]",
    details: "[Texto mais detalhado sobre o serviço 2, explicando vantagens e características.]",
    slug: "servico-2",
    thumbnails: ["[Detalhe 1]", "[Detalhe 2]"]
  },
  {
    title: "[Título do Serviço 3]",
    subtitle: "[SUBTÍTULO CURTO EM MAIÚSCULAS]",
    description: "[Descrição curta do serviço 3, uma frase]",
    details: "[Texto mais detalhado sobre o serviço 3, explicando vantagens e características.]",
    slug: "servico-3",
    thumbnails: ["[Detalhe 1]", "[Detalhe 2]"]
  },
  {
    title: "[Título do Serviço 4]",
    subtitle: "[SUBTÍTULO CURTO EM MAIÚSCULAS]",
    description: "[Descrição curta do serviço 4, uma frase]",
    details: "[Texto mais detalhado sobre o serviço 4, explicando vantagens e características.]",
    slug: "servico-4",
    thumbnails: ["[Detalhe 1]", "[Detalhe 2]"]
  },
  {
    title: "[Título do Serviço 5]",
    subtitle: "[SUBTÍTULO CURTO EM MAIÚSCULAS]",
    description: "[Descrição curta do serviço 5, uma frase]",
    details: "[Texto mais detalhado sobre o serviço 5, explicando vantagens e características.]",
    slug: "servico-5",
    thumbnails: ["[Detalhe 1]", "[Detalhe 2]"]
  },
  {
    title: "[Título do Serviço 6]",
    subtitle: "[SUBTÍTULO CURTO EM MAIÚSCULAS]",
    description: "[Descrição curta do serviço 6, uma frase]",
    details: "[Texto mais detalhado sobre o serviço 6, explicando vantagens e características.]",
    slug: "servico-6",
    thumbnails: ["[Detalhe 1]", "[Detalhe 2]"]
  },
  {
    title: "[Título do Serviço 7]",
    subtitle: "[SUBTÍTULO CURTO EM MAIÚSCULAS]",
    description: "[Descrição curta do serviço 7, uma frase]",
    details: "[Texto mais detalhado sobre o serviço 7, explicando vantagens e características.]",
    slug: "servico-7",
    thumbnails: ["[Detalhe 1]", "[Detalhe 2]"]
  },
  {
    title: "[Título do Serviço 8]",
    subtitle: "[SUBTÍTULO CURTO EM MAIÚSCULAS]",
    description: "[Descrição curta do serviço 8, uma frase]",
    details: "[Texto mais detalhado sobre o serviço 8, explicando vantagens e características.]",
    slug: "servico-8",
    thumbnails: ["[Detalhe 1]", "[Detalhe 2]"]
  }
];

export function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-20 md:py-32 bg-white text-[#1B5E20] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
        
        {/* Section Header with Lines */}
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-16 md:mb-24">
          <div className="h-[2px] flex-1 bg-[#4CAF50] max-w-[100px] md:max-w-[200px]" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-center whitespace-nowrap">
            Instalação de <span className="font-display italic normal-case font-normal text-[#4CAF50] lowercase tracking-normal px-2">relva artificial</span>
          </h2>
          <div className="h-[2px] flex-1 bg-[#4CAF50] max-w-[100px] md:max-w-[200px]" />
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-12 lg:gap-x-20 gap-y-4 mb-12 md:mb-16 border-b border-slate-100 pb-4">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`text-[10px] md:text-xs font-black uppercase tracking-widest transition-all relative pb-4 ${
                activeTab === index 
                ? "text-[#1B5E20]" 
                : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {service.title}
              {activeTab === index && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1B5E20]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[600px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
            >
              {/* Left Column - Large Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[500px] overflow-hidden rounded-sm group shadow-2xl">
                <ImagePlaceholder
                  label={`[Imagem: ${services[activeTab].title}]`}
                  width={1000}
                  height={750}
                  className="w-full h-full"
                />
              </div>

              {/* Right Column - Info & Thumbnails */}
              <div className="flex flex-col">
                <div className="mb-8">
                  <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] block mb-2">
                    {services[activeTab].subtitle}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black uppercase mb-6 text-black">
                    {services[activeTab].title}
                  </h3>
                  <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed">
                    <p className="font-medium text-black">
                      {services[activeTab].description}
                    </p>
                    <p>
                      {services[activeTab].details}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <Link href={`/servicos/${services[activeTab].slug}`}>
                    <Button 
                      data-testid={`link-service-more-${services[activeTab].slug}`}
                      className="bg-[#1B5E20] hover:bg-[#4CAF50] text-white font-black uppercase tracking-[0.2em] px-8 h-12 rounded-sm shadow-lg transition-all text-xs md:text-sm flex items-center gap-2 group/btn"
                    >
                      Saber Mais
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>

                {/* Secondary Images/Thumbnails */}
                <div className="grid grid-cols-2 gap-4 mt-auto relative">
                  {services[activeTab].thumbnails.map((thumb, i) => (
                    <div key={i} className="relative aspect-video overflow-hidden rounded-sm group shadow-lg">
                      <ImagePlaceholder
                        label={thumb}
                        width={400}
                        height={225}
                        className="w-full h-full"
                      />
                    </div>
                  ))}
                  
                  {/* Plus Icon Overlay Style from Screenshot */}
                  <div className="absolute -bottom-4 -right-4 lg:-right-8">
                    <Link href={`/servicos/${services[activeTab].slug}`}>
                      <div className="relative group cursor-pointer">
                        <div className="relative w-12 h-12 flex items-center justify-center bg-[#4CAF50] text-white hover-elevate active-elevate-2">
                          <Plus className="w-6 h-6 z-10" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
