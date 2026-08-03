import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  { question: "[Pergunta frequente 1?]", answer: "[Resposta à pergunta 1.]" },
  { question: "[Pergunta frequente 2?]", answer: "[Resposta à pergunta 2.]" },
  { question: "[Pergunta frequente 3?]", answer: "[Resposta à pergunta 3.]" },
  { question: "[Pergunta frequente 4?]", answer: "[Resposta à pergunta 4.]" },
  { question: "[Pergunta frequente 5?]", answer: "[Resposta à pergunta 5.]" },
  { question: "[Pergunta frequente 6?]", answer: "[Resposta à pergunta 6.]" },
  { question: "[Pergunta frequente 7?]", answer: "[Resposta à pergunta 7.]" },
  { question: "[Pergunta frequente 8?]", answer: "[Resposta à pergunta 8.]" }
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
          <span className="text-[#4CAF50] text-xs font-black uppercase tracking-[0.3em] mb-4 block">
            Perguntas Frequentes
          </span>
          <h2 className="text-[1.75rem] md:text-5xl font-black text-[#1B5E20] uppercase tracking-tight mb-4 leading-tight">
            [Perguntas sobre <span className="text-[#4CAF50]">os Nossos Serviços]</span>
          </h2>
          <p className="text-[#1B5E20]/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
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
              className="border border-[#1B5E20]/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white hover:bg-green-50/50 transition-colors"
              >
                <span className="font-bold text-[#1B5E20] text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#4CAF50]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#1B5E20]" />
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
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#1B5E20]/70 text-sm leading-relaxed">
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
