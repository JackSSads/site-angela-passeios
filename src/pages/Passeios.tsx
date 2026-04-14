import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { products } from "@/data/products";

const Passeios = () => (
  <>
    <section className="bg-gradient-ocean pb-20 pt-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-black text-primary-foreground md:text-5xl">Nossos Passeios</h1>
        <p className="mt-3 text-lg text-primary-foreground/80">Escolha a experiência perfeita para você</p>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Passeios;
