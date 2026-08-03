import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  { name: "[Nome do Cliente 1]", role: "Cliente", content: "[Testemunho do cliente 1 — uma ou duas frases sobre a experiência com o serviço.]", rating: 5 },
  { name: "[Nome do Cliente 2]", role: "Cliente", content: "[Testemunho do cliente 2 — uma ou duas frases sobre a experiência com o serviço.]", rating: 5 },
  { name: "[Nome do Cliente 3]", role: "Cliente", content: "[Testemunho do cliente 3 — uma ou duas frases sobre a experiência com o serviço.]", rating: 5 },
  { name: "[Nome do Cliente 4]", role: "Cliente", content: "[Testemunho do cliente 4 — uma ou duas frases sobre a experiência com o serviço.]", rating: 5 },
  { name: "[Nome do Cliente 5]", role: "Cliente", content: "[Testemunho do cliente 5 — uma ou duas frases sobre a experiência com o serviço.]", rating: 5 },
  { name: "[Nome do Cliente 6]", role: "Cliente", content: "[Testemunho do cliente 6 — uma ou duas frases sobre a experiência com o serviço.]", rating: 5 },
  { name: "[Nome do Cliente 7]", role: "Cliente", content: "[Testemunho do cliente 7 — uma ou duas frases sobre a experiência com o serviço.]", rating: 5 },
  { name: "[Nome do Cliente 8]", role: "Cliente", content: "[Testemunho do cliente 8 — uma ou duas frases sobre a experiência com o serviço.]", rating: 5 },
  { name: "[Nome do Cliente 9]", role: "Cliente", content: "[Testemunho do cliente 9 — uma ou duas frases sobre a experiência com o serviço.]", rating: 5 },
  { name: "[Nome do Cliente 10]", role: "Cliente", content: "[Testemunho do cliente 10 — uma ou duas frases sobre a experiência com o serviço.]", rating: 5 },
  { name: "[Nome do Cliente 11]", role: "Cliente", content: "[Testemunho do cliente 11 — uma ou duas frases sobre a experiência com o serviço.]", rating: 5 }
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="w-[280px] md:w-[380px] min-h-[160px] md:min-h-[180px] bg-white p-6 md:p-7 rounded-[4px] border border-[#1B5E20]/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 group relative flex flex-col hover:-translate-y-2 mx-2 md:mx-4 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] cursor-default">
    <div className="absolute top-4 right-4 md:top-5 md:right-5">
      <svg className="w-4 h-4 md:w-6 md:h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    </div>
    
    <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-3">
      {[...Array(review.rating)].map((_, i) => (
        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-[#FBBC05] text-[#FBBC05]" />
      ))}
    </div>
    
    <p className="text-[#1B5E20] text-xs md:text-[15px] leading-relaxed mb-4 md:mb-5 flex-grow font-bold italic line-clamp-4 md:line-clamp-4">
      "{review.content}"
    </p>
    
    <div className="flex items-center pt-4 md:pt-5 border-t border-slate-100 mt-auto">
      <h4 className="font-black uppercase tracking-tighter text-[#1B5E20] text-[10px] md:text-[13px] truncate w-full">{review.name}</h4>
    </div>
  </div>
);

export function Reviews() {
  const halfLength = Math.ceil(reviews.length / 2);
  const reviewsRow1 = reviews.slice(0, halfLength);
  const reviewsRow2 = reviews.slice(halfLength);

  const marqueeReviews1 = [...reviewsRow1, ...reviewsRow1, ...reviewsRow1, ...reviewsRow1];
  const marqueeReviews2 = [...reviewsRow2, ...reviewsRow2, ...reviewsRow2, ...reviewsRow2];

  return (
    <section id="reviews" className="bg-white overflow-hidden relative">
      <div className="w-full relative py-14 md:py-24 bg-white">
        <div className="relative w-full z-10">
          <div className="container mx-auto px-6 md:px-8 xl:px-12 max-w-[1400px] mb-8 md:mb-12 text-center">
            <div className="inline-block bg-[#1B5E20] text-white px-4 py-1 mb-4 md:mb-6">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Depoimentos</span>
            </div>
            <h3 className="text-[1.5rem] md:text-5xl font-black text-[#1B5E20] uppercase tracking-tighter leading-tight mb-4">
              [O que dizem os <span className="font-display italic normal-case font-normal text-[#4CAF50] lowercase tracking-normal">nossos clientes]</span>
            </h3>
          </div>

          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="mb-4 overflow-hidden flex">
            <motion.div
              className="flex"
              animate={{ x: [0, -2000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
            >
              {marqueeReviews1.map((review, index) => (
                <ReviewCard key={`row1-${index}`} review={review} />
              ))}
            </motion.div>
          </div>

          <div className="overflow-hidden flex">
            <motion.div
              className="flex"
              animate={{ x: [-2000, 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 65,
                  ease: "linear",
                },
              }}
            >
              {marqueeReviews2.map((review, index) => (
                <ReviewCard key={`row2-${index}`} review={review} />
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center mt-12 relative z-10">
          <Button 
            onClick={() => window.open("https://search.google.com/local/writereview?placeid=SUBSTITUIR_PLACE_ID", "_blank")}
            className="rounded-sm bg-[#1B5E20] text-white hover:bg-[#4CAF50] px-8 h-12 text-xs font-black tracking-widest uppercase transition-all shadow-lg border border-white/20"
          >
            Deixar Avaliação no Google
          </Button>
        </div>
      </div>
    </section>
  );
}
