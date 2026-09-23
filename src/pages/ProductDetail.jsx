import { Link, useParams, Navigate } from "react-router-dom";
import Reveal from "../components/Reveal";
import { getProduct } from "../data/products";

export default function ProductDetail() {
  const { categorySlug, productSlug } = useParams();
  const product = getProduct(categorySlug, productSlug);

  if (!product) return <Navigate to="/products" replace />;

  return (
    <div>
      <div className="border-b border-field/10 bg-cream">
        <div className="mx-auto max-w-content px-6 pt-8 lg:px-10">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-stone">
            <Link to="/products" className="hover:text-field">
              Products
            </Link>
            <span>/</span>
            <Link to={`/products/${categorySlug}`} className="hover:text-field">
              {product.category.name}
            </Link>
            <span>/</span>
            <span className="text-field">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="mx-auto max-w-content px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-md">
              <img
                src={product.image}
                alt={product.name}
                className="h-[420px] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <span className="rounded-full bg-harvest/10 px-3 py-1 text-xs font-medium text-harvest-dark">
              {product.hp}
            </span>
            <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-field lg:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-[17px] leading-relaxed text-stone">
              {product.summary}
            </p>

            {/* <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-field/10 pt-8">
              {product.specs.map((spec) => (
                <div key={spec.label}>
                  <p className="text-xs font-medium uppercase tracking-wide text-stone/70">
                    {spec.label}
                  </p>
                  <p className="mt-1 font-medium text-field">{spec.value}</p>
                </div>
              ))}
            </div> */}

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to={`/contact?product=${encodeURIComponent(product.name)}`}
                className="rounded-sm bg-harvest px-7 py-3.5 font-medium text-white transition-colors hover:bg-harvest-dark"
              >
                Enquire about this model
              </Link>
              <a
                href={product.download}
                download
                className="rounded-sm border border-field/20 px-7 py-3.5 font-medium text-field transition-colors hover:border-field/40 cursor-pointer"
              >
                Download Brochure
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
