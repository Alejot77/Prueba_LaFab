import { useEffect, useState } from "react";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      setShow(y > 600 && y < max - 400);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
      <a
      href="#contacto"
      className={`fixed z-40 bottom-6 right-6 md:bottom-8 md:right-8 inline-flex items-center gap-2 px-5 py-3 text-[0.7rem] tracking-wider-2 uppercase rounded-sm bg-black/90 backdrop-blur-sm text-white border border-white/80 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      } hover:bg-white hover:text-black hover:border-black/100`}
    >
      Agendar asesoría
      <span aria-hidden>→</span>
    </a>
  );
}