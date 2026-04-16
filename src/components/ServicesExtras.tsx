import { Star, Camera, Glasses, Wine, Sailboat } from "lucide-react";
import SectionTitle from "./SectionTitle";

const services = [
  {
    icon: Star,
    title: "Mergulho com Cilindro",
    desc: "Experiência guiada por instrutor credenciado com equipamento completo.",
    benefits: ["Profissional certificado", "Equipamento completo", "~30 min de mergulho"],
    featured: true,
  },
  {
    icon: Sailboat,
    title: "Embarcação Privativa",
    desc: "Passeio exclusivo para você e seu grupo, com conforto e privacidade.",
    benefits: ["Serviço personalizado", "Itinerário flexível", "Capacidade para até 20 pessoas"],
  },
  {
    icon: Camera,
    title: "Fotos Subaquáticas",
    desc: "Registre cada momento com fotos profissionais embaixo d'água.",
    benefits: ["Fotógrafo profissional", "Fotos em alta resolução", "Entrega digital"],
  },
  {
    icon: Glasses,
    title: "Máscara Full Face",
    desc: "Visão panorâmica e respiração natural para maior conforto.",
    benefits: ["Campo de visão amplo", "Respire pelo nariz", "Antiembaçante"],
  },
  {
    icon: Wine,
    title: "Bar a Bordo",
    desc: "Bebidas e petiscos disponíveis durante todo o passeio.",
    benefits: ["Bebidas geladas", "Petiscos variados", "Preços acessíveis"],
  },
];

const ServicesExtras = () => (
  <section className="bg-muted py-20">
    <div className="container mx-auto px-4">
      <SectionTitle badge="Serviços Extras" title="Turbine sua experiência" subtitle="Serviços adicionais para deixar seu passeio ainda mais especial." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div
            key={s.title}
            className={`rounded-2xl bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover ${
              s.featured ? "ring-2 ring-accent" : ""
            }`}
          >
            {s.featured && (
              <span className="mb-3 inline-block rounded-full bg-accent/20 px-3 py-1 font-heading text-xs font-bold text-accent-foreground">
                ⭐ DESTAQUE
              </span>
            )}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{s.title}</h3>
            <p className="mb-4 text-sm text-muted-foreground">{s.desc}</p>
            <ul className="space-y-1">
              {s.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesExtras;
