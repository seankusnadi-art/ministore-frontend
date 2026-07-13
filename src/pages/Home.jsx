import { Link } from "react-router-dom";
import { products } from "../data/products";
import Button from "../components/ui/Button";
import { formatPrice } from "../utils/format";
import { scrollToElement } from "../helpers/dom";
import { addToCart } from "../helpers/cart";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center px-margin-desktop overflow-hidden border-b-2 border-outline-variant">
        {/* Background Decoration */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="grid grid-cols-4 grid-rows-4 h-full w-full">
            <div className="border border-outline-variant"></div>
            <div className="border border-outline-variant bg-tertiary"></div>
            <div className="border border-outline-variant"></div>
            <div className="border border-outline-variant"></div>
            <div className="border border-outline-variant bg-secondary"></div>
            <div className="border border-outline-variant"></div>
            <div className="border border-outline-variant bg-primary"></div>
            <div className="border border-outline-variant"></div>
          </div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <span className="font-label-caps text-label-caps bg-secondary text-on-secondary-container px-sm py-base inline-block mb-md border-2 border-black">
            GEN-Z APPROVED
          </span>
          <h2 className="font-display-lg text-display-lg mb-lg">
            Good Vibes, Great Finds: <br />
            <span className="text-primary italic">Ur Style, </span>
            <span className="text-stroke font-black">Ur Story.</span>
          </h2>
          <div className="flex flex-wrap gap-md">
            <Button
              onClick={() => scrollToElement("latest-collection")}
              variant="primary"
              size="md"
            >
              Shop Now
            </Button>
            <Button
              as={Link}
              to="/product/oversized-plaid-flannel"
              variant="outline"
              size="md"
              className="flex items-center justify-center"
            >
              Explore Vintage
            </Button>
          </div>
        </div>
        {/* Sticker Style Hero Image */}
        <div className="absolute right-margin-desktop top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="relative w-[450px] h-[600px] border-2 border-outline brutalist-card-shadow rotate-3 bg-surface-container-high group hover:rotate-0 transition-transform duration-500 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYuE5Dwqe3qqFwetP8MNp8P4oWo4RnSqNPGPTaXcVxFHATW-cOdXykIMY1MVWtCkcopCipOLsVD3uP5vTYfh_j5TlrFxIFGlPpa35zzDhq9Yx4djrkaAYiG360wp0ohAmptuSrPdcEXi2Gtm1vVvRdEEK0Ox0ulII4PVBm_jWLgcxeS4CSwFicC0YNe9dQ87b4HNJQ0PXW6tZpRYv-HeHQ7U40ptPisbbbjWiegJixZyRhx7j4ZIR0mZVws2m4qQYeIdS4ifn7O6o"
              alt="Weekly drop curated streetwear model"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-primary-container border-t-2 border-black p-sm">
              <p className="font-label-caps text-label-caps text-on-primary-container">
                WEEKLY DROP #042 // CURATED STREETWEAR
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Koleksi Terbaru Section */}
      <section id="latest-collection" className="py-xl px-margin-desktop scroll-mt-24">
        <div className="flex justify-between items-end mb-lg border-b-4 border-primary pb-sm">
          <div>
            <span className="font-label-caps text-label-caps text-secondary mb-xs block">
              HOT OFF THE RACK
            </span>
            <h3 className="font-display-lg text-headline-lg uppercase italic">
              Koleksi Terbaru
            </h3>
          </div>
          <Button
            onClick={() => scrollToElement("latest-collection")}
            variant="ghost"
            size="sm"
          >
            VIEW ALL DROPS
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group flex flex-col border-2 border-outline-variant hover:border-primary transition-colors brutalist-card-shadow hover:-translate-y-1 duration-200"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={product.image}
                  alt={product.name}
                />
                {product.badge && (
                  <div
                    className={`absolute top-sm left-sm ${product.badgeColor} font-label-caps text-[10px] px-xs py-[2px] border border-black uppercase font-bold`}
                  >
                    {product.badge}
                  </div>
                )}
                <div className="absolute bottom-sm right-sm bg-primary-container text-on-primary-container font-headline-md text-headline-md px-sm py-xs border-2 border-black rotate-[-5deg]">
                  {formatPrice(product.price)}
                </div>
              </div>
              <div className="p-md bg-surface-container flex flex-col justify-between flex-grow">
                <h4 className="font-headline-md text-headline-md mb-sm uppercase">
                  {product.name}
                </h4>
                <div className="flex justify-between items-center">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">
                    SIZE: {product.size}
                  </span>
                  <button
                    className="bg-secondary p-xs rounded-full border border-black hover:bg-on-secondary hover:text-secondary transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault(); // Stop navigation
                      addToCart(product);
                    }}
                  >
                    <span className="material-symbols-outlined" data-icon="add_shopping_cart">
                      add_shopping_cart
                    </span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter / Bento Banner */}
      <section className="px-margin-desktop py-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="md:col-span-2 bg-surface-container-high border-2 border-outline-variant p-lg brutalist-card-shadow flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 border-4 border-primary opacity-20 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
            <h3 className="font-display-lg text-headline-lg uppercase mb-md relative z-10">
              Don't Miss The Next Drop.
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-md relative z-10">
              Join 50k+ rebels getting early access to exclusive thrift flips and streetwear grails.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed to the drop notification!");
              }}
              className="flex flex-col sm:flex-row gap-base relative z-10"
            >
              <input
                className="flex-grow bg-surface-container border-2 border-outline-variant px-sm py-md focus:ring-primary focus:border-primary text-on-surface focus:outline-none"
                placeholder="Your Email Address"
                type="email"
                required
              />
              <Button
                type="submit"
                variant="secondary"
                size="md"
                className="py-md"
              >
                JOIN THE VIBE
              </Button>
            </form>
          </div>
          <div className="bg-tertiary p-lg border-2 border-black brutalist-card-shadow flex flex-col items-center justify-center text-center">
            <span
              className="material-symbols-outlined text-display-lg text-on-tertiary mb-md"
              data-icon="recycling"
              style={{ fontSize: "64px" }}
            >
              recycling
            </span>
            <h4 className="font-display-lg text-headline-md text-on-tertiary uppercase mb-sm">
              Circular Fashion
            </h4>
            <p className="font-body-md text-on-tertiary">
              Every piece saved from a landfill is a win for the planet. Shop responsibly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
