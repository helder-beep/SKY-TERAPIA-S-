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
  "4 anos de experiência",
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
            <span className="text-[#9B6DC9] text-xs font-black uppercase tracking-[0.3em] block mb-2">
              Sobre Nós
            </span>
            <h2 className="text-[1.75rem] md:text-5xl font-black text-[#2B1B4E] uppercase tracking-tight leading-tight">
              Sobre a <span className="font-display italic normal-case font-normal text-[#9B6DC9] lowercase tracking-normal">Sky Terapia's</span>
            </h2>
            <p className="text-[#2B1B4E]/70 text-sm md:text-lg leading-relaxed">
              Somos uma marca de terapias holísticas com 4 anos de experiência, formação certificada pela DGERT, e trabalhamos em Santarém com tarot cigano, terapia de vidas passadas, reiki, psicoterapia e outras terapias energéticas.
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
                <Button className="w-full lg:w-auto bg-[#2B1B4E] hover:bg-[#9B6DC9] text-white font-black uppercase tracking-wider px-8 py-6 h-auto text-sm rounded-sm shadow-lg transition-all hover:scale-105">
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
                src="/images/espaco/mesa-tarot-ambiente.jpg"
                label="Espaço de atendimento Sky Terapia's"
                width={800}
                height={800}
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M30%200L60%2030L30%2060L0%2030z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%2F%3E%3C%2Fsvg%3E')]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-5xl md:text-8xl font-black mb-2">4+</div>
                  <div className="text-lg md:text-2xl font-bold uppercase tracking-wider">Anos de</div>
                  <div className="text-lg md:text-2xl font-black uppercase tracking-wider">Experiência</div>
                </div>
              </div>
            </div>

            {/* Floating Badge - hidden on mobile to avoid overflow */}
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border-2 border-[#2B1B4E]">
              <div className="text-4xl font-black text-[#2B1B4E]">100%</div>
              <div className="text-sm font-bold text-[#2B1B4E]/70 uppercase tracking-wider">Confidencial</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
