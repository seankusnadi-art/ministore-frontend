export default function Footer() {
  return (
    <footer className="w-full mt-xl border-t-2 border-outline-variant bg-surface-container-lowest text-secondary font-label-caps text-label-caps font-body-md text-body-md flex flex-col md:flex-row justify-between items-center px-margin-desktop py-lg gap-gutter">
      <div className="flex flex-col gap-sm items-center md:items-start">
        <h1 className="font-display-lg text-headline-md font-black text-on-surface uppercase">
          ThriftVibe
        </h1>
        <p className="max-w-xs text-on-surface-variant text-center md:text-left font-body-md text-body-md uppercase tracking-normal">
          © 2024 THRIFTVIBE. ALL RIGHTS RESERVED. CIRCULAR FASHION FOR THE REBELS.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-lg">
        <a
          className="text-on-surface-variant hover:text-secondary hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary"
          href="#"
        >
          Sustainability
        </a>
        <a
          className="text-on-surface-variant hover:text-secondary hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary"
          href="#"
        >
          Shipping
        </a>
        <a
          className="text-on-surface-variant hover:text-secondary hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary"
          href="#"
        >
          Returns
        </a>
        <a
          className="text-on-surface-variant hover:text-secondary hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary"
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className="text-on-surface-variant hover:text-secondary hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary"
          href="#"
        >
          Terms of Service
        </a>
      </div>
      <div className="flex gap-md">
        <a className="hover:scale-125 transition-transform" href="#">
          <span className="material-symbols-outlined">social_distance</span>
        </a>
        <a className="hover:scale-125 transition-transform" href="#">
          <span className="material-symbols-outlined">alternate_email</span>
        </a>
        <a className="hover:scale-125 transition-transform" href="#">
          <span className="material-symbols-outlined">groups</span>
        </a>
      </div>
    </footer>
  );
}
