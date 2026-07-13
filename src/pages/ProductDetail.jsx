import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import Button from "../components/ui/Button";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  // Scroll to top when product ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Size Selection State
  const [selectedSize, setSelectedSize] = useState("");

  // Sync size selection with product changes
  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes ? product.sizes[0] : product.size);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-lg text-center">
        <h2 className="font-display-lg text-headline-lg mb-md text-primary uppercase">
          Product Not Found
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
          The vintage piece you are looking for has already been flipped or doesn't exist.
        </p>
        <Button
          as={Link}
          to="/"
          variant="secondary"
          size="md"
        >
          Back to Drops
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    alert(`${product.name} (${selectedSize}) added to cart!`);
  };

  const handleAddToWishlist = () => {
    alert(`${product.name} saved to wishlist!`);
  };

  return (
    <main className="min-h-screen">
      <section className="flex flex-col md:flex-row w-full min-h-[calc(100vh-80px)]">
        {/* Left Side: Product Image */}
        <div className="w-full md:w-1/2 relative bg-surface-container-low flex items-center justify-center p-md md:p-0 border-b-2 md:border-b-0 md:border-r-2 border-outline-variant">
          <div className="w-full h-full relative group overflow-hidden flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 max-h-[700px] md:max-h-none"
            />
            {/* Overlay Decor */}
            <div className="absolute top-md left-md">
              <span className="bg-secondary text-on-secondary px-sm py-xs font-label-caps text-label-caps border-2 border-black hard-shadow">
                VINTAGE FIND
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Product Information */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-margin-mobile md:px-xl py-lg bg-background">
          <div className="max-w-2xl">
            {product.sustainable && (
              <div className="flex items-center gap-xs mb-sm">
                <span
                  className="bg-tertiary text-on-tertiary px-base py-base rounded-lg material-symbols-outlined text-[18px]"
                  data-icon="eco"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  eco
                </span>
                <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest">
                  Sustainable Choice
                </span>
              </div>
            )}
            <h1 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface uppercase italic mb-base leading-tight">
              {product.name}
            </h1>
            <div className="flex items-baseline gap-md mb-lg">
              <span className="font-display-lg text-headline-lg text-primary">
                {product.formattedPrice}
              </span>
              {product.originalPrice && (
                <span className="font-body-md text-on-surface-variant line-through">
                  Rp {product.originalPrice.toLocaleString("id-ID")}
                </span>
              )}
            </div>
            <div className="mb-lg">
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div className="mb-xl">
              <h3 className="font-label-caps text-label-caps text-on-surface mb-sm uppercase tracking-widest">
                Select Size
              </h3>
              <div className="flex gap-md">
                {product.sizes ? (
                  product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`border-2 border-outline-variant px-lg py-sm font-label-caps text-label-caps uppercase transition-all hover:border-primary cursor-pointer ${
                        selectedSize === size ? "active-size" : ""
                      }`}
                    >
                      {size}
                    </button>
                  ))
                ) : (
                  <button className="border-2 border-outline-variant px-lg py-sm font-label-caps text-label-caps uppercase transition-all active-size cursor-default">
                    {product.size}
                  </button>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-md">
              <Button
                onClick={handleAddToCart}
                variant="primary"
                size="md"
                className="w-full py-md hard-shadow-primary hover:translate-x-1 hover:translate-y-1 hover:shadow-none bg-primary-container text-on-primary-container italic"
              >
                Add to Cart
              </Button>
              <Button
                onClick={handleAddToWishlist}
                variant="outline"
                size="sm"
                className="w-full py-md flex items-center justify-center gap-sm normal-case font-label-caps text-label-caps"
              >
                <span className="material-symbols-outlined" data-icon="favorite">
                  favorite
                </span>
                Save to Wishlist
              </Button>
            </div>

            {/* Extra Info */}
            <div className="mt-xl grid grid-cols-2 gap-lg border-t-2 border-outline-variant pt-lg">
              <div>
                <h4 className="font-label-caps text-label-caps text-primary mb-xs">CONDITION</h4>
                <p className="font-body-md text-on-surface">{product.condition}</p>
              </div>
              <div>
                <h4 className="font-label-caps text-label-caps text-primary mb-xs">MATERIAL</h4>
                <p className="font-body-md text-on-surface">{product.material}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section: Styling Suggestions */}
      <section className="px-margin-desktop py-xl border-t-2 border-outline-variant">
        <h2 className="font-display-lg text-headline-lg uppercase italic mb-lg">
          Complete the Vibe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter h-auto md:h-[500px]">
          <div className="md:col-span-2 md:row-span-2 border-2 border-outline-variant relative group overflow-hidden min-h-[300px] md:min-h-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4LMYl--Xf0zv8fcGTjEKrzsK0cIm21F7YBbrFNSVT5KbBywrF87TQbXVHKDqYtj9emgqVPEcMCrnMncis4YxuFJcI3wL9D1dH1RBcP20vcgKKqB5CRCo1RsHEMyC7B3jKka_q0lcPu48ojukf3-5n7b6Qy8Vu0DvTanpkj5-zYl2zdlkKgEjSlWlnNE0SB31WE2PswGql2mPF44-Gv9zkqbm5KjAXJbWjPGnlrHWy2ytwLIqmDAoPD62qh7D3lFdES-toBvnX5IY"
              alt="Style Look"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 p-md bg-background/80 backdrop-blur-md w-full border-t-2 border-outline-variant translate-y-full group-hover:translate-y-0 transition-transform">
              <span className="font-label-caps text-label-caps text-secondary">
                LOOK #042: INDUSTRIAL GRUNGE
              </span>
            </div>
          </div>
          <div className="border-2 border-outline-variant relative group overflow-hidden min-h-[200px] md:min-h-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw7oe8_pEJpoSrvf2ObGTXx75bVOcoh6bw70oxcGWdR8FZjeat2YHdxyc6PP8_c7qvxyQuNM9hkdRnueA-MfszSxlD3WUJDMVaCqE9sZvDi0az2GuiQyF1b1gPuylc7LaYBi5E_z5HW6G2_5WJ9wvHeAv23-Hw1CIVlnI-tkK0p3dJIu0d9ub4hDatafIDfewc2KAWwyZUa2XWhRpaQJPXINQIHi7V1NbUVb6b6z8OwXD-jWR_n08Jz1l3uodbFZz8UeKehdYskpE"
              alt="Matching Denim"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="border-2 border-outline-variant relative group overflow-hidden min-h-[200px] md:min-h-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtrKr3gX-qY2b_vxG9ufBtKWbXH-ZixoeHjJwIiOXNswWnFR7yKikiQWtw3IApgChs2tDAuN-PVV_wsM8vRNKi_NX9NkMB8LP8kOgYvud1EsyoWIyIsZFFEvFPw4hBqj7Se-reqDgyyPiuu_Xs94-UhxvVxNxvjV9yGRg6BVIxCGWq5yPU0Stkex1lUhRHxQgp4YUQglNwGdHI-3j4TKDhvouw9AcG_Wd9zJ8rAUQb86qDvUdiXlTGOjQPZvlByDcym-KfTedAFtg"
              alt="Boots"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="md:col-span-2 border-2 border-outline-variant flex items-center justify-center p-lg bg-surface-container-low text-center min-h-[150px] md:min-h-0">
            <div>
              <h3 className="font-display-lg text-headline-md uppercase italic mb-base">
                Circular Fashion Only.
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Every piece is hand-picked, washed, and ready for a second life. No fast-fashion
                ghosts allowed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
