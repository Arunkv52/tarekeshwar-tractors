import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Image1 from '../assets/products/5075-4.png'
import Image2 from '../assets/products/5310-2.png'
import Image3 from '../assets/products/jd-3036N.png'
import Image4 from '../assets/products/jd5050d.png'
import Image5 from '../assets/products/jd5405d.png'

import Image6 from '../assets/products/implements/cultivator.webp'
import Image7 from '../assets/products/implements/multi-crop.webp'
import Image8 from '../assets/products/implements/paddy-special.jpg'
import Image9 from '../assets/products/implements/ratoon.webp'

import Image10 from '../assets/products/harvesters/45-standard-combine-four.jpeg'
import Image11 from '../assets/products/harvesters/45-standard-combine.jpeg'
import Image12 from '../assets/products/harvesters/51-standard-combine-four.jpeg'
import Image13 from '../assets/products/harvesters/51-standard-combine.jpeg'




const images = [
Image1, Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9,Image10,Image11,Image12,Image13

];

export default function Gallery() {
  return (
    <div>
      <PageHeader
        eyebrow="Gallery"
        title="Machines at work in the field."
        description="A look at our tractors, implements, and harvesters out on local farms."
      />

      <section className="mx-auto max-w-content px-6 py-20 lg:px-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((src, i) => (
            <Reveal
              key={src}
              delay={(i % 3) * 80}
              className="overflow-hidden rounded-md"
            >
              <img
                src={src}
                alt="Farm equipment in use"
                className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-64"
                loading="lazy"
              />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
