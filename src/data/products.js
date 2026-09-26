import TractorsImg from "../assets/products/3028EN_Front_Right_Studio.jpg";
import ImplementsImg from "../assets/home/implements.avif";
import HarvesterImg from "../assets/home/harvester.webp";
import Jd5105d from '../assets/products/5105_2wd.avif'
import Jd5105d4 from '../assets/products/jd5105.png'
import Jd5045d from '../assets/products/jd5045d.webp'
import J5045d4wd from '../assets/products/new-5045-4wd.avif'
import Jd5050d from '../assets/products/jd5050d.png'
import Jd5050d4 from '../assets/products/5050_4wd.avif'


import Jd5210d from '../assets/products/5210-2.png'
import Jd5210d4 from '../assets/products/5210-4.png'
import Jd5310d from '../assets/products/5310-4.png'
import Jd5405d4 from '../assets/products/5405_4wd.avif'
import Jd5075d4 from '../assets/products/5075-4.png'


// implements image
import Cultivator from '../assets/products/implements/cultivator.webp'
import Ratoon from '../assets/products/implements/ratoon.webp'
import Rotary from '../assets/products/implements/rotary-tiller.webp'
import Seed from '../assets/products/implements/seed-cum.webp'
import Multicrop from '../assets/products/implements/multi-crop.webp'
import Paddy from '../assets/products/implements/paddy-special.jpg'

// Harvester




// Download Brochure
import Download3028 from '../assets/brochure/tractors/3028-en-single-page-leaflet-english.pdf'
import Download3036 from '../assets/brochure/tractors/3036-EN-Brochure.pdf'
import Download51052wd from '../assets/brochure/tractors/5105-40-hp-puddling-special-single-page-leaflet-english.pdf'
import Download51054wd from '../assets/brochure/tractors/5105-4wd-40hp-english-leaflet.pdf'
import Download50452wd from '../assets/brochure/tractors/5405-4wd-powertech-broucher-english-original.pdf'
import Download50454wd from '../assets/brochure/tractors/5405-4wd-powertech-broucher-english-original.pdf'
import Download50502wd from '../assets/brochure/tractors/5050d-50hp-oiled-axel-single-page-leaflet-english.pdf'
import Download50504wd from '../assets/brochure/tractors/5050d-4wd-50hp-single-page-leaflet-english.pdf'
import Download52102wd from '../assets/brochure/tractors/5210-2wd-4wd-gearpro-en.pdf'
import Download521042wd from '../assets/brochure/tractors/5210-2wd-4wd-gearpro-en.pdf'
import Download53102wd from '../assets/brochure/tractors/5310-4wd-powertech-brochure-english-updates.pdf'
import Download54052wd from '../assets/brochure/tractors/5050d-4wd-50hp-single-page-leaflet-english.pdf'
import Download54054wd from '../assets/brochure/tractors/5405-4wd-powertech-broucher-english-original.pdf'
import Download50754wd from '../assets/brochure/tractors/5075e-4wd-powertech-broucher-english-updates.pdf'


// Implements
import CultivatorBrochure from '../assets/brochure/implements/gs-cultivator-implement-leaflet-english.pdf'
import RattonBrochure from '../assets/brochure/implements/ratoon-manager.pdf'
import RotaryBrochure from '../assets/brochure/implements/rotary-tiller.pdf'
import MulticropBrochure from '../assets/brochure/implements/GREEN-SYSTEM-Multi-Crop-Mechanical-Planter-leaflet.pdf'
import PaddyBrochure from '../assets/brochure/implements/paddy-rotary-tiller-leaflet-english.pdf'





// Tractors images
import Jd3036N from "../assets/products/jd-3036N.png";

