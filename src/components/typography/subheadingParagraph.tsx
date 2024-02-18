
export function SubheadingParagraph({ children, ...props }: { children: React.ReactNode }) {
    return (
      <p className="mb-8 text-lg font-normal text-tertiary-800 lg:text-xl" {...props}>
          {children}
      </p>
      );
  }
