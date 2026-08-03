import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  /** Largura de referência em px, usada só para mostrar a dimensão esperada */
  width?: number;
  /** Altura de referência em px, usada só para mostrar a dimensão esperada */
  height?: number;
  /** Texto curto a indicar que imagem deveria estar aqui */
  label?: string;
  className?: string;
  /** Caminho da imagem real. Quando definido, mostra a imagem em vez do placeholder */
  src?: string;
  /** object-fit da imagem real (default: cover) */
  fit?: "cover" | "contain";
}

export function ImagePlaceholder({
  width = 1200,
  height = 800,
  label = "Imagem",
  className,
  src,
  fit = "cover",
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={label}
        className={cn(fit === "cover" ? "object-cover" : "object-contain", className)}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex flex-col items-center justify-center gap-2 bg-muted border border-dashed border-muted-foreground/30 text-muted-foreground select-none",
        className
      )}
    >
      <ImageIcon className="w-8 h-8" strokeWidth={1.5} />
      <span className="text-[10px] font-bold uppercase tracking-wider text-center px-2">
        {label}
      </span>
      <span className="text-[9px] opacity-70">
        {width}x{height}
      </span>
    </div>
  );
}
