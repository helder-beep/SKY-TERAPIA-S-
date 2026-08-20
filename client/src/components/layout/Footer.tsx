import { Link } from "wouter";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Facebook, Instagram } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { MATRIX_AREAS } from "@/data/matrixContent";

export function Footer() {
  return (
    <footer className="relative w-full z-30 font-sans">
      {/* Footer Info Bar - Matches Navbar's Top Info Bar (Dark Green) */}
      <div className="bg-[#2B1B4E] py-6 md:py-8 relative z-10">
        <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8 items-center text-white font-bold uppercase tracking-tight text-center">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] opacity-60 tracking-[0.1em]">Localização</span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=R.+Jo%C3%A3o+Moreira+de+Almeida+38%2C+2005-002+V%C3%A1rzea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm hover:text-[#E8B54D] transition-colors"
              >
                R. João Moreira de Almeida 38, 1º andar, Várzea, Santarém
              </a>
            </div>
            <div className="flex flex-col gap-1 text-center">
              <span className="text-[10px] opacity-60 tracking-[0.1em]">E-mail Direto</span>
              <a href="mailto:terapiassky1@gmail.com" className="text-xs md:text-sm hover:text-[#E8B54D] transition-colors">terapiassky1@gmail.com</a>
            </div>
            <div className="flex flex-col gap-1 text-center md:text-right">
              <span className="text-[10px] opacity-60 tracking-[0.1em]">Apoio ao Cliente</span>
              <div className="flex flex-col gap-1">
                <a href="tel:+351923366826" className="text-xs md:text-sm hover:text-[#E8B54D] transition-colors">+351 923 366 826</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer - Matches Navbar's Main Bar (White) */}
      <div className="bg-white py-10 md:py-16 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
          <div className="flex flex-col justify-between items-center gap-8 md:flex-row md:gap-12">
            {/* Logo */}
            <Link href="/">
              <ImagePlaceholder
                src="/logo.png"
                fit="contain"
                label="Sky Terapia's"
                width={200}
                height={64}
                className="h-14 md:h-16 w-auto cursor-pointer"
              />
            </Link>

            {/* Navigation - Matches Navbar Links Styling */}
            <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-10">
              <Link href="/"><span className="text-xs md:text-sm font-bold text-[#2B1B4E] hover:text-[#9B6DC9] transition-colors cursor-pointer uppercase tracking-tight">Início</span></Link>
              <Link href="/empresa"><span className="text-xs md:text-sm font-bold text-[#2B1B4E] hover:text-[#9B6DC9] transition-colors cursor-pointer uppercase tracking-tight">Sobre Nós</span></Link>
              <Link href="/contacto"><span className="text-xs md:text-sm font-bold text-[#2B1B4E] hover:text-[#9B6DC9] transition-colors cursor-pointer uppercase tracking-tight">Marcar Consulta</span></Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a href="https://wa.me/351923366826" target="_blank" rel="noopener noreferrer" className="text-[#2B1B4E] hover:text-[#25D366] transition-all hover:scale-110">
                <SiWhatsapp className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-[#2B1B4E] hover:text-[#9B6DC9] transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/sky_terapias/" target="_blank" rel="noopener noreferrer" className="text-[#2B1B4E] hover:text-[#9B6DC9] transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Áreas que servimos */}
      <div className="bg-white pb-6 md:pb-8">
        <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[10px] md:text-xs text-[#2B1B4E]/50 uppercase tracking-wider">
            <span className="font-bold text-[#2B1B4E]/70">Áreas que servimos:</span>
            {MATRIX_AREAS.map((area, i) => (
              <span key={area.slug} className="flex items-center gap-2">
                <Link href={`/areas/${area.slug}`} className="hover:text-[#9B6DC9] transition-colors">
                  {area.name}
                </Link>
                {i < MATRIX_AREAS.length - 1 && <span className="opacity-40">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar - Matches Navbar's Subtlety */}
      <div className="bg-white py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
          <div className="flex flex-col justify-between items-center gap-3 md:flex-row md:gap-4 text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.1em] text-[#2B1B4E]/80">
            <div>&copy; {new Date().getFullYear()} SKY TERAPIA'S</div>
            <div className="flex gap-6 md:gap-8">
              <Link href="/privacidade"><span className="hover:text-[#9B6DC9] cursor-pointer transition-colors">Privacidade</span></Link>
              <Link href="/termos"><span className="hover:text-[#9B6DC9] cursor-pointer transition-colors">Termos</span></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
