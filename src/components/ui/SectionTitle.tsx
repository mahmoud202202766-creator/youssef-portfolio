interface SectionTitleProps {
  label: string;
  title: string;
  className?: string;
}

export default function SectionTitle({
  label,
  title,
  className,
}: SectionTitleProps) {
  return (
    <div className={className}>
      <p className="text-xs font-medium uppercase tracking-widest text-primary">
        {label}
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
        {title}
      </h2>
    </div>
  );
}
