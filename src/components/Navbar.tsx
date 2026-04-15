import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { LinkClick } from "@/hooks/link";

import Logo from "../assets/logo.png";

const navLinkClicks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/passeios", label: "Passeios" },
  { to: "/servicos", label: "Serviços" },
  { to: "/faq", label: "FAQ" },
  { to: "/contato", label: "Contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 h-[70px] bg-ocean-deep/95 backdrop-blur-md flex items-center justify-center border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <LinkClick to="/" className="flex items-center gap-2 font-heading text-xl font-bold text-primary-foreground">
          <img src={Logo} alt="Logo" className="h-8" />
          <span>Angelina <span className="text-accent">Mergulho</span></span>
        </LinkClick>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinkClicks.map((l) => (
            <LinkClick
              key={l.to}
              to={l.to}
              className={`font-heading text-sm font-semibold transition-colors hover:text-accent ${
                location.pathname === l.to ? "text-accent" : "text-primary-foreground/80"
              }`}
            >
              {l.label}
            </LinkClick>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="text-primary-foreground md:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-primary-foreground/10 bg-ocean-deep/95 px-4 pb-4 md:hidden">
          {navLinkClicks.map((l) => (
            <LinkClick
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-3 font-heading text-sm font-semibold transition-colors hover:text-accent ${
                location.pathname === l.to ? "text-accent" : "text-primary-foreground/80"
              }`}
            >
              {l.label}
            </LinkClick>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
