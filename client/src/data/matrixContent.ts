// Conteúdo específico para a Matriz SEO (Serviço × Área).
// Cada combinação junta um "ângulo de serviço" (8 variantes, uma por serviço)
// com um "ângulo de área" (6 variantes, uma por área) — o resultado são 48
// combinações genuinamente distintas, não texto gerado por substituição de
// palavras-chave.

export interface MatrixServiceAngle {
  slug: string;
  title: string;
  short: string;
  serviceType: string;
  intro: string;
}

export interface MatrixAreaAngle {
  slug: string;
  name: string;
  travelNote: string;
  faq: { question: string; answer: string };
}

export const MATRIX_SERVICES: MatrixServiceAngle[] = [
  {
    slug: "tarot-cigano",
    title: "Tarot Cigano Intuitivo",
    short: "Tarot Cigano",
    serviceType: "Leitura de Tarot",
    intro: "O tarot cigano é uma das nossas terapias mais procuradas — ideal para quem precisa de respostas diretas sobre uma situação concreta. Combinamos os símbolos tradicionais do baralho cigano com leitura intuitiva, para te dar orientação clara sobre amor, trabalho ou decisões importantes, sempre com total sigilo sobre o que é partilhado na sessão."
  },
  {
    slug: "vidas-passadas",
    title: "Terapia de Vidas Passadas",
    short: "Vidas Passadas",
    serviceType: "Terapia de Regressão",
    intro: "A terapia de vidas passadas ajuda a compreender a origem de medos, bloqueios e padrões que se repetem sem explicação aparente na tua vida atual. Através de uma regressão guiada, num ambiente calmo e seguro, trabalhamos essas memórias para trazer mais leveza e compreensão ao teu percurso."
  },
  {
    slug: "psicoterapia",
    title: "Psicoterapia Holística",
    short: "Psicoterapia",
    serviceType: "Psicoterapia",
    intro: "A nossa psicoterapia holística combina escuta próxima com ferramentas energéticas, criando um espaço seguro para trabalhar ansiedade, autoestima e momentos de transição. Cada sessão é pensada para o teu ritmo, sempre com total confidencialidade sobre o que é partilhado."
  },
  {
    slug: "reiki",
    title: "Reiki & Cura Energética",
    short: "Reiki",
    serviceType: "Reiki",
    intro: "O Reiki é uma técnica de canalização de energia que ajuda a libertar tensões acumuladas e a reequilibrar o corpo e a mente. Além das sessões individuais, também trabalhamos a energia de espaços e negócios, criando ambientes mais leves e harmoniosos."
  },
  {
    slug: "defumacoes",
    title: "Defumações & Limpeza Energética",
    short: "Defumações",
    serviceType: "Limpeza Energética",
    intro: "As defumações são um ritual de limpeza energética que ajuda a renovar a energia de uma casa ou de um negócio, especialmente após mudanças, conflitos ou períodos mais pesados. É um trabalho simples, mas com um impacto sentido rapidamente no ambiente."
  },
  {
    slug: "mesa-radionica-eft",
    title: "Mesa Radiónica & EFT",
    short: "Radiónica & EFT",
    serviceType: "Mesa Radiónica e EFT",
    intro: "A mesa radiónica permite trabalhar à distância questões de saúde, finanças ou relações, enquanto o EFT usa toques suaves em pontos específicos do corpo para libertar emoções bloqueadas rapidamente. São duas ferramentas que se complementam muito bem."
  },
  {
    slug: "cromoterapia-aromaterapia",
    title: "Cromoterapia & Aromaterapia",
    short: "Cromoterapia",
    serviceType: "Cromoterapia e Aromaterapia",
    intro: "A cromoterapia e a aromaterapia trabalham através dos sentidos — cor e aroma — para promover relaxamento profundo e equilíbrio emocional. É uma excelente introdução às terapias holísticas para quem nunca experimentou nenhuma."
  },
  {
    slug: "protecao-abundancia",
    title: "Proteção, Amor & Abundância",
    short: "Proteção & Abundância",
    serviceType: "Trabalhos de Proteção e Abundância",
    intro: "Os trabalhos de proteção, amor e abundância são sempre personalizados à situação de cada pessoa. Depois de perceber o que procuras, construímos um trabalho energético à tua medida, com total confidencialidade sobre o processo."
  }
];

