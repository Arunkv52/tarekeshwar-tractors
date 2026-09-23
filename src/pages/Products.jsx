import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { categories } from "../data/products";

export default function Products() {
  return (
    <div>
      <PageHeader
        eyebrow="Products"
        title="Everything your farm runs on."
        description="Browse our range of tractors, implements, and harvesters. Choose a category to see full specifications for each model."
      />

      <section className="mx-auto max-w-content px-6 py-24 lg:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={i * 100}>
              <Link
                to={`/products/${cat.slug}`}
                className="group block h-full overflow-hidden rounded-md border border-field/10 bg-white transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h2 className="font-serif text-2xl font-semibold text-field">
                    {cat.name}
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-stone">
                    {cat.description}
                  </p>
                  <span className="mt-5 inline-block text-sm font-medium text-harvest transition-colors group-hover:text-harvest-dark">
                    View {cat.products.length} models
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
