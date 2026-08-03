import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Quote() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload the iframe source
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'document';
    link.href = 'SUBSTITUIR_URL_DO_FORMULARIO';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1B5E20] font-sans">
      <Navbar />
      
      <main className="pt-20">
        {/* Banner Hero */}
        <section className="relative h-[20vh] md:h-[25vh] min-h-[150px] overflow-hidden flex items-center mb-12">
          <div className="absolute inset-0 bg-[#1B5E20]" />
          <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px] relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-4">
                PEDIR <span className="font-display italic normal-case font-normal text-[#4CAF50] lowercase tracking-normal px-2">orçamento</span>
              </h1>
              <p className="text-white/80 font-light uppercase tracking-[0.3em] text-[10px] md:text-sm">
                [Frase curta de apoio ao pedido de orçamento.]
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[900px] pb-32">
          <div className="bg-white rounded-lg shadow-2xl border-2 border-[#1B5E20] overflow-hidden min-h-[800px] relative">
            {!isLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1B5E20] mb-4"></div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#1B5E20]/60">A carregar formulário seguro...</p>
              </div>
            )}
            <iframe
              src="SUBSTITUIR_URL_DO_FORMULARIO"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                minHeight: '800px',
                opacity: isLoaded ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out'
              }}
              onLoad={() => setIsLoaded(true)}
              id="inline-quote-form"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivated"
              data-deactivation-value=""
              data-form-name="Pedido de Orçamento"
              data-scrollbar="yes"
              data-auto-height="no"
              data-render_id="inline-quote-form"
              title="Formulário de Orçamento"
            ></iframe>
          </div>

          <p className="mt-8 text-center text-[9px] md:text-[10px] text-slate-400 uppercase tracking-widest px-4">
            Ambiente seguro de processamento de dados. • © [Nome da Empresa]
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
