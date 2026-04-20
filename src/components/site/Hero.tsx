import heroImg from "@/assets/lutton-product-dark.jpg";

export function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[680px] w-full overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sofá Lineal Lutton en sala con luz natural"
          className="h-full w-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      </div>

      {/* Editorial frame markers */}

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-end">
          <div className="mx-auto max-w-[1500px] w-full px-6 md:px-10 pb-16 md:pb-20">
            <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-8">

              {/* LEFT: TITULO */}
              <h1 className="font-display text-white leading-[0.95] tracking-[-0.04em] font-normal text-[3rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] ">
                Diseño que <br />define tu espacio.
              </h1>

              {/* RIGHT: BOTONES */}
              <div className="flex flex-col sm:flex-row gap-3 md:items-end">
                <a
                  href="#configurador"
                  className="btn-ink !bg-white !text-ink !border-white hover:!bg-transparent hover:!text-white group"
                >
                  Diseñar mi sofá
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#contacto"
                  className="btn-outline !text-white !border-white hover:!bg-white hover:!text-ink"
                >
                  Agendar asesoría
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between pb-6 px-10 text-[0.65rem] tracking-wider-2 uppercase text-white/60">
          <span>Bogotá · Medellín · CO</span>
          <div className="flex flex-col items-center gap-3">
            <span>Scroll</span>
            <div className="scroll-indicator bg-white/70" />
          </div>
          <span>N° 001 — Inicio</span>
        </div>
      </div>
    </section>
  );
}
