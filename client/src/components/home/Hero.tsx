import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export function Hero() {
  const [, setLocation] = useLocation();

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden bg-white pt-16 md:pt-24">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full">
          <ImagePlaceholder
            src="/images/espaco/mesa-tarot-detalhe.jpg"
            label="Mesa de tarot Sky Terapia's"
            width={1920}
            height={1080}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
      </div>
      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 md:px-8 xl:px-12 max-w-[1400px] h-full flex flex-col justify-center pt-16 pb-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl text-center md:text-left mx-auto md:mx-0"
        >
          <div className="inline-block border-l-4 border-[#9B6DC9] pl-4 mb-6 md:mb-8 mx-auto md:mx-0">
            <span className="text-[11px] md:text-sm font-black uppercase tracking-[0.3em] text-white">Terapias Holísticas · Santarém</span>
          </div>

          <h1 className="text-[2.5rem] md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-6 md:mb-6">
            <span className="font-display italic normal-case font-normal text-[#9B6DC9] block mb-2 lowercase tracking-normal">encontra o teu equilíbrio</span>
            SKY TERAPIA'S <br className="hidden md:block" />
            <span className="font-display italic normal-case font-normal text-[#9B6DC9] lowercase tracking-normal">tarot, reiki & terapia da alma</span>
          </h1>

          <p className="text-sm md:text-base font-medium text-white/90 max-w-lg mb-10 md:mb-10 uppercase tracking-widest leading-relaxed mx-auto md:mx-0">
            Tarot cigano, terapia de vidas passadas, reiki e psicoterapia holística num espaço acolhedor e reservado em Santarém.
          </p>

          <div className="flex flex-col gap-4 md:flex-row md:gap-4">
            <button
              onClick={() => setLocation("/orcamento")}
              className="w-full md:w-auto bg-[#9B6DC9] text-white px-8 py-5 md:py-4 rounded-none font-black uppercase tracking-widest hover:bg-[#7C4DA8] transition-colors text-sm md:text-base"
            >
              Marcar Consulta
            </button>
            <button
              onClick={() => {
                document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full md:w-auto border-2 border-white text-white px-8 py-5 md:py-4 rounded-none font-black uppercase tracking-widest hover:bg-white hover:text-[#2B1B4E] transition-all text-sm md:text-base"
            >
              Ver o Espaço
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}