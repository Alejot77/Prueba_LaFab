import { useMemo, useState } from "react";

type Seats = 2 | 3 | 4;

type Fabric = {
  id: string;
  name: string;
  swatch: string;
  priceModifier: number;
};

type Chaise = "none" | "left" | "right";
type SeatComfort = "soft" | "extraSoft";

const FABRICS: Fabric[] = [
  { id: "cloud", name: "Bouclé Cloud", swatch: "oklch(0.86 0.025 240)", priceModifier: 0 },
  { id: "stone", name: "Lana Stone", swatch: "oklch(0.74 0.012 80)", priceModifier: 180000 },
  { id: "moss", name: "Lino Moss", swatch: "oklch(0.62 0.04 145)", priceModifier: 280000 },
  { id: "terra", name: "Velvet Terra", swatch: "oklch(0.55 0.08 45)", priceModifier: 420000 },
  { id: "ink", name: "Wool Ink", swatch: "oklch(0.32 0.015 250)", priceModifier: 250000 },
];

const BASE_PRICE = 3400000;
const PRICE_PER_SEAT = 450000; 
const CHAISE_PRICE = 900000;   
const EXTRA_SOFT_PRICE = 250000; 


export function Configurator() {
  const [seats, setSeats] = useState<Seats>(2);
  const [chaise, setChaise] = useState<Chaise>("none");
  const [fabric, setFabric] = useState<Fabric>(FABRICS[0]);
  const [comfort, setComfort] = useState<SeatComfort>("soft");

  const total = useMemo(() => {
  const seatCost = BASE_PRICE + Math.max(0, seats - 2) * PRICE_PER_SEAT;
  const chaiseCost = chaise !== "none" ? CHAISE_PRICE : 0;
  const comfortCost = comfort === "extraSoft" ? EXTRA_SOFT_PRICE : 0;

  return seatCost + chaiseCost + fabric.priceModifier + comfortCost;
}, [seats, chaise, fabric, comfort]);

  const moduleCount = seats + (chaise !== "none" ? 1 : 0);

  return (
    <section
      id="configurador"
      className="py-20 md:py-24 px-6 md:px-10 bg-[var(--ink)] text-white"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-8 mb-16 items-end">
          <div className="col-span-12 lg:col-span-7">
            <span className="text-eyebrow text-white/80 block mb-6">N° 06 — Configurador en vivo</span>
            <h2 className="font-editorial text-5xl md:text-7xl leading-[0.95]">
              Componga su<br />
              <span className="italic">Lutton.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-white/70 leading-relaxed font-light ">
              Ajuste tamaño, añada chaise longue, tipo de asiento y elija textil. La visualización y el
              precio se actualizan al instante. Cuando esté listo, agendamos una cita en
              showroom para confirmar acabados.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Visualizer */}
          <div className="col-span-12 lg:col-span-7">
            <div
              className="aspect-[5/4] flex items-center justify-center p-8 md:p-16 transition-colors duration-700 relative overflow-hidden rounded-sm"
              style={{ backgroundColor: "color-mix(in oklab, white 8%, transparent)" }}
            >
              <div className="absolute left-8 right-8 bottom-16 h-px bg-white/15" />
              <SofaSVG seats={seats} chaise={chaise} fabricColor={fabric.swatch} />
              <div className="absolute top-6 left-6 text-eyebrow text-white/40">
                Vista isométrica · escala 1:20
              </div>
              <div className="absolute bottom-6 right-6 text-eyebrow text-white/40 tabular-nums">
                {moduleCount} módulos
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="col-span-12 lg:col-span-5 space-y-10">
            {/* Seats */}
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-eyebrow text-white/60">01 — Plazas</span>
                <span className="text-eyebrow text-white/80 tabular-nums">
                  {seats === 2 ? "160 cm" : seats === 3 ? "180 cm" : "200 cm"}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {([2, 3, 4] as Seats[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSeats(s)}
                    className={`py-5 border text-eyebrow transition-all rounded-sm ${
                      seats === s
                        ? "border-white bg-white/10 text-white"
                        : "border-white/15 text-white/60 hover:border-white/40"
                    }`}
                  >
                   {s} plazas ({s === 2 ? "160 cm" : s === 3 ? "180 cm" : "200 cm"})
                  </button>
                ))}
              </div>
            </div>

            {/* Chaise */}
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-eyebrow text-white/60">02 — Chaise longue</span>
                <span className="text-eyebrow text-white/80">
                  {chaise === "none" ? "Sin chaise" : chaise === "left" ? "Izquierda" : "Derecha"}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(["left", "none", "right"] as Chaise[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setChaise(c)}
                    className={`py-5 border text-eyebrow transition-all rounded-sm ${
                      chaise === c
                        ? "border-white bg-white/10 text-white"
                        : "border-white/15 text-white/60 hover:border-white/40"
                    }`}
                  >
                    {c === "none" ? "Ninguna" : c === "left" ? "Izq." : "Der."}
                  </button>
                ))}
              </div>
            </div>

                {/* Seat Comfort */}
              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <span className="text-eyebrow text-white/60">03 — Tipo de asiento</span>
                  <span className="text-eyebrow text-white/80">
                    {comfort === "soft" ? "Suave" : "Extra suave"}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setComfort("soft")}
                    className={`py-5 border text-eyebrow transition-all rounded-sm ${
                      comfort === "soft"
                        ? "border-white bg-white/10 text-white"
                        : "border-white/15 text-white/60 hover:border-white/40"
                    }`}
                  >
                    Suave (incluido)
                  </button>

                  <button
                    onClick={() => setComfort("extraSoft")}
                    className={`py-5 border text-eyebrow transition-all rounded-sm ${
                      comfort === "extraSoft"
                        ? "border-white bg-white/10 text-white"
                        : "border-white/15 text-white/60 hover:border-white/40"
                    }`}
                  >
                    Extra suave (+${EXTRA_SOFT_PRICE.toLocaleString("es-CO")})
                  </button>
                </div>
              </div>
            {/* Fabric */}
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-eyebrow text-white/60">04 — Textil</span>
                <span className="text-eyebrow text-white/80">{fabric.name}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {FABRICS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFabric(f)}
                    aria-label={f.name}
                    className={`group relative w-12 h-12 rounded-sm transition-all ${
                      fabric.id === f.id
                        ? "ring-2 ring-white ring-offset-2 ring-offset-[var(--ink)] scale-110"
                        : "ring-1 ring-white/20 hover:ring-white/50"
                    }`}
                    style={{ backgroundColor: f.swatch }}
                  >
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase text-white/50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {f.name}
                    </span>
                  </button>
                  
                ))}
                
              </div>
              <p className="text-[14px] text-white/40 mt-4 leading-relaxed justify-center flex gap-2">
              <br />
               · Base en madera de roble
               · Espumas certificadas de alta calidad <br />
               · Estructura diseñada para uso continuo
               · Ensamble enfocado en durabilidad
              </p>
            </div>

            {/* Price + CTA */}
            <div className="pt-8 border-t border-white/15">
              <div className="flex justify-between items-end mb-6">
                <span className="text-eyebrow text-white/60">Total estimado</span>
                <span className="font-editorial text-4xl md:text-5xl tabular-nums">
                  ${total.toLocaleString("es-CO")} COP
                </span>
              </div>
              <a
                href="#contacto"
                className="block text-center w-full py-5 bg-white text-[var(--ink)] text-eyebrow hover:bg-white/85 hover:text-[var(--ink)] transition-colors duration-500 rounded-sm"
              >
                Reservar esta configuración
              </a>
              <p className="text-[11px] text-white/40 mt-4 leading-relaxed justify-center flex gap-2">
               Hecho a medida · Entrega nacional · Garantía 3 años
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SofaSVG({
  seats,
  chaise,
  fabricColor,
}: {
  seats: Seats;
  chaise: Chaise;
  fabricColor: string;
}) {
  // Isometric projection: x' = (x - z) * cos30, y' = (x + z) * sin30 - y
  // We use simplified iso transforms with scale.
  const iso = (x: number, y: number, z: number) => {
    const cos = 0.866; // cos(30deg)
    const sin = 0.5;   // sin(30deg)
    return {
      x: (x - z) * cos,
      y: (x + z) * sin - y,
    };
  };

  // Module dimensions (X = width, Y = up, Z = depth front->back from viewer)
  // Z = 0 is the BACK of the sofa, Z = depth is the FRONT (closer to viewer).
  const seatW = 64;
  const depth = 78;
  const armW = 14;
  const armH = 42;          // arm total height above base
  const baseH = 6;          // wooden plinth
  const seatH = 18;         // seat cushion height
  const backH = 38;         // backrest height (above base)
  const backD = 14;         // backrest depth (thickness)
  const chaiseExt = 56;     // chaise extra depth toward viewer

  const totalSeatsW = seats * seatW;
  const leftChaise = chaise === "left";
  const rightChaise = chaise === "right";

  const fullW = armW * 2 + totalSeatsW;

  // Bounds
  const points: { x: number; y: number }[] = [];
  const push = (x: number, y: number, z: number) => points.push(iso(x, y, z));
  const totalDepth = depth + (leftChaise || rightChaise ? chaiseExt : 0);
  push(0, 0, 0);
  push(fullW, 0, 0);
  push(fullW, 0, totalDepth);
  push(0, 0, totalDepth);
  push(0, baseH + backH, 0);
  push(fullW, baseH + backH, 0);

  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const minX = Math.min(...xs) - 14;
  const maxX = Math.max(...xs) + 14;
  const minY = Math.min(...ys) - 14;
  const maxY = Math.max(...ys) + 24;
  const vbW = maxX - minX;
  const vbH = maxY - minY;

  // Box helper — three visible faces (top, front=closer to viewer at z+d, right side)
  type BoxItem = { node: React.ReactNode; sort: number };

  const drawBox = (
    x: number,
    y: number,
    z: number,
    w: number,
    h: number,
    d: number,
    color: string,
    key: string
  ): BoxItem => {
    const p = (px: number, py: number, pz: number) => {
      const i = iso(px, py, pz);
      return `${i.x},${i.y}`;
    };
    const top = color;
    const front = `color-mix(in oklab, ${color} 80%, black)`;
    const side = `color-mix(in oklab, ${color} 64%, black)`;

    // Painter's sort key: smaller = drawn first (further from viewer).
    // In our iso (camera looking from +x,+z toward origin), closer to viewer = larger (x + z + y).
    const sort = x + z + y * 0.5;

    return {
      sort,
      node: (
        <g key={key}>
          {/* Right side face (x = x+w) */}
          <polygon
            points={`${p(x + w, y, z)} ${p(x + w, y, z + d)} ${p(x + w, y + h, z + d)} ${p(x + w, y + h, z)}`}
            fill={side}
          />
          {/* Front face (z = z+d, closer to viewer) */}
          <polygon
            points={`${p(x, y, z + d)} ${p(x + w, y, z + d)} ${p(x + w, y + h, z + d)} ${p(x, y + h, z + d)}`}
            fill={front}
          />
          {/* Top face (y = y+h) */}
          <polygon
            points={`${p(x, y + h, z)} ${p(x + w, y + h, z)} ${p(x + w, y + h, z + d)} ${p(x, y + h, z + d)}`}
            fill={top}
          />
        </g>
      ),
    };
  };

  const items: BoxItem[] = [];
  const woodColor = "oklch(0.48 0.05 55)";

  // BASE — main footprint (forced to back via negative sort)
  const baseMain = drawBox(0, 0, 0, fullW, baseH, depth, woodColor, "base");
  items.push({ ...baseMain, sort: -10000 });

  // BASE — chaise extension (also forced behind everything)
  if (leftChaise) {
    const b = drawBox(0, 0, depth, seatW + armW, baseH, chaiseExt, woodColor, "base-chaise-l");
    items.push({ ...b, sort: -9999 });
  }
  if (rightChaise) {
    const b = drawBox(fullW - (seatW + armW), 0, depth, seatW + armW, baseH, chaiseExt, woodColor, "base-chaise-r");
    items.push({ ...b, sort: -9999 });
  }

  // BACKREST — continuous, full width, at the back
  items.push(drawBox(0, baseH, 0, fullW, backH, backD, fabricColor, "backrest"));

  // ARMS — only on sides without a chaise
  if (!leftChaise) {
    items.push(drawBox(0, baseH, backD, armW, armH, depth - backD, fabricColor, "arm-l"));
  }
  if (!rightChaise) {
    items.push(drawBox(fullW - armW, baseH, backD, armW, armH, depth - backD, fabricColor, "arm-r"));
  }

  // SEAT CUSHIONS — only over seats that are NOT replaced by a chaise
  const seatZ = backD + 2;
  const seatD = depth - backD - 4;
  for (let i = 0; i < seats; i++) {
    // Skip the seat slot that the chaise replaces
    if (leftChaise && i === 0) continue;
    if (rightChaise && i === seats - 1) continue;

    // Determine left/right boundaries: between arm or against chaise edge
    const isFirst = i === 0;
    const isLast = i === seats - 1;
    const leftBound = isFirst ? armW : armW + i * seatW;
    const rightBound = isLast ? fullW - armW : armW + (i + 1) * seatW;
    const x = leftBound + 1;
    const w = rightBound - leftBound - 2;
    items.push(drawBox(x, baseH, seatZ, w, seatH, seatD, fabricColor, `seat-${i}`));
  }

  // CHAISE cushion — extends to the front, replaces one seat + arm side
  if (leftChaise) {
    const x = 1;
    const w = seatW + armW - 2;
    items.push(drawBox(x, baseH, backD + 2, w, seatH, depth - backD - 2 + chaiseExt - 2, fabricColor, "chaise-l"));
  }
  if (rightChaise) {
    const x = fullW - (seatW + armW) + 1;
    const w = seatW + armW - 2;
    items.push(drawBox(x, baseH, backD + 2, w, seatH, depth - backD - 2 + chaiseExt - 2, fabricColor, "chaise-r"));
  }

  // Sort painter's algorithm
  items.sort((a, b) => a.sort - b.sort);
  const elements = items.map((it) => it.node);

  return (
    <svg
      viewBox={`${minX} ${minY} ${vbW} ${vbH}`}
      className="w-full h-full max-w-2xl transition-all duration-500"
      preserveAspectRatio="xMidYMid meet"
    >
      <ellipse
        ry={6}
        fill="black"
        opacity={0.22}
      />
      <g style={{ transition: "all 0.4s ease" }}>{elements}</g>
    </svg>
  );
}

