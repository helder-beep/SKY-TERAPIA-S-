import { Helmet } from "react-helmet-async";
import { SITE_URL, DEFAULT_OG_IMAGE, buildCanonical } from "@/config/seo";

interface SeoHeadProps {
  /** Título da página (max ~60 chars). Já deve incluir "| SKY TERAPIA'S". */
  title: string;
  /** Meta description (max ~155 chars). */
  description: string;
  /** Caminho relativo da página (ex: "/empresa"). Usado para construir a canonical. */
  path: string;
  /** URL absoluta da imagem Open Graph. Por omissão usa a imagem do espaço. */
  ogImage?: string;
  /** Nós adicionais para o <head> (ex: <script type="application/ld+json">). */
  children?: React.ReactNode;
}

export function SeoHead({ title, description, path, ogImage = DEFAULT_OG_IMAGE, children }: SeoHeadProps) {
  const canonical = buildCanonical(path);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SKY TERAPIA'S" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="pt_PT" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {children}
    </Helmet>
  );
}

export { SITE_URL };
