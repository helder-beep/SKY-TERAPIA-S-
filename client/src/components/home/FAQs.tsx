import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Como funciona uma sessão?",
    answer: "Cada sessão começa com uma breve conversa para perceber o que procuras, seguida da terapia escolhida (tarot, reiki, vidas passadas, etc.). O espaço é reservado e tudo o que é partilhado fica em total sigilo."
  },
  {
    question: "As sessões são presenciais ou também online?",
    answer: "Fazemos atendimento presencial em Santarém e também sessões online (por exemplo, tarot ou mesa radiónica), consoante o tipo de terapia."
  },
  {
    question: "Quanto tempo dura uma sessão?",
    answer: "Depende da terapia escolhida, mas a maioria das sessões tem entre 45 a 90 minutos. Combinamos a duração antes de marcares."
  },
  {
    question: "As terapias substituem acompanhamento médico ou psicológico?",
    answer: "Não. As terapias holísticas que oferecemos são complementares e não substituem tratamento médico, psicológico ou psiquiátrico. Se estás a ser acompanhado(a) por um profissional de saúde, recomendamos que continues esse acompanhamento em paralelo."
  },
  {
    question: "É garantida a confidencialidade?",
    answer: "Sim. O sigilo sobre o que é partilhado nas sessões é um dos pilares do nosso trabalho — nada do que falamos é partilhado com terceiros."
  },
  {
    question: "Têm formação certificada?",
    answer: "Sim, temos formação certificada pela DGERT em Terapias Holísticas e mais de 4 anos de experiência a acompanhar clientes particulares."
  },
  {
    question: "Também dão cursos ou workshops?",
    answer: "Sim! Além das sessões individuais, damos cursos de iniciação a diferentes terapias holísticas e participamos regularmente em feiras esotéricas. Contacta-nos para saberes as próximas datas."
  },
  {
    question: "Como posso marcar a minha sessão?",
    answer: "Podes contactar-nos por email, telefone ou WhatsApp, ou preencher o formulário na página de Marcar Consulta. Respondemos o mais rápido possível para combinarmos o melhor horário."
  }
];

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 xl:px-12 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-[#9B6DC9] text-xs font-bold uppercase tracking-[0.15em] mb-4 block">
            Perguntas Frequentes
          </span>
          <h2 className="text-[1.75rem] md:text-5xl font-bold text-[#2B1B4E] uppercase tracking-tight mb-4 leading-tight">
            Perguntas sobre <span className="text-[#9B6DC9]">as Nossas Terapias</span>
          </h2>
          <p className="text-[#2B1B4E]/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Respondemos às perguntas mais frequentes sobre os nossos serviços
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-[#2B1B4E]/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white hover:bg-purple-50/50 transition-colors"
              >
                <span className="font-bold text-[#2B1B4E] text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#9B6DC9]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#2B1B4E]" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#2B1B4E]/70 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
