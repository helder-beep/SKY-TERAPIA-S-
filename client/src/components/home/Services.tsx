import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const services = [
  {
    title: "Tarot Cigano Intuitivo",
    short: "Tarot Cigano",
    subtitle: "ORIENTAÇÃO E CLAREZA",
    description: "Leitura de tarot cigano e tarot intuitivo para trazer clareza sobre amor, trabalho e caminho de vida.",
    details: "Cada sessão de tarot é feita com total sigilo, num espaço reservado e sem julgamentos. Combinamos a leitura tradicional do tarot cigano com a nossa intuição para te dar respostas concretas e orientação prática para as tuas dúvidas do dia a dia.",
    slug: "tarot-cigano",
    image: "/images/espaco/mesa-tarot-detalhe.jpg"
  },
  {
    title: "Terapia de Vidas Passadas",
    short: "Vidas Passadas",
    subtitle: "CURA DE PADRÕES ANTIGOS",
    description: "Regressão e terapia de vidas passadas para curar bloqueios emocionais que se repetem no presente.",
    details: "Muitos dos nossos medos, bloqueios e padrões repetitivos têm origem em memórias e experiências de vidas passadas. Esta terapia ajuda-te a identificar e libertar essas marcas, trazendo mais leveza e compreensão sobre o teu percurso atual.",
    slug: "vidas-passadas",
    image: "/images/espaco/zen-buddha.jpg"
  },
  {
    title: "Psicoterapia Holística",
    short: "Psicoterapia",
    subtitle: "ACOMPANHAMENTO EMOCIONAL",
    description: "Apoio psicoterapêutico integrado com terapias holísticas para o teu bem-estar emocional.",
    details: "Um acompanhamento próximo e humano, onde a psicoterapia se cruza com ferramentas holísticas para trabalhar ansiedade, autoestima e momentos de transição de vida. Sempre com total confidencialidade e ao teu ritmo.",
    slug: "psicoterapia",
    image: "/images/espaco/sala-atendimento.jpg"
  },
  {
    title: "Reiki & Cura Energética",
    short: "Reiki",
    subtitle: "EQUILÍBRIO E ENERGIA",
    description: "Sessões de Reiki para reequilibrar a tua energia e promover a cura de pessoas e ambientes.",
    details: "O Reiki é uma técnica de canalização de energia que ajuda a libertar tensões, equilibrar as emoções e promover a cura a nível físico, emocional e espiritual — tanto em pessoas como em espaços e negócios.",
    slug: "reiki",
    image: "/images/espaco/secretaria-difusor.jpg"
  },
  {
    title: "Defumações & Limpeza Energética",
    short: "Defumações",
    subtitle: "HABITAÇÃO E NEGÓCIOS",
    description: "Defumações de habitação e negócios para limpar energias densas e atrair boas vibrações.",
    details: "Através de defumações e rituais de limpeza energética, ajudamos a renovar a energia da tua casa ou do teu negócio, removendo bloqueios e criando um ambiente mais leve, próspero e harmonioso.",
    slug: "defumacoes",
    image: "/images/espaco/estante-cristais-oleos.jpg"
  },
  {
    title: "Mesa Radiónica & EFT",
    short: "Radiónica & EFT",
    subtitle: "TÉCNICAS ENERGÉTICAS",
    description: "Trabalho com mesa radiónica e sessões de EFT para libertar bloqueios emocionais e energéticos.",
    details: "A mesa radiónica permite trabalhar à distância questões de saúde, finanças e relações, enquanto o EFT (Técnica de Libertação Emocional) usa toques em pontos específicos do corpo para libertar emoções bloqueadas de forma rápida e eficaz.",
    slug: "mesa-radionica-eft",
    image: "/images/stock/mesa-radionica.jpg"
  },
  {
    title: "Cromoterapia & Aromaterapia",
    short: "Cromoterapia",
    subtitle: "SENTIDOS E BEM-ESTAR",
    description: "Terapias com cores e óleos essenciais para relaxar o corpo e a mente.",
    details: "A cromoterapia e a aromaterapia trabalham através dos sentidos para promover relaxamento profundo, equilíbrio emocional e uma sensação de bem-estar imediato, complementando as restantes terapias oferecidas.",
    slug: "cromoterapia-aromaterapia",
    image: "/images/espaco/estante-decorativa.jpg"
  },
  {
    title: "Proteção, Amor & Abundância",
    short: "Proteção & Abundância",
    subtitle: "TRABALHOS ESPECÍFICOS",
    description: "Trabalhos de proteção, amor e ascensão financeira feitos à tua medida.",
    details: "Sessões personalizadas de proteção energética, harmonização amorosa e desbloqueio financeiro, sempre adaptadas à tua situação pessoal e com total confidencialidade sobre o processo.",
    slug: "protecao-abundancia",
    image: "/images/espaco/cantinho-joias.jpg"
  }
];

export function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-20 md:py-32 bg-white text-[#2B1B4E] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
        
        {/* Section Header with Lines */}
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-16 md:mb-24">
          <div className="h-[2px] flex-1 bg-[#9B6DC9] max-w-[100px] md:max-w-[200px]" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-center whitespace-nowrap">
            As Nossas <span className="font-display italic normal-case font-normal text-[#9B6DC9] lowercase tracking-normal px-2">terapias</span>
          </h2>
          <div className="h-[2px] flex-1 bg-[#9B6DC9] max-w-[100px] md:max-w-[200px]" />
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 md:mb-16">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`text-[11px] md:text-xs font-medium tracking-normal transition-all px-4 py-2 rounded-full border ${
                activeTab === index
                ? "bg-[#2B1B4E] text-white border-[#2B1B4E]"
                : "bg-white text-slate-500 border-slate-200 hover:border-[#9B6DC9] hover:text-[#2B1B4E]"
              }`}
            >
              {service.short}
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
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[500px] overflow-hidden rounded-md group shadow-2xl">
                <ImagePlaceholder
                  src={services[activeTab].image}
                  label={services[activeTab].title}
                  width={1000}
                  height={750}
                  className="w-full h-full"
                />
              </div>

              {/* Right Column - Info & Thumbnails */}
              <div className="flex flex-col">
                <div className="mb-8">
                  <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.1em] block mb-2">
                    {services[activeTab].subtitle}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold uppercase mb-6 text-black">
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

                <div>
                  <Link href={`/servicos/${services[activeTab].slug}`}>
                    <Button
                      data-testid={`link-service-more-${services[activeTab].slug}`}
                      className="bg-[#2B1B4E] hover:bg-[#9B6DC9] text-white font-bold uppercase tracking-[0.1em] px-8 h-12 rounded-md shadow-lg transition-all text-xs md:text-sm flex items-center gap-2 group/btn"
                    >
                      Saber Mais
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
