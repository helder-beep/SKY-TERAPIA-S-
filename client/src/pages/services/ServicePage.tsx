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
  "servico-1": {
    title: "[Título do Serviço 1]",
    subtitle: "[SUBTÍTULO CURTO EM MAIÚSCULAS]",
    description: "[Descrição curta do serviço 1, uma frase]",
    fullContent: "[Texto completo do serviço 1 — parágrafo descritivo mostrado na página individual do serviço.]",
    features: ["[Característica 1]", "[Característica 2]", "[Característica 3]", "[Característica 4]"],
    benefits: ["[Benefício 1]", "[Benefício 2]", "[Benefício 3]", "[Benefício 4]"],
    image: "[Imagem do serviço 1]",
    portfolioRef: {
      title: "[Título do Projeto em Destaque]",
      location: "[Localidade]",
      description: "[Descrição curta do projeto em destaque relacionado com este serviço.]",
      previewImage: "[Imagem de pré-visualização]",
      portfolioId: "projeto-3"
    }
  },
  "servico-2": {
    title: "[Título do Serviço 2]",
    subtitle: "[SUBTÍTULO CURTO EM MAIÚSCULAS]",
    description: "[Descrição curta do serviço 2, uma frase]",
    fullContent: "[Texto completo do serviço 2 — parágrafo descritivo mostrado na página individual do serviço.]",
    features: ["[Característica 1]", "[Característica 2]", "[Característica 3]", "[Característica 4]"],
    benefits: ["[Benefício 1]", "[Benefício 2]", "[Benefício 3]", "[Benefício 4]"],
    image: "[Imagem do serviço 2]"
  },
  "servico-3": {
    title: "[Título do Serviço 3]",
    subtitle: "[SUBTÍTULO CURTO EM MAIÚSCULAS]",
    description: "[Descrição curta do serviço 3, uma frase]",
    fullContent: "[Texto completo do serviço 3 — parágrafo descritivo mostrado na página individual do serviço.]",
    features: ["[Característica 1]", "[Característica 2]", "[Característica 3]", "[Característica 4]"],
    benefits: ["[Benefício 1]", "[Benefício 2]", "[Benefício 3]", "[Benefício 4]"],
    image: "[Imagem do serviço 3]"
  },
  "servico-4": {
    title: "[Título do Serviço 4]",
    subtitle: "[SUBTÍTULO CURTO EM MAIÚSCULAS]",
    description: "[Descrição curta do serviço 4, uma frase]",
    fullContent: "[Texto completo do serviço 4 — parágrafo descritivo mostrado na página individual do serviço.]",
    features: ["[Característica 1]", "[Característica 2]", "[Característica 3]", "[Característica 4]"],
    benefits: ["[Benefício 1]", "[Benefício 2]", "[Benefício 3]", "[Benefício 4]"],
    image: "[Imagem do serviço 4]"
  },
  "servico-5": {
    title: "[Título do Serviço 5]",
    subtitle: "[SUBTÍTULO CURTO EM MAIÚSCULAS]",
    description: "[Descrição curta do serviço 5, uma frase]",
    fullContent: "[Texto completo do serviço 5 — parágrafo descritivo mostrado na página individual do serviço.]",
    features: ["[Característica 1]", "[Característica 2]", "[Característica 3]", "[Característica 4]"],
    benefits: ["[Benefício 1]", "[Benefício 2]", "[Benefício 3]", "[Benefício 4]"],
    image: "[Imagem do serviço 5]"
  },
  "servico-6": {
    title: "[Título do Serviço 6]",
    subtitle: "[SUBTÍTULO CURTO EM MAIÚSCULAS]",
    description: "[Descrição curta do serviço 6, uma frase]",
    fullContent: "[Texto completo do serviço 6 — parágrafo descritivo mostrado na página individual do serviço.]",
    features: ["[Característica 1]", "[Característica 2]", "[Característica 3]", "[Característica 4]"],
    benefits: ["[Benefício 1]", "[Benefício 2]", "[Benefício 3]", "[Benefício 4]"],
    image: "[Imagem do serviço 6]"
  },
  "servico-7": {
    title: "[Título do Serviço 7]",
    subtitle: "[SUBTÍTULO CURTO EM MAIÚSCULAS]",
    description: "[Descrição curta do serviço 7, uma frase]",
    fullContent: "[Texto completo do serviço 7 — parágrafo descritivo mostrado na página individual do serviço.]",
    features: ["[Característica 1]", "[Característica 2]", "[Característica 3]", "[Característica 4]"],
    benefits: ["[Benefício 1]", "[Benefício 2]", "[Benefício 3]", "[Benefício 4]"],
    image: "[Imagem do serviço 7]"
  },
  "servico-8": {
    title: "[Título do Serviço 8]",
    subtitle: "[SUBTÍTULO CURTO EM MAIÚSCULAS]",
    description: "[Descrição curta do serviço 8, uma frase]",
    fullContent: "[Texto completo do serviço 8 — parágrafo descritivo mostrado na página individual do serviço.]",
    features: ["[Característica 1]", "[Característica 2]", "[Característica 3]", "[Característica 4]"],
    benefits: ["[Benefício 1]", "[Benefício 2]", "[Benefício 3]", "[Benefício 4]"],
    image: "[Imagem do serviço 8]"
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
          <h1 className="text-2xl font-bold text-[#1B5E20]">Serviço não encontrado</h1>
          <Link href="/">
            <Button className="mt-4">Voltar ao Início</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#1B5E20] font-sans">
      <Navbar />
      <main className="pt-20">
        {/* Banner Hero */}
        <section className="relative h-[25vh] md:h-[30vh] min-h-[200px] overflow-hidden flex items-center bg-[#1B5E20]">
          {service.image && (
            <>
              <ImagePlaceholder label={service.image} width={1400} height={500} className="absolute inset-0 w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#1B5E20]/40 to-[#1B5E20]/80" />
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
                  <h2 className="text-3xl font-black uppercase tracking-tight text-[#1B5E20] mb-6">
                    Sobre o <span className="font-display italic normal-case font-normal text-[#4CAF50] lowercase tracking-normal">serviço</span>
                  </h2>
                  <p className="text-slate-700 text-lg leading-relaxed mb-8">
                    {service.fullContent}
                  </p>
                  <div className="bg-[#1B5E20]/5 p-8 rounded-sm border-l-4 border-[#4CAF50]">
                    <p className="text-[#1B5E20] font-bold italic">
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
                    <h3 className="text-xl font-black text-[#1B5E20] uppercase tracking-tight mb-6">
                      O Que Incluímos
                    </h3>
                    <div className="space-y-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                          <span className="text-[#1B5E20] font-bold uppercase tracking-tight text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#1B5E20]/5 p-8 rounded-sm"
                  >
                    <h3 className="text-xl font-black text-[#1B5E20] uppercase tracking-tight mb-6">
                      Benefícios
                    </h3>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#4CAF50] flex items-center justify-center text-white font-bold text-[10px] shrink-0">
                            {i + 1}
                          </div>
                          <span className="text-[#1B5E20] font-bold uppercase tracking-tight text-sm">{benefit}</span>
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
                      <div className="w-1 h-8 bg-[#4CAF50]" />
                      <h3 className="text-xl font-black text-[#1B5E20] uppercase tracking-tight">
                        Projeto em Destaque
                      </h3>
                    </div>
                    <Link href="/portfolio">
                      <div className="group border-2 border-slate-200 hover:border-[#4CAF50] transition-all duration-300 rounded-sm overflow-hidden cursor-pointer">
                        <div className="flex flex-col md:flex-row">
                          {/* Image Preview */}
                          <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0 overflow-hidden">
                            <ImagePlaceholder
                              label={service.portfolioRef.previewImage}
                              width={400}
                              height={300}
                              className="w-full h-full"
                            />
                            <div className="absolute inset-0 bg-[#1B5E20]/20 group-hover:bg-[#1B5E20]/10 transition-colors duration-300" />
                            <div className="absolute top-3 left-3">
                              <span className="bg-[#4CAF50] text-white text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1">
                                Portfólio
                              </span>
                            </div>
                          </div>
                          {/* Content */}
                          <div className="flex-1 p-6 md:p-8 flex flex-col justify-between bg-white group-hover:bg-slate-50 transition-colors duration-300">
                            <div>
                              <div className="flex items-start justify-between gap-4 mb-3">
                                <div>
                                  <p className="text-[#4CAF50] text-[10px] font-black uppercase tracking-[0.25em] mb-1">
                                    {service.portfolioRef.location}
                                  </p>
                                  <h4 className="text-[#1B5E20] text-xl font-black uppercase tracking-tight leading-tight">
                                    {service.portfolioRef.title}
                                  </h4>
                                </div>
                                <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-[#4CAF50] transition-colors duration-300 shrink-0 mt-1" />
                              </div>
                              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                {service.portfolioRef.description}
                              </p>
                            </div>
                            <div className="mt-5 pt-5 border-t border-slate-100 flex items-center justify-between">
                              <span className="text-[#1B5E20] text-xs font-black uppercase tracking-widest group-hover:text-[#4CAF50] transition-colors duration-300">
                                Ver projeto completo
                              </span>
                              <ArrowRight className="w-4 h-4 text-[#4CAF50] -translate-x-1 group-hover:translate-x-1 transition-transform duration-300" />
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
                  className="bg-[#1B5E20] p-8 rounded-sm text-white sticky top-32 shadow-2xl"
                >
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4">
                    Peça o Seu Orçamento
                  </h3>
                  <p className="text-white/80 text-sm mb-6 uppercase tracking-wider font-medium">
                    Orçamento gratuito e sem compromisso. Resposta em menos de 24 horas.
                  </p>
                  <div className="flex flex-col gap-6">
                    <Link href="/orcamento">
                      <Button className="w-full bg-[#4CAF50] text-white hover:bg-white hover:text-[#1B5E20] font-black uppercase tracking-widest py-6 h-auto text-sm rounded-sm shadow-lg">
                        Pedir Orçamento
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <a href="tel:+000000000" className="block">
                      <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-[#1B5E20] font-black uppercase tracking-widest py-6 h-auto text-sm rounded-sm bg-transparent">
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
