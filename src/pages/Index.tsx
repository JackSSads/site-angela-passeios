import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import ServicesExtras from "@/components/ServicesExtras";
import DetailCards from "@/components/DetailCards";
import SectionTitle from "@/components/SectionTitle";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/products";

const Index = () => (
  <>
    <Hero />

    {/* Products */}
    <section id="passeios" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          badge="Passeios"
          title="Escolha sua aventura"
          subtitle="Experiências incríveis para todos os gostos e idades."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>

    <Features />
    <ServicesExtras />
    <DetailCards />
    <Gallery />

    {/* CTA Final */}
    <section className="bg-gradient-ocean py-20 text-center text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
          Pronto para mergulhar?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-primary-foreground/90">
          Reserve agora pelo WhatsApp e garanta sua vaga nos Parrachos de Maracajaú. Não perca essa experiência!
        </p>
        <WhatsAppButton text="Reservar pelo WhatsApp" className="text-lg px-8 py-4" />
      </div>
    </section>
  </>
);

export default Index;
