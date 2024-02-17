type SpecialCardProps = {
    title: string;
  };
  
export function SpecialCard({ title }: SpecialCardProps) {
    return (
      <div className="shadow-md bg-secondary-600 m-1 rounded-lg border border-transparent md:row-span-1 cursor-pointer">
        <h2 className='text-center text-white text-xl uppercase py-6'>{title}</h2>
      </div>
    );
  }