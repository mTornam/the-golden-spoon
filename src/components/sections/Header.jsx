import React, { useEffect, useState } from "react";

const Header = () => {
  const navLinks = [
    {
      path: "#Home",
      text: "Home",
    },
    {
      path: "#Menu",
      text: "Menu",
    },
    {
      path: "#About",
      text: "About",
    },
    {
      path: "#Gallery",
      text: "Gallery",
    },
  ];
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` w-full fixed z-50
      ${
        isScrolled ? "py-2 shadow-2xl bg-spoon-charcoal" : "py-4 bg-transparent"
      }
    `}
    >
      <div className="px-6 flex justify-between items-center text-white">
        <a
          href="#Home"
          className="text-2xl font-serif font-bold tracking-wide whitespace-nowrap"
        >
          The Golden Spoon<span className="text-spoon-gold">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="items-center space-x-8 uppercase tracking-widest text-sm hidden md:flex">
          <a href="#Home">Home</a>
          <a href="#Menu">Menu </a>
          <a href="#About">About </a>
          <a href="#Gallery">Gallery </a>
          <a
            href="#Reservations"
            className="border border-spoon-gold text-xs font-light px-4 py-2 text-spoon-gold hover:bg-spoon-gold hover:text-spoon-cream transition-all duration-300"
          >
            Book a Table{" "}
          </a>
        </nav>

        {/* Menu Button */}
        <button
          onClick={() => setNavIsOpen(!navIsOpen)}
          className="block md:hidden text-2xl"
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {navIsOpen && (
        <div className="md:hidden absolute w-full top-full border-t border-gray-700 shadow-xl bg-spoon-charcoal">
          <nav className="flex flex-col text-center space-y-4 p-6 text-white tracking-widest">
            {navLinks.map((link) => (
              <a
                href={link.path}
                onClick={() => setNavIsOpen(!navIsOpen)}
                className="hover:text-spoon-gold active:text-spoon-gold"
              >
                {link.text}
              </a>
            ))}
            <a
              href="#Reservations"
              onClick={() => setNavIsOpen(!navIsOpen)}
              className="text-spoon-gold"
            >
              Reservations{" "}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
