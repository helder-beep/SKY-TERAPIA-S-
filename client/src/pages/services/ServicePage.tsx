import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, Phone, Plus, Minus } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

interface ServiceFaq {
  question: string;
  answer: string;
}

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  fullContent: string;
  features: string[];
  benefits: string[];
  image: string;
  faqs: ServiceFaq[];
}

const servicesData: Record<string, ServiceData> = {
  "tarot-cigano": {
    title: "Tarot Cigano Intuitivo",
    subtitle: "ORIENTAÇÃO E CLAREZA",
    description: "Leitura de tarot cigano e tarot intuitivo para trazer clareza sobre amor, trabalho e caminho de vida.",
    fullContent: "O tarot cigano é uma ferramenta de orientação que combina símbolos tradicionais com a nossa intuição para te ajudar a ver com clareza as situações da tua vida. Cada sessão é feita com total sigilo, num espaço reservado, sem julgamentos — só respostas honestas e orientação prática para as tuas dúvidas sobre amor, trabalho ou decisões importantes.",
    features: ["Leitura de tarot cigano tradicional", "Interpretação intuitiva das cartas", "Foco em amor, trabalho ou vida pessoal", "Sessões presenciais ou online"],
    benefits: ["Mais clareza para decidir", "Respostas diretas e honestas", "Sigilo total sobre a sessão", "Orientação prática para o dia a dia"],
    image: "/images/espaco/mesa-tarot-detalhe.jpg",
    faqs: [
      { question: "Preciso de saber alguma coisa sobre tarot antes da sessão?", answer: "Não, não precisas de qualquer conhecimento prévio. Basta vires com as tuas questões — nós conduzimos o resto." },
      { question: "A sessão pode ser feita online?", answer: "Sim, o tarot cigano funciona muito bem por chamada de vídeo ou voz, com a mesma qualidade da sessão presencial." }
    ]
  },
  "vidas-passadas": {
    title: "Terapia de Vidas Passadas",
    subtitle: "CURA DE PADRÕES ANTIGOS",
    description: "Regressão e terapia de vidas passadas para curar bloqueios emocionais que se repetem no presente.",
    fullContent: "Muitos medos, bloqueios e padrões repetitivos têm origem em memórias de vidas passadas. Através da terapia de vidas passadas, ajudamos-te a identificar essas marcas e a libertá-las, trazendo mais leveza, compreensão e paz sobre o teu percurso atual. Cada sessão decorre num ambiente calmo e seguro, ao teu ritmo.",
    features: ["Sessão de regressão guiada", "Identificação de padrões repetitivos", "Ambiente calmo e seguro", "Acompanhamento pós-sessão"],
    benefits: ["Liberta bloqueios emocionais antigos", "Traz compreensão sobre padrões atuais", "Promove sensação de leveza e paz", "Sessão individual e confidencial"],
    image: "/images/espaco/zen-buddha.jpg",
    faqs: [
      { question: "É preciso acreditar em vidas passadas para a terapia funcionar?", answer: "Não é obrigatório. Muitas pessoas encontram sentido nas imagens e emoções que surgem, independentemente das suas crenças." },
      { question: "A sessão pode trazer emoções fortes?", answer: "Pode, sim. Por isso o espaço é calmo e seguro, e o ritmo é sempre o teu — nunca forçamos nada." }
    ]
  },
  "psicoterapia": {
    title: "Psicoterapia Holística",
    subtitle: "ACOMPANHAMENTO EMOCIONAL",
    description: "Apoio psicoterapêutico integrado com terapias holísticas para o teu bem-estar emocional.",
    fullContent: "Um acompanhamento próximo e humano, onde a psicoterapia se cruza com ferramentas holísticas para trabalhar ansiedade, autoestima e momentos de transição de vida. As sessões são pensadas para te ouvir sem julgamentos e ajudar-te a encontrar as tuas próprias respostas, sempre com total confidencialidade.",
    features: ["Sessões individuais regulares", "Abordagem holística e humana", "Foco em ansiedade e autoestima", "Acompanhamento em transições de vida"],
    benefits: ["Espaço seguro para falares livremente", "Ferramentas práticas para o dia a dia", "Acompanhamento ao teu ritmo", "Sigilo profissional garantido"],
    image: "/images/espaco/sala-atendimento.jpg",
    faqs: [
      { question: "Isto substitui ir a um psicólogo?", answer: "Não. É um acompanhamento complementar. Se estás em acompanhamento psicológico ou psiquiátrico, recomendamos que continues em paralelo." },
      { question: "Quantas sessões costumam ser necessárias?", answer: "Depende de cada pessoa. Algumas preferem sessões pontuais, outras um acompanhamento contínuo — decidimos isso juntas." }
    ]
  },
  "reiki": {
    title: "Reiki & Cura Energética",
    subtitle: "EQUILÍBRIO E ENERGIA",
    description: "Sessões de Reiki para reequilibrar a tua energia e promover a cura de pessoas e ambientes.",
    fullContent: "O Reiki é uma técnica de canalização de energia que ajuda a libertar tensões, equilibrar emoções e promover a cura a nível físico, emocional e espiritual. Além das sessões individuais, também trabalhamos a energia de espaços e negócios, ajudando a criar ambientes mais leves e harmoniosos.",
    features: ["Sessão de Reiki presencial", "Cura energética de pessoas", "Harmonização de espaços e negócios", "Ambiente relaxante e acolhedor"],
    benefits: ["Reduz stress e tensão", "Promove equilíbrio emocional", "Melhora a energia do ambiente", "Complementa outras terapias"],
    image: "/images/espaco/secretaria-difusor.jpg",
    faqs: [
      { question: "O que sinto durante uma sessão de Reiki?", answer: "É comum sentir calor, formigueiro ou um relaxamento profundo. Cada pessoa sente de forma diferente." },
      { question: "Também fazem Reiki à distância?", answer: "O Reiki de pessoas é feito presencialmente; para espaços e negócios trabalhamos também à distância." }
    ]
  },
  "defumacoes": {
    title: "Defumações & Limpeza Energética",
    subtitle: "HABITAÇÃO E NEGÓCIOS",
    description: "Defumações de habitação e negócios para limpar energias densas e atrair boas vibrações.",
    fullContent: "Através de defumações e rituais de limpeza energética, ajudamos a renovar a energia da tua casa ou do teu negócio, removendo bloqueios e criando um ambiente mais leve, próspero e harmonioso. Ideal após mudanças, conflitos ou sempre que sentires o ambiente 'pesado'.",
    features: ["Defumação de habitações", "Defumação de espaços comerciais", "Rituais de limpeza energética", "Orientação para manter o espaço equilibrado"],
    benefits: ["Renova a energia do espaço", "Remove bloqueios acumulados", "Cria ambiente mais harmonioso", "Indicado após mudanças ou conflitos"],
    image: "/images/espaco/estante-cristais-oleos.jpg",
    faqs: [
      { question: "Com que frequência devo fazer uma defumação?", answer: "Depende da situação — pode ser pontual, após um evento marcante, ou periódica para manutenção do espaço." },
      { question: "Funciona em espaços comerciais?", answer: "Sim, fazemos defumações tanto em habitações como em negócios." }
    ]
  },
  "mesa-radionica-eft": {
    title: "Mesa Radiónica & EFT",
    subtitle: "TÉCNICAS ENERGÉTICAS",
    description: "Trabalho com mesa radiónica e sessões de EFT para libertar bloqueios emocionais e energéticos.",
    fullContent: "A mesa radiónica permite trabalhar à distância questões de saúde, finanças e relações, enquanto o EFT (Técnica de Libertação Emocional) usa toques em pontos específicos do corpo para libertar emoções bloqueadas de forma rápida e eficaz. Duas ferramentas complementares para desbloquear o que te impede de avançar.",
    features: ["Trabalho com mesa radiónica", "Sessões de EFT (tapping)", "Pode ser feito à distância", "Foco em saúde, finanças ou relações"],
    benefits: ["Liberta emoções bloqueadas rapidamente", "Funciona também à distância", "Aborda causas energéticas profundas", "Complementa outras terapias"],
    image: "/images/stock/mesa-radionica.jpg",
    faqs: [
      { question: "Preciso de estar presente para a mesa radiónica?", answer: "Não, este trabalho pode ser feito totalmente à distância, sem precisares de estar presencialmente no espaço." },
      { question: "O EFT dói ou é desconfortável?", answer: "Não, é uma técnica suave que envolve apenas toques leves em pontos específicos do corpo." }
    ]
  },
  "cromoterapia-aromaterapia": {
    title: "Cromoterapia & Aromaterapia",
    subtitle: "SENTIDOS E BEM-ESTAR",
    description: "Terapias com cores e óleos essenciais para relaxar o corpo e a mente.",
    fullContent: "A cromoterapia e a aromaterapia trabalham através dos sentidos — cor e aroma — para promover relaxamento profundo, equilíbrio emocional e uma sensação de bem-estar imediato. São ótimas como complemento a outras sessões ou como uma experiência independente de relaxamento.",
    features: ["Sessão de cromoterapia", "Aromaterapia com óleos essenciais", "Ambiente relaxante e sensorial", "Pode combinar-se com outras terapias"],
    benefits: ["Relaxamento imediato", "Equilíbrio emocional através dos sentidos", "Experiência suave e acessível", "Boa introdução às terapias holísticas"],
    image: "/images/espaco/estante-decorativa.jpg",
    faqs: [
      { question: "Posso combinar cromoterapia com outra terapia na mesma sessão?", answer: "Sim, é frequentemente usada como complemento a sessões de Reiki ou tarot." },
      { question: "É preciso ter alguma sensibilidade especial para sentir os efeitos?", answer: "Não, é uma experiência acessível a qualquer pessoa, mesmo sem prática anterior." }
    ]
  },
  "protecao-abundancia": {
    title: "Proteção, Amor & Abundância",
    subtitle: "TRABALHOS ESPECÍFICOS",
    description: "Trabalhos de proteção, amor e ascensão financeira feitos à tua medida.",
    fullContent: "Sessões personalizadas de proteção energética, harmonização amorosa e desbloqueio financeiro, sempre adaptadas à tua situação pessoal. Depois de perceber o que procuras, construímos um trabalho à tua medida, com total confidencialidade sobre o processo e os resultados.",
    features: ["Trabalhos de proteção energética", "Harmonização em relações amorosas", "Desbloqueio e ascensão financeira", "Sessões totalmente personalizadas"],
    benefits: ["Trabalho adaptado à tua situação", "Confidencialidade total", "Acompanhamento próximo", "Foco em resultados práticos"],
    image: "/images/espaco/cantinho-joias.jpg",
    faqs: [
      { question: "Como sabem que tipo de trabalho fazer no meu caso?", answer: "Começamos sempre por uma conversa para perceber a tua situação específica antes de definirmos o trabalho." },
      { question: "Os resultados são garantidos?", answer: "Não prometemos resultados específicos — cada processo é único. O que garantimos é dedicação total ao teu caso." }
    ]
  }
};

