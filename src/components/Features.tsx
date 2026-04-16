import { Shield, Leaf, Clock, Users } from "lucide-react";
import SectionTitle from "./SectionTitle";

const features = [
  { icon: Shield, title: "Segurança Total", desc: "Catamarã homologado pela Marinha do Brasil. Tripulação certificada e coletes salva-vidas para todos." },
  { icon: Leaf, title: "Sustentabilidade", desc: "Operação autorizada pelo IDEMA. Compromisso com a preservação dos recifes de coral." },
  { icon: Clock, title: "Experiência Completa", desc: "3h de passeio com 20 min de ida, 2h20 nos parrachos e 20 min de volta." },
  { icon: Users, title: "Para Toda Família", desc: "Atividades para todas as idades. Equipamentos e acompanhamento profissional." },
];

const Features = () => (
  <section className="bg-ocean-foam py-20">
    <div className="container mx-auto px-4">
      <SectionTitle badge="Diferenciais" title="Por que escolher a gente?" subtitle="Segurança, sustentabilidade e diversão em um só lugar." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="group rounded-2xl bg-card p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <f.icon className="h-7 w-7" />
            </div>
            <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
