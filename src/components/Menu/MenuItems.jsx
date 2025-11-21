import React from "react";
import menuData from "./MenuData";

const MenuItems = ({ menuType, activeCategory }) => {
  const filteredData = menuData.filter((item) => {
    const type = item.type === menuType;
    const cat = activeCategory === "All" || activeCategory === item.category;

    return type && cat;
  });
  return (
    <>
      {filteredData.map((menu, index) => (
        <div
          key={index}
          className="flex flex-col pb-4 transition-all duration-300 hover:translate-x-2 group"
        >
          {/* Top Row: Name -- Lines -- Price */}
          <div className="flex justify-between items-end w-full mb-1">
            <h4 className="font-serif font-bold text-lg md:text-xl text-spoon-charcoal whitespace-nowrap pr-2">
              {menu.name}
            </h4>

            {/* Tailwind Dotted Leader */}
            <div className="dotted-leader"></div>

            <span className="text-spoon-sage font-bold font-serif text-lg whitespace-nowrap pl-2">
              {menu.price}
            </span>
          </div>

          {/* Bottom Row: Description */}
          <p className="text-gray-500 text-sm italic font-light leading-relaxed">
            {menu.desc}
          </p>
        </div>
      ))}

      {/* Empty State Check */}
      {filteredData.length === 0 && (
        <p className="col-span-2 text-center text-gray-400 italic py-10">
          No items available.
        </p>
      )}
    </>
  );
};

export default MenuItems;
