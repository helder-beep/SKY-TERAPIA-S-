import { motion } from "framer-motion";
import { ShoppingBag, Check, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export function ShopSection() {
  const products = [
    "Iniciação ao Tarot Cigano",
    "Fundamentos de Reiki",
    "Cromoterapia na Prática",
    "Defumações & Limpeza Energética",
    "Workshops em Feiras Esotéricas",
    "Formações Personalizadas"
  ];

  return (
    <section id="shop" className="py-12 md:py-24 bg-[#2B1B4E]">
      <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 w-full text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-[#9B6DC9]/20 rounded-full mb-5 md:mb-8 mx-auto md:mx-0">
                <ShoppingBag className="w-4 h-4 text-[#9B6DC9]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9B6DC9]">SKY TERAPIA'S</span>
              </div>

              <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-5 md:mb-8">
                CURSOS E <br className="md:block" />
                <span className="text-[#9B6DC9]">WORKSHOPS</span>
              </h2>

              <p className="text-[11px] md:text-lg font-light text-white/70 mb-6 md:mb-10 leading-relaxed uppercase tracking-widest max-w-xl mx-auto md:mx-0 px-4 md:px-0">
                Além das sessões individuais, damos cursos e workshops de terapias holísticas e marcamos presença em feiras esotéricas por todo o país.
              </p>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 text-left max-w-md mx-auto md:mx-0 px-4 md:px-0">
                {products.map((product, index) => (
                  <div key={index} className="flex items-center gap-3 text-white/80">
                    <div className="w-5 h-5 rounded-full bg-[#9B6DC9] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">{product}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 w-full flex flex-col gap-5 md:gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-[4px] overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-[#9B6DC9]/10 mix-blend-overlay z-10" />
              <ImagePlaceholder
                src="/images/espaco/estante-cristais-oleos.jpg"
                label="Materiais de cursos e workshops Sky Terapia's"
                width={1200}
                height={675}
                className="w-full h-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-3 md:flex-row md:gap-4 w-full"
            >
              <a href="tel:+351923366826" className="w-full sm:flex-1">
                <Button className="w-full bg-[#2B1B4E] hover:bg-[#9B6DC9] text-white font-black h-12 md:h-14 rounded-[4px] uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-lg">
                  <Phone className="w-4 h-4" />
                  Pedir Informações
                </Button>
              </a>
              <a
                href="mailto:terapiassky1@gmail.com"
                className="w-full sm:flex-1"
              >
                <Button className="w-full bg-[#2B1B4E] hover:bg-[#9B6DC9] text-white font-black h-12 md:h-14 rounded-[4px] uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-lg">
                  <MapPin className="w-4 h-4" />
                  Enviar Email
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
