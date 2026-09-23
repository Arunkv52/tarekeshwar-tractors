import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-field text-cream/80">
      <div className="mx-auto max-w-content px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-harvest text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 17L10 5L14 13L17 8L20 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-serif text-lg font-semibold text-cream">
                Tarakeshwar Tractors
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              We are Authorised Dealer for JOHN DEERE Tractors,Harvester and
              Farm Equipments for Tiruvannamalai District
            </p>
          </div>

          <div>
            <h4 className="font-serif text-base text-cream">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/60">
              <li>
                <Link to="/" className="hover:text-cream">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cream">
                  About
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-cream">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cream">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base text-cream">Products</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/60">
              <li>
                <Link to="/products/tractors" className="hover:text-cream">
                  Tractors
                </Link>
              </li>
              <li>
                <Link to="/products/implements" className="hover:text-cream">
                  Implements
                </Link>
              </li>
              <li>
                <Link to="/products/harvester" className="hover:text-cream">
                  Harvester
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base text-cream">Visit us</h4>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              No. 15/8B, Sivam Nagar,<br /> Anaipirandhan(Village) Chengam Main Road, Tiruvannamalai - 600 603, <br /> Tamil Nadu, India.
            </p>
            <p className="mt-3 text-sm text-cream/60">+91 95855 50725</p>
            <p className="text-sm text-cream/60">prasanna.38s@gmail.com</p>
            <div className="mt-5 flex gap-3">
              <ul className="flex justify-start items-center gap-2">
                <li>
                  <a
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-xs text-cream/70 transition-colors hover:border-harvest hover:text-harvest"
                    href="https://www.facebook.com/TarakeshwarTractorsTiruvannamalai/"
                  >
                    F
                  </a>
                </li>
                <li>
                  <a
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-xs text-cream/70 transition-colors hover:border-harvest hover:text-harvest"
                    href="https://www.instagram.com/tarakeshwar_tractors/"
                  >
                    I
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Tarekeshwara Tractors. Developed by Prism Adverto Pvt Ltd
          </p>
          <p>Serving farmers across Tamil Nadu since 2012.</p>
        </div>
      </div>
    </footer>
  );
}
