import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Editorial } from "@/components/site/Editorial";
import { Gallery } from "@/components/site/Gallery";
import { Benefits } from "@/components/site/Benefits";
import { Configurator } from "@/components/site/Configurator";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactCTA } from "@/components/site/ContactCTA";
import { StickyCTA } from "@/components/site/StickyCTA";
import { InteractiveCTA } from "@/components/site/InteractiveCTA";
import { FullBleedGallery } from "@/components/site/FullBleedGallery";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LaFab" },
      {
        name: "description",
        content:
          "Diseña el sofá Lutton que se adapta a tu espacio. Modular, hecho a medida, con materiales premium y asesoría personalizada de LaFab.",
      },
      { property: "og:title", content: "LaFab" },
      {
        property: "og:description",
        content:
          "Una pieza modular hecha a medida. Diseño, materiales nobles y acompañamiento experto.",
      },
      { property: "og:type", content: "website" },
    ],
        links: [
        { rel: "icon", type: "image/png", href: "/faviconV2.png" },
        { rel: "shortcut icon", href: "/faviconV2.png" },

        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
        },
      ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Editorial />
      <div id="galeria">
        <Gallery />
      </div>
      <Benefits />
      <InteractiveCTA />
      <Configurator />
        <Testimonials />
        <FullBleedGallery />
        <ContactCTA />
      <StickyCTA />
    </main>
  );
}
