type NavHamburgerButtonProps = {
    mobileMenuToggle: (status: boolean) => void;
    mobileMenuStatus: boolean;
  };
  
// Adjusting the import statement since useState is no longer needed
export const NavHamburgerButton = ({ mobileMenuToggle, mobileMenuStatus } : NavHamburgerButtonProps ) => {
    const genericHamburgerLine = `h-1 w-6 mb-1 rounded-full bg-tertiary-950 transition ease transform duration-300`;
  
    return (
      <button
        className="flex flex-col h-12 w-12 rounded justify-center items-center group"
        onClick={() => mobileMenuToggle(!mobileMenuStatus)}
      >
        <div
          className={`${genericHamburgerLine} ${
            mobileMenuStatus
              ? "rotate-45 translate-y-1 opacity-100 group-hover:bg-secondary-600"
              : "opacity-100 group-hover:bg-secondary-600"
          }`}
          style={{ transformOrigin: 'center' }}
        />
        <div
          className={`${genericHamburgerLine} ${
            mobileMenuStatus ? "opacity-0" : "opacity-100 group-hover:bg-secondary-600"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            mobileMenuStatus
              ? "-rotate-45 -translate-y-3 opacity-100 group-hover:bg-secondary-600"
              : "opacity-100 group-hover:bg-secondary-600"
          }`}
          style={{ transformOrigin: 'center' }}
        />
      </button>
    );
  };
  