import mergulhoCilindro from "@/assets/mergulho-cilindro.jpg";
import mergulhoLivre from "@/assets/mergulho-livre.jpg";
import quadriciclo from "@/assets/quadriciclo.jpg";

export interface Product {
  slug: string;
  name: string;
  category: string;
  price: number;
  promoPrice: number;
  image: string;
  shortDesc: string;
  description: string[];
  benefits: string[];
  rules?: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: "mergulho-cilindro",
    name: "Mergulho com Instrutor",
    category: "Destaque",
    price: 180,
    promoPrice: 160,
    image: mergulhoCilindro,
    shortDesc: "Mergulho com cilindro guiado por profissional credenciado nos parrachos.",
    description: [
      "Mergulho com cilindro guiado por profissional credenciado",
      "Experiência profunda e segura nos parrachos de Maracajaú",
      "Ideal para quem quer viver o fundo do mar de perto",
    ],
    benefits: [
      "Equipamento completo incluso",
      "Ideal para iniciantes",
      "Duração: ~30 minutos",
      "Idade mínima: 10 anos",
    ],
    featured: true,
  },
  {
    slug: "mergulho-livre",
    name: "Mergulho Livre + Catamarã",
    category: "Popular",
    price: 120,
    promoPrice: 90,
    image: mergulhoLivre,
    shortDesc: "Passeio completo de catamarã com mergulho livre e snorkel nos parrachos.",
    description: [
      "Passeio completo de catamarã até os parrachos",
      "Mergulho livre com snorkel nas piscinas naturais",
      "1h30 de mergulho e contemplação da vida marinha",
    ],
    benefits: [
      "Passeio completo incluso",
      "Snorkel incluso",
      "Ideal para todas as idades",
      "1h30 de mergulho livre",
    ],
  },
  {
    slug: "quadriciclo",
    name: "Passeio de Quadriciclo",
    category: "Aventura",
    price: 170,
    promoPrice: 120,
    image: quadriciclo,
    shortDesc: "Trilhas e paisagens naturais deslumbrantes em quadriciclo.",
    description: [
      "Trilhas por paisagens naturais incríveis",
      "Percurso com vistas deslumbrantes do litoral",
      "Aventura e adrenalina em meio à natureza",
    ],
    benefits: [
      "Equipamento de segurança incluso",
      "Guia acompanhante",
      "Paisagens únicas",
    ],
    rules: ["Condutor: +18 anos"],
  },
];
