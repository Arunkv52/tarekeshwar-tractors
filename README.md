# Tarekeshwara Tractors — Website

A React + Tailwind CSS website for a tractor, implements, and harvester dealership, with React Router for navigation and React Hook Form for the contact/enquiry form.

## Tech stack
- React 19
- Tailwind CSS 3
- React Router 7
- React Hook Form 7
- Vite (build tool)

## Pages
- `/` — Home (hero, product categories, process, testimonials, CTA)
- `/about` — About (who we are, what we do, why choose us, team)
- `/products` — All product categories
- `/products/:categorySlug` — Tractors / Implements / Harvester listing
- `/products/:categorySlug/:productSlug` — Individual product detail with specs
- `/gallery` — Photo gallery
- `/contact` — Address, embedded Google Map, social links, enquiry form

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder — upload its contents to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc.).

## Editing content
- Product data (tractors, implements, harvesters, specs, images): `src/data/products.js`
- Company info (address, phone, email, social links): `src/components/Footer.jsx` and `src/pages/Contact.jsx`
- Team members and about content: `src/pages/About.jsx`
- Colors and fonts: `tailwind.config.js` and `src/index.css`

## Notes
- Images currently use Unsplash placeholder photos — swap in real product/farm photography in `src/data/products.js`, `src/pages/Home.jsx`, `src/pages/About.jsx`, and `src/pages/Gallery.jsx`.
- The contact form currently logs submissions to the console and shows a success state — connect `onSubmit` in `src/pages/Contact.jsx` to your email service or backend API to actually receive enquiries.
- The Google Map embed uses a generic Coimbatore query — replace the `src` URL in `src/pages/Contact.jsx` with your exact business location for accuracy.
