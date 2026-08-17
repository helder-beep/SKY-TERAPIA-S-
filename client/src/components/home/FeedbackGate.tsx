import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp, ThumbsDown, Send, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=SUBSTITUIR_PLACE_ID";
const FEEDBACK_EMAIL = "terapiassky1@gmail.com";

type Step = "ask" | "negative" | "sent";

export function FeedbackGate() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("ask");
  const [feedback, setFeedback] = useState("");

  const reset = () => {
    setStep("ask");
    setFeedback("");
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) reset();
  };

  const handlePositive = () => {
    window.open(GOOGLE_REVIEW_URL, "_blank");
    setOpen(false);
  };

  const handleSendFeedback = () => {
    const subject = encodeURIComponent("Feedback — Sky Terapia's");
    const body = encodeURIComponent(feedback || "(sem detalhes adicionais)");
    window.location.href = `mailto:${FEEDBACK_EMAIL}?subject=${subject}&body=${body}`;
    setStep("sent");
  };

  return (
    <div className="text-center">
      <Button
        onClick={() => setOpen(true)}
        className="rounded-full bg-[#2B1B4E] text-white hover:bg-[#9B6DC9] px-8 h-12 text-xs font-semibold tracking-wide uppercase transition-all shadow-lg flex items-center gap-2 mx-auto"
      >
        <Star className="w-4 h-4" />
        Deixar Avaliação
      </Button>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-md rounded-2xl">
          <VisuallyHidden>
            <DialogTitle>Avaliação</DialogTitle>
          </VisuallyHidden>
          <AnimatePresence mode="wait">
            {step === "ask" && (
              <motion.div key="ask" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-2">
                <h4 className="font-semibold text-[#2B1B4E] text-base md:text-lg mb-6">
                  Ficaste satisfeito(a) com a tua sessão?
                </h4>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={handlePositive}
                    className="bg-[#2B1B4E] hover:bg-[#9B6DC9] text-white font-semibold uppercase tracking-wide text-xs h-12 px-6 rounded-full flex items-center gap-2"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    Sim, gostei
                  </Button>
                  <Button
                    onClick={() => setStep("negative")}
                    className="bg-white hover:bg-slate-50 border-2 border-[#2B1B4E] text-[#2B1B4E] font-semibold uppercase tracking-wide text-xs h-12 px-6 rounded-full flex items-center gap-2 shadow-none"
                  >
                    <ThumbsDown className="w-4 h-4" />
                    Podia ser melhor
                  </Button>
                </div>
              </motion.div>
            )}

            {step === "negative" && (
              <motion.div key="negative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-left py-2">
                <h4 className="font-semibold text-[#2B1B4E] text-base md:text-lg mb-2 text-center">
                  Conta-nos o que podemos melhorar
                </h4>
                <p className="text-[#2B1B4E]/60 text-xs mb-4 text-center">
                  A tua mensagem chega diretamente até nós.
                </p>
                <Textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="O que gostarias que fosse diferente?"
                  className="mb-4 bg-white rounded-xl"
                  rows={4}
                />
                <Button
                  onClick={handleSendFeedback}
                  className="w-full bg-[#2B1B4E] hover:bg-[#9B6DC9] text-white font-semibold uppercase tracking-wide text-xs h-12 rounded-full flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Enviar feedback
                </Button>
              </motion.div>
            )}

            {step === "sent" && (
              <motion.div key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-4">
                <CheckCircle className="w-8 h-8 text-[#9B6DC9] mx-auto mb-3" />
                <h4 className="font-semibold text-[#2B1B4E] text-base md:text-lg">
                  Obrigada pelo teu feedback
                </h4>
                <p className="text-[#2B1B4E]/60 text-xs mt-2">
                  Vamos ler com atenção tudo o que partilhaste.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  );
}
