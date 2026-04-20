import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

const intents = [
  {
    id: "showroom",
    label: "Visitar el showroom",
    desc: "Vive la pieza en persona. Texturas, peso, escala.",
    cta: "Agendar visita",
  },
  {
    id: "asesoria",
    label: "Asesoría a distancia",
    desc: "Una videollamada con nuestro estudio para componer tu Lutton.",
    cta: "Reservar videollamada",
  },
  {
    id: "muestras",
    label: "Recibir muestras",
    desc: "Te enviamos los textiles a casa para decidir sin prisas.",
    cta: "Pedir muestrario",
  },
];

export function InteractiveCTA() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState(intents[0].id);
  const current = intents.find((i) => i.id === active) ?? intents[0];

  return (
    <section id="interactivo" className="py-20 md:py-24 px-6 md:px-10 bg-background">
      <div ref={ref} className="reveal mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-end mb-14">
          <div className="col-span-12 lg:col-span-7">
            <span className="text-eyebrow text-muted-foreground block mb-6">
              N° 05 — El siguiente paso
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-[4.25rem] leading-[1.02] tracking-editorial font-medium">
              No vendemos sofás.
              <br />
              <span className="italic font-light">Diseñamos encuentros.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Elige cómo quieres descubrir Lutton. Cada formato está pensado para
              que vivas la pieza antes de decidir, sin presión y con el
              acompañamiento de nuestro estudio.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {intents.map((i, idx) => {
            const isActive = active === i.id;
            return (
              <button
                key={i.id}
                onClick={() => setActive(i.id)}
                className={`col-span-12 md:col-span-4 text-left p-7 md:p-8 border rounded-sm transition-all duration-500 group ${
                  isActive
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-foreground border-border hover:border-foreground"
                }`}
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span
                    className={`text-eyebrow ${
                      isActive ? "text-background/60" : "text-muted-foreground"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-sm transition-all ${
                      isActive ? "bg-background scale-125" : "bg-foreground/30"
                    }`}
                  />
                </div>
                <p className="font-display text-2xl md:text-[1.6rem] leading-tight mb-3">
                  {i.label}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    isActive ? "text-background/75" : "text-muted-foreground"
                  }`}
                >
                  {i.desc}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-10 border-t border-border">
          <div>
            <p className="text-eyebrow text-muted-foreground mb-2">
              Tu elección
            </p>
            <p className="font-display text-2xl md:text-3xl tracking-editorial">
              {current.label}
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              const target = document.getElementById("contacto");
              // Update hash without default jump, then smooth scroll
              history.replaceState(null, "", `#contacto?formato=${current.id}`);
              window.dispatchEvent(new HashChangeEvent("hashchange"));
              target?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="btn-ink"
          >
            {current.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
