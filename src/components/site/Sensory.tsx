import { useReveal } from "@/hooks/use-reveal";
import cabin from "@/assets/lutton-cabin.jpeg";
import industrial from "@/assets/lutton-industrial.jpeg";
import blue from "@/assets/lutton-blue.jpeg";

export function Sensory() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="testimonios" className="py-20 md:py-24 bg-background border-b border-border/60">
      <div ref={ref} className="reveal mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-20 items-end">
          <div className="md:col-span-3">
            <p className="text-[0.65rem] tracking-wider-2 uppercase text-muted-foreground">
              N° 07 — Proyectos
            </p>
          </div>
          <h2 className="md:col-span-9 font-display text-4xl md:text-5xl lg:text-[4.5rem] leading-[1] tracking-editorial font-medium max-w-4xl">
            Lo que dicen quienes <span className="italic font-light">ya viven</span> con un Lutton.
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          <Testimonial
            className="md:col-span-5"
            img={cabin}
            quote="El acompañamiento del equipo hizo toda la diferencia. Es la pieza central de nuestra sala."
            name="María & Andrés"
            place="Casa en Chía"
          />
          <Testimonial
            className="md:col-span-7 md:mt-24"
            img={industrial}
            quote="Buscábamos algo único para un loft con doble altura. LaFab nos entregó exactamente lo que imaginamos."
            name="Estudio Norte"
            place="Loft, Bogotá"
          />
          <Testimonial
            className="md:col-span-7 md:col-start-3"
            img={blue}
            quote="Cada textura, cada cojín. Se nota que está hecho a mano y pensado al detalle."
            name="Camila Restrepo"
            place="Apartamento Medellín"
          />
        </div>

        <div className="mt-28 grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center border-t border-border pt-12">
          <Stat n="+420" label="Proyectos realizados" />
          <Stat n="98%" label="Clientes satisfechos" />
          <Stat n="12" label="Años de oficio" />
        </div>
      </div>
    </section>
  );
}

function Testimonial({
  img,
  quote,
  name,
  place,
  className = "",
}: {
  img: string;
  quote: string;
  name: string;
  place: string;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>(0.1);
  return (
    <div ref={ref} className={`reveal group ${className}`}>
      <div className="aspect-[4/5] overflow-hidden mb-7">
        <img
          src={img}
          alt={`Proyecto ${name}`}
          className="w-full h-full object-cover img-zoom"
          loading="lazy"
        />
      </div>
      <p className="font-display text-2xl md:text-3xl leading-[1.2] tracking-editorial mb-6 max-w-md">
        “{quote}”
      </p>
      <p className="text-[0.65rem] tracking-wider-2 uppercase text-muted-foreground">
        {name} — <span className="text-foreground/70">{place}</span>
      </p>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl md:text-5xl mb-2 font-medium tracking-editorial">{n}</p>
      <p className="text-[0.6rem] tracking-wider-2 uppercase text-muted-foreground">{label}</p>
    </div>
  );
}
