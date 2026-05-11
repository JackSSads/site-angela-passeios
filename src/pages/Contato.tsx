import { MapPin, Clock, Phone } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import parrachos02 from "@/assets/parrachos/f_aerea02.jpg";

const Contato = () => (
  <>
    <section className="relative flex mt-[5rem] h-[40vh] items-center justify-center overflow-hidden">
      <img src={parrachos02} alt="Parrachos de Maracajaú" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 text-center">        <h1 className="font-heading text-4xl font-black text-primary-foreground md:text-5xl">Contato & Reservas</h1>
        <p className="mt-3 text-lg text-primary-foreground/80">Reserve agora pelo WhatsApp</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Como reservar</h2>
            <div className="mb-8 space-y-4 text-muted-foreground">
              <p>1. Clique no botão de WhatsApp abaixo</p>
              <p>2. Informe o passeio desejado e a data</p>
              <p>3. Nossa equipe confirma sua reserva na hora!</p>
            </div>
            <WhatsAppButton text="Falar no WhatsApp" className="text-lg px-8 py-4" />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-card p-6 shadow-card">
              <div className="mb-3 flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="font-heading text-lg font-bold text-foreground">Horários</h3>
              </div>
              <p className="text-sm text-muted-foreground">Passeios saem diariamente de acordo com a tábua de maré.</p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-card">
              <div className="mb-3 flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="font-heading text-lg font-bold text-foreground">Localização</h3>
              </div>
              <p className="text-sm text-muted-foreground">Praia de Maracajaú, Maxaranguape – RN. A 45 km de Natal.</p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-card">
              <div className="mb-3 flex items-center gap-3">
                <Phone className="h-6 w-6 text-primary" />
                <h3 className="font-heading text-lg font-bold text-foreground">Telefone</h3>
              </div>
              <p className="text-sm text-muted-foreground">(84) 9 9607-8928</p>
              <p className="text-sm text-muted-foreground">(84) 9 9931-5718</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contato;
