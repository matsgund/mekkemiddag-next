
export function H1({ children, ...props }: { children: React.ReactNode }) {
  return (
    <h1 className="mb-4 text-4xl font-extrabold leading-loose tracking-tight text-tertiary-950 md:text-5xl lg:text-6" {...props}>
        {children}
    </h1>
    );
}