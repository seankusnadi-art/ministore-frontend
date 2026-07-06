import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="w-full top-0 sticky border-b-2 border-outline-variant bg-background z-50 shadow-[4px_4px_0px_0px_#f6b4d1] flex justify-between items-center px-margin-desktop py-md">
      <div className="flex items-center gap-lg">
        <Link to="/">
          <h1 className="font-display-lg text-headline-lg font-black text-primary uppercase italic tracking-tighter cursor-pointer hover:opacity-85 transition-opacity">
            ThriftVibe
          </h1>
        </Link>
        <div className="hidden md:flex gap-md">
          <Link
            to="/"
            className="font-body-lg text-body-lg text-primary font-bold border-b-2 border-primary pb-1 hover:scale-105 transition-transform duration-200"
          >
            New Arrivals
          </Link>
          <a
            className="font-body-lg text-body-lg text-on-surface-variant font-medium hover:text-primary transition-colors hover:scale-105 transition-transform duration-200"
            href="#"
          >
            Vintage
          </a>
          <a
            className="font-body-lg text-body-lg text-on-surface-variant font-medium hover:text-primary transition-colors hover:scale-105 transition-transform duration-200"
            href="#"
          >
            Streetwear
          </a>
          <a
            className="font-body-lg text-body-lg text-on-surface-variant font-medium hover:text-primary transition-colors hover:scale-105 transition-transform duration-200"
            href="#"
          >
            Sale
          </a>
        </div>
      </div>
      <div className="flex items-center gap-md">
        <div className="relative hidden lg:block">
          <input
            className="bg-surface-container border-2 border-outline-variant px-sm py-xs w-64 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md text-body-md text-on-surface"
            placeholder="Search..."
            type="text"
          />
        </div>
        <div className="flex gap-sm">
          <button className="hover:scale-105 transition-transform duration-200 active:translate-x-[2px] active:translate-y-[2px]">
            <span className="material-symbols-outlined text-primary text-headline-md" data-icon="person">
              person
            </span>
          </button>
          <button className="hover:scale-105 transition-transform duration-200 active:translate-x-[2px] active:translate-y-[2px]">
            <span className="material-symbols-outlined text-primary text-headline-md" data-icon="shopping_cart">
              shopping_cart
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
