import { useRef, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

const testimonials = [
  {
    quote:
      "Es la pieza que cambió la sala. La luz, las proporciones, todo gira alrededor del Lutton.",
    name: "Mariana Restrepo",
    role: "Arquitecta · Casa Chía",
  },
  {
    quote:
      "Me asesoraron como si fueran parte del proyecto. El resultado superó cualquier referencia.",
    name: "Andrés Gómez",
    role: "Cliente · Loft Bogotá",
  },
  {
    quote:
      "Modular, atemporal, y con un nivel de acabado que no encontré en ninguna otra marca.",
    name: "Estudio Norte",
    role: "Diseño de interiores",
  },
  {
    quote:
      "El acompañamiento desde el render hasta la entrega fue impecable. Volvería a comprar.",
    name: "Camila Vélez",
    role: "Cliente · Apto Poblado",
  },
];

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    if (card) {
      track.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
      setIndex(i);
    }
  };

  const next = () => scrollTo(Math.min(index + 1, testimonials.length - 1));
  const prev = () => scrollTo(Math.max(index - 1, 0));

  return (
    <section
      id="testimonios"
      className="py-20 md:py-24 bg-[var(--sand)]/30 border-y border-border/60"
    >
      <div ref={ref} className="reveal mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-6">
          <div>
            <p className="text-[0.65rem] tracking-wider-2 uppercase text-muted-foreground mb-4">
              N° 07 — Testimonios
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1] tracking-editorial font-medium max-w-2xl">
              Lo que dicen de  <span className="italic font-light">Lutton.</span>
            </h2>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 md:-mx-10 px-6 md:px-10 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="snap-start shrink-0 w-[88%] sm:w-[60%] md:w-[440px] bg-background rounded-sm border border-border p-7 md:p-9 flex flex-col justify-between min-h-[260px] md:min-h-[300px]"
            >
              <p className="font-display text-xl md:text-2xl leading-[1.3] tracking-editorial text-foreground">
                <span className="text-muted-foreground/60">“</span>
                {t.quote}
                <span className="text-muted-foreground/60">”</span>
              </p>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-[0.65rem] tracking-wider-2 uppercase text-muted-foreground mt-1">
                  {t.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Dots + metrics */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
               <div className="hidden md:flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="w-11 h-11 rounded-sm border border-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="w-11 h-11 rounded-sm border border-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              →
            </button>
          </div>
          </div>
          <div className="flex justify-center items-center gap-8 md:gap-14 text-muted-foreground text-center">
            <Metric n="+240" label="Proyectos" />
            <Metric n="+12" label="Años" />
            <Metric n="98%" label="Recomiendan" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[90px] text-center">
      <p className="font-display text-2xl md:text-3xl text-foreground tabular-nums">
        {n}
      </p>
      <p className="text-[0.6rem] tracking-wider-2 uppercase mt-1">
        {label}
      </p>
    </div>
  );
}
