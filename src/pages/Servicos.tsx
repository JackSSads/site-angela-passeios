import ServicesExtras from "@/components/ServicesExtras";
import parrachos03 from "@/assets/parrachos/f_aerea03.jpg";

const Servicos = () => (
  <>
    <section className="relative flex mt-[5rem] h-[40vh] items-center justify-center overflow-hidden">
      <img src={parrachos03} alt="Parrachos de Maracajaú" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 text-center">
        <h1 className="font-heading text-4xl font-black text-primary-foreground md:text-5xl">Serviços Extras</h1>
        <p className="mt-3 text-lg text-primary-foreground/80">Turbine sua experiência nos Parrachos</p>
      </div>
    </section>
    <ServicesExtras />
  </>
);

export default Servicos;
