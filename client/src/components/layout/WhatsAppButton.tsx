import { SiWhatsapp } from "react-icons/si";

export function WhatsAppButton() {
  const phoneNumber = "351910000000"; // Placeholder, substituir pelo número real
  const message = "Olá! Gostaria de marcar uma consulta.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Contactar via WhatsApp"
      data-testid="link-whatsapp"
    >
      <SiWhatsapp className="w-8 h-8" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#0A3D5D] px-4 py-2 rounded-lg text-sm font-black shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Falar no WhatsApp
      </span>
    </a>
  );
}
