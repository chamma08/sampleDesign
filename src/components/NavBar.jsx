import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  return (
    <>
      <nav className="bg-[#4F46E5] flex items-center justify-between px-4 sm:px-8 h-16 relative">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-28 sm:w-32 h-8" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#services"
            className="text-white no-underline text-sm font-sans font-medium tracking-wide"
          >
            SERVICES
          </a>
          <a
            href="#about"
            className="text-white no-underline text-sm font-sans font-medium tracking-wide"
          >
            ABOUT US
          </a>
          <a
            href="#contact"
            className="text-white no-underline text-sm font-sans font-medium tracking-wide"
          >
            CONTACT US
          </a>
          <a
            href="#careers"
            className="text-white no-underline text-sm font-sans font-medium tracking-wide"
          >
            CAREERS
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none z-50 relative"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen && (
        <div 
          className="fixed inset-0 bg-opacity-10 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center mb-4 pt-4 px-6">
          <button
            className="text-black text-2xl focus:outline-none"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <X />
          </button>
        </div>
        
        <nav className="flex flex-col gap-6 text-left px-6">
          <a
            href="#home"
            className="text-black no-underline text-sm font-sans font-medium tracking-wide"
            onClick={closeMenu}
          >
            HOME
          </a>
          <a
            href="#services"
            className="text-black no-underline text-sm font-sans font-medium tracking-wide"
            onClick={closeMenu}
          >
            SERVICES
          </a>
          <a
            href="#about"
            className="text-black no-underline text-sm font-sans font-medium tracking-wide"
            onClick={closeMenu}
          >
            ABOUT US
          </a>
          <a
            href="#contact"
            className="text-black no-underline text-sm font-sans font-medium tracking-wide"
            onClick={closeMenu}
          >
            CONTACT US
          </a>
          <a
            href="#careers"
            className="text-black no-underline text-sm font-sans font-medium tracking-wide"
            onClick={closeMenu}
          >
            CAREERS
          </a>
        </nav>
      </div>
    </>
  );
}