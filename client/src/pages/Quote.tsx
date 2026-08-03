import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Quote() {
  const openWhatsApp = () => {
    window.open("https://wa.me/351923366826", "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-[#2B1B4E] font-sans">
      <Navbar />

      <main className="pt-20">
        {/* Banner Hero */}
        <section className="relative h-[20vh] md:h-[25vh] min-h-[150px] overflow-hidden flex items-center mb-12">
          <div className="absolute inset-0 bg-[#2B1B4E]" />
          <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px] relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-4">
                MARCAR <span className="font-display italic normal-case font-normal text-[#9B6DC9] lowercase tracking-normal px-2">consulta</span>
              </h1>
              <p className="text-white/80 font-light uppercase tracking-[0.3em] text-[10px] md:text-sm">
                Escolhe o canal mais fácil para tratarmos da tua marcação
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[700px] pb-32">
          <div className="bg-white rounded-lg shadow-2xl border-2 border-[#2B1B4E] p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#2B1B4E] mb-3">
                Diz-nos o que procuras
              </h2>
              <p className="text-[#2B1B4E]/70 text-sm leading-relaxed">
                Indica a terapia que te interessa (tarot, reiki, vidas passadas, psicoterapia...) e se preferes sessão presencial em Santarém ou online. Respondemos o mais rápido possível.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <button
                onClick={openWhatsApp}
                className="group bg-white p-6 rounded-[4px] shadow-sm hover:shadow-xl transition-all border-2 border-[#2B1B4E] flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-black uppercase text-sm tracking-tight text-[#2B1B4E]">WhatsApp</h3>
                  <p className="text-xs text-[#2B1B4E]/60 uppercase tracking-widest">Resposta rápida</p>
                </div>
              </button>

              <a
                href="mailto:terapiassky1@gmail.com?subject=Marcação de Consulta"
                className="group bg-white p-6 rounded-[4px] shadow-sm hover:shadow-xl transition-all border-2 border-[#2B1B4E] flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-full bg-[#9B6DC9]/10 flex items-center justify-center shrink-0 group-hover:bg-[#9B6DC9] group-hover:text-white transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-black uppercase text-sm tracking-tight text-[#2B1B4E]">Email</h3>
                  <p className="text-xs text-[#2B1B4E]/60 uppercase tracking-widest">terapiassky1@gmail.com</p>
                </div>
              </a>
            </div>

            <a href="tel:+351923366826">
              <Button className="w-full bg-[#2B1B4E] hover:bg-[#9B6DC9] text-white font-black uppercase tracking-[0.2em] h-14 rounded-[4px] shadow-xl transition-all text-sm flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Ligar Agora
              </Button>
            </a>
          </div>

          <p className="mt-8 text-center text-[9px] md:text-[10px] text-slate-400 uppercase tracking-widest px-4">
            Dados tratados com total confidencialidade. • © SKY TERAPIA'S
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
