import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export function Hero() {
  const [, setLocation] = useLocation();

  return (
    <div id="home" className="relative w-full overflow-hidden bg-white lg:h-screen">
      <div className="lg:h-full flex flex-col justify-center pt-24 md:pt-28 lg:pt-20 pb-12 md:pb-16 lg:pb-6">
        <div className="container mx-auto px-6 md:px-8 xl:px-12 max-w-[1400px] w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <div className="inline-block border-l-4 border-[#9B6DC9] pl-4 mb-4 md:mb-6">
                <span className="text-[10px] md:text-sm font-bold uppercase tracking-[0.15em] text-[#2B1B4E]">Terapias Holísticas · Santarém</span>
              </div>

              <h1 className="text-4xl sm:text-[2.75rem] md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[1.05] text-[#2B1B4E] mb-4 md:mb-6">
                <span className="hidden md:block font-display italic normal-case font-normal text-[#9B6DC9] mb-1 md:mb-2 lowercase tracking-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl">encontra o teu equilíbrio</span>
                SKY TERAPIA'S <br className="hidden md:block" />
                <span className="hidden md:block font-display italic normal-case font-normal text-[#9B6DC9] lowercase tracking-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl">tarot, reiki & terapia da alma</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base font-medium text-[#2B1B4E]/70 max-w-lg mb-8 md:mb-8 uppercase tracking-wider leading-relaxed mx-auto lg:mx-0">
                Tarot cigano, terapia de vidas passadas, reiki e psicoterapia holística num espaço acolhedor e reservado em Santarém.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => setLocation("/contacto")}
                  className="w-auto mx-auto sm:mx-0 bg-[#9B6DC9] text-white px-7 py-3 rounded-full font-medium uppercase tracking-wide hover:bg-[#7C4DA8] transition-colors text-xs sm:text-sm"
                >
                  Marcar Consulta
                </button>
                <button
                  onClick={() => setLocation("/empresa")}
                  className="w-auto mx-auto sm:mx-0 border-2 border-[#2B1B4E] text-[#2B1B4E] px-7 py-3 rounded-full font-medium uppercase tracking-wide hover:bg-[#2B1B4E] hover:text-white transition-all text-xs sm:text-sm"
                >
                  Ver o Espaço
                </button>
              </div>
            </motion.div>

            {/* Right: Image (hidden on smaller screens so the hero always fits one viewport) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="relative hidden lg:block"
            >
              <div className="h-[52vh] max-h-[560px] w-full overflow-hidden rounded-lg shadow-2xl">
                <ImagePlaceholder
                  src="/images/stock/hero-tarot-candles.jpg"
                  label="Tarot, cristais e velas"
                  width={900}
                  height={1100}
                  className="w-full h-full"
                />
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-lg border-4 border-[#9B6DC9]/30" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
