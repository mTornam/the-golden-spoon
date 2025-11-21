import React from "react";

const Gallery = () => {
  return (
    <section id="Gallery" className="py-24 bg-spoon-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-spoon-charcoal mb-2">
            The Ambience
          </h2>
          <p className="text-gray-500">
            A glimpse into the Golden Spoon experience.
          </p>
        </div>

        {/* <!-- Masonry-ish Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {/* <!-- Jollof Plating --> */}
          <div className="group relative overflow-hidden rounded-sm md:col-span-2 md:row-span-1 cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"></div>
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all"></div>
            <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-serif text-xl">Art of Plating</p>
            </div>
          </div>

          {/* <!-- Interior --> */}
          <div className="group relative overflow-hidden rounded-sm md:col-span-1 md:row-span-2 cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"></div>
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all overlay"></div>
            <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text">
              <p className="text-white font-serif text-xl">Dining Hall</p>
            </div>
          </div>

          {/* <!-- Cocktail --> */}
          <div className="group relative overflow-hidden rounded-sm cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"></div>
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all"></div>
            <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text">
              <p className="text-white font-serif text-xl">Cocktail</p>
            </div>
          </div>

          {/* <!-- Tilapia --> */}
          <div className="group relative overflow-hidden rounded-sm cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"></div>
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all"></div>
                        <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text">
              <p className="text-white font-serif text-xl">Exotic Delicacies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
