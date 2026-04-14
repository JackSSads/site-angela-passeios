import catamaraImg from "@/assets/catamara.jpg";
import parrachosImg from "@/assets/parrachos.jpg";
import mergulhoImg from "@/assets/mergulho-cilindro.jpg";
import quadricicloImg from "@/assets/quadriciclo.jpg";
import SectionTitle from "./SectionTitle";

const images = [
  { src: catamaraImg, label: "Catamarã homologado" },
  { src: parrachosImg, label: "Parrachos de Maracajaú" },
  { src: mergulhoImg, label: "Mergulho com instrutor" },
  { src: quadricicloImg, label: "Aventura de quadriciclo" },
];

const Gallery = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <SectionTitle badge="Galeria" title="Momentos Inesquecíveis" subtitle="Confira um pouco do que te espera em Maracajaú." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((img) => (
          <div key={img.label} className="group relative overflow-hidden rounded-2xl">
            <img
              src={img.src}
              alt={img.label}
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="absolute bottom-4 left-4 font-heading text-sm font-bold text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
              {img.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
