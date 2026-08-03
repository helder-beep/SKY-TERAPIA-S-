import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, Phone, ExternalLink } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

interface PortfolioRef {
  title: string;
  location: string;
  description: string;
  previewImage: string;
  portfolioId: string;
}

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  fullContent: string;
  features: string[];
  benefits: string[];
  image: string;
  portfolioRef?: PortfolioRef;
}

const servicesData: Record<string, ServiceData> = {
  "tarot-cigano": {
    title: "Tarot Cigano Intuitivo",
    subtitle: "ORIENTAÇÃO E CLAREZA",
    description: "Leitura de tarot cigano e tarot intuitivo para trazer clareza sobre amor, trabalho e caminho de vida.",
    fullContent: "O tarot cigano é uma ferramenta de orientação que combina símbolos tradicionais com a minha intuição para te ajudar a ver com clareza as situações da tua vida. Cada sessão é feita com total sigilo, num espaço reservado, sem julgamentos — só respostas honestas e orientação prática para as tuas dúvidas sobre amor, trabalho ou decisões importantes.",
    features: ["Leitura de tarot cigano tradicional", "Interpretação intuitiva das cartas", "Foco em amor, trabalho ou vida pessoal", "Sessões presenciais ou online"],
    benefits: ["Mais clareza para decidir", "Respostas diretas e honestas", "Sigilo total sobre a sessão", "Orientação prática para o dia a dia"],
    image: "[Imagem: baralho de tarot cigano]",
    portfolioRef: {
      title: "Cantinho do Tarot",
      location: "Santarém",
      description: "Conhece o espaço onde são feitas as leituras de tarot cigano e tarot intuitivo.",
      previewImage: "[Foto: Tarot 1]",
      portfolioId: "tarot-cigano"
    }
  },
  "vidas-passadas": {
    title: "Terapia de Vidas Passadas",
    subtitle: "CURA DE PADRÕES ANTIGOS",
    description: "Regressão e terapia de vidas passadas para curar bloqueios emocionais que se repetem no presente.",
    fullContent: "Muitos medos, bloqueios e padrões repetitivos têm origem em memórias de vidas passadas. Através da terapia de vidas passadas, ajudo-te a identificar essas marcas e a libertá-las, trazendo mais leveza, compreensão e paz sobre o teu percurso atual. Cada sessão decorre num ambiente calmo e seguro, ao teu ritmo.",
    features: ["Sessão de regressão guiada", "Identificação de padrões repetitivos", "Ambiente calmo e seguro", "Acompanhamento pós-sessão"],
    benefits: ["Liberta bloqueios emocionais antigos", "Traz compreensão sobre padrões atuais", "Promove sensação de leveza e paz", "Sessão individual e confidencial"],
    image: "[Imagem: sessão de regressão]"
  },
  "psicoterapia": {
    title: "Psicoterapia Holística",
    subtitle: "ACOMPANHAMENTO EMOCIONAL",
    description: "Apoio psicoterapêutico integrado com terapias holísticas para o teu bem-estar emocional.",
    fullContent: "Um acompanhamento próximo e humano, onde a psicoterapia se cruza com ferramentas holísticas para trabalhar ansiedade, autoestima e momentos de transição de vida. As sessões são pensadas para te ouvir sem julgamentos e ajudar-te a encontrar as tuas próprias respostas, sempre com total confidencialidade.",
    features: ["Sessões individuais regulares", "Abordagem holística e humana", "Foco em ansiedade e autoestima", "Acompanhamento em transições de vida"],
    benefits: ["Espaço seguro para falares livremente", "Ferramentas práticas para o dia a dia", "Acompanhamento ao teu ritmo", "Sigilo profissional garantido"],
    image: "[Imagem: sessão individual]"
  },
  "reiki": {
    title: "Reiki & Cura Energética",
    subtitle: "EQUILÍBRIO E ENERGIA",
    description: "Sessões de Reiki para reequilibrar a tua energia e promover a cura de pessoas e ambientes.",
    fullContent: "O Reiki é uma técnica de canalização de energia que ajuda a libertar tensões, equilibrar emoções e promover a cura a nível físico, emocional e espiritual. Além das sessões individuais, também trabalho a energia de espaços e negócios, ajudando a criar ambientes mais leves e harmoniosos.",
    features: ["Sessão de Reiki presencial", "Cura energética de pessoas", "Harmonização de espaços e negócios", "Ambiente relaxante e acolhedor"],
    benefits: ["Reduz stress e tensão", "Promove equilíbrio emocional", "Melhora a energia do ambiente", "Complementa outras terapias"],
    image: "[Imagem: sessão de Reiki]"
  },
  "defumacoes": {
    title: "Defumações & Limpeza Energética",
    subtitle: "HABITAÇÃO E NEGÓCIOS",
    description: "Defumações de habitação e negócios para limpar energias densas e atrair boas vibrações.",
    fullContent: "Através de defumações e rituais de limpeza energética, ajudo a renovar a energia da tua casa ou do teu negócio, removendo bloqueios e criando um ambiente mais leve, próspero e harmonioso. Ideal após mudanças, conflitos ou sempre que sentires o ambiente 'pesado'.",
    features: ["Defumação de habitações", "Defumação de espaços comerciais", "Rituais de limpeza energética", "Orientação para manter o espaço equilibrado"],
    benefits: ["Renova a energia do espaço", "Remove bloqueios acumulados", "Cria ambiente mais harmonioso", "Indicado após mudanças ou conflitos"],
    image: "[Imagem: ritual de defumação]"
  },
  "mesa-radionica-eft": {
    title: "Mesa Radiónica & EFT",
    subtitle: "TÉCNICAS ENERGÉTICAS",
    description: "Trabalho com mesa radiónica e sessões de EFT para libertar bloqueios emocionais e energéticos.",
    fullContent: "A mesa radiónica permite trabalhar à distância questões de saúde, finanças e relações, enquanto o EFT (Técnica de Libertação Emocional) usa toques em pontos específicos do corpo para libertar emoções bloqueadas de forma rápida e eficaz. Duas ferramentas complementares para desbloquear o que te impede de avançar.",
    features: ["Trabalho com mesa radiónica", "Sessões de EFT (tapping)", "Pode ser feito à distância", "Foco em saúde, finanças ou relações"],
    benefits: ["Liberta emoções bloqueadas rapidamente", "Funciona também à distância", "Aborda causas energéticas profundas", "Complementa outras terapias"],
    image: "[Imagem: mesa radiónica]"
  },
  "cromoterapia-aromaterapia": {
    title: "Cromoterapia & Aromaterapia",
    subtitle: "SENTIDOS E BEM-ESTAR",
    description: "Terapias com cores e óleos essenciais para relaxar o corpo e a mente.",
    fullContent: "A cromoterapia e a aromaterapia trabalham através dos sentidos — cor e aroma — para promover relaxamento profundo, equilíbrio emocional e uma sensação de bem-estar imediato. São ótimas como complemento a outras sessões ou como uma experiência independente de relaxamento.",
    features: ["Sessão de cromoterapia", "Aromaterapia com óleos essenciais", "Ambiente relaxante e sensorial", "Pode combinar-se com outras terapias"],
    benefits: ["Relaxamento imediato", "Equilíbrio emocional através dos sentidos", "Experiência suave e acessível", "Boa introdução às terapias holísticas"],
    image: "[Imagem: óleos e cores terapêuticas]"
  },
  "protecao-abundancia": {
    title: "Proteção, Amor & Abundância",
    subtitle: "TRABALHOS ESPECÍFICOS",
    description: "Trabalhos de proteção, amor e ascensão financeira feitos à tua medida.",
    fullContent: "Sessões personalizadas de proteção energética, harmonização amorosa e desbloqueio financeiro, sempre adaptadas à tua situação pessoal. Depois de perceber o que procuras, construo um trabalho à tua medida, com total confidencialidade sobre o processo e os resultados.",
    features: ["Trabalhos de proteção energética", "Harmonização em relações amorosas", "Desbloqueio e ascensão financeira", "Sessões totalmente personalizadas"],
    benefits: ["Trabalho adaptado à tua situação", "Confidencialidade total", "Acompanhamento próximo", "Foco em resultados práticos"],
    image: "[Imagem: ritual de proteção e abundância]"
  }
};

