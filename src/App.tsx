import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Passeios from "./pages/Passeios";
import PasseioDetalhe from "./pages/PasseioDetalhe";
import Servicos from "./pages/Servicos";
import FaqPage from "./pages/FaqPage";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/passeios" element={<Passeios />} />
            <Route path="/passeios/:slug" element={<PasseioDetalhe />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton variant="floating" />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
