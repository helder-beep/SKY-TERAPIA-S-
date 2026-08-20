import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { SITE_URL, buildCanonical } from "@/config/seo";
import { MATRIX_SERVICES, matrixSlug } from "@/data/matrixContent";

export const areasData: Record<string, { name: string; description: string; neighborhoods: string[] }> = {
  "santarem": {
    name: "Santarém",
    description: "Atendimento presencial em Santarém, num espaço reservado e acolhedor, para tarot, reiki, terapia de vidas passadas e restantes terapias holísticas.",
    neighborhoods: ["Santarém Centro", "Marvila", "Alfange", "Vaqueiros", "Pombalinho", "Abitureiras", "Alcanhões", "Achete"]
  },
  "cartaxo": {
    name: "Cartaxo",
    description: "Sessões de terapias holísticas disponíveis para clientes do Cartaxo, presencialmente em Santarém ou por marcação especial.",
    neighborhoods: ["Cartaxo Centro", "Vale da Pinta", "Pontével", "Vale da Pedra", "Ereira"]
  },
  "almeirim": {
    name: "Almeirim",
    description: "Clientes de Almeirim podem marcar sessões presenciais em Santarém ou optar por consultas online de tarot e mesa radiónica.",
    neighborhoods: ["Almeirim Centro", "Fazendas de Almeirim", "Benfica do Ribatejo", "Raposa"]
  },
  "tomar": {
    name: "Tomar",
    description: "Para quem vive em Tomar, disponibilizo sessões online e, mediante marcação, atendimento presencial em Santarém.",
    neighborhoods: ["Tomar Centro", "Casais", "São João Baptista", "Serra"]
  },
  "torres-novas": {
    name: "Torres Novas",
    description: "Clientes de Torres Novas contam com sessões online ou atendimento presencial em Santarém, consoante a terapia escolhida.",
    neighborhoods: ["Torres Novas Centro", "Riachos", "Zibreira", "Meia Via"]
  },
  "online": {
    name: "Consultas Online",
    description: "Tarot, mesa radiónica e outras sessões que não exigem contacto físico estão disponíveis online para qualquer parte de Portugal.",
    neighborhoods: ["Todo o País", "Vídeo-Chamada", "Chamada Telefónica", "WhatsApp"]
  },
  "todas-as-areas": {
    name: "Toda a Região",
    description: "Atendimento presencial em Santarém e arredores, com sessões online disponíveis para clientes em qualquer parte do país.",
    neighborhoods: ["Santarém", "Cartaxo", "Almeirim", "Tomar", "Torres Novas", "Consultas Online"]
  }
};

export default function AreaPage() {
  const [, params] = useRoute("/areas/:slug");

  const slug = params?.slug || "";
  const area = areasData[slug];

  if (!area) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 text-center">
          <h2 className="text-2xl font-bold text-[#2B1B4E]">Área não encontrada</h2>
          <Link href="/">
            <Button className="mt-4">Voltar ao Início</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const path = `/areas/${slug}`;
  const canonical = buildCanonical(path);
  const seoTitle = `Terapias Holísticas em ${area.name} | SKY TERAPIA'S`;
  const seoDescription = `${area.description} Formação certificada pela DGERT, sigilo total e atendimento próximo.`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "SKY TERAPIA'S",
      url: canonical,
      telephone: "+351923366826",
      areaServed: area.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. João Moreira de Almeida 38, 1º andar",
        addressLocality: "Santarém",
        postalCode: "2005-002",
        addressCountry: "PT"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Áreas de Serviço", item: canonical },
        { "@type": "ListItem", position: 3, name: area.name, item: canonical }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#2B1B4E] font-sans">
      <SeoHead title={seoTitle} description={seoDescription} path={path}>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </SeoHead>
      <Navbar />
      <main className="pt-20">
        {/* Banner Hero */}
        <section className="relative h-[25vh] md:h-[30vh] min-h-[180px] overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2B1B4E] to-[#3D2766]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M30%200L60%2030L30%2060L0%2030z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%2F%3E%3C%2Fsvg%3E')]" />
          <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px] relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#E8B54D]" />
                <span className="text-[#E8B54D] text-xs font-bold uppercase tracking-[0.15em]">
                  Área de Serviço
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight leading-none">
                Terapias em <span className="text-[#E8B54D]">{area.name}</span>
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#2B1B4E] uppercase tracking-tight">
                  Terapias Holísticas em {area.name}
                </h2>
                <p className="text-[#2B1B4E]/70 text-base md:text-lg leading-relaxed">
                  {area.description}
                </p>
                <p className="text-[#2B1B4E]/70 text-base md:text-lg leading-relaxed">
                  Com formação certificada pela DGERT e mais de 4 anos de prática pessoal em tarot e espiritualidade, garantimos sempre total sigilo e um acompanhamento próximo, adaptado a ti.
                </p>

                <div className="space-y-4 pt-4">
                  <h3 className="text-lg font-bold text-[#2B1B4E] uppercase">As nossas terapias em {area.name}:</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {MATRIX_SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/${matrixSlug(service.slug, slug)}`}
                        className="group flex items-center gap-3 hover:text-[#9B6DC9] transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-[#9B6DC9] flex-shrink-0" />
                        <span className="text-[#2B1B4E] group-hover:text-[#9B6DC9] font-medium transition-colors">{service.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link href="/contacto">
                    <Button className="bg-[#2B1B4E] hover:bg-[#9B6DC9] text-white font-bold uppercase tracking-wider px-8 py-6 h-auto text-sm rounded-md shadow-lg">
                      Marcar Consulta Grátis
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <a href="tel:+351923366826">
                    <Button className="bg-white border-2 border-[#2B1B4E] text-[#2B1B4E] hover:bg-[#2B1B4E] hover:text-white font-bold uppercase tracking-wider px-8 py-6 h-auto text-sm rounded-md shadow-none">
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
                className="bg-gradient-to-br from-[#2B1B4E] to-[#3D2766] p-8 md:p-10 rounded-lg"
              >
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">
                  {slug === "santarem" ? `Zonas que servimos em ${area.name}` : `Já recebemos clientes de`}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {area.neighborhoods.map((neighborhood, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/90">
                      <MapPin className="w-4 h-4 text-[#E8B54D] flex-shrink-0" />
                      <span className="text-sm font-medium">{neighborhood}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-white/70 text-sm">
                    {slug === "santarem"
                      ? "Não encontra a sua zona? Contacte-nos! Provavelmente também cobrimos a sua área."
                      : `O nosso espaço físico é em Santarém — para clientes de ${area.name}, trabalhamos por sessão presencial (mediante marcação) ou online.`}
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
