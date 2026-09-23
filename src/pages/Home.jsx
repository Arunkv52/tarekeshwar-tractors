import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import { categories } from "../data/products";
import WebBanner from '../assets/web-banner.png'

const testimonials = [
  {
    quote:
      "Bought my TT 60 Power three seasons ago. It hasn't given me a single day of downtime during harvest, and the service team shows up the same day if I call.",
    name: "Murugan S.",
    role: "Paddy farmer, Erode",
  },
  {
    quote:
      "The rotavator they recommended matched my soil type perfectly. They actually listened to what I needed instead of just pushing the most expensive option.",
    name: "Kavitha R.",
    role: "Farm owner, Tiruppur",
  },
  {
    quote:
      "We rent out our HarvestPro C1 during off-season and it still runs like new. Solid build, and spare parts are always in stock.",
    name: "Backiyaraj M.",
    role: "Contract harvester, Salem",
  },
];

const process = [
  {
    title: "Tell us your land",
    text: "Share your acreage, soil, and crop — we shortlist the right machine for the job, not the biggest one.",
  },
  {
    title: "See it, drive it",
    text: "Visit our yard for a live demo. No pressure, just an honest look at how it handles on your terrain.",
  },
  {
    title: "Take delivery",
    text: "Financing support, paperwork, and delivery to your farm — handled end to end.",
  },
  {
    title: "Stay supported",
    text: "Scheduled servicing and genuine spare parts for as long as you own the machine.",
  },
];

export default function Home() {
  const [heroIn, setHeroIn] = useState(false);
  useEffect(() => setHeroIn(true), []);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-field hero-bg">
        <div className="mx-auto grid max-w-content items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div
            className={`relative transition-all delay-150 duration-1000 ${
              heroIn ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
            }`}
          >
            
            {/* <div className="absolute -bottom-6 -left-6 hidden rounded-md bg-cream px-6 py-5 shadow-xl sm:block">
              <p className="font-serif text-3xl font-semibold text-field">25+</p>
              <p className="text-sm text-stone">years serving local farms</p>
            </div> */}
          </div>
          
          <div className="md:ml-10 ml-2">
            <p
              className={`mb-5 text-sm font-medium text-harvest-light transition-all duration-700 ${
                heroIn ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              Tractors · Implements · Harvesters
            </p>
            <h1
              className={`font-serif text-[2.75rem] font-semibold leading-[1.08] text-white transition-all delay-100 duration-700 lg:text-5xl ${
                heroIn ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              Machines that work
              <br />
              as hard as you do.
            </h1>
            <p
              className={`mt-6 max-w-md text-lg leading-relaxed text-white/70 transition-all delay-200 duration-700 ${
                heroIn ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              Tarakeshwar Tractors brings you dependable tractors,
              implements, and harvesters  backed by honest advice and
              service that shows up when you need it.
            </p>
            <div
              className={`mt-9 flex flex-wrap gap-4 transition-all delay-300 duration-700 ${
                heroIn ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <Link
                to="/products"
                className="rounded-sm bg-harvest px-7 py-3.5 font-medium text-white transition-colors hover:bg-harvest-dark"
              >
                Explore products
              </Link>
              <Link
                to="/contact"
                className="rounded-sm border border-cream/25 px-7 py-3.5 font-medium text-cream transition-colors hover:border-cream/60"
              >
                Talk to us
              </Link>
            </div>
          </div>
          
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-content px-6 py-24 lg:px-10">
        <Reveal>
          <p className="text-sm font-medium text-harvest">What we offer</p>
          <h2 className="mt-3 max-w-lg font-serif text-3xl font-semibold leading-tight text-field lg:text-4xl">
            Everything your farm runs on, in one place
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
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
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-field">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-stone">
                    {cat.tagline}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-harvest transition-colors group-hover:text-harvest-dark">
                    View range
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-field/[0.03] py-24">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Reveal>
            <p className="text-sm font-medium text-harvest">How it works</p>
            <h2 className="mt-3 max-w-lg font-serif text-3xl font-semibold leading-tight text-field lg:text-4xl">
              From first visit to years of service
            </h2>
          </Reveal>

          <div className="relative mt-16 grid gap-10 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-[9px] hidden h-px bg-field/15 md:block" />
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 100} className="relative">
                <div className="mb-5 h-[18px] w-[18px] rounded-full border-2 border-harvest bg-cream" />
                <h3 className="font-serif text-lg font-semibold text-field">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-stone">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="mx-auto max-w-content px-6 py-24 lg:px-10">
        <Reveal>
          <p className="text-sm font-medium text-harvest">Trusted locally</p>
          <h2 className="mt-3 max-w-lg font-serif text-3xl font-semibold leading-tight text-field lg:text-4xl">
            What farmers say about us
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 100}
              className="rounded-md border border-field/10 bg-white p-7"
            >
              <p className="text-[15px] leading-relaxed text-soil">
                "{t.quote}"
              </p>
              <div className="mt-6">
                <p className="font-medium text-field">{t.name}</p>
                <p className="text-sm text-stone">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="mx-auto max-w-content px-6 pb-24 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-8 rounded-lg bg-field px-8 py-14 lg:flex-row lg:items-center lg:px-14">
          <div>
            <h2 className="max-w-md font-serif text-3xl font-semibold leading-tight text-cream lg:text-4xl">
              Ready to find the right machine for your farm?
            </h2>
            <p className="mt-4 max-w-md text-cream/70">
              Visit our yard, call us, or send an enquiry — we'll help you
              choose without the sales pressure.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 rounded-sm bg-harvest px-8 py-4 font-medium text-white transition-colors hover:bg-harvest-dark"
          >
            Contact us
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
