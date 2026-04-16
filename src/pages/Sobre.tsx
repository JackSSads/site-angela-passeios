import SectionTitle from "@/components/SectionTitle";
import DetailCards from "@/components/DetailCards";
import Features from "@/components/Features";
import heroImg from "@/assets/hero-ocean.jpg";

const Sobre = () => (
  <>
    {/* Hero */}
    <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Parrachos de Maracajaú" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 text-center">
        <h1 className="font-heading text-4xl font-black text-primary-foreground md:text-5xl">Sobre o Passeio</h1>
        <p className="mt-3 text-lg text-primary-foreground/80">Tudo que você precisa saber antes de embarcar</p>
      </div>
    </section>

    {/* Content */}
    <section className="py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <SectionTitle title="A Experiência" subtitle="Uma viagem inesquecível até as piscinas naturais de Maracajaú" />
        <div className="space-y-6 text-muted-foreground">
          <p>
            Os <strong className="text-foreground">Parrachos de Maracajaú</strong> são formações de corais localizadas a 7 km da costa, no município de Maxaranguape, a apenas 45 km de Natal – RN. Com águas cristalinas e vida marinha abundante, é o destino perfeito para quem busca contato com a natureza.
          </p>
          <p>
            O passeio tem duração total de <strong className="text-foreground">3h</strong>: são 20 minutos de navegação (5 milhas náuticas) até os parrachos, onde você terá <strong className="text-foreground">2h20</strong> para mergulhar e explorar as piscinas naturais, seguidos de 20 minutos de retorno.
          </p>
          <p>
            Nosso <strong className="text-foreground">catamarã é homologado pela Marinha do Brasil</strong>, com tripulação certificada e todos os equipamentos de segurança. Fornecemos máscara, snorkel e colete salva-vidas para todos os passageiros.
          </p>
        </div>
      </div>
    </section>

    <Features />
    <DetailCards />
  </>
);

export default Sobre;
