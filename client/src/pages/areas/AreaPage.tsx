import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react";

const areasData: Record<string, { name: string; description: string; neighborhoods: string[] }> = {
  "area-1": {
    name: "[Área 1]",
    description: "[Descrição da cobertura de serviço na área 1, incluindo as zonas cobertas.]",
    neighborhoods: ["[Zona 1]", "[Zona 2]", "[Zona 3]", "[Zona 4]", "[Zona 5]", "[Zona 6]", "[Zona 7]", "[Zona 8]", "[Zona 9]"]
  },
  "area-2": {
    name: "[Área 2]",
    description: "[Descrição da cobertura de serviço na área 2, incluindo as zonas cobertas.]",
    neighborhoods: ["[Zona 1]", "[Zona 2]", "[Zona 3]", "[Zona 4]", "[Zona 5]", "[Zona 6]", "[Zona 7]", "[Zona 8]"]
  },
  "area-3": {
    name: "[Área 3]",
    description: "[Descrição da cobertura de serviço na área 3, incluindo as zonas cobertas.]",
    neighborhoods: ["[Zona 1]", "[Zona 2]", "[Zona 3]", "[Zona 4]", "[Zona 5]", "[Zona 6]", "[Zona 7]"]
  },
  "area-4": {
    name: "[Área 4]",
    description: "[Descrição da cobertura de serviço na área 4, incluindo as zonas cobertas.]",
    neighborhoods: ["[Zona 1]", "[Zona 2]", "[Zona 3]", "[Zona 4]", "[Zona 5]", "[Zona 6]", "[Zona 7]", "[Zona 8]"]
  },
  "area-5": {
    name: "[Área 5]",
    description: "[Descrição da cobertura de serviço na área 5, incluindo as zonas cobertas.]",
    neighborhoods: ["[Zona 1]", "[Zona 2]", "[Zona 3]", "[Zona 4]", "[Zona 5]", "[Zona 6]"]
  },
  "area-6": {
    name: "[Área 6]",
    description: "[Descrição da cobertura de serviço na área 6, incluindo as zonas cobertas.]",
    neighborhoods: ["[Zona 1]", "[Zona 2]", "[Zona 3]", "[Zona 4]", "[Zona 5]", "[Zona 6]"]
  },
  "todas-as-areas": {
    name: "[Toda a Região]",
    description: "[Descrição geral de toda a área de atuação, usada na página de resumo de áreas de serviço.]",
    neighborhoods: ["[Área 1]", "[Área 2]", "[Área 3]", "[Área 4]", "[Área 5]", "[Área 6]"]
  }
};

export default function AreaPage() {
  const [match, params] = useRoute("/areas/:slug");
  const [isAreaDeAtuacao] = useRoute("/areas-de-atuacao");
  
  const slug = isAreaDeAtuacao ? "todas-as-areas" : (params?.slug || "");
  const area = areasData[slug];

  if (!area) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 text-center">
          <h2 className="text-2xl font-bold text-[#1B5E20]">Área não encontrada</h2>
          <Link href="/">
            <Button className="mt-4">Voltar ao Início</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#1B5E20] font-sans">
      <Navbar />
      <main className="pt-20">
        {/* Banner Hero */}
        <section className="relative h-[25vh] md:h-[30vh] min-h-[180px] overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E20] to-[#2E7D32]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M30%200L60%2030L30%2060L0%2030z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%2F%3E%3C%2Fsvg%3E')]" />
          <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px] relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#8BC34A]" />
                <span className="text-[#8BC34A] text-xs font-black uppercase tracking-[0.3em]">
                  Área de Serviço
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none">
                [Serviços em] <span className="text-[#8BC34A]">{area.name}</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left: Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-black text-[#1B5E20] uppercase tracking-tight">
                  [Título do Serviço] em {area.name}
                </h2>
                <p className="text-[#1B5E20]/70 text-base md:text-lg leading-relaxed">
                  {area.description}
                </p>
                <p className="text-[#1B5E20]/70 text-base md:text-lg leading-relaxed">
                  [Texto adicional sobre a empresa e a sua atuação em {area.name}, incluindo garantias e diferenciais.]
                </p>

                <div className="space-y-4 pt-4">
                  <h3 className="text-lg font-black text-[#1B5E20] uppercase">Os nossos serviços em {area.name}:</h3>
                  <div className="space-y-3">
                    {["[Serviço 1]", "[Serviço 2]", "[Serviço 3]", "[Serviço 4]"].map((service, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#4CAF50] flex-shrink-0" />
                        <span className="text-[#1B5E20] font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link href="/orcamento">
                    <Button className="bg-[#1B5E20] hover:bg-[#4CAF50] text-white font-black uppercase tracking-wider px-8 py-6 h-auto text-sm rounded-sm shadow-lg">
                      Pedir Orçamento Grátis
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <a href="tel:+000000000">
                    <Button variant="outline" className="border-2 border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white font-black uppercase tracking-wider px-8 py-6 h-auto text-sm rounded-sm">
                      <Phone className="w-5 h-5 mr-2" />
                      Ligar Agora
                    </Button>
                  </a>
                </div>
              </motion.div>

              {/* Right: Zones */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] p-8 md:p-10 rounded-lg"
              >
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                  Zonas que servimos em {area.name}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {area.neighborhoods.map((neighborhood, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/90">
                      <MapPin className="w-4 h-4 text-[#8BC34A] flex-shrink-0" />
                      <span className="text-sm font-medium">{neighborhood}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-white/70 text-sm">
                    Não encontra a sua zona? Contacte-nos! Provavelmente também cobrimos a sua área.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
