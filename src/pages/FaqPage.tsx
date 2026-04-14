import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqData } from "@/data/faqData";
import SectionTitle from "@/components/SectionTitle";

const FaqPage = () => (
  <>
    <section className="bg-gradient-ocean pb-20 pt-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-black text-primary-foreground md:text-5xl">Perguntas Frequentes</h1>
        <p className="mt-3 text-lg text-primary-foreground/80">Tire todas as suas dúvidas</p>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <Accordion type="single" collapsible className="space-y-3">
          {faqData.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border bg-card px-5 shadow-card">
              <AccordionTrigger className="font-heading font-semibold text-foreground hover:text-primary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </>
);

export default FaqPage;
