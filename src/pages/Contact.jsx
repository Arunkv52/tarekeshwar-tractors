import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { allProducts } from "../data/products";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const prefillProduct = searchParams.get("product") || "";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      product: prefillProduct,
      message: "",
    },
  });

  useEffect(() => {
    if (prefillProduct) reset((prev) => ({ ...prev, product: prefillProduct }));
  }, [prefillProduct, reset]);

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 700));
    console.log("Enquiry submitted:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your farm."
        description="Visit our yard, call us, or send an enquiry below — we usually reply within a day."
      />

      <section className="mx-auto max-w-content px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          {/* Info column */}
          <Reveal>
            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-xl font-semibold text-field">
                  Visit our yard
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-stone">
                  No. 15/8B, Sivam Nagar, Anaipirandhan(Village) Chengam Main
                  Road, Tiruvannamalai, India, Tamil Nadu
                </p>
              </div>
              <div>
                <h2 className="font-serif text-xl font-semibold text-field">
                  Call or write
                </h2>

                <p className="mt-2 text-[15px] leading-relaxed text-stone">
                  +91 95855 50725
                </p>
                <p className="mt-0 text-[15px] leading-relaxed text-stone">
                  prasanna.38s@gmail.com
                </p>
              </div>
              <div>
                <h2 className="font-serif text-xl font-semibold text-field">
                  Follow us
                </h2>
                <div className="mt-3 flex gap-3">
                  <ul className="flex justify-start items-center gap-5">
                    <li>
                      <a
                        className=""
                        href="https://www.facebook.com/TarakeshwarTractorsTiruvannamalai/"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/tarakeshwar_tractors/">
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="overflow-hidden rounded-md border border-field/10">
                <iframe
                  title="Tarekeshwara Tractors location"
                  src="https://www.google.com/maps?q=Coimbatore,Tamil%20Nadu&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={100}>
            <div className="rounded-md border border-field/10 bg-white p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-start gap-3 py-8">
                  <h2 className="font-serif text-2xl font-semibold text-field">
                    Thanks — we've got your enquiry.
                  </h2>
                  <p className="text-[15px] leading-relaxed text-stone">
                    Our team will reach out within a day. If it's urgent, call
                    us directly at +91 98765 43210.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm font-medium text-harvest hover:text-harvest-dark"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <h2 className="font-serif text-2xl font-semibold text-field">
                    Send an enquiry
                  </h2>
                  <div className="mt-7 grid gap-6 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-field"
                      >
                        Full name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className={`mt-2 w-full rounded-sm border bg-cream/40 px-4 py-3 text-[15px] outline-none transition-colors focus:border-harvest ${
                          errors.name ? "border-red-400" : "border-field/15"
                        }`}
                        placeholder="Your name"
                        {...register("name", {
                          required: "Please enter your name",
                        })}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-1">
                      <label
                        htmlFor="mobile"
                        className="text-sm font-medium text-field"
                      >
                        Mobile number
                      </label>
                      <input
                        id="mobile"
                        type="tel"
                        className={`mt-2 w-full rounded-sm border bg-cream/40 px-4 py-3 text-[15px] outline-none transition-colors focus:border-harvest ${
                          errors.mobile ? "border-red-400" : "border-field/15"
                        }`}
                        placeholder="10-digit mobile number"
                        {...register("mobile", {
                          required: "Please enter your mobile number",
                          pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: "Enter a valid 10-digit mobile number",
                          },
                        })}
                      />
                      {errors.mobile && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.mobile.message}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-field"
                      >
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`mt-2 w-full rounded-sm border bg-cream/40 px-4 py-3 text-[15px] outline-none transition-colors focus:border-harvest ${
                          errors.email ? "border-red-400" : "border-field/15"
                        }`}
                        placeholder="you@example.com"
                        {...register("email", {
                          required: "Please enter your email",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="product"
                        className="text-sm font-medium text-field"
                      >
                        Enquiry for
                      </label>
                      <select
                        id="product"
                        className="mt-2 w-full rounded-sm border border-field/15 bg-cream/40 px-4 py-3 text-[15px] outline-none transition-colors focus:border-harvest"
                        {...register("product")}
                      >
                        <option value="">General enquiry</option>
                        {allProducts.map((p) => (
                          <option key={p.slug} value={p.name}>
                            {p.name} ({p.category.name})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-field"
                      >
                        Additional info
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="mt-2 w-full resize-none rounded-sm border border-field/15 bg-cream/40 px-4 py-3 text-[15px] outline-none transition-colors focus:border-harvest"
                        placeholder="Tell us about your land, crop, or requirements"
                        {...register("message")}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-8 rounded-sm bg-harvest px-8 py-3.5 font-medium text-white transition-colors hover:bg-harvest-dark disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send enquiry"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
