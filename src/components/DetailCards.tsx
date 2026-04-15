import { Ship, Users, Clock, MapPin, TreePine, Wrench } from "lucide-react";
import SectionTitle from "./SectionTitle";

const details = [
  { icon: Ship, title: "Embarcação", desc: "Catamarã homologado pela Marinha do Brasil" },
  { icon: Users, title: "Tripulação", desc: "Equipe qualificada e certificada" },
  { icon: Clock, title: "Duração", desc: "3h de experiência completa" },
  { icon: MapPin, title: "Localização", desc: "Maracajaú, Maxaranguape – RN" },
  { icon: TreePine, title: "Preservação", desc: "Operação sustentável autorizada pelo IDEMA" },
  { icon: Wrench, title: "Equipamentos", desc: "Máscara, snorkel e colete inclusos" },
];

const DetailCards = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <SectionTitle badge="Detalhes" title="Tudo sobre o passeio" subtitle="Conheça cada detalhe da experiência." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {details.map((d) => (
          <div key={d.title} className="flex items-start gap-4 rounded-xl bg-card p-5 shadow-card">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <d.icon className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-foreground">{d.title}</h4>
              <p className="text-sm text-muted-foreground">{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DetailCards;
