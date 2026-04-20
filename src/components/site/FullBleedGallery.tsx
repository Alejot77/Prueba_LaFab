import { useEffect, useState } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const slides = [
  { src: g1, caption: "Sala principal · Lutton 4 plazas con chaise" },
  { src: g2, caption: "Detalle textil · Lino natural" },
  { src: g3, caption: "Loft contemporáneo · Lutton modular" },
  { src: g4, caption: "Composición vista superior" },
];

export function FullBleedGallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      aria-label="Galería Lutton"
      className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-[var(--ink)]"
    >
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.src}
            alt={s.caption}
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </div>
      ))}

      {/* Caption + counter */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 flex items-end justify-between text-white">
        <div>
          <p className="text-[0.65rem] tracking-wider-2 uppercase opacity-70 mb-2">
            Galería · {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </p>
          <p className="font-display text-xl md:text-3xl tracking-editorial max-w-xl">
            {slides[index].caption}
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-[2px] transition-all duration-500 ${
                i === index ? "w-12 bg-white" : "w-6 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
