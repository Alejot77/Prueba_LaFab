import { useReveal } from "@/hooks/use-reveal";

export function Manifesto() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-32 md:py-48 bg-background border-b border-border/60">
      <div ref={ref} className="reveal mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-3">
            <p className="text-[0.65rem] tracking-wider-2 uppercase text-muted-foreground">
              N° 01 — Manifiesto
            </p>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-3xl md:text-5xl lg:text-[4.5rem] leading-[1.02] tracking-editorial font-medium">
              Diseñamos piezas que <span className="italic font-light">reposan</span>,
              que duran, que pertenecen al espacio que habitan.
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-10 max-w-4xl text-sm text-muted-foreground leading-relaxed">
              <p>
                Cada Lutton nace de una conversación. Una asesoría
                cuidadosa donde el espacio dicta la forma.
              </p>
              <p>
                No producimos colecciones masivas. Cada pieza es única,
                ensamblada a mano en nuestro taller.
              </p>
              <p>
                Materiales escogidos por tacto, no por catálogo.
                Bouclé, lino, velvet — cuerpos honestos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
