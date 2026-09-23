import { Link, useParams, Navigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { getCategory, categories } from "../data/products";

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const category = getCategory(categorySlug);

  if (!category) return <Navigate to="/products" replace />;

  return (
    <div>
      <PageHeader
        eyebrow="Products"
        title={category.name}
        description={category.description}
      />

      {/* Category switcher */}
      <div className="border-b border-field/10 bg-cream">
        <div className="mx-auto flex max-w-content gap-8 overflow-x-auto px-6 lg:px-10">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={`/products/${c.slug}`}
              className={`whitespace-nowrap border-b-2 py-5 text-sm font-medium transition-colors ${
                c.slug === category.slug
                  ? "border-harvest text-field"
                  : "border-transparent text-stone hover:text-field"
              }`}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-content px-6 py-20 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {category.products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 80}>
              <Link
                to={`/products/${category.slug}/${product.slug}`}
                className="group block h-full overflow-hidden rounded-md border border-field/10 bg-white transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-lg font-semibold text-field">
                      {product.name}
                    </h3>
                    <span className="shrink-0 rounded-full bg-harvest/10 px-2.5 py-1 text-xs font-medium text-harvest-dark">
                      {product.hp}
                    </span>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-stone">
                    {product.summary}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-harvest transition-colors group-hover:text-harvest-dark">
                    View details
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
