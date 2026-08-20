import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { SeoHead } from "@/components/SeoHead";
import { SITE_URL, buildCanonical } from "@/config/seo";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { ChevronRight, CheckCircle, ArrowRight, Phone, MapPin } from "lucide-react";
import { MATRIX_SERVICES, MATRIX_AREAS, matrixSlug } from "@/data/matrixContent";
import { servicesData } from "@/pages/services/ServicePage";
import { areasData } from "@/pages/areas/AreaPage";
import NotFound from "@/pages/not-found";

const WHY_CHOOSE_US = [
  "Formação certificada pela DGERT em Terapias Holísticas",
  "Sigilo e confidencialidade total sobre cada sessão",
  "Atendimento próximo, sem julgamentos, ao teu ritmo"
];

// Lookup pré-computado slug -> {service, area}, para evitar qualquer
// ambiguidade ao separar "servico-area" (vários slugs de serviço têm hífens).
const MATRIX_LOOKUP = new Map<string, { service: (typeof MATRIX_SERVICES)[number]; area: (typeof MATRIX_AREAS)[number] }>();
for (const service of MATRIX_SERVICES) {
  for (const area of MATRIX_AREAS) {
    MATRIX_LOOKUP.set(matrixSlug(service.slug, area.slug), { service, area });
  }
}

export default function ServiceAreaPage() {
  const [, params] = useRoute("/:matrixSlug");
  const slug = params?.matrixSlug || "";
  const match = MATRIX_LOOKUP.get(slug);

  if (!match) {
    return <NotFound />;
  }
  const { service, area } = match;

  const serviceDetail = servicesData[service.slug];
  const areaDetail = areasData[area.slug];
  const path = `/${slug}`;
  const canonical = buildCanonical(path);
  const title = `${service.title} em ${area.name} | SKY TERAPIA'S`;
  const description = `${service.title} em ${area.name}: ${serviceDetail.description} Marca a tua sessão com a Sky Terapia's.`;
  const faqs = [...serviceDetail.faqs, area.faq];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "SKY TERAPIA'S",
      url: canonical,
      telephone: "+351923366826",
      description: `Terapias holísticas para clientes de ${area.name}.`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. João Moreira de Almeida 38, 1º andar",
        addressLocality: "Santarém",
        postalCode: "2005-002",
        addressCountry: "PT"
      },
      areaServed: area.name
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      serviceType: service.serviceType,
      areaServed: area.name,
      provider: { "@type": "LocalBusiness", name: "SKY TERAPIA'S" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Serviços", item: buildCanonical(`/servicos/${service.slug}`) },
        { "@type": "ListItem", position: 3, name: service.title, item: buildCanonical(`/servicos/${service.slug}`) },
        { "@type": "ListItem", position: 4, name: area.name, item: canonical }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#2B1B4E] font-sans">
      <SeoHead title={title} description={description} path={path}>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </SeoHead>

      <Navbar />
      <main className="pt-20">
        {/* Banner Hero */}
        <section className="relative h-[22vh] md:h-[28vh] min-h-[180px] overflow-hidden flex items-center bg-[#2B1B4E]">
          {serviceDetail.image && (
            <>
              <ImagePlaceholder src={serviceDetail.image} label={service.title} width={1400} height={500} className="absolute inset-0 w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#2B1B4E]/50 to-[#2B1B4E]/85" />
            </>
          )}
          <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px] relative z-10 text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-1.5 text-white/60 text-[10px] md:text-xs uppercase tracking-wider mb-3 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href={`/servicos/${service.slug}`} className="hover:text-white transition-colors">{service.short}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{area.name}</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight leading-none">
                {service.title} em <span className="text-[#E8B54D]">{area.name}</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <p className="text-slate-700 text-lg leading-relaxed mb-4">{service.intro}</p>
                  <p className="text-slate-700 text-lg leading-relaxed">{area.travelNote}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-6 md:p-8 rounded-md"
                >
                  <h2 className="text-xl font-bold text-[#2B1B4E] uppercase tracking-tight mb-6">
                    Porquê escolher-nos em {area.name}?
                  </h2>
                  <div className="space-y-4">
                    {WHY_CHOOSE_US.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#9B6DC9] flex-shrink-0 mt-0.5" />
                        <span className="text-[#2B1B4E] font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-xl font-bold text-[#2B1B4E] uppercase tracking-tight mb-6">
                    Perguntas Frequentes
                  </h2>
                  <div className="space-y-3">
                    {faqs.map((faq, i) => (
                      <div key={i} className="border border-[#2B1B4E]/10 rounded-lg p-4 md:p-5">
                        <p className="font-bold text-[#2B1B4E] text-sm mb-1.5">{faq.question}</p>
                        <p className="text-[#2B1B4E]/70 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <div className="flex flex-wrap gap-3 text-sm">
                  <Link href={`/servicos/${service.slug}`} className="text-[#9B6DC9] font-bold hover:underline">
                    Saber mais sobre {service.short} →
                  </Link>
                  <span className="text-slate-300">|</span>
                  <Link href={`/areas/${area.slug}`} className="text-[#9B6DC9] font-bold hover:underline">
                    Ver todas as terapias em {area.name} →
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#2B1B4E] p-8 rounded-md text-white lg:sticky lg:top-32 shadow-2xl"
                >
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-4">
                    Marca a Tua Consulta
                  </h3>
                  <p className="text-white/80 text-sm mb-6 uppercase tracking-wider font-medium">
                    {service.title} para clientes de {area.name}.
                  </p>
                  <div className="flex flex-col gap-6">
                    <Link href="/contacto">
                      <Button className="w-full bg-[#9B6DC9] text-white hover:bg-white hover:text-[#2B1B4E] font-bold uppercase tracking-wider py-6 h-auto text-sm rounded-md shadow-lg">
                        Marcar Consulta
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <a href="tel:+351923366826" className="block">
                      <Button className="w-full border-2 border-white text-white hover:bg-white hover:text-[#2B1B4E] font-bold uppercase tracking-wider py-6 h-auto text-sm rounded-md bg-transparent shadow-none">
                        <Phone className="w-5 h-5 mr-2" />
                        Ligar Agora
                      </Button>
                    </a>
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/10 text-center">
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.15em] flex items-center justify-center gap-1">
                      <MapPin className="w-3 h-3" /> Santarém
                    </p>
                    <p className="text-white font-bold text-lg mt-1">
                      +351 923 366 826
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
