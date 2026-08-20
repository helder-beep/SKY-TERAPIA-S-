// Canonical URL format for this site: https://skyterapias.com/pagina/
// — sem www, sempre com "/" final, sempre https.
// Todas as canonical, sitemap e Open Graph URLs devem ser construídas a
// partir desta constante para evitar inconsistências.
export const SITE_URL = "https://skyterapias.com";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/social/og-image.jpg`;

/**
 * Constrói uma canonical URL absoluta e no formato correto a partir de um
 * caminho relativo (ex: "/empresa" -> "https://skyterapias.com/empresa/").
 */
export function buildCanonical(path: string): string {
  const trimmed = path.replace(/^\/+|\/+$/g, "");
  return trimmed ? `${SITE_URL}/${trimmed}/` : `${SITE_URL}/`;
}
