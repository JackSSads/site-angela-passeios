import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { Product } from "@/data/products";
import WhatsAppButton from "./WhatsAppButton";
import { LinkClick } from "@/hooks/link";

const ProductCard = ({ product }: { product: Product }) => (
  <div className={`group relative overflow-hidden rounded-2xl bg-card shadow-card transition-all hover:shadow-card-hover ${product.featured ? "ring-2 ring-accent" : ""}`}>
    {product.featured && (
      <div className="absolute top-4 left-4 z-10 flex items-center gap-1 rounded-full bg-accent px-3 py-1 font-heading text-xs font-bold text-accent-foreground">
        <Star className="h-3 w-3" /> DESTAQUE
      </div>
    )}
    <div className="relative h-56 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
        width={800}
        height={600}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 to-transparent" />
      <span className="absolute bottom-3 left-3 rounded-full bg-secondary px-3 py-1 font-heading text-xs font-bold text-secondary-foreground">
        {product.category}
      </span>
    </div>
    <div className="p-5">
      <h3 className="mb-2 font-heading text-xl font-bold text-foreground">{product.name}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{product.shortDesc}</p>
      <div className="mb-4 flex items-baseline gap-2">
        <span className="text-sm text-muted-foreground line-through">R$ {product.price.toFixed(2)}</span>
        <span className="font-heading text-2xl font-black text-primary">R$ {product.promoPrice.toFixed(2)}</span>
      </div>
      <div className="flex gap-2">
        <WhatsAppButton
          text="Reservar"
          message={`Olá! Quero reservar: ${product.name} (R$ ${product.promoPrice.toFixed(2)})`}
          className="flex-1 justify-center text-sm py-2.5"
        />
        <LinkClick
          to={`/passeios/${product.slug}`}
          className="flex items-center rounded-lg border-2 border-primary px-4 py-2.5 font-heading text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Detalhes
        </LinkClick>
      </div>
    </div>
  </div>
);

export default ProductCard;
