import parrachos01 from "@/assets/parrachos/f_aerea01.jpg";
import parrachos02 from "@/assets/parrachos/f_aerea02.jpg";
import parrachos03 from "@/assets/parrachos/f_aerea03.jpg";

// Cilindro
import cilindro01 from "@/assets/cilindro/cilindro01.jpg";
import cilindro02 from "@/assets/cilindro/cilindro02.jpg";
import cilindro03 from "@/assets/cilindro/cilindro03.jpg";
import cilindro04 from "@/assets/cilindro/cilindro04.jpg";
import cilindro05 from "@/assets/cilindro/cilindro05.jpg";
import cilindro06 from "@/assets/cilindro/cilindro06.jpg";
import cilindro07 from "@/assets/cilindro/cilindro07.jpg";
import cilindro08 from "@/assets/cilindro/cilindro08.jpg";
import cilindro09 from "@/assets/cilindro/cilindro09.jpeg";
import cilindro10 from "@/assets/cilindro/cilindro10.jpeg";

// Snorkel
import snorkel01 from "@/assets/snorkel/snorkel01.jpg"
import snorkel02 from "@/assets/snorkel/snorkel02.jpg"
import snorkel03 from "@/assets/snorkel/snorkel03.jpg"
import snorkel04 from "@/assets/snorkel/snorkel04.jpeg"
import snorkel05 from "@/assets/snorkel/snorkel05.jpeg"

// Quadriciclo
import quad01 from "@/assets/quadriciclo/quad01.jpeg"
import quad02 from "@/assets/quadriciclo/quad02.jpeg"
import quad03 from "@/assets/quadriciclo/quad03.jpeg"
import quad04 from "@/assets/quadriciclo/quad04.jpeg"
import quad05 from "@/assets/quadriciclo/quad05.jpeg"
import quad06 from "@/assets/quadriciclo/quad06.jpeg"
import quad07 from "@/assets/quadriciclo/quad07.jpeg"
import quad08 from "@/assets/quadriciclo/quad08.jpeg"

// Catamara
import catamara01 from "@/assets/catamara/catamara01.jpg"
import catamara02 from "@/assets/catamara/catamara02.jpg"
import catamara03 from "@/assets/catamara/catamara03.jpeg"
import catamara04 from "@/assets/catamara/catamara04.jpeg"
import catamara05 from "@/assets/catamara/catamara05.jpeg"
import catamara06 from "@/assets/catamara/catamara06.jpeg"

// Bar a Bordo
import bar01 from "@/assets/drink/drink.jpeg"
import menu from "@/assets/drink/menu.jpeg"

export interface Images {
  src: string;
  label: string;
};
export interface Product {
  slug: string;
  name: string;
  category: string;
  price?: number;
  promoPrice?: number;
  image: string;
  shortDesc: string;
  description: string[];
  benefits: string[];
  rules?: string[];
  featured?: boolean;
  images: Array<Images>;
};

export const products: Product[] = [
  {
    slug: "mergulho-cilindro",
    name: "Mergulho com Instrutor",
    category: "Aventure-se",
    price: 180,
    promoPrice: 160,
    image: cilindro09,
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
    images: [
      { src: cilindro01, label: "" },
      { src: cilindro02, label: "" },
      { src: cilindro03, label: "" },
      { src: cilindro04, label: "" },
      { src: cilindro05, label: "" },
      { src: cilindro07, label: "" },
      { src: cilindro08, label: "" },
    ]
  },
  {
    slug: "mergulho-livre",
    name: "Mergulho Livre + Catamarã",
    category: "Popular",
    price: 120,
    promoPrice: 90,
    image: snorkel01,
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
    images: [
      { src: snorkel01, label: "" },
      { src: snorkel02, label: "" },
      { src: snorkel03, label: "" },
      { src: snorkel04, label: "" },
      { src: snorkel05, label: "" },
    ]
  },
  {
    slug: "quadriciclo",
    name: "Passeio de Quadriciclo",
    category: "Aventura",
    price: 170,
    promoPrice: 120,
    image: quad01,
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
    rules: [
      "Condutor deve ser maior de idade",
      "Não pilotar sob efeito de álcool ou drogas",
    ],
    images: [
      { src: quad01, label: "" },
      { src: quad02, label: "" },
      { src: quad03, label: "" },
      { src: quad04, label: "" },
      { src: quad05, label: "" },
      { src: quad06, label: "" },
      { src: quad07, label: "" },
      { src: quad08, label: "" }
    ]
  },
  {
    slug: "exclusivo",
    name: "Passeio Exclusivo",
    category: "Catamarã Exclusivo",
    image: catamara04,
    shortDesc: "Passeio privativo de catamarã com conforto e exclusividade nos parrachos.",
    description: [
      "Passeio privativo de catamarã até os parrachos de Maracajaú",
      "Experiência exclusiva com mais conforto e liberdade",
      "Perfeito para casais, famílias ou grupos fechados",
    ],
    benefits: [
      "Embarcação exclusiva",
      "Tripulação dedicada",
      "Horários flexíveis",
      "Experiência personalizada",
    ],
    featured: true,
    images: [
      { src: catamara01, label: "" },
      { src: catamara02, label: "" },
      { src: catamara03, label: "" },
      { src: catamara04, label: "" },
      { src: catamara05, label: "" },
      { src: catamara06, label: "" },
    ]
  },
  {
    slug: "bar-a-bordo",
    name: "Bar a Bordo",
    category: "Bar Exclusivo",
    image: menu,
    shortDesc: "Serviço de bar exclusivo a bordo do catamarã para uma experiência ainda mais especial nos parrachos.",
    description: [
      "Serviço de bar exclusivo a bordo do catamarã",
      "Bebidas selecionadas para complementar sua experiência nos parrachos",
      "Perfeito para casais, famílias ou grupos fechados que buscam um toque especial",
    ],
    benefits: [
      "Bebidas selecionadas",
      "Serviço personalizado",
      "Experiência exclusiva",
    ],
    images: [
      { src: bar01, label: "" },
      { src: menu, label: "" },
    ]
  }
];

export const images: Images[] = [
  { src: bar01, label: "Bar a Bordo" },
  { src: menu, label: "Menu de Bebidas" },
  { src: parrachos01, label: "Parrachos de Maracajaú" },
  { src: cilindro01, label: "Mergulho com instrutor" },
  { src: quad01, label: "Aventura de quadriciclo" },
];