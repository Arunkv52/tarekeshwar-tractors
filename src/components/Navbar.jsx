import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Products",
    to: "/products",
    children: [
      { label: "Tractors", to: "/products/tractors" },
      { label: "Implements", to: "/products/implements" },
      { label: "Harvester", to: "/products/harvester" },
    ],
  },
  { label: "Gallery", to: "/gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream/95 backdrop-blur-sm shadow-sm" : "bg-cream/0"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-field text-cream">
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
          <span className="font-serif text-lg font-semibold tracking-tight text-field">
            Tarakeshwar Tractors
          </span>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `text-[15px] font-medium transition-colors ${
                      isActive ? "text-field" : "text-stone hover:text-field"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
                <div
                  className={`absolute left-1/2 top-full w-48 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    productsOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-md border border-field/10 bg-white shadow-lg">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-4 py-3 text-sm text-soil transition-colors hover:bg-cream hover:text-field"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-[15px] font-medium transition-colors ${
                    isActive ? "text-field" : "text-stone hover:text-field"
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </div>

        <Link
          to="/contact"
          className="hidden rounded-sm bg-harvest px-5 py-2.5 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-harvest-dark lg:inline-block"
        >
          Get in touch
        </Link>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-[1.5px] w-6 bg-soil transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-soil transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-soil transition-transform duration-300 ${
              open ? "-translate-y-[5.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-[26rem]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 border-t border-field/10 bg-cream px-6 pb-6 pt-4">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                to={link.to}
                className="block py-2.5 text-[15px] font-medium text-soil"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-3 flex flex-col border-l border-field/15 pl-3">
                  {link.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className="py-2 text-sm text-stone"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="mt-3 rounded-sm bg-harvest px-5 py-3 text-center text-[15px] font-medium text-white"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
