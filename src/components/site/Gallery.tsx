import { useRef } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Hotspots, type Hotspot } from "./Hotspots";
import img1 from "@/assets/lafab-real-1.jpeg";
import img2 from "@/assets/lafab-real-2.jpeg";
import img3 from "@/assets/lafab-real-3.jpeg";
import img4 from "@/assets/lafab-real-4.jpeg";
import img5 from "@/assets/lafab-real-5.jpeg";

type Slide = {
  src: string;
  label: string;
  tag: string;
  hotspots?: Hotspot[];
};

const slides: Slide[] = [
  {
    src: img2,
    label: "Casa Chía",
    tag: "Sala principal",
    hotspots: [{ x: 48, y: 72, name: "Lutton 3 plazas", meta: "Bouclé arena · 220 cm" }],
  },
  {
    src: img1,
    label: "Detalle de tapizado",
    tag: "Material",
    hotspots: [{ x: 52, y: 62, name: "Bouclé Sand", meta: "Tela natural premium" }],
  },
  {
    src: img3,
    label: "Loft Bogotá",
    tag: "Ambiente",
    hotspots: [{ x: 38, y: 74, name: "Lutton modular", meta: "Configuración 4 plazas" }],
  },
  {
    src: img4,
    label: "Esquina íntima",
    tag: "Detalle",
    hotspots: [{ x: 55, y: 70, name: "Cojín Mara", meta: "Lino crudo · 50×50" }],
  },
  {
    src: img5,
    label: "Lutton Lineal",
    tag: "Producto",
    hotspots: [{ x: 50, y: 68, name: "Lutton Lineal", meta: "220 cm · acabado piedra" }],
  },
];

export function Gallery() {
  const ref = useReveal<HTMLDivElement>();
  const trackRef = useRef<HTMLDivElement>(null);

  const nudge = (dir: 1 | -1) => {
    const t = trackRef.current;
    if (!t) return;
    const card = t.children[0] as HTMLElement | undefined;
    const w = card ? card.offsetWidth + 16 : 400;
    t.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-[var(--ink)] text-white border-b border-white/10 overflow-hidden">
      
      {/* HEADER */}
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div ref={ref} className="reveal flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-12 gap-6">
          
          <div className="max-w-2xl">
            <p className="text-[0.65rem] tracking-wider-2 uppercase text-white/50 mb-4">
              N° 03 — Galería
            </p>

            <h2 className="font-display lg:text-[4rem] leading-[1] tracking-editorial font-medium text-white lg:whitespace-nowrap">
              El Lutton,
              <span className="italic font-light text-white/80"> en sus espacios.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* TRACK */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-10 pb-6"
        style={{ scrollbarWidth: "none" }}
      >
        {slides.map((s, i) => (
          <figure
            key={i}
            className="snap-start shrink-0 group relative w-[65%] sm:w-[45%] md:w-[34%] lg:w-[25%] aspect-[4/5] overflow-hidden rounded-sm border border-white/25"
          >
            <img
              src={s.src}
              alt={s.label}
              className="w-full h-full object-cover img-zoom"
              loading="lazy"
            />

            {s.hotspots && <Hotspots points={s.hotspots} />}

            <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex items-end justify-between text-white bg-gradient-to-t from-black/70 via-black/20 to-transparent">
              <span className="text-[0.7rem] tracking-wider-2 uppercase">{s.label}</span>
              <span className="text-[0.6rem] tracking-wider-2 uppercase opacity-80">{s.tag}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* CONTROLES ABAJO */}
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-6 md:mt-8 flex  md:flex-row md:justify-center md:items-center gap-4">

        <div className="flex gap-2">
          <button
            onClick={() => nudge(-1)}
            aria-label="Anterior"
            className="w-11 h-11 rounded-sm border border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-ink transition-colors duration-300"
          >
            ←
          </button>
          <button
            onClick={() => nudge(1)}
            aria-label="Siguiente"
            className="w-11 h-11 rounded-sm border border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-ink transition-colors duration-300"
          >
            →
          </button>
        </div>

      </div>

    </section>
  );
}