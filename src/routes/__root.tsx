import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que estás buscando no existe o ha sido movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Volver al inicio
         </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
 head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // SEO básico
      { title: "Sofá Lutton 2026 | LaFab" },
      {
        name: "description",
        content:
          "Diseña un sofá a tu medida con LaFab. Personalización, confort y diseño premium para transformar tu espacio.",
      },
      { name: "author", content: "Alejandro Tobon" },

      // Open Graph
      { property: "og:title", content: "Sofá Lutton 2026 | LaFab" },
      {
        property: "og:description",
        content:
          "Una pieza diseñada para adaptarse a tu espacio y estilo de vida. Sofás personalizados con materiales premium.",
      },
      { property: "og:type", content: "website" },

      // (opcional por ahora, puedes dejarlo vacío o poner tu imagen luego)
      // { property: "og:image", content: "/preview.jpg" },

      // Twitter Cards
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sofá Lutton 2026 | LaFab" },
      {
        name: "twitter:description",
        content:
          "Diseña tu sofá ideal con asesoría personalizada.",
      },
  ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
        {
      rel: "icon",
      href: "/faviconV2.png",
    },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
