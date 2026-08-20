import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const features = [
  "Formação DGERT em Terapias Holísticas",
  "Sigilo e confidencialidade total",
  "Espaço acolhedor e reservado",
  "Atendimento presencial e online",
  "Anos de prática em tarot",
  "Cursos e workshops"
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 xl:px-12 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5 md:space-y-6 text-center lg:text-left"
          >
            <span className="text-[#9B6DC9] text-xs font-bold uppercase tracking-[0.15em] block mb-2">
              Sobre Nós
            </span>
            <h2 className="text-[1.75rem] md:text-5xl font-bold text-[#2B1B4E] uppercase tracking-tight leading-tight">
              Sobre a <span className="font-display italic normal-case font-normal text-[#9B6DC9] lowercase tracking-normal">Sky Terapia's</span>
            </h2>
            <p className="text-[#2B1B4E]/70 text-sm md:text-lg leading-relaxed">
              A Sky Terapia's nasceu em memória da mãe da Cláudia, Céu — e é por isso que leva o nome Sky. Com formação certificada pela DGERT, trabalhamos em Santarém com tarot cigano, terapia de vidas passadas, reiki, psicoterapia e outras terapias energéticas.
            </p>
            <p className="text-[#2B1B4E]/70 text-sm md:text-lg leading-relaxed">
              A nossa missão é ajudar-te a encontrar clareza, cura e equilíbrio — num espaço acolhedor, reservado e com total sigilo sobre cada sessão.
            </p>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 pt-4 text-left max-w-sm mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#9B6DC9] flex-shrink-0" />
                  <span className="text-[#2B1B4E] font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link href="/empresa">
                <Button className="w-full lg:w-auto bg-[#2B1B4E] hover:bg-[#9B6DC9] text-white font-bold uppercase tracking-wider px-8 py-6 h-auto text-sm rounded-md shadow-lg transition-all hover:scale-105">
                  Conhecer a Terapeuta
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative order-first lg:order-last"
          >
            <div className="aspect-[4/3] md:aspect-square bg-gradient-to-br from-[#2B1B4E] to-[#9B6DC9] rounded-lg overflow-hidden relative w-full">
              <ImagePlaceholder
                src="/images/espaco/sala-completa.webp"
                label="Espaço de atendimento Sky Terapia's"
                width={800}
                height={800}
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Floating Badge - hidden on mobile to avoid overflow */}
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border-2 border-[#2B1B4E]">
              <div className="text-4xl font-bold text-[#2B1B4E]">100%</div>
              <div className="text-sm font-bold text-[#2B1B4E]/70 uppercase tracking-wider">Confidencial</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
