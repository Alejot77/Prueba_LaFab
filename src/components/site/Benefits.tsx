import { useReveal } from "@/hooks/use-reveal";
import benefitsChair from "@/assets/benefits-chair.png";

const items = [
  {
    n: "01",
    title: "Modularidad inteligente",
    desc: "Composiciones que evolucionan con tu espacio y tu rutina. Lineal, en L, con chaise — todo se reconfigura.",
  },
  {
    n: "02",
    title: "Personalización total",
    desc: "Cada Lutton se proyecta junto a ti. Medidas, telas, alturas y cojinería — nunca en serie.",
  },
  {
    n: "03",
    title: "Materiales de alta gama",
    desc: "Bouclé europeo, lino belga, velvet italiano. Seleccionados por su tacto y durabilidad real.",
  },
  {
    n: "04",
    title: "Acompañamiento experto",
    desc: "Un asesor de diseño te guía desde la primera idea hasta la entrega. Visita, render, fabricación.",
  },
];

export function Benefits() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="beneficios" className="relative py-20 md:py-24 bg-[var(--sand)]/30 border-b border-border/60 overflow-hidden">
      <div ref={ref} className="reveal relative z-10 mx-auto max-w-[1500px] px-6 md:px-10">
        {/* Top: text left, image right */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center mb-10">
          <div className="md:col-span-7">
            <p className="text-[0.65rem] tracking-wider-2 uppercase text-muted-foreground mb-4">
              N° 04 — Por qué Lutton
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[4.5rem] leading-[1] tracking-editorial font-medium"> 
              Una pieza  pensada hasta el{" "}
              <span className="italic font-light">último gesto.</span>
            </h2>
            <p className="mt-8 text-muted-foreground max-w-xl leading-relaxed">
              Cada Lutton se concibe como una pieza única: materiales nobles,
              proporciones cuidadas y un acompañamiento de estudio que asegura
              que cada detalle sume al conjunto.
            </p>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-start pl-4 md:pl-8">
            <img
              src={benefitsChair}
              alt="Sillón individual de referencia"
              loading="lazy"
              width={1956}
              height={1005}
              className="w-[380px] md:w-[520px] lg:w-[700px] xl:w-[800px] h-auto object-contain mix-blend-multiply"            />
          </div>
        </div>

        {/* Cards below */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-border rounded-sm overflow-hidden divide-y md:divide-y-0 md:divide-x divide-border bg-background">
          {items.map((item, i) => (
            <BenefitBlock key={item.n} item={item} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitBlock({ item, delay }: { item: (typeof items)[number]; delay: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal p-8 md:p-10 group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="font-display text-4xl md:text-5xl text-foreground/15 group-hover:text-foreground/40 transition-colors duration-700 mb-4">
        {item.n}
      </p>
      <h3 className="font-display text-xl md:text-2xl tracking-editorial mb-4 leading-tight">
        {item.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
    </div>
  );
}
