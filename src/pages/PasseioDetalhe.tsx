import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft, Check } from "lucide-react";

const PasseioDetalhe = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="mb-4 font-heading text-2xl font-bold">Passeio não encontrado</h1>
          <Link to="/passeios" className="text-primary hover:underline">Ver todos os passeios</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
        <img src={product.image} alt={product.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-accent/20 px-4 py-1 font-heading text-sm font-semibold text-accent">
            {product.category}
          </span>
          <h1 className="font-heading text-4xl font-black text-primary-foreground md:text-5xl">{product.name}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <Link to="/passeios" className="mb-8 inline-flex items-center gap-2 text-sm text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> Voltar aos passeios
          </Link>

          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 font-heading text-2xl font-bold text-foreground">Sobre este passeio</h2>
              <ul className="mb-6 space-y-3">
                {product.description.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    {d}
                  </li>
                ))}
              </ul>

              <h3 className="mb-3 font-heading text-lg font-bold text-foreground">Benefícios</h3>
              <ul className="mb-6 space-y-2">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>

              {product.rules && (
                <>
                  <h3 className="mb-3 font-heading text-lg font-bold text-foreground">Regras</h3>
                  <ul className="space-y-2">
                    {product.rules.map((r) => (
                      <li key={r} className="text-sm text-coral font-semibold">⚠️ {r}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="rounded-2xl bg-card p-8 shadow-card">
              <div className="mb-6 text-center">
                <span className="text-lg text-muted-foreground line-through">R$ {product.price.toFixed(2)}</span>
                <div className="font-heading text-4xl font-black text-primary">R$ {product.promoPrice.toFixed(2)}</div>
                <span className="text-sm text-secondary font-semibold">Preço promocional</span>
              </div>
              <WhatsAppButton
                text="Reservar Agora"
                message={`Olá! Quero reservar: ${product.name} (R$ ${product.promoPrice.toFixed(2)})`}
                className="w-full justify-center text-lg py-4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PasseioDetalhe;
