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
  const [activeSection, setActiveSection] = useState("");

  // Change header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer to track active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-50px 0px 0px 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={` w-full fixed z-50
      ${
        isScrolled ? "py-2 bg-bowl-charcoal" : "py-4 bg-transparent"
      }
    `}
    >
      <div className="px-6 flex justify-between items-center text-white">
        <a
          href="#Home"
          className="text-2xl font-serif font-bold tracking-wide whitespace-nowrap"
        >
          Golden <span className="text-bowl-gold">Bowl</span>
          <span className="text-bowl-gold">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="items-center space-x-8 uppercase tracking-widest text-sm hidden md:flex">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.path.substring(1);
            return (
              <a
                key={index}
                href={link.path}
                className={` ${
                  isActive
                    ? "text-bowl-gold hover:text-bowl-sage"
                    : "hover:text-bowl-gold"
                } `}
              >
                {link.text}
              </a>
            );
          })}
          <a
            href="#Reservations"
            className="border border-bowl-gold text-xs font-light px-4 py-2 text-bowl-gold hover:bg-bowl-gold hover:text-bowl-cream transition-all duration-300"
          >
            Book a Table
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
        <div className="md:hidden absolute w-full top-full border-t border-gray-700 shadow-xl bg-bowl-charcoal">
          <nav className="flex flex-col text-center space-y-4 p-6 text-white tracking-widest">
            {navLinks.map((link) => (
              <a
                href={link.path}
                onClick={() => setNavIsOpen(!navIsOpen)}
                className="hover:text-bowl-gold active:text-bowl-gold"
              >
                {link.text}
              </a>
            ))}
            <a
              href="#Reservations"
              onClick={() => setNavIsOpen(!navIsOpen)}
              className="text-bowl-gold"
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
