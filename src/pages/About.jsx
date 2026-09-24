import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import EmptyImg from "../assets/about/emptyimg.jpg";

const reasons = [
  {
    title: "Straight advice",
    text: "We recommend machines based on your land and budget, not our margins.",
  },
  {
    title: "Service that shows up",
    text: "Our technicians reach most farms within a day, with genuine spare parts on hand.",
  },
  {
    title: "Financing support",
    text: "We help you navigate loans and paperwork so you can focus on farming.",
  },
  {
    title: "14 years in the field",
    text: "Three decades of relationships with local farmers across Tamil Nadu.",
  },
];

export default function About() {
  return (
    <div>
      <PageHeader
        eyebrow="About us"
        title="Built by farmers, for farmers."
        description="Tarakeshwar Tractors has spent 14 years helping local farms find the right equipment and keep it running."
      />

      {/* Who we are / What we do */}
      <section className="mx-auto max-w-content px-6 py-24 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-medium text-harvest">Who we are</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-field">
              A family business rooted in the land we serve
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-stone">
              We started as a small tractor rental outfit in 2012 and grew into
              a full dealership because farmers kept asking us for the same
              honesty we gave them on rentals — now applied to sales,
              implements, and harvesting equipment.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-sm font-medium text-harvest">What we do</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-field">
              Equipment, advice, and support in one place
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-stone">
              We sell tractors, implements, and harvesters suited to local soil
              and crop conditions, and back every sale with scheduled servicing,
              genuine spare parts, and a technician team that knows your
              machine.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-field/[0.03] py-24">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Reveal>
            <p className="text-sm font-medium text-harvest">Why choose us</p>
            <h2 className="mt-3 max-w-lg font-serif text-3xl font-semibold leading-tight text-field lg:text-4xl">
              What farmers count on us for
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 80}
                className="rounded-md border border-field/10 bg-white p-7"
              >
                <h3 className="font-serif text-lg font-semibold text-field">
                  {r.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-stone">
                  {r.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-content px-6 py-24 lg:px-10">
        <Reveal>
          <p className="text-sm font-medium text-harvest">
            Welcome to Tarakeshwar Tractors 
          </p>
          <h2 className="mt-3 max-w-lg font-serif text-3xl font-semibold leading-tight text-field lg:text-4xl">
            Your Trusted Partner in Agriculture
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-1">
          <p>
            Tarakeshwar Tractors  is one of the leading dealers of
            tractors, agricultural implements, and harvesters, dedicated to
            supporting farmers with high-quality farming solutions. With a
            strong network of 8 branches, we ensure that modern agricultural
            machinery and reliable customer support are always within reach.
          </p>
          <p>
            Our strategically located showrooms cover a wide service area,
            ensuring that farmers can access our products and services within a
            convenient distance. With a presence extending across multiple
            regions, we are committed to delivering excellence in agricultural
            mechanization and empowering farming communities.
          </p>
        </div>
      </section>
    </div>
  );
}
