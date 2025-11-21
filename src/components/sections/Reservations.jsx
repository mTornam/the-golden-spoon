import React from "react";
import ResevationForm from "../Reservations/ResevationForm";

const Reservations = () => {

  return (
    <section
      id="Reservations"
      className="relative py-32 bg-parallax bg-fixed bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')]"
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-lg mx-auto bg-white p-10 shadow-2xl border-t-4 border-spoon-gold">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl text-spoon-charcoal">
              Reserve Your Table
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Join us for an unforgettable evening.
            </p>
          </div>
          <ResevationForm />
        </div>
      </div>
    </section>
  );
};

export default Reservations;
