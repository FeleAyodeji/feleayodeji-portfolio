import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#2B2B3C] text-white">
      {/* Logo */}
      <div className="font-bold text-xl">FA</div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <Link
          to="/"
          className="hover:text-[#BDBDFF] border-b-2 border-transparent hover:border-[#BDBDFF]"
        >
          Home
        </Link>
        <Link
          to="/services"
          className="hover:text-[#BDBDFF] border-b-2 border-transparent hover:border-[#BDBDFF]"
        >
          Service
        </Link>
        <Link
          to="/portfolio"
          className="hover:text-[#BDBDFF] border-b-2 border-transparent hover:border-blue-[#BDBDFF]"
        >
          Portfolio
        </Link>
        <Link
          to="/blog"
          className="hover:text-#BDBDFF[] border-b-2 border-transparent hover:border-[#BDBDFF]"
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className="hover:text-[#BDBDFF] border-b-2 border-transparent hover:border-[#BDBDFF]"
        >
          Contact
        </Link>
      </div>

      {/* Resume Button */}
      <div>
        <button className="px-4 py-2 border border-[] rounded hover:bg-[] hover:text-[] transition">
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
