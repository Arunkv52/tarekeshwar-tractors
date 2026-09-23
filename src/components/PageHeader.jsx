export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="border-b border-field/10 bg-field">
      <div className="mx-auto max-w-content px-6 py-20 lg:px-10 lg:py-28">
        {eyebrow && (
          <p className="mb-4 text-sm font-medium text-harvest-light">{eyebrow}</p>
        )}
        <h1 className="max-w-2xl font-serif text-4xl font-semibold leading-[1.1] text-cream lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-cream/70">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