export default function ServicePage() {
  const [, params] = useRoute("/servicos/:slug");
  const slug = params?.slug || "";
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-bold text-[#2B1B4E]">Serviço não encontrado</h1>
          <Link href="/">
            <Button className="mt-4">Voltar ao Início</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#2B1B4E] font-sans">
      <Navbar />
      <main className="pt-20">
        {/* Banner Hero */}
        <section className="relative h-[25vh] md:h-[30vh] min-h-[200px] overflow-hidden flex items-center bg-[#2B1B4E]">
          {service.image && (
            <>
              <ImagePlaceholder label={service.image} width={1400} height={500} className="absolute inset-0 w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#2B1B4E]/40 to-[#2B1B4E]/80" />
            </>
          )}
          <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px] relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-2 md:mb-3 block">
                {service.subtitle}
              </span>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-none">
                {service.title}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
            <Link href="/#services">
              <Button variant="ghost" className="mb-8 hover:bg-slate-100 gap-2">
                <ArrowLeft className="w-4 h-4" /> Voltar aos serviços
              </Button>
            </Link>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-black uppercase tracking-tight text-[#2B1B4E] mb-6">
                    Sobre o <span className="font-display italic normal-case font-normal text-[#9B6DC9] lowercase tracking-normal">serviço</span>
                  </h2>
                  <p className="text-slate-700 text-lg leading-relaxed mb-8">
                    {service.fullContent}
                  </p>
                  <div className="bg-[#2B1B4E]/5 p-8 rounded-sm border-l-4 border-[#9B6DC9]">
                    <p className="text-[#2B1B4E] font-bold italic">
                      "{service.description}"
                    </p>
                  </div>
                </motion.div>

                {/* Features & Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-50 p-8 rounded-sm"
                  >
                    <h3 className="text-xl font-black text-[#2B1B4E] uppercase tracking-tight mb-6">
                      O Que Incluímos
                    </h3>
                    <div className="space-y-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#9B6DC9] flex-shrink-0 mt-0.5" />
                          <span className="text-[#2B1B4E] font-bold uppercase tracking-tight text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#2B1B4E]/5 p-8 rounded-sm"
                  >
                    <h3 className="text-xl font-black text-[#2B1B4E] uppercase tracking-tight mb-6">
                      Benefícios
                    </h3>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#9B6DC9] flex items-center justify-center text-white font-bold text-[10px] shrink-0">
                            {i + 1}
                          </div>
                          <span className="text-[#2B1B4E] font-bold uppercase tracking-tight text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Portfolio Connection Card */}
                {service.portfolioRef && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-1 h-8 bg-[#9B6DC9]" />
                      <h3 className="text-xl font-black text-[#2B1B4E] uppercase tracking-tight">
                        Projeto em Destaque
                      </h3>
                    </div>
                    <Link href="/portfolio">
                      <div className="group border-2 border-slate-200 hover:border-[#9B6DC9] transition-all duration-300 rounded-sm overflow-hidden cursor-pointer">
                        <div className="flex flex-col md:flex-row">
                          {/* Image Preview */}
                          <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0 overflow-hidden">
                            <ImagePlaceholder
                              label={service.portfolioRef.previewImage}
                              width={400}
                              height={300}
                              className="w-full h-full"
                            />
                            <div className="absolute inset-0 bg-[#2B1B4E]/20 group-hover:bg-[#2B1B4E]/10 transition-colors duration-300" />
                            <div className="absolute top-3 left-3">
                              <span className="bg-[#9B6DC9] text-white text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1">
                                Portfólio
                              </span>
                            </div>
                          </div>
                          {/* Content */}
                          <div className="flex-1 p-6 md:p-8 flex flex-col justify-between bg-white group-hover:bg-slate-50 transition-colors duration-300">
                            <div>
                              <div className="flex items-start justify-between gap-4 mb-3">
                                <div>
                                  <p className="text-[#9B6DC9] text-[10px] font-black uppercase tracking-[0.25em] mb-1">
                                    {service.portfolioRef.location}
                                  </p>
                                  <h4 className="text-[#2B1B4E] text-xl font-black uppercase tracking-tight leading-tight">
                                    {service.portfolioRef.title}
                                  </h4>
                                </div>
                                <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-[#9B6DC9] transition-colors duration-300 shrink-0 mt-1" />
                              </div>
                              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                {service.portfolioRef.description}
                              </p>
                            </div>
                            <div className="mt-5 pt-5 border-t border-slate-100 flex items-center justify-between">
                              <span className="text-[#2B1B4E] text-xs font-black uppercase tracking-widest group-hover:text-[#9B6DC9] transition-colors duration-300">
                                Ver projeto completo
                              </span>
                              <ArrowRight className="w-4 h-4 text-[#9B6DC9] -translate-x-1 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#2B1B4E] p-8 rounded-sm text-white sticky top-32 shadow-2xl"
                >
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4">
                    Peça o Seu Orçamento
                  </h3>
                  <p className="text-white/80 text-sm mb-6 uppercase tracking-wider font-medium">
                    Orçamento gratuito e sem compromisso. Resposta em menos de 24 horas.
                  </p>
                  <div className="flex flex-col gap-6">
                    <Link href="/orcamento">
                      <Button className="w-full bg-[#9B6DC9] text-white hover:bg-white hover:text-[#2B1B4E] font-black uppercase tracking-widest py-6 h-auto text-sm rounded-sm shadow-lg">
                        Marcar Consulta
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <a href="tel:+000000000" className="block">
                      <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-[#2B1B4E] font-black uppercase tracking-widest py-6 h-auto text-sm rounded-sm bg-transparent">
                        <Phone className="w-5 h-5 mr-2" />
                        Ligar Agora
                      </Button>
                    </a>
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/10 text-center">
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.3em]">
                      Apoio Permanente
                    </p>
                    <p className="text-white font-black text-lg mt-1">
                      [Telefone]
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
