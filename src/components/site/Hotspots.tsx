import { useState } from "react";

export type Hotspot = {
  x: number; // percent 0-100
  y: number; // percent 0-100
  name: string;
  meta?: string;
};

export function Hotspots({ points, className = "" }: { points: Hotspot[]; className?: string }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className={`absolute inset-0 z-20 pointer-events-none ${className}`}>
      {points.map((p, i) => {
        const isActive = active === i;
        return (
          <div
            key={i}
            className="absolute pointer-events-auto"
            style={{ left: `${p.x}%`, top: `${p.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(isActive ? null : i)}
              className="group relative flex items-center justify-center"
              aria-label={p.name}
            >
              {/* Pulse ring */}
              <span className="absolute inline-flex h-9 w-9 rounded-sm bg-white/40 animate-ping" />
              {/* Dot */}
              <span
                className={`relative inline-flex h-7 w-7 items-center justify-center rounded-sm bg-white text-ink text-base font-light shadow-[0_8px_20px_-4px_rgba(0,0,0,0.45)] transition-transform duration-300 ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`}
              >
                {isActive ? "−" : "+"}
              </span>
            </button>

            {/* Tooltip */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-3 min-w-[180px] bg-white/95 backdrop-blur-sm text-ink px-4 py-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] transition-all duration-300 ${
                isActive
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
            >
              <p className="font-display text-sm leading-tight">{p.name}</p>
              {p.meta && (
                <p className="text-[0.6rem] tracking-wider-2 uppercase text-muted-foreground mt-1">
                  {p.meta}
                </p>
              )}
              <a
                href="#configurador"
                className="mt-2 inline-block text-[0.6rem] tracking-wider-2 uppercase border-b border-ink pb-0.5 hover:opacity-60 transition"
              >
                Diseñar →
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
