import { useReveal } from "@/hooks/use-reveal";
import concept from "@/assets/lafab-real-1.jpeg";
import inspiration from "@/assets/lafab-real-3.jpeg";

export function Editorial() {
  const refTxt = useReveal<HTMLDivElement>(0.2);
  const refImg2 = useReveal<HTMLDivElement>(0.15);

  return (
    <section id="diseno" className=" bg-background border-b border-border/60">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-20 md:py-24">
        {/* Header */}
        <div ref={refTxt} className="reveal max-w-3xl mb-14 md:mb-20">
          <p className="text-[0.65rem] tracking-wider-2 uppercase text-muted-foreground mb-6">
            N° 02 — Concepto & Inspiración
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-editorial font-medium">
            Una línea continua,{" "}
            <span className="italic font-light">una declaración silenciosa.</span>
          </h2>
        </div>

        {/* Two-column editorial layout */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-14 items-start">
          {/* Left: concept image + text */}
          <div className="md:col-span-7 max-w-[700px] space-y-10">
            <div className="overflow-hidden rounded-sm border border-border group">
              <img
                src={concept}
                alt="Detalle textil del sofá Lutton"
                className="w-full aspect-[5/4] object-cover img-zoom"
                loading="lazy"
              />
            </div>
            
              <p className="text-[0.65rem] tracking-wider-2 uppercase text-muted-foreground mb-4">
                Concepto
              </p>
              <p className="text-foreground/85 leading-relaxed">
                El Lutton parte de una sola línea horizontal. Su silueta elimina el ruido
                visual y deja respirar al espacio. La estructura modular permite extenderlo,
                recortarlo, reconfigurarlo según la vida que lo habita.
              </p>
              <ul className="mt-8 space-y-3 text-[0.7rem] tracking-wider-2 uppercase text-foreground/80">
                <li className="flex items-center gap-4 border-t border-border/60 pt-3">
                  <span className="text-muted-foreground">01</span>
                  <span>Estructura modular</span>
                </li>
                <li className="flex items-center gap-4 border-t border-border/60 pt-3">
                  <span className="text-muted-foreground">02</span>
                  <span>Cojinería en plumón</span>
                </li>
                <li className="flex items-center gap-4 border-t border-border/60 pt-3">
                  <span className="text-muted-foreground">03</span>
                  <span>Patas en madera maciza</span>
                </li>
              </ul>
            
          </div>

          {/* Right: inspiration text + image */}
          <div ref={refImg2} className="reveal md:col-span-5 md:pt-20 space-y-10">
            <div className="max-w-[60ch] space-y-10">
              <p className="text-[0.65rem] tracking-wider-2 uppercase text-muted-foreground mb-4">
                Inspiración
              </p>
              <h3 className="font-display text-2xl md:text-3xl leading-[1.1] tracking-editorial font-medium mb-5">
                Arquitectura doméstica <span className="italic font-light">nórdica.</span>
              </h3>
              <p className=" leading-relaxed">
                Tomamos la calidez de la madera y la quietud de los espacios escandinavos.
                El resultado es una pieza que se siente parte de la casa antes de ser
                comprada — discreta, generosa, atemporal.
              </p>
            </div>
            <div className="overflow-hidden rounded-sm border border-border group">
              <img
                src={inspiration}
                alt="Sofá Lutton en sala con vista a la naturaleza"
                className="w-full aspect-[4/5] object-cover img-zoom"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
