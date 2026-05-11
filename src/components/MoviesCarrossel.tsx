import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const videos = [
  {
    id: 1,
    title: "Catamarã",
    link: "https://www.youtube.com/embed/gSqJyV5Z0gI",
  },
  {
    id: 2,
    title: "Tripulação",
    link: "https://www.youtube.com/embed/y23ReFUXIdM",
  },
  {
    id: 3,
    title: "Passeio",
    link: "https://www.youtube.com/embed/WHH49htVMVM",
  },
  {
    id: 4,
    title: "Passeio",
    link: "https://www.youtube.com/embed/pUsIX8AUMwE",
  },
];

const MoviesCarrossel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  const getIndex = (offset) => {
    return (current + offset + videos.length) % videos.length;
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <SectionTitle
          badge="Clips"
          title="Venha conhecer o que te espera"
          subtitle=""
        />

        <div className="relative flex items-center justify-center mt-10">
          
          {/* botão esquerda */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-20 rounded-full bg-black/50 p-3 text-white"
          >
            <ChevronLeft />
          </button>

          <div className="flex items-center justify-center gap-4 md:gap-10">

            {/* vídeo esquerdo */}
            <iframe
              className="pointer-events-none hidden md:block w-[180px] aspect-[9/16] rounded-2xl opacity-50 scale-90 transition-all"
              src={videos[getIndex(-1)].link}
              title={videos[getIndex(-1)].title}
              allowFullScreen
            />

            {/* vídeo principal */}
            <iframe
              className="w-[240px] md:w-[320px] aspect-[9/16] rounded-3xl shadow-2xl scale-100 transition-all duration-500"
              src={videos[current].link}
              title={videos[current].title}
              allowFullScreen
            />

            {/* vídeo direito */}
            <iframe
              className="pointer-events-none hidden md:block w-[180px] aspect-[9/16] rounded-2xl opacity-50 scale-90 transition-all"
              src={videos[getIndex(1)].link}
              title={videos[getIndex(1)].title}
              allowFullScreen
            />
          </div>

          {/* botão direita */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-20 rounded-full bg-black/50 p-3 text-white"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MoviesCarrossel;