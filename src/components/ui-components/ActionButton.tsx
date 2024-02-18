
type ActionButtonProps = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    handleClick?: () => void;
};


export function ActionButton({ children, type }: ActionButtonProps) {
    return (
      <button 
        type={type} 
        className="mb-8 px-12 py-4 shadow-md bg-secondary-600 m-1 rounded-lg border border-transparent cursor-pointer text-center text-white text-xl hover:bg-primary-100 hover:text-tertiary-950 hover:border-secondary-600 transition duration-300 ease-in-out">
          {children}
      </button>
      );
  }