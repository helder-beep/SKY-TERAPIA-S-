import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Phone, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const portfolioGallery = [
  { id: "p1", label: "Sala de Atendimento", size: "large" },
  { id: "p2", label: "Baralhos de Tarot", size: "small" },
  { id: "p3", label: "Cristais & Cromoterapia", size: "small" },
  { id: "p4", label: "Ritual de Defumação", size: "small" },
  { id: "p5", label: "Sessão de Reiki", size: "small" },
  { id: "p6", label: "Óleos de Aromaterapia", size: "small" },
  { id: "p7", label: "Certificação DGERT", size: "small" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white text-[#2B1B4E]">
      <div className="container mx-auto px-6 md:px-8 xl:px-12 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8 mb-10 md:mb-20">
          <div className="max-w-3xl text-center md:text-left">
            <div className="inline-block bg-[#2B1B4E] text-white px-4 py-1 mb-4 md:mb-6">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">O Espaço</span>
            </div>
            <h2 className="text-[2rem] md:text-8xl font-black text-[#2B1B4E] uppercase tracking-tighter leading-none">
              O NOSSO <br />
              <span className="font-display italic normal-case font-normal text-[#9B6DC9] lowercase tracking-normal">espaço</span>
            </h2>
          </div>

          <div className="bg-[#9B6DC9]/10 p-5 md:p-6 rounded-sm border-l-4 border-[#9B6DC9] flex flex-col gap-3 max-w-sm mx-auto md:mx-0">
            <div className="flex items-center gap-2 text-[#2B1B4E]">
              <Phone className="w-5 h-5 text-[#9B6DC9]" />
              <span className="font-black uppercase text-sm tracking-tight">Marca a Tua Sessão</span>
            </div>
            <p className="text-xs text-[#2B1B4E]/80 font-bold leading-relaxed">
              Conhece o espaço onde decorrem as sessões — acolhedor, reservado e pensado para o teu conforto.
            </p>
            <a href="tel:+000000000">
              <Button className="w-full bg-[#2B1B4E] hover:bg-[#9B6DC9] text-white font-black uppercase text-xs tracking-widest rounded-[4px] h-14">
                Ligar Agora
              </Button>
            </a>
          </div>
        </div>

        {/* Bento Grid Gallery */}
        <div className="flex flex-col md:grid md:grid-cols-5 gap-2 md:gap-4 h-auto">
          {/* Main Large Image (Img 1 - 2x2) */}
          <div className="w-full md:col-span-2 md:row-span-2 overflow-hidden rounded-sm group relative aspect-square">
            <ImagePlaceholder
              label={portfolioGallery[0].label}
              width={800}
              height={800}
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <Maximize2 className="text-white w-8 h-8" />
            </div>
          </div>

          {/* Mobile Side-by-Side Containers */}
          <div className="grid grid-cols-2 gap-2 md:contents">
            {/* Img 2 & Img 5 Column */}
            <div className="md:col-span-1 flex flex-col gap-2 md:gap-4">
              <div className="overflow-hidden rounded-sm group relative aspect-square">
                <ImagePlaceholder label={portfolioGallery[1].label} width={400} height={400} className="w-full h-full" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <Maximize2 className="text-white w-6 h-6" />
                </div>
              </div>
              <div className="overflow-hidden rounded-sm group relative aspect-square">
                <ImagePlaceholder label={portfolioGallery[4].label} width={400} height={400} className="w-full h-full" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <Maximize2 className="text-white w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Img 3 & Img 6 Column */}
            <div className="md:col-span-1 flex flex-col gap-2 md:gap-4">
              <div className="overflow-hidden rounded-sm group relative aspect-square">
                <ImagePlaceholder label={portfolioGallery[2].label} width={400} height={400} className="w-full h-full" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <Maximize2 className="text-white w-6 h-6" />
                </div>
              </div>
              <div className="overflow-hidden rounded-sm group relative aspect-square">
                <ImagePlaceholder label={portfolioGallery[5].label} width={400} height={400} className="w-full h-full" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <Maximize2 className="text-white w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Img 4 & Img 7 Column - Hidden on mobile, shown on md+ */}
          <div className="hidden md:flex md:col-span-1 flex-col gap-2 md:gap-4">
            <div className="overflow-hidden rounded-sm group relative aspect-square">
              <ImagePlaceholder label={portfolioGallery[3].label} width={400} height={400} className="w-full h-full" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <Maximize2 className="text-white w-6 h-6" />
              </div>
            </div>
            <div className="overflow-hidden rounded-sm group relative aspect-square">
              <ImagePlaceholder label={portfolioGallery[6].label} width={400} height={400} className="w-full h-full" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <Maximize2 className="text-white w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/portfolio">
            <Button variant="outline" className="border-[#2B1B4E] text-[#2B1B4E] font-black uppercase tracking-widest px-8">
              Ver Galeria Completa
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
