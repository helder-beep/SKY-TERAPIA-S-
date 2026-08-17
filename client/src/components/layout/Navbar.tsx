import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Facebook, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const servicos = [
  { name: "Tarot Cigano Intuitivo", href: "/servicos/tarot-cigano" },
  { name: "Terapia de Vidas Passadas", href: "/servicos/vidas-passadas" },
  { name: "Psicoterapia Holística", href: "/servicos/psicoterapia" },
  { name: "Reiki & Cura Energética", href: "/servicos/reiki" },
  { name: "Defumações & Limpeza Energética", href: "/servicos/defumacoes" },
  { name: "Mesa Radiónica & EFT", href: "/servicos/mesa-radionica-eft" },
  { name: "Cromoterapia & Aromaterapia", href: "/servicos/cromoterapia-aromaterapia" },
  { name: "Proteção, Amor & Abundância", href: "/servicos/protecao-abundancia" },
];

const areasServico = [
  { name: "Santarém", href: "/areas/santarem" },
  { name: "Cartaxo", href: "/areas/cartaxo" },
  { name: "Almeirim", href: "/areas/almeirim" },
  { name: "Tomar", href: "/areas/tomar" },
  { name: "Torres Novas", href: "/areas/torres-novas" },
  { name: "Consultas Online", href: "/areas/online" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicosOpen, setMobileServicosOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location !== "/") {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 20);
    }
  }, [location]);

  const linkClass = cn(
    "text-sm font-bold transition-colors hover:text-[#9B6DC9] cursor-pointer flex items-center gap-1 uppercase tracking-tight",
    "text-[#2B1B4E] font-sans"
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out font-sans",
        "bg-white shadow-sm"
      )}
    >
      {/* Top Info Bar */}
      <div className="bg-[#2B1B4E] py-1.5 hidden md:block">
        <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
          <div className="flex justify-between items-center text-xs md:text-sm text-white font-bold tracking-tight uppercase">
            <div className="flex items-center gap-6">
              <a
                href="https://www.google.com/maps/search/?api=1&query=R.+Jo%C3%A3o+Moreira+de+Almeida+38%2C+2005-002+V%C3%A1rzea"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E8B54D] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Santarém</span>
              </a>
              <div className="h-3 w-[1px] bg-white/30" />
              <span>E-mail: <a href="mailto:terapiassky1@gmail.com" className="hover:text-[#E8B54D] transition-colors">terapiassky1@gmail.com</a></span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span>Contacto: <a href="tel:+351923366826" className="hover:text-[#E8B54D] transition-colors">+351 923 366 826</a></span>
              </div>
              <div className="h-3 w-[1px] bg-white/30 mx-1" />
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8B54D] transition-all hover:scale-110">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/sky_terapias/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8B54D] transition-all hover:scale-110">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white py-2 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <ImagePlaceholder
              src="/logo.png"
              fit="contain"
              label="Sky Terapia's"
              width={200}
              height={56}
              className="h-12 md:h-14 w-auto cursor-pointer"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5">
            <Link href="/" className={linkClass}>
              Início
            </Link>

            <Link href="/empresa" className={linkClass}>
              Sobre Mim
            </Link>

            {/* Serviços Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(linkClass, "outline-none")}>
                Serviços <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-slate-200 shadow-lg rounded-md p-2 min-w-[220px]">
                {servicos.map((servico) => (
                  <DropdownMenuItem key={servico.href} asChild>
                    <Link href={servico.href} className="block px-4 py-2 text-sm font-medium text-[#2B1B4E] hover:bg-purple-50 hover:text-[#9B6DC9] rounded cursor-pointer">
                      {servico.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Áreas de Serviço Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(linkClass, "outline-none")}>
                Áreas de Serviço <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-slate-200 shadow-lg rounded-md p-2 min-w-[180px]">
                {areasServico.map((area) => (
                  <DropdownMenuItem key={area.href} asChild>
                    <Link href={area.href} className="block px-4 py-2 text-sm font-medium text-[#2B1B4E] hover:bg-purple-50 hover:text-[#9B6DC9] rounded cursor-pointer">
                      {area.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contacto">
              <Button
                className="font-medium rounded-full px-6 h-11 transition-all uppercase text-xs tracking-wide bg-[#2B1B4E] text-white hover:bg-[#9B6DC9] shadow-lg hover:scale-105"
              >
                Marcar Consulta
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8 text-[#2B1B4E]" />
            ) : (
              <Menu className="w-8 h-8 text-[#2B1B4E]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b p-4 flex flex-col gap-2 shadow-lg animate-in slide-in-from-top-5 max-h-[80vh] overflow-y-auto">
          <Link 
            href="/" 
            className="text-[#2B1B4E] font-bold py-3 px-2 hover:text-[#9B6DC9] hover:bg-purple-50 rounded-lg block uppercase tracking-tighter" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Início
          </Link>
          
          <Link 
            href="/empresa" 
            className="text-[#2B1B4E] font-bold py-3 px-2 hover:text-[#9B6DC9] hover:bg-purple-50 rounded-lg block uppercase tracking-tighter" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sobre Mim
          </Link>

          {/* Mobile Serviços Accordion */}
          <div>
            <button 
              onClick={() => setMobileServicosOpen(!mobileServicosOpen)}
              className="w-full text-[#2B1B4E] font-bold py-3 px-2 hover:text-[#9B6DC9] hover:bg-purple-50 rounded-lg flex items-center justify-between uppercase tracking-tighter"
            >
              Serviços
              <ChevronDown className={cn("w-5 h-5 transition-transform", mobileServicosOpen && "rotate-180")} />
            </button>
            {mobileServicosOpen && (
              <div className="pl-4 space-y-1">
                {servicos.map((servico) => (
                  <Link 
                    key={servico.href}
                    href={servico.href} 
                    className="text-[#2B1B4E]/80 font-medium py-2 px-2 hover:text-[#9B6DC9] hover:bg-purple-50 rounded-lg block text-sm" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {servico.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Áreas Accordion */}
          <div>
            <button 
              onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
              className="w-full text-[#2B1B4E] font-bold py-3 px-2 hover:text-[#9B6DC9] hover:bg-purple-50 rounded-lg flex items-center justify-between uppercase tracking-tighter"
            >
              Áreas de Serviço
              <ChevronDown className={cn("w-5 h-5 transition-transform", mobileAreasOpen && "rotate-180")} />
            </button>
            {mobileAreasOpen && (
              <div className="pl-4 space-y-1">
                {areasServico.map((area) => (
                  <Link 
                    key={area.href}
                    href={area.href} 
                    className="text-[#2B1B4E]/80 font-medium py-2 px-2 hover:text-[#9B6DC9] hover:bg-purple-50 rounded-lg block text-sm" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contacto">
            <Button 
              className="w-full rounded-full mt-4 h-12 text-sm font-medium uppercase tracking-wide bg-[#2B1B4E] text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Marcar Consulta
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
