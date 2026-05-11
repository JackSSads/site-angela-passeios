import { NavLink } from "./NavLink";
import { ArrowUp, InstagramIcon } from "lucide-react";
import { Button } from "./ui/button";
import WhatsappButton from "./WhatsAppButton";

export const ToTop = () => {
    return (
        <div className="z-10 fixed bottom-4 right-1 flex justify-end gap-4 pr-10">
            <NavLink
                to="https://www.instagram.com/angelinamergulho/"
                className="
                bg-gradient-to-br flex justify-center items-center
                from-[#feda75] via-[#fa7e1e]
                via-[#d62976] to-[#4f5bd5]
                text-white rounded-full h-10 w-10
                hover:opacity-90 transition hover:scale-110"
                target="_blank"
            >
                <InstagramIcon />
            </NavLink>

            <WhatsappButton variant="floating" />

            <Button
                className="
                rounded-full bg-secondary
                h-10 w-10 flex justify-center
                items-center shadow-md text-white
                cursor-pointer hover:scale-110"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <ArrowUp />
            </Button>
        </div>
    );
};