export const categories = [
  {
    slug: "tractors",
    name: "Tractors",
    tagline: "Power and precision for every acre",
    description:
      "From compact orchard tractors to high-horsepower workhorses, our tractor range is built for the demands of Indian farmland reliable in the field, easy on maintenance.",
    image: TractorsImg,
    products: [
      {
        slug: "jd-3028",
        name: "JOHN DEERE 3028 EN",
        hp: "28 HP",
        summary:
          "John Deere 3028EN is a 28 HP multipurpose tractor. It is best suited for vineyards, vegetable crops and inter-culture operations.",
        image: TractorsImg,
        download : Download3028,
        specs: [
          { label: "Engine", value: "3-cylinder, 28 HP" },
          { label: "Drive", value: "Drive 4WD" },
          { label: "Lift capacity", value: "1,600 kg" },
          { label: "Fuel tank", value: "60 L" },
        ],
        
      },
      {
        slug: "jd-3036",
        name: "JOHN DEERE 3036 EN",
        hp: "35 HP",
        summary:
          "John Deere 3036EN is a 35 HP multipurpose tractor. It is best suited for vineyards, vegetable crops and inter-culture operations.",
        image: Jd3036N,
        download : Download3036,
        specs: [
          { label: "Engine", value: "4-cylinder, 35 HP" },
          { label: "Drive", value: "Drive 4WD" },
          { label: "Lift capacity", value: "2,000 kg" },
          { label: "Fuel tank", value: "65 L" },
        ],
      },
      {
        slug: "jd-5105-2wd",
        name: "JOHN DEERE 5105 2WD",
        hp: "40 HP",
        summary:"John Deere tractor 5105 is offered in both 2 WD and 4 WD, in the 40 HP tractor segment. Packed with power, this heavy-duty agricultural tractor",
        image: Jd5105d,
        download : Download51052wd,
        specs: [
          { label: "Engine", value: "4-cylinder turbo, 40 HP" },
          { label : "Drive", value : "Drive 2WD"},
          { label: "Lift capacity", value: "2,400 kg" },
          { label: "Fuel tank", value: "70 L" },
        ],
      },
      {
        slug: "jd-5105-4wd",
        name: "JOHN DEERE 5105 4WD",
        hp: "40 HP",
        summary:
          "John Deere tractor 5105 is offered in both 2 WD and 4 WD, in the 40 HP tractor segment. Packed with power, this heavy-duty agricultural tractor",
        image: Jd5105d4,
        download : Download51054wd,
        specs: [
          { label: "Engine", value: "3-cylinder, 40 HP" },
          { label : "Drive", value : "Drive 4WD"},
          { label: "Width", value: "1,250 mm" },
          { label: "Fuel tank", value: "45 L" },
        ],
      },
      // New products
      {
        slug: "jd-5045-2wd",
        name: "JOHN DEERE 5045D 2WD",
        hp: "45 HP",
        summary:"John Deere 5045 is a power packed agricultural tractor with high back up torque and accelerated productivity towards all agricultural applications.",        image: Jd5105d,
        image: Jd5045d,
        download : Download50452wd,
        specs: [
          { label: "Engine", value: "4-cylinder turbo, 45 HP" },
          { label : "Drive", value : "Drive 2WD"},
          { label: "Lift capacity", value: "2,400 kg" },
          { label: "Fuel tank", value: "70 L" },
        ],
      },
      {
        slug: "jd-5045-4wd",
        name: "JOHN DEERE 5045D 4WD",
        hp: "45 HP",
        image: J5045d4wd,
        summary:"John Deere 5045 is a power packed agricultural tractor with high back up torque and accelerated productivity towards all agricultural applications.",
        download : Download50454wd,
        specs: [
          { label: "Engine", value: "3-cylinder, 45 HP" },
          { label : "Drive", value : "Drive 4WD"},
          { label: "Width", value: "1,250 mm" },
          { label: "Fuel tank", value: "45 L" },
        ],
      },
      {
        slug: "jd-5050-2wd",
        name: "JOHN DEERE 5050D 2WD",
        hp: "50 HP",
        summary:"John Deere tractor 5050 widely connects with the farmers because of the tractors unmatched power, performance and productivity.",
        image: Jd5050d,
        download : Download50502wd,
        specs: [
          { label: "Engine", value: "4-cylinder turbo, 50 HP" },
          { label : "Drive", value : "Drive 2WD"},
          { label: "Lift capacity", value: "2,400 kg" },
          { label: "Fuel tank", value: "70 L" },
        ],
      },
      {
        slug: "jd-5050-4wd",
        name: "JOHN DEERE 5050D 4WD",
        hp: "50 HP",
        summary:"John Deere tractor 5050 widely connects with the farmers because of the tractors unmatched power, performance and productivity.",
        image: Jd5050d4,
        download : Download50504wd,
        specs: [
          { label: "Engine", value: "3-cylinder, 50 HP" },
          { label : "Drive", value : "Drive 4WD"},
          { label: "Width", value: "1,250 mm" },
          { label: "Fuel tank", value: "45 L" },
        ],
      },

      // New Products another
      {
        slug: "jd-5210-2wd",
        name: "JOHN DEERE 5210 2WD",
        hp: "50 HP",
        summary:"John Deere 5210 is a powerful 50 HP tractor, available in both 4WD and 2WD options. It is designed and equipped with power-packed",
        image: Jd5210d,
        download : Download52102wd,
        specs: [
          { label: "Engine", value: "4-cylinder turbo, 50 HP" },
          { label : "Drive", value : "Drive 2WD"},
          { label: "Lift capacity", value: "2,400 kg" },
          { label: "Fuel tank", value: "70 L" },
        ],
      },
      {
        slug: "jd-5210-4wd",
        name: "JOHN DEERE 5210 4WD",
        hp: "50 HP",
        image: Jd5210d4,
        summary : "John Deere 5210 is a powerful 50 HP tractor, available in both 4WD and 2WD options. It is designed and equipped with power-packed",
        download : Download521042wd,
        specs: [
          { label: "Engine", value: "3-cylinder, 50 HP" },
          { label : "Drive", value : "Drive 4WD"},
          { label: "Width", value: "1,250 mm" },
          { label: "Fuel tank", value: "45 L" },
        ],
      },
      {
        slug: "jd-5310-2wd",
        name: "JOHN DEERE 5310 2WD",
        hp: "55 HP",
        summary: "John Deere 5310 is a 55 HP tractor designed for exceptional power and reliability. Its state-of-the-art technology makes it the best choice",
        image: Jd5310d,
        download : Download53102wd,
        specs: [
          { label: "Engine", value: "4-cylinder turbo, 55 HP" },
          { label : "Drive", value : "Drive 2WD"},
          { label: "Lift capacity", value: "2,400 kg" },
          { label: "Fuel tank", value: "70 L" },
        ],
      },
     
      {
        slug: "jd-5405-4wd",
        name: "JOHN DEERE 5405 4WD",
        hp: "63 HP",
        summary : "John Deere 5405 is a powerful 63 HP tractor, available in both 2WD and 4WD options. Its powerful turbocharged engine delivers",
        image: Jd5405d4,
        download : Download54054wd,
        specs: [
          { label: "Engine", value: "3-cylinder, 63 HP" },
          { label : "Drive", value : "Drive 4WD"},
          { label: "Width", value: "1,250 mm" },
          { label: "Fuel tank", value: "45 L" },
        ],
      },
       {
        slug: "jd-5075-4wd",
        name: "JOHN DEERE 5075 4WD",
        hp: "75 HP",
        summary : "John Deere 5075 is a powerful 75 HP tractor equipped with advanced technology. Its powerful turbocharged engine delivers higher lift capacity",
        image: Jd5075d4,
        download : Download50754wd,
        specs: [
          { label: "Engine", value: "3-cylinder, 75 HP" },
          { label : "Drive", value : "Drive 4WD"},
          { label: "Width", value: "1,250 mm" },
          { label: "Fuel tank", value: "45 L" },
        ],
      },

    ],
  },

  // Implements
  {
    slug: "implements",
    name: "Implements",
    tagline: "The right attachment for every task",
    description: "GreenSystem Cultivator is useful in land preparation. The cultivator variants cater to all kinds of soils, ranging from soft and medium soil",
    image: ImplementsImg,
    products: [
      {
        slug: "cultivator",
        name: "Cultivator",
        // hp: "Fits 35–60 HP",
        summary: "GreenSystem Cultivator is useful in land preparation. The cultivator variants cater to all kinds of soils, ranging from soft and medium soil to stony and rough soil. This farm equipment suits all kinds of crops.",
        image: Cultivator,
        download : CultivatorBrochure
        // specs: [
        //   { label: "Working width", value: "5–6 feet" },
        //   { label: "Blade type", value: "L-type" },
        //   { label: "Gear box", value: "Side drive" },
        //   { label: "Recommended HP", value: "35–60 HP" },
        // ],
      },
      {
        slug: "ratoon-manager",
        name: "Ratoon Manager",
        summary: "Cuts the old sugarcane root system leading to better growth of ratoon crop & establishment of new root system.",
        image: Ratoon,
        download : RattonBrochure
      },
       {
        slug: "rottary-tiller",
        name: "John Deere Rotary Tiller",
        summary: "John Deere rotary tiller is reliable machine for dry and wet land cultivation and provides high quality seed bed preparation and residue incorporation.",
        image: Rotary,
        download : RotaryBrochure 
      },
      
      {
        slug: "vaccum-planter",
        name: "Multi crop Vacuum Planter",
        summary: "GreenSystem Multi-crop Vacuum Planter assists in Sowing and Planting. It provides high accuracy in the sowing of multiple crops like Cotton, Corn, Soybean and Grains. This farm equipment is suitable for all types of soils....",
        image: Multicrop,
        download : MulticropBrochure
      },
       {
        slug: "rotary-tiller",
        name: "Paddy Special Rotary Tiller",
        summary: "Paddy Special Rotary Tiller is useful in land preparation. This light weight puddling special Rotary Tiller is efficient in preparing the seedbed for transplanting of paddy. This farm equipment is best suited for Paddy crops....",
        image: Paddy,
        download : PaddyBrochure
      },
       {
        slug: "seed-cum",
        name: "Seed Cum Fertilizer Drill",
        summary: "Green System offers a variety of high-quality tillage implements to get the job done right.",
        image: Seed
       
      },
    ],
  },
  // Harvester
  {
    slug: "harvester",
    name: "Harvester",
    tagline: "Bring in the season, faster",
    description:
      "Combine and multi-crop harvesters that cut, thresh, and clean in a single pass, reducing losses and getting crops to market sooner.",
    image: HarvesterImg,
    products: [
      {
        slug: "55-standard-4wheel",
        name: "55 HP Standard Combine Harvesters -Four Wheel Drive",
        summary: "Self-propelled combine harvester for paddy and wheat.",
              },
      {
        slug: "55-balkar-4wheel",
        name: "55 HP Balkar Combine Harvesters -Four Wheel Drive",
        summary: "Self-propelled combine harvester for paddy and wheat.",
      
      },
      {
        slug: "63-standard-2wheel",
        name: "63 Standard Combine Harvesters-Four Wheel Drive",
        summary: "Self-propelled combine harvester for paddy and wheat.",
      },
      {
        slug: "63-balkar-4wheel",
        name: "63 Balkar Combine Harvesters-Four Wheel Drive",
        summary: "Self-propelled combine harvester for paddy and wheat.",
      },
       {
        slug: "75-standard-4wheel",
        name: "75 Standard Combine Harvesters-Four Wheel Drive",
        summary: "Self-propelled combine harvester for paddy and wheat.",
      },
      {
        slug: "75-balkar-4wheel",
        name: "75 Balkar Combine Harvesters-Four Wheel Drive",
        summary: "Self-propelled combine harvester for paddy and wheat.",
      },
    ],
  },
];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);

export const getProduct = (categorySlug, productSlug) => {
  const category = getCategory(categorySlug);
  if (!category) return null;
  const product = category.products.find((p) => p.slug === productSlug);
  return product ? { ...product, category } : null;
};

export const allProducts = categories.flatMap((c) =>
  c.products.map((p) => ({ ...p, category: c })),
);
