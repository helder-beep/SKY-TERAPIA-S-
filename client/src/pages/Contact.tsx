import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShopSection } from "@/components/home/ShopSection";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "wouter";

export default function Contact() {
  const openForm = () => {
    const event = new CustomEvent('open-quote-form');
    window.dispatchEvent(event);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/000000000", "_blank");
  };

  const locations = {
    loja: {
      title: "[Nome da Empresa]",
      subtitle: "[Subtítulo/Especialidade]",
      description: "[Descrição curta da empresa e área de atuação.]",
      mapUrl: "https://www.google.com/maps/embed?pb=SUBSTITUIR_EMBED",
      googleMapsLink: "https://maps.google.com"
    },
    escritorio: {
      title: "[Área de Serviço]",
      subtitle: "[Localidade 1, Localidade 2, Localidade 3]",
      description: "[Descrição da área geográfica servida.]",
      mapUrl: "https://www.google.com/maps/embed?pb=SUBSTITUIR_EMBED",
      googleMapsLink: "https://maps.google.com"
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1B5E20] font-sans">
      <Navbar />
      
      <main className="pt-20">
        {/* Banner Hero */}
        <section className="relative h-[15vh] md:h-[20vh] min-h-[120px] overflow-hidden flex items-center mb-0">
          <div className="absolute inset-0 bg-[#1B5E20]" />
          <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px] relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none px-4">
                CONTACTE-<span className="font-display italic normal-case font-normal text-[#4CAF50] lowercase tracking-normal px-2">nos</span>
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="relative py-12 md:py-32">
          {/* Background Layer */}
          <div className="absolute inset-0 bg-muted z-0" />
          <div className="absolute inset-0 bg-white/40 md:bg-transparent z-0" />
          
          <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px] relative z-10">
            <div className="flex justify-center items-center">
              {/* Contact Info Grid */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-4xl bg-white/95 backdrop-blur-sm p-6 md:p-12 rounded-[4px] border-2 border-[#1B5E20] shadow-xl flex flex-col"
              >
                <div className="text-center">
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-[#1B5E20]">Entre em Contacto</h2>
                  <p className="text-[#1B5E20]/60 font-light uppercase tracking-widest text-[10px] md:text-sm px-4 md:px-0 leading-relaxed mb-8">Escolha o canal de sua preferência para falar connosco.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* WhatsApp */}
                  <button 
                    onClick={openWhatsApp}
                    className="group bg-white p-5 md:p-6 rounded-[4px] shadow-sm hover:shadow-xl transition-all border-2 border-[#1B5E20] flex items-center gap-5 md:gap-6"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-black uppercase text-xs md:text-sm tracking-tight text-[#1B5E20]">WhatsApp</h3>
                      <p className="text-[10px] md:text-xs text-[#1B5E20]/60 uppercase tracking-widest">Resposta rápida</p>
                    </div>
                  </button>

                  {/* Phone Primary */}
                  <a
                    href="tel:+000000000"
                    className="group bg-white p-5 md:p-6 rounded-[4px] shadow-sm hover:shadow-xl transition-all border-2 border-[#1B5E20] flex items-center gap-5 md:gap-6"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#4CAF50]/10 flex items-center justify-center shrink-0 group-hover:bg-[#4CAF50] group-hover:text-white transition-all duration-500">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-black uppercase text-xs md:text-sm tracking-tight text-[#1B5E20]">Ligar (Telemóvel)</h3>
                      <p className="text-[10px] md:text-xs text-[#1B5E20]/60 uppercase tracking-widest">[Telefone]</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:geral@example.com"
                    className="group bg-white p-5 md:p-6 rounded-[4px] shadow-sm hover:shadow-xl transition-all border-2 border-[#1B5E20] flex items-center gap-5 md:gap-6"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1B5E20]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1B5E20] group-hover:text-white transition-all duration-500">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-black uppercase text-xs md:text-sm tracking-tight text-[#1B5E20]">Email</h3>
                      <p className="text-[10px] md:text-xs text-[#1B5E20]/60 uppercase tracking-widest">[Email]</p>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white p-5 md:p-6 rounded-[4px] shadow-sm hover:shadow-xl transition-all border-2 border-[#1B5E20] flex items-center gap-5 md:gap-6"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-pink-50 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888] group-hover:text-white transition-all duration-500">
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-black uppercase text-xs md:text-sm tracking-tight text-[#1B5E20]">Instagram</h3>
                      <p className="text-[10px] md:text-xs text-[#1B5E20]/60 uppercase tracking-widest">[@utilizador]</p>
                    </div>
                  </a>
                </div>

                <div className="pt-8 md:pt-10 max-w-sm mx-auto w-full">
                  <Link href="/orcamento">
                    <Button 
                      className="w-full bg-[#1B5E20] hover:bg-[#4CAF50] text-white font-black uppercase tracking-[0.15em] md:tracking-[0.2em] h-14 md:h-16 rounded-[4px] shadow-xl transition-all text-xs md:text-sm"
                    >
                      Pedir Orçamento
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