export const MATRIX_AREAS: MatrixAreaAngle[] = [
  {
    slug: "santarem",
    name: "Santarém",
    travelNote: "Se vives em Santarém, tens a vantagem de poder vir diretamente ao nosso espaço, na Rua João Moreira de Almeida, na Várzea — um gabinete acolhedor e reservado, pensado para o teu conforto durante a sessão.",
    faq: { question: "Onde fica exatamente o vosso espaço em Santarém?", answer: "Ficamos na Rua João Moreira de Almeida 38, 1º andar, na Várzea, Santarém — um espaço reservado e de fácil acesso." }
  },
  {
    slug: "cartaxo",
    name: "Cartaxo",
    travelNote: "Para quem vive no Cartaxo, o nosso espaço em Santarém fica a cerca de 15 minutos de carro, e recebemos regularmente clientes desta zona. Se preferires não te deslocar, várias das nossas terapias também estão disponíveis online.",
    faq: { question: "Quanto tempo demora a viagem do Cartaxo até Santarém?", answer: "Cerca de 15 a 20 minutos de carro, dependendo do trânsito. Combinamos sempre o horário com antecedência para facilitar a tua deslocação." }
  },
  {
    slug: "almeirim",
    name: "Almeirim",
    travelNote: "Almeirim fica a uma curta distância de Santarém, e já recebemos vários clientes desta zona no nosso espaço. Para quem prefere não viajar, o tarot e a mesa radiónica funcionam igualmente bem por chamada de vídeo ou voz.",
    faq: { question: "É preciso agendar com muita antecedência vindo de Almeirim?", answer: "O ideal é marcares com pelo menos 2 a 3 dias de antecedência, mas tentamos sempre ser flexíveis consoante a disponibilidade." }
  },
  {
    slug: "tomar",
    name: "Tomar",
    travelNote: "Se vives em Tomar, podes optar por uma sessão online — ideal para tarot, mesa radiónica ou EFT — ou agendar uma visita presencial ao nosso espaço em Santarém, mediante marcação prévia.",
    faq: { question: "As sessões online para quem vive em Tomar têm a mesma qualidade que as presenciais?", answer: "Para terapias como o tarot ou a mesa radiónica, sim — a distância não interfere no trabalho energético realizado." }
  },
  {
    slug: "torres-novas",
    name: "Torres Novas",
    travelNote: "Para clientes de Torres Novas, disponibilizamos sessões online sempre que a terapia o permite, e também recebemos com todo o gosto quem prefere fazer a viagem até Santarém para uma sessão presencial.",
    faq: { question: "Posso combinar uma sessão presencial e depois continuar online, vindo de Torres Novas?", answer: "Sim, muitos clientes fazem a primeira sessão presencial e depois preferem continuar online — a decisão é sempre tua." }
  },
  {
    slug: "online",
    name: "Consultas Online",
    travelNote: "Não precisas de viajar até Santarém para teres acesso às nossas terapias. Tarot, mesa radiónica, EFT e outras sessões que não exigem contacto físico estão disponíveis por chamada de vídeo, voz ou WhatsApp, para qualquer parte de Portugal.",
    faq: { question: "Que plataforma usam para as sessões online?", answer: "Normalmente por WhatsApp (vídeo ou voz), mas também podemos combinar outra plataforma se preferires." }
  }
];

export function matrixSlug(serviceSlug: string, areaSlug: string): string {
  return `${serviceSlug}-${areaSlug}`;
}
