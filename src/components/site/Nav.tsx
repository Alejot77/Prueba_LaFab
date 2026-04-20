import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section state
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = ["beneficios", "configurador", "galeria", "testimonios"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "diseno", label: "Diseño" },
    { id: "galeria", label: "Galería" },
    { id: "configurador", label: "Personalizar" },
    { id: "testimonios", label: "Testimonios" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 text-foreground"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#top" className="flex items-center">
          <img
            src={scrolled ? "/LaFab-negro.png" : "/lafab-blanco.png"}
            alt="LaFab"
            className="h-6 md:h-7 w-auto object-contain transition-all duration-300"
          />
        </a>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-10 text-[0.65rem] tracking-wider-2 uppercase">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative pb-1 group transition-colors"
            >
              {item.label}

              {/* underline animado */}
              <span
                className={`absolute left-0 -bottom-1 h-[1px] bg-current transition-all duration-300 ease-out ${
                  activeSection === item.id
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-70"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* CTA DESKTOP */}
        <a
          href="#contacto"
          className={`hidden md:inline-flex items-center gap-2 text-[0.7rem] tracking-wider-2 uppercase border rounded-sm px-4 py-2.5 transition-colors duration-500 ${
            scrolled
              ? "border-foreground hover:bg-foreground hover:text-background"
              : "border-white hover:bg-white hover:text-ink"
          }`}
        >
          Agendar asesoría <span aria-hidden>→</span>
        </a>

        {/* CTA MOBILE */}
        <a
          href="#contacto"
          className="md:hidden text-[0.7rem] tracking-wider-2 uppercase border border-current rounded-sm px-3 py-1.5"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}