import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";

const ADDRESS = "R. João Moreira de Almeida 38, 2005-002 Várzea";
const MAP_EMBED_URL = "https://www.google.com/maps?q=R.+Jo%C3%A3o+Moreira+de+Almeida+38%2C+2005-002+V%C3%A1rzea&output=embed";
const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=R.+Jo%C3%A3o+Moreira+de+Almeida+38%2C+2005-002+V%C3%A1rzea";

export default function Contact() {
  const openWhatsApp = () => {
    window.open("https://wa.me/351923366826", "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-[#2B1B4E] font-sans">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-14"
          >
            <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-[#2B1B4E] mb-3">
              Fala <span className="font-display italic normal-case font-normal text-[#9B6DC9] lowercase tracking-normal">connosco</span>
            </h1>
            <p className="text-[#2B1B4E]/60 text-sm md:text-base">
              Escolhe o canal mais fácil e trata-se da tua marcação.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left: Contact channels */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-[#2B1B4E] rounded-2xl p-6 md:p-8 flex flex-col justify-center gap-3"
            >
              <button
                onClick={openWhatsApp}
                className="group flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left"
              >
                <div className="w-11 h-11 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-all">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold uppercase text-sm tracking-tight text-[#2B1B4E]">WhatsApp</h3>
                  <p className="text-xs text-[#2B1B4E]/60">Resposta rápida</p>
                </div>
              </button>

              <a
                href="tel:+351923366826"
                className="group flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-[#9B6DC9]/10 flex items-center justify-center shrink-0 group-hover:bg-[#9B6DC9] group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold uppercase text-sm tracking-tight text-[#2B1B4E]">Telefone</h3>
                  <p className="text-xs text-[#2B1B4E]/60">+351 923 366 826</p>
                </div>
              </a>

              <a
                href="mailto:terapiassky1@gmail.com"
                className="group flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-[#2B1B4E]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2B1B4E] group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold uppercase text-sm tracking-tight text-[#2B1B4E]">Email</h3>
                  <p className="text-xs text-[#2B1B4E]/60">terapiassky1@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-pink-50 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888] group-hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold uppercase text-sm tracking-tight text-[#2B1B4E]">Instagram</h3>
                  <p className="text-xs text-[#2B1B4E]/60">[@ Instagram a confirmar]</p>
                </div>
              </a>
            </motion.div>

            {/* Right: Location */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mb-3 text-[#2B1B4E]/70 text-sm hover:text-[#9B6DC9] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#9B6DC9] shrink-0" />
                {ADDRESS}
              </a>
              <div className="rounded-2xl overflow-hidden shadow-md border-2 border-[#2B1B4E] flex-1 min-h-[280px]">
                <iframe
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 280 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Sky Terapia's"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
