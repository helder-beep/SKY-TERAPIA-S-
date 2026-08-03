import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

// Nota: testemunhos ilustrativos com clientes anónimos por zona — substituir por avaliações reais assim que existirem.
const reviews = [
  { name: "Cliente de Santarém", role: "Sessão de Tarot Cigano", content: "Sessão de tarot muito esclarecedora. Senti-me à vontade desde o primeiro minuto e saí com muito mais clareza sobre o que fazer a seguir.", rating: 5 },
  { name: "Cliente de Cartaxo", role: "Sessão de Reiki", content: "O Reiki ajudou-me a relaxar profundamente. O espaço é acolhedor e sente-se logo que é um sítio de confiança.", rating: 5 },
  { name: "Cliente Online", role: "Terapia de Vidas Passadas", content: "Fiz a sessão de vidas passadas online e mesmo à distância consegui perceber padrões que se repetiam na minha vida há anos.", rating: 5 },
  { name: "Cliente de Tomar", role: "Psicoterapia Holística", content: "Sinto que finalmente tenho um espaço onde posso falar sem ser julgada. As sessões têm-me ajudado imenso a lidar com a ansiedade.", rating: 5 },
  { name: "Cliente de Almeirim", role: "Defumação de Habitação", content: "Pedi uma defumação para a minha casa depois de uma fase complicada e a diferença na energia foi notada por toda a família.", rating: 5 },
  { name: "Cliente de Torres Novas", role: "Cromoterapia", content: "Nunca tinha experimentado cromoterapia e fiquei surpreendida com o quão relaxante e reconfortante foi a sessão.", rating: 5 },
  { name: "Cliente de Santarém", role: "Mesa Radiónica", content: "Recomendo a todos que procuram respostas sobre uma situação específica — a sessão de mesa radiónica foi muito precisa.", rating: 5 },
  { name: "Participante de Workshop", role: "Curso de Tarot", content: "Fiz o curso de iniciação ao tarot cigano e a forma como tudo foi explicado deu-me confiança para começar a praticar sozinha.", rating: 5 }
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="w-[280px] md:w-[380px] min-h-[160px] md:min-h-[180px] bg-white p-6 md:p-7 rounded-[4px] border border-[#2B1B4E]/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 group relative flex flex-col hover:-translate-y-2 mx-2 md:mx-4 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] cursor-default">
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
    
    <p className="text-[#2B1B4E] text-xs md:text-[15px] leading-relaxed mb-4 md:mb-5 flex-grow font-bold italic line-clamp-4 md:line-clamp-4">
      "{review.content}"
    </p>
    
    <div className="flex flex-col pt-4 md:pt-5 border-t border-slate-100 mt-auto">
      <h4 className="font-black uppercase tracking-tighter text-[#2B1B4E] text-[10px] md:text-[13px] truncate w-full">{review.name}</h4>
      <span className="text-[9px] md:text-[11px] text-[#9B6DC9] font-bold uppercase tracking-wider truncate w-full">{review.role}</span>
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
            <div className="inline-block bg-[#2B1B4E] text-white px-4 py-1 mb-4 md:mb-6">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Depoimentos</span>
            </div>
            <h3 className="text-[1.5rem] md:text-5xl font-black text-[#2B1B4E] uppercase tracking-tighter leading-tight mb-4">
              O que dizem os <span className="font-display italic normal-case font-normal text-[#9B6DC9] lowercase tracking-normal">nossos clientes</span>
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
            className="rounded-sm bg-[#2B1B4E] text-white hover:bg-[#9B6DC9] px-8 h-12 text-xs font-black tracking-widest uppercase transition-all shadow-lg border border-white/20"
          >
            Deixar Avaliação no Google
          </Button>
        </div>
      </div>
    </section>
  );
}
