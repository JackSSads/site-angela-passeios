import heroImg from "@/assets/hero-ocean.jpg";
import WhatsAppButton from "./WhatsAppButton";
import { ChevronDown } from "lucide-react";

const Hero = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Vista aérea dos Parrachos de Maracajaú com catamarã"
      className="absolute inset-0 h-full w-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
      <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 font-heading text-sm font-semibold text-accent backdrop-blur-sm">
        ⛵ A 45 km de Natal – RN
      </span>
      <h1 className="mb-6 font-heading text-4xl font-black leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
        Mergulhe nos{" "}
        <span className="text-accent">Parrachos de Maracajaú</span>
      </h1>
      <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
        Viva uma experiência única com mergulho guiado, catamarã homologado pela Marinha e as águas mais cristalinas do Brasil.
      </p>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <WhatsAppButton text="Reservar Agora" className="text-lg px-8 py-4" />
        <a
          href="#passeios"
          className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-6 py-3 font-heading font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:border-accent hover:text-accent"
        >
          Ver Passeios
        </a>
      </div>
    </div>
    <a href="#passeios" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-primary-foreground/60">
      <ChevronDown className="h-8 w-8" />
    </a>
  </section>
);

export default Hero;
