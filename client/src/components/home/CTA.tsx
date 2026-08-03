import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M30%200L60%2030L30%2060L0%2030z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%2F%3E%3C%2Fsvg%3E')]" />
      </div>

      <div className="container mx-auto px-6 md:px-8 xl:px-12 max-w-[1400px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-[#8BC34A] text-xs font-black uppercase tracking-[0.3em] mb-4 block">
            Pronto para Começar?
          </span>
          <h2 className="text-[1.75rem] md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-5 md:mb-6 leading-tight">
            [Título de <span className="text-[#8BC34A]">Chamada à Ação]</span>
          </h2>
          <p className="text-white/80 text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            [Texto curto a convidar o visitante a agir — pedir orçamento, marcar consulta, etc.]
          </p>

          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-center">
            <Link href="/orcamento">
              <Button
                className="w-full sm:w-auto bg-white text-[#1B5E20] hover:bg-[#8BC34A] hover:text-white font-black uppercase tracking-wider px-8 py-6 h-auto text-sm rounded-sm shadow-xl transition-all hover:scale-105"
              >
                Pedir Orçamento Grátis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:+000000000">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#1B5E20] font-black uppercase tracking-wider px-8 py-6 h-auto text-sm rounded-sm transition-all bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
            </a>
          </div>

          <p className="text-white/60 text-xs mt-6 uppercase tracking-wider">
            Resposta garantida em menos de 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
