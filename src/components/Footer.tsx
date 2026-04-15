import { MapPin, Phone, Mail } from "lucide-react";

import { LinkClick } from "@/hooks/link";

import Logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-ocean-deep text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-2 font-heading text-xl font-bold">
            <img src={Logo} alt="Logo" className="h-12" />
            Ângela Parrachos
          </div>
          <p className="text-sm text-primary-foreground/70">
            Experiências inesquecíveis nos Parrachos de Maracajaú. Segurança, natureza e aventura a 45 km de Natal – RN.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-heading text-lg font-bold">Links</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <LinkClick to="/" label="Início" className="w-0 hover:text-accent" />
            <LinkClick to="/passeios" label="Passeios" className="w-0 hover:text-accent" />
            <LinkClick to="/sobre" label="Sobre" className="w-0 hover:text-accent" />
            <LinkClick to="/faq" label="FAQ" className="w-0 hover:text-accent" />
            <LinkClick to="/contato" label="Contato" className="w-0 hover:text-accent" />
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-heading text-lg font-bold">Contato</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <LinkClick className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />Maracajaú, Maxaranguape – RN
            </LinkClick>

            <LinkClick className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />(84) 9 9607-8928
            </LinkClick>

            <LinkClick className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />(84) 9 9931-5718
            </LinkClick>

            <LinkClick className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />contato@Ângelaparrachos.com
            </LinkClick>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Ângela Parrachos de Maracajaú. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
