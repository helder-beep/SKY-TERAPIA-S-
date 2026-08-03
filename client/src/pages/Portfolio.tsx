import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  images: string[];
}

const projects: Project[] = [
  { id: "projeto-1", title: "[Título do Projeto 1]", location: "[Localidade 1]", description: "[Descrição curta do projeto 1.]", images: ["[Foto 1]", "[Foto 2]", "[Foto 3]", "[Foto 4]"] },
  { id: "projeto-2", title: "[Título do Projeto 2]", location: "[Localidade 2]", description: "[Descrição curta do projeto 2.]", images: ["[Foto 1]", "[Foto 2]", "[Foto 3]", "[Foto 4]", "[Foto 5]"] },
  { id: "projeto-3", title: "[Título do Projeto 3]", location: "[Localidade 3]", description: "[Descrição curta do projeto 3.]", images: ["[Foto 1]", "[Foto 2]", "[Foto 3]", "[Foto 4]", "[Foto 5]", "[Foto 6]", "[Foto 7]", "[Foto 8]", "[Foto 9]", "[Foto 10]", "[Foto 11]", "[Foto 12]"] },
  { id: "projeto-4", title: "[Título do Projeto 4]", location: "[Localidade 4]", description: "[Descrição curta do projeto 4.]", images: ["[Foto 1]", "[Foto 2]", "[Foto 3]", "[Foto 4]", "[Foto 5]", "[Foto 6]", "[Foto 7]"] },
  { id: "projeto-5", title: "[Título do Projeto 5]", location: "[Localidade 5]", description: "[Descrição curta do projeto 5.]", images: ["[Foto 1]", "[Foto 2]", "[Foto 3]", "[Foto 4]", "[Foto 5]", "[Foto 6]", "[Foto 7]", "[Foto 8]"] },
  { id: "projeto-6", title: "[Título do Projeto 6]", location: "[Localidade 6]", description: "[Descrição curta do projeto 6.]", images: ["[Foto 1]", "[Foto 2]", "[Foto 3]", "[Foto 4]"] },
  { id: "projeto-7", title: "[Título do Projeto 7]", location: "[Localidade 7]", description: "[Descrição curta do projeto 7.]", images: ["[Foto 1]", "[Foto 2]", "[Foto 3]"] },
  { id: "projeto-8", title: "[Título do Projeto 8]", location: "[Localidade 8]", description: "[Descrição curta do projeto 8.]", images: ["[Foto 1]", "[Foto 2]", "[Foto 3]", "[Foto 4]", "[Foto 5]", "[Foto 6]", "[Foto 7]"] },
  { id: "projeto-9", title: "[Título do Projeto 9]", location: "[Localidade 9]", description: "[Descrição curta do projeto 9.]", images: ["[Foto 1]", "[Foto 2]", "[Foto 3]", "[Foto 4]", "[Foto 5]", "[Foto 6]", "[Foto 7]", "[Foto 8]", "[Foto 9]", "[Foto 10]", "[Foto 11]", "[Foto 12]", "[Foto 13]", "[Foto 14]"] },
  { id: "projeto-10", title: "[Título do Projeto 10]", location: "[Localidade 10]", description: "[Descrição curta do projeto 10.]", images: ["[Foto 1]", "[Foto 2]", "[Foto 3]", "[Foto 4]", "[Foto 5]", "[Foto 6]", "[Foto 7]", "[Foto 8]", "[Foto 9]", "[Foto 10]", "[Foto 11]", "[Foto 12]"] },
  { id: "projeto-11", title: "[Título do Projeto 11]", location: "[Localidade 11]", description: "[Descrição curta do projeto 11.]", images: ["[Foto 1]", "[Foto 2]", "[Foto 3]", "[Foto 4]", "[Foto 5]", "[Foto 6]", "[Foto 7]", "[Foto 8]", "[Foto 9]"] },
  { id: "projeto-12", title: "[Título do Projeto 12]", location: "[Localidade 12]", description: "[Descrição curta do projeto 12.]", images: ["[Foto 1]", "[Foto 2]", "[Foto 3]", "[Foto 4]", "[Foto 5]", "[Foto 6]", "[Foto 7]", "[Foto 8]", "[Foto 9]"] }
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
    <div className="min-h-screen bg-white text-[#1B5E20] font-sans">
      <Navbar />
      <main className="pt-20">
        {/* Banner Hero */}
        <section className="relative h-[25vh] md:h-[30vh] overflow-hidden flex items-center bg-[#1B5E20]">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight">
                Os nossos <span className="text-[#4CAF50] lowercase italic font-display">projetos</span>
              </h1>
              <p className="text-white/70 mt-4 text-sm md:text-lg max-w-2xl mx-auto">
                Explore as transformações reais que realizámos para os nossos clientes
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
                      label={project.images[0]}
                      width={800}
                      height={500}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                      <Button className="opacity-0 group-hover:opacity-100 bg-white text-[#1B5E20] font-black uppercase tracking-widest pointer-events-none translate-y-4 group-hover:translate-y-0 transition-all">
                        Ver Galeria ({project.images.length})
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-[#4CAF50] text-xs font-black uppercase tracking-widest">{project.location}</span>
                      <div className="h-px flex-1 bg-slate-100" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight group-hover:text-[#4CAF50] transition-colors">{project.title}</h3>
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
                  label={selectedProject.images[selectedImageIndex]}
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
                      className={`relative w-16 h-16 rounded-sm overflow-hidden flex-shrink-0 transition-all ${selectedImageIndex === idx ? 'ring-2 ring-[#4CAF50] scale-105' : 'opacity-40 hover:opacity-100'}`}
                    >
                      <ImagePlaceholder label={img} width={64} height={64} className="w-full h-full" />
                    </button>
                  ))}
                </div>

                <Link href="/orcamento">
                  <Button className="mt-8 bg-[#4CAF50] hover:bg-[#388E3C] text-white font-black uppercase tracking-widest px-8 h-14">
                    Orçamento para Projeto Semelhante
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
