import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

interface ProjectImage {
  src?: string;
  label: string;
}

interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  images: ProjectImage[];
}

const projects: Project[] = [
  {
    id: "sala-atendimento",
    title: "Sala de Atendimento",
    location: "Santarém",
    description: "O espaço reservado onde decorrem as sessões individuais, pensado para o teu conforto e privacidade.",
    images: [
      { src: "/images/espaco/sala-atendimento.jpg", label: "Sala de atendimento" },
      { src: "/images/espaco/secretaria-difusor.jpg", label: "Secretária com difusor de óleos" }
    ]
  },
  {
    id: "tarot-cigano",
    title: "Cantinho do Tarot",
    location: "Santarém",
    description: "Baralhos de tarot cigano e tarot intuitivo usados nas sessões de orientação.",
    images: [
      { src: "/images/espaco/mesa-tarot-detalhe.jpg", label: "Mesa de tarot em detalhe" },
      { src: "/images/espaco/mesa-tarot-ambiente.jpg", label: "Ambiente da mesa de tarot" },
      { src: "/images/espaco/cantinho-joias.jpg", label: "Cantinho de acessórios e joias" }
    ]
  },
  {
    id: "reiki-energia",
    title: "Sessão de Reiki",
    location: "Santarém",
    description: "Momentos de cura energética e reequilíbrio através do Reiki.",
    images: [
      { src: "/images/espaco/sala-atendimento.jpg", label: "Marquesa para sessões de Reiki" },
      { src: "/images/espaco/secretaria-difusor.jpg", label: "Ambiente relaxante" }
    ]
  },
  {
    id: "cristais-cromoterapia",
    title: "Cristais & Cromoterapia",
    location: "Santarém",
    description: "Cristais e ferramentas utilizados nas sessões de cromoterapia e limpeza energética.",
    images: [
      { src: "/images/espaco/estante-cristais-oleos.jpg", label: "Estante de cristais e óleos" },
      { src: "/images/espaco/mesa-tarot-detalhe.jpg", label: "Cristais em detalhe" }
    ]
  },
  {
    id: "defumacoes",
    title: "Ritual de Defumação",
    location: "Santarém",
    description: "Defumações de habitação e negócios para limpeza e renovação energética.",
    images: [
      { src: "/images/espaco/estante-cristais-oleos.jpg", label: "Ervas e incensos para defumação" },
      { src: "/images/espaco/zen-buddha.jpg", label: "Cantinho zen" }
    ]
  },
  {
    id: "cursos-feiras",
    title: "Cursos & Feiras",
    location: "Vários locais",
    description: "Momentos de partilha em cursos, workshops e feiras esotéricas por todo o país.",
    images: [
      { label: "[Foto: Curso]" },
      { label: "[Foto: Feira]" },
      { label: "[Foto: Workshop]" }
    ]
  }
];

export default function Portfolio() {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setSelectedImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setSelectedImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#2B1B4E] font-sans">
      <Navbar />
      <main className="pt-20">
        {/* Banner Hero */}
        <section className="relative h-[25vh] md:h-[30vh] overflow-hidden flex items-center bg-[#2B1B4E]">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight">
                O nosso <span className="text-[#9B6DC9] lowercase italic font-display">espaço</span>
              </h1>
              <p className="text-white/70 mt-4 text-sm md:text-lg max-w-2xl mx-auto">
                Conhece o ambiente acolhedor e reservado onde acontecem as sessões
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects List */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-12 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => {
                    setSelectedProject(project);
                    setSelectedImageIndex(0);
                  }}
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-lg bg-slate-100 relative mb-6 shadow-md group-hover:shadow-xl transition-all">
                    <ImagePlaceholder
                      src={project.images[0].src}
                      label={project.images[0].label}
                      width={800}
                      height={500}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                      <Button className="opacity-0 group-hover:opacity-100 bg-white text-[#2B1B4E] font-black uppercase tracking-widest pointer-events-none translate-y-4 group-hover:translate-y-0 transition-all">
                        Ver Galeria ({project.images.length})
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-[#9B6DC9] text-xs font-black uppercase tracking-widest">{project.location}</span>
                      <div className="h-px flex-1 bg-slate-100" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight group-hover:text-[#9B6DC9] transition-colors">{project.title}</h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed line-clamp-2 italic font-display">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox / Gallery Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/98 flex flex-col items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <button className="absolute top-6 right-6 text-white/70 hover:text-white z-50">
                <X className="w-8 h-8" />
              </button>

              <div className="relative w-full max-w-6xl aspect-[16/10] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <button onClick={prevImage} className="absolute left-4 z-50 p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
                
                <ImagePlaceholder
                  src={selectedProject.images[selectedImageIndex].src}
                  label={selectedProject.images[selectedImageIndex].label}
                  width={1200}
                  height={750}
                  className="w-full h-full"
                />

                <button onClick={nextImage} className="absolute right-4 z-50 p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>
              </div>

              <div className="mt-8 text-center max-w-2xl px-4" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-white text-2xl font-black uppercase tracking-tight">{selectedProject.title}</h3>
                <p className="text-white/60 text-sm mt-2">{selectedProject.description}</p>
                
                {/* Thumbnails */}
                <div className="flex gap-2 mt-6 overflow-x-auto pb-2 scrollbar-hide">
                  {selectedProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-16 h-16 rounded-sm overflow-hidden flex-shrink-0 transition-all ${selectedImageIndex === idx ? 'ring-2 ring-[#9B6DC9] scale-105' : 'opacity-40 hover:opacity-100'}`}
                    >
                      <ImagePlaceholder src={img.src} label={img.label} width={64} height={64} className="w-full h-full" />
                    </button>
                  ))}
                </div>

                <Link href="/orcamento">
                  <Button className="mt-8 bg-[#9B6DC9] hover:bg-[#7C4DA8] text-white font-black uppercase tracking-widest px-8 h-14">
                    Marcar a Minha Sessão
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
