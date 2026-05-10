import { Ship, Users } from "lucide-react";
import SectionTitle from "./SectionTitle";

const details = [
    {
        icon: Ship,
        title: "Catamarã",
        desc: "",
        link: "https://www.youtube.com/embed/gSqJyV5Z0gI",
        className: "col-span-1"
    },
    {
        icon: Users,
        title: "Tripulação",
        desc: "",
        link: "https://www.youtube.com/embed/y23ReFUXIdM",
        className: "col-span-1"
    },
];

const MoviesCard = () => (
    <section className="py-20">
        <div className="container px-4 mx-auto">
            <SectionTitle
                badge="Clips"
                title="Venha conhecer o que te espera"
                subtitle=""
            />

            <div className="grid gap-6 md:grid-cols-2">
                {details.map((d) => (
                    <div
                        key={d.title}
                        className="flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-card"
                    >
                        <div className="flex items-center justify-center gap-3">
                            <d.icon className="h-6 w-6 text-primary" />

                            <h4 className="font-heading font-bold text-foreground">
                                {d.title}
                            </h4>
                        </div>

                        <div className="w-full overflow-hidden rounded-xl">
                            <iframe
                                className="w-full aspect-[9/16]"
                                src={d.link}
                                title={d.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        <p className="text-sm text-muted-foreground">
                            {d.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default MoviesCard;