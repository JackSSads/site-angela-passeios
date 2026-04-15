import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5584996078928";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de reservar um passeio nos Parrachos de Maracajaú!`;

interface WhatsAppButtonProps {
  text?: string;
  message?: string;
  className?: string;
  variant?: "primary" | "floating";
}

const WhatsAppButton = ({ text = "Reservar pelo WhatsApp", message, className = "", variant = "primary" }: WhatsAppButtonProps) => {
  const url = message
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL;

  if (variant === "floating") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-heading font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105 hover:bg-green-600"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden sm:inline">{text}</span>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-heading font-bold text-primary-foreground shadow-ocean transition-all hover:scale-105 hover:bg-green-600 ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {text}
    </a>
  );
};

export default WhatsAppButton;