export default function ServicePage() {
  const [, params] = useRoute("/servicos/:slug");
  const slug = params?.slug || "";
  const service = servicesData[slug];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
              <ImagePlaceholder src={service.image} label={service.title} width={1400} height={500} className="absolute inset-0 w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#2B1B4E]/40 to-[#2B1B4E]/80" />
            </>
          )}
          <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px] relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] mb-2 md:mb-3 block">
                {service.subtitle}
              </span>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight leading-none">
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
                  <h2 className="text-3xl font-bold uppercase tracking-tight text-[#2B1B4E] mb-6">
                    Sobre o <span className="font-display italic normal-case font-normal text-[#9B6DC9] lowercase tracking-normal">serviço</span>
                  </h2>
                  <p className="text-slate-700 text-lg leading-relaxed mb-8">
                    {service.fullContent}
                  </p>
                  <div className="bg-[#2B1B4E]/5 p-8 rounded-md border-l-4 border-[#9B6DC9]">
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
                    className="bg-slate-50 p-8 rounded-md"
                  >
                    <h3 className="text-xl font-bold text-[#2B1B4E] uppercase tracking-tight mb-6">
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
                    className="bg-[#2B1B4E]/5 p-8 rounded-md"
                  >
                    <h3 className="text-xl font-bold text-[#2B1B4E] uppercase tracking-tight mb-6">
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

                {/* Service FAQs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-[#2B1B4E] uppercase tracking-tight mb-6">
                    Perguntas Frequentes
                  </h3>
                  <div className="space-y-3">
                    {service.faqs.map((faq, i) => (
                      <div key={i} className="border border-[#2B1B4E]/10 rounded-lg overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-white hover:bg-purple-50/50 transition-colors"
                        >
                          <span className="font-bold text-[#2B1B4E] text-sm pr-4">{faq.question}</span>
                          <div className="flex-shrink-0">
                            {openFaq === i ? (
                              <Minus className="w-4 h-4 text-[#9B6DC9]" />
                            ) : (
                              <Plus className="w-4 h-4 text-[#2B1B4E]" />
                            )}
                          </div>
                        </button>
                        <AnimatePresence>
                          {openFaq === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 md:px-5 pb-4 md:pb-5 text-[#2B1B4E]/70 text-sm leading-relaxed">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#2B1B4E] p-8 rounded-md text-white lg:sticky lg:top-32 shadow-2xl"
                >
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-4">
                    Marca a Tua Consulta
                  </h3>
                  <p className="text-white/80 text-sm mb-6 uppercase tracking-wider font-medium">
                    Sem compromisso. Resposta em menos de 24 horas.
                  </p>
                  <div className="flex flex-col gap-6">
                    <Link href="/contacto">
                      <Button className="w-full bg-[#9B6DC9] text-white hover:bg-white hover:text-[#2B1B4E] font-bold uppercase tracking-wider py-6 h-auto text-sm rounded-md shadow-lg">
                        Marcar Consulta
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <a href="tel:+351923366826" className="block">
                      <Button className="w-full border-2 border-white text-white hover:bg-white hover:text-[#2B1B4E] font-bold uppercase tracking-wider py-6 h-auto text-sm rounded-md bg-transparent shadow-none">
                        <Phone className="w-5 h-5 mr-2" />
                        Ligar Agora
                      </Button>
                    </a>
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/10 text-center">
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.15em]">
                      Apoio Permanente
                    </p>
                    <p className="text-white font-bold text-lg mt-1">
                      +351 923 366 826
                    </p>
                  </div>
                </motion.div>

                {service.image && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="aspect-[4/5] rounded-md overflow-hidden shadow-lg"
                  >
                    <ImagePlaceholder
                      src={service.image}
                      label={service.title}
                      width={500}
                      height={625}
                      className="w-full h-full"
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
