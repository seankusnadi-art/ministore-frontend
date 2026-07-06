import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="w-full min-h-[600px] flex flex-col items-center justify-center relative px-margin-mobile md:px-margin-desktop overflow-hidden bg-background text-on-background">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -left-12 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-xl w-full text-center relative z-10 py-xl flex flex-col items-center justify-center">
        <div className="inline-block px-md py-xs bg-secondary text-on-secondary font-label-caps text-label-caps mb-md skew-x-[-10deg] shadow-[4px_4px_0px_0px_#131313] border-2 border-on-secondary">
          ERROR 404: MISSING PIECE
        </div>
        <h1 className="font-display-lg text-display-lg text-primary uppercase italic mb-lg tracking-tighter leading-none">
          LOST IN THE <br /> <span className="text-on-background not-italic">ARCHIVES?</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-md justify-center">
          <Link
            className="group relative px-xl py-md bg-primary-container border-2 border-on-background shadow-[6px_6px_0px_0px_#46eaed] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center cursor-pointer"
            to="/"
          >
            <span className="relative z-10 font-display-lg text-headline-md text-on-primary uppercase font-black italic">
              Back to Shop
            </span>
          </Link>
          <Link
            className="px-xl py-md bg-transparent border-2 border-secondary text-secondary font-display-lg text-headline-md uppercase font-black italic hover:bg-secondary/10 transition-colors flex items-center justify-center cursor-pointer"
            to="/"
          >
            New Arrivals
          </Link>
        </div>
      </div>

      {/* Featured Section Suggestion (Bento Grid) */}
      <section className="w-full max-w-6xl mt-xl mb-xl">
        <h2 className="font-display-lg text-headline-lg text-on-background uppercase italic mb-lg border-l-8 border-primary pl-md">
          While You're Here...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter h-auto md:h-[400px]">
          {/* Bento Item 1: Large Featured */}
          <div className="md:col-span-2 relative brutalist-card bg-surface-container border-2 border-outline-variant overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7Z2RFFGseRVYRQS2hOndWa8XsmXtvg-6rlYxnA5Y5m7q53Sm8SI_-3HrihAkSYSVEVPdUR0f_Ey0MeXd4QUmnB1ja3H_Z4rECAu8gL64lPco_kI686jjyRRa26uBMmYvqo4WSYgo4W7cn1NqU0mlLrfegCBxeSjggg7GEzorU6q3MngGochNyHnxXwDbUQztqnMjOOhf8Az_zy9mCi6iEgFOu3b2PyK2Np3FmIFdNE4ulTG5ncyQ')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            <div className="absolute bottom-sm left-sm p-md">
              <span className="bg-primary text-on-primary font-label-caps text-label-caps px-sm py-1 mb-xs inline-block">
                MUST HAVE
              </span>
              <h3 className="font-display-lg text-headline-md text-on-background uppercase italic">
                Vintage Grails
              </h3>
            </div>
          </div>
          {/* Bento Item 2: Small Square */}
          <div className="md:col-span-1 relative brutalist-card bg-secondary border-2 border-outline-variant flex flex-col justify-end p-md group overflow-hidden min-h-[200px] md:min-h-0">
            <div className="absolute top-sm right-sm material-symbols-outlined text-on-secondary text-headline-lg">
              eco
            </div>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply transition-transform duration-500 group-hover:rotate-6 group-hover:scale-125"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBm3BtRcdakj9F4O7EcUxIGFS8ouXpwP7_ZdyfukaBT7Kcc2WbKdEhSx9Em5oHckj0OZL_lX-7Bnz9slwvKYp0s7P-8cJBKuWUdVBz8uOk-Fewjcymaun4WQixVf9dFrX8Wbx53HDrELz1_lKUJZyyFUCPmnRgZWa_6nwOy7t8_DO8AxPHaPCo2QFtRDzO5XG_EttgXzM1FimYnDGsgFPym_D8hZfqMkSfFyK_gfRSFA77XV-2jQamE')",
              }}
            ></div>
            <h3 className="font-display-lg text-headline-md text-on-secondary uppercase italic relative z-10 leading-tight">
              Eco Focus
            </h3>
          </div>
          {/* Bento Item 3: Tall Vertical */}
          <div className="md:col-span-1 relative brutalist-card bg-surface-container border-2 border-outline-variant overflow-hidden group min-h-[200px] md:min-h-0">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAq7QB7A67eBlMaIlga8lGkuX7vAdTCywPM5GlKq280jcLUTWP55IMT1cpm__GYMTVph_tnakJsd477x3vO2la7jdN2-9T51-2NTVK0mHOEKPxBflCeM_DyzE47iUim5_7_XlOIIYsUtzn3zScrmZZl0B05kpj35xbabl10taX7pTepumf9ck4mpSXkS5Hk8bKtYTfP5hMVlE1y3Vmqolhj3rcE3Goz8etHn1lS2T5ulYJccgsRNSiu')",
              }}
            ></div>
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            <div className="absolute bottom-sm left-sm p-md w-full">
              <h3 className="font-display-lg text-headline-md text-on-background uppercase italic drop-shadow-md">
                Accessories
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
