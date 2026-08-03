import { motion } from "framer-motion";
import { Phone, Sparkles, Heart, CheckCircle } from "lucide-react";

const steps = [
  { icon: Phone, title: "Marcação", description: "Contactas-nos por telefone, email ou WhatsApp e escolhemos juntos a sessão certa para ti.", step: "01" },
  { icon: Sparkles, title: "Acolhimento", description: "Recebemos-te num espaço reservado e tranquilo, onde tudo o que partilhas fica em total sigilo.", step: "02" },
  { icon: Heart, title: "A Sessão", description: "Realizamos a terapia escolhida — tarot, reiki, vidas passadas ou outra — ao teu ritmo.", step: "03" },
  { icon: CheckCircle, title: "Acompanhamento", description: "Se precisares, ficamos em contacto para dar continuidade ao teu processo de cura.", step: "04" }
];

export function Process() {
  return (
    <section className="py-16 md:py-24 bg-[#2B1B4E]">
      <div className="container mx-auto px-6 md:px-8 xl:px-12 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-[#E8B54D] text-xs font-black uppercase tracking-[0.3em] mb-4 block">
            Como Trabalhamos
          </span>
          <h2 className="text-[1.75rem] md:text-5xl font-black text-white uppercase tracking-tight mb-4 leading-tight">
            O Nosso <span className="text-[#E8B54D]">Processo</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Da marcação à sessão, um percurso simples e acolhedor, pensado para o teu bem-estar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-sm p-5 md:p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#9B6DC9] flex items-center justify-center">
                    <step.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <span className="text-3xl md:text-4xl font-black text-white/20 group-hover:text-[#E8B54D]/40 transition-colors">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight mb-2 md:mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#9B6DC9]/50" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
