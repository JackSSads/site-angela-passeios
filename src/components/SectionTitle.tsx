interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle = ({ badge, title, subtitle, center = true }: SectionTitleProps) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    {badge && (
      <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 font-heading text-sm font-semibold text-primary">
        {badge}
      </span>
    )}
    <h2 className="mb-3 font-heading text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
    {subtitle && <p className="mx-auto max-w-2xl text-muted-foreground">{subtitle}</p>}
  </div>
);

export default SectionTitle;
