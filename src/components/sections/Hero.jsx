import React from "react";

const Hero = () => {
  return (
    <section
      id="Home"
      className="relative h-screen flex items-center justify-center bg-stone-900"
    >
      <div className="bg-black/50 absolute inset-0 z-10"></div> {/* Overlay */}
      <div className="absolute inset-0 opacity-60 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop')]"></div>{" "}
      {/* Bg- img */}
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto text-white">
        <h2 className="italic text-2xl md:text-3xl mb-4 text-spoon-gold font-serif">
          Where Ghanaian heritage meets modern elegance
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
          Taste the <br />
          Extraordinary
        </h1>

        <p className="to-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
          Welcome to The Golden Spoon. We believe food is an experience. Sourced
          locally and crafted with passion, our dishes bring the authentic
          flavors of Ghana to your table.
        </p>

        <a
          href="#Menu"
          className="inline-block px-10 py-4 b2 border-spoon-gold border text-spoon-gold tracking-[0.2em] hover:bg-spoon-gold active:bg-spoon-gold hover:text-spoon-charcoal  active:text-spoon-charcoal transition-all duration-300 uppercase"
        >
          View Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
