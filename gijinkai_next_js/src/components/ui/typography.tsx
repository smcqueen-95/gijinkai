interface TypographyProps {
  className?: string;
  children: React.ReactNode;
}

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1
      className={`scroll-m-20 text-center text-4xl font-semibold tracking-tight text-balance ${className}`}
    >
      {children}
    </h1>
  );
}

export function TypographyP({ children, className }: TypographyProps) {
  return (
    <p className={`leading-5 [&:not(:first-child)]:mt-6 ${className}`}>
      {children}
    </p>
  );
}
