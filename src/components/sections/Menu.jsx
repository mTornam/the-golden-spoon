import React, { useState } from "react";
import Categories from "../Menu/categories";
import MenuItems from "../Menu/MenuItems";

const Menu = () => {
  const [menuType, setMenuType] = useState("food");
  const [activeCategory, setActiveCategory] = useState("All");

  // Helper: Reset category to 'All' when switching between Food and Drink
  const handleTypeChange = (type) => {
    setMenuType(type);
    setActiveCategory("All");
  };

  return (
    <section id="Menu" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center mb-12">
          <span className="text-spoon-sage font-bold tracking-widest uppercase text-xs">
            Culinary Selection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-spoon-charcoal mt-2 mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-spoon-gold mx-auto"></div>

          <p className="mt-6 max-w-2xl mx-auto text-gray-500 italic">
            Explore our curated selection of dishes. Toggle between Foods and
            Drinks, or select specific categories to filter the list.
          </p>
        </div>

        {/* Menu Control Bar */}
        <div className="flex flex-col items-center space-y-6 mb-16">
          <div className="bg-spoon-cream p-1 rounded-full border border-gray-200 inline-flex shadow-inner">
            <button
              onClick={() => handleTypeChange("food")}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all 
                ${menuType === "food"
                  ? "bg-spoon-sage text-white shadow-lg" // Active Style
                  : "text-gray-500 hover:text-spoon-sage" // Inactive Style
                }`}
            >
              Foods
            </button>
            <button
              onClick={() => handleTypeChange("drink")}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all 
                ${menuType === "drink"
                  ? "bg-spoon-sage text-white shadow-lg"
                  : "text-gray-500 hover:text-spoon-sage"
                }`}
            >
              Drinks
            </button>
          </div>

          {/* Categories */}
          <div className="w-full max-w-3xl overflow-x-auto no-scrollbar">
            <div className="flex justify-center space-x-2 md:space-x-4 min-w-max px-4 pb-2">
              <Categories menuType={menuType}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
              />
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
          <MenuItems menuType={menuType} activeCategory={activeCategory} />
        </div>
      </div>
    </section>
  );
};

export default Menu;
