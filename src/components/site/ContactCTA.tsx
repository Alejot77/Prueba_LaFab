import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import ctaVideocall from "@/assets/cta-videocall.jpg";
import ctaSamples from "@/assets/cta-samples.jpg";
import * as emailjs from "@emailjs/browser";


const formats = [
  {
    id: "showroom",
    label: "Visitar showroom",
    short: "Showroom",
    desc: "Coordinamos una cita privada para que vivas la pieza en persona.",
    cta: "Agendar visita",
  },
  {
    id: "asesoria",
    label: "Asesoría a distancia",
    short: "Videollamada",
    desc: "Una videollamada con nuestro estudio para componer tu Lutton.",
    cta: "Reservar videollamada",
  },
  {
    id: "muestras",
    label: "Recibir muestras",
    short: "Muestrario",
    desc: "Te enviamos los textiles a casa para decidir sin prisas.",
    cta: "Pedir muestrario",
  },
] as const;

type FormatId = (typeof formats)[number]["id"];

export function ContactCTA() {
  const ref = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [format, setFormat] = useState<FormatId>("showroom");
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", notes: "" });
  const [loading, setLoading] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  // Sync with hash like #contacto?formato=asesoria coming from InteractiveCTA
  useEffect(() => {
    
    const sync = () => {
      const hash = window.location.hash;
      const match = hash.match(/formato=(showroom|asesoria|muestras)/);
      if (match) setFormat(match[1] as FormatId);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const current = formats.find((f) => f.id === format) ?? formats[0];

  const whatsappMessage = encodeURIComponent(
    `Hola LaFab, quiero ${current.cta.toLowerCase()}.

  Nombre: ${form.name}
  Email: ${form.email}
  WhatsApp: ${form.whatsapp}
  Formato: ${current.label}

  ${form.notes ? `Detalles: ${form.notes}` : ""}`
  );
  const isFormValid = form.name && form.email && form.whatsapp;
  return (
    <section id="contacto" className="bg-[var(--ink)] text-[var(--background)]">
      <div ref={ref} className="reveal mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-24 ">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          <div className="flex flex-col h-full">
            <p className="text-[0.7rem] tracking-wider-2 uppercase text-white/50 mb-6">
              08 — Reserva tu experiencia
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-editorial">
              Diseñemos juntos tu <span className="italic">espacio ideal</span>.
            </h2>
            <p className="mt-6 text-white/70 max-w-md leading-relaxed">
              Elige cómo quieres descubrir Lutton. Nuestro estudio te acompaña
              desde la primera idea hasta la entrega de tu pieza a medida.
            </p>

            {/* Dynamic media panel based on selected format */}
            <div className="mt-10 rounded-sm overflow-hidden border border-white/10 bg-white/5 ">
              {format === "showroom" && (
                <div className="flex flex-col">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <iframe
                      title="Showroom LaFab — Itagüí"
                      src="https://www.google.com/maps?q=Cl.%2064%20%2344-74%2C%20La%20Esmeralda%2C%20Itag%C3%BCi%2C%20Antioquia&output=embed"
                      loading="lazy"
                      className="w-full h-full border-0 grayscale contrast-110"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[0.65rem] tracking-wider-2 uppercase text-white/50 mb-2">
                      Showroom · Itagüí
                    </p>
                    <p className="text-sm text-white/85 leading-relaxed">
                      Cl. 64 #44-74, La Esmeralda, Itagüí, Antioquia
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Cl.+64+%2344-74,+La+Esmeralda,+Itag%C3%BCi,+Antioquia"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-3 text-[0.7rem] tracking-wider-2 uppercase text-white/70 hover:text-white border-b border-white/30 hover:border-white pb-0.5 transition-colors"
                    >
                      Cómo llegar →
                    </a>
                  </div>
                </div>
              )}

              {format === "asesoria" && (
                <div className="flex flex-col">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={ctaVideocall}
                      alt="Asesoría por videollamada con el estudio LaFab"
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[0.65rem] tracking-wider-2 uppercase text-white/50 mb-2">
                      Asesoría a distancia
                    </p>
                    <p className="text-sm text-white/85 leading-relaxed">
                      Una sesión privada de 45 minutos con nuestro estudio para
                      componer tu Lutton desde donde estés.
                    </p>
                  </div>
                </div>
              )}

              {format === "muestras" && (
                <div className="flex flex-col">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={ctaSamples}
                      alt="Muestrario de telas LaFab"
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[0.65rem] tracking-wider-2 uppercase text-white/50 mb-2">
                      Muestrario textil
                    </p>
                    <p className="text-sm text-white/85 leading-relaxed">
                      Recibe en casa una selección de nuestros textiles para
                      decidir con calma, al tacto y bajo tu propia luz.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 hidden lg:flex items-center gap-6 text-[0.7rem] tracking-wider-2 uppercase text-white/60 ">
              <span>Bogotá · Medellín</span>
              <span>·</span>
              <span>hola@lafab.co</span>
            </div>
          </div>

          {sent ? (
            <div className="bg-white text-ink rounded-sm border border-border p-10 md:p-14 shadow-2xl ">
              <p className="text-[0.7rem] tracking-wider-2 uppercase text-muted-foreground mb-4">
                Reserva recibida — {current.short}
              </p>
              <h3 className="font-display text-3xl md:text-4xl tracking-editorial">
                Gracias, {submittedName}.
              </h3>
              <p className="mt-4 text-muted-foreground">
                En menos de 24 horas, uno de nuestros asesores se pondrá en contacto contigo para coordinar tu{" "}
                {current.short.toLowerCase()}.
              </p>
            </div>
          ) : (
            <form

           onSubmit={async (e) => {
              e.preventDefault();
            
              // Validación básica
              if (!form.name.trim() || !form.whatsapp.trim()) {
                alert("Completa nombre y WhatsApp");
                return;
              }

              if (form.email && !form.email.includes("@")) {
                alert("Email inválido");
                return;
              }

              setLoading(true);

              try {
                await emailjs.send(
                  "service_4ipngrh",
                  "template_yuafivp",
                  {
                    name: form.name,
                    email: form.email,
                    whatsapp: form.whatsapp,
                    format: current.label,
                    message: form.notes || "Sin detalles",
                    time: new Date().toLocaleString(), // opcional pero útil
                  },
                  "gF1SgS6p4w5krT19_"
                );
                setSubmittedName(form.name);
                setSent(true);

                // limpiar formulario
                setForm({
                  name: "",
                  email: "",
                  whatsapp: "",
                  notes: "",
                });

              } catch (err) {
                console.log("ERROR", err);
                alert("Error al enviar");
              } finally {
                setLoading(false);
              }
            }}

              className="bg-white text-ink rounded-sm border border-border p-8 md:p-12 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] space-y-7"
            >
              <div className="pb-4 border-b border-foreground/10">
                <p className="text-[0.65rem] tracking-wider-2 uppercase text-muted-foreground">
                  Solicita tu reserva
                </p>
                <p className="font-display text-xl mt-1 tracking-editorial">
                  {current.label}
                </p>
              </div>

              {/* Format selector */}
              <fieldset>
                <legend className="text-[0.6rem] tracking-wider-2 uppercase text-muted-foreground mb-3">
                  ¿Cómo quieres descubrir Lutton?
                </legend>
                <div className="flex sm:grid sm:grid-cols-3 gap-2 overflow-x-auto sm:overflow-visible pb-2">
                    {formats.map((f) => {
                    const active = format === f.id;
                    return (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setFormat(f.id)}
                        className={`p-3 md:p-4 text-left border rounded-sm transition-all duration-300 ${
                          active
                            ? "bg-ink text-white border-ink"
                            : "bg-transparent text-ink border-foreground/15 hover:border-foreground/50"
                        }`}
                      >
                        <span className="block text-[0.6rem] tracking-wider-2 uppercase opacity-60">
                          0{formats.indexOf(f) + 1}
                        </span>
                        <span className="block mt-1 text-[0.85rem] sm:text-[0.78rem] font-medium">
                          {f.short}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-3 text-[0.78rem] text-muted-foreground leading-relaxed">
                  {current.desc}
                </p>
              </fieldset>
              
            <div className="grid grid-cols-1 gap-y-5">

              <Field
                label="Nombre"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                type="text"
                required
              />

              <Field
                label="WhatsApp"
                value={form.whatsapp}
                onChange={(v) => setForm({ ...form, whatsapp: v })}
                type="tel"
                required
              />

              <Field
                label="Email (opcional)"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                type="email"
              />

              <label className="block">
                <span className="text-[0.6rem] tracking-wider-2 uppercase text-muted-foreground">
                  {format === "muestras"
                    ? "Dirección de envío"
                    : "Detalles (opcional)"}
                </span>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={2}
                  className="mt-2 w-full bg-transparent border-b border-foreground/20 py-3 text-base text-ink placeholder-muted-foreground focus:outline-none focus:border-ink transition-colors duration-300 resize-none"
                />
              </label>

            </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-sm border text-[0.78rem] tracking-wider-2 uppercase transition-all duration-500 ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed text-white border-gray-400"
                      : "bg-ink text-white border-ink hover:bg-transparent hover:text-ink"
                  }`}
                >
                  {loading ? "Enviando..." : `${current.cta} →`}
                </button>
               <a
                  href={isFormValid ? `https://wa.me/573218478313?text=${whatsappMessage}` : "#"}
                  onClick={(e) => {
                    if (!isFormValid) e.preventDefault();
                  }}
                  className={`inline-flex items-center justify-center gap-2 px-7 py-4 rounded-sm border text-[0.78rem] tracking-wider-2 uppercase transition-all duration-500 ${
                    isFormValid
                      ? "border-foreground/30 text-ink hover:bg-ink hover:text-white hover:border-ink"
                      : "border-foreground/10 text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.7rem] tracking-wider-2 uppercase text-white/50">
          <span className="font-display text-lg text-white normal-case tracking-editorial">
            La<span className="italic">Fab</span>
          </span>
          <span>© {new Date().getFullYear()} LaFab — Mobiliario a medida</span>
        </div>
      </footer>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
  required?: boolean;
}) {
  return (
    <label className="block group">
      <span className="text-[0.6rem] tracking-wider-2 uppercase text-muted-foreground">{label}</span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-transparent border-b border-foreground/20 py-3 text-base text-ink placeholder-muted-foreground focus:outline-none focus:border-ink transition-colors duration-300"
      />
    </label>
  );
}
