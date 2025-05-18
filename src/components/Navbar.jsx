import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#2B2B3C] text-white">
      {/* Logo */}
      <div className="font-montseratt font-bold italic text-xl">FA</div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <Link
          to="/"
          className=" font-poppins font-medium hover:text-[#BDBDFF] border-b-2 border-transparent hover:border-[#BDBDFF]"
        >
          Home
        </Link>
        <Link
          to="/services"
          className="font-poppins font-medium hover:text-[#BDBDFF] border-b-2 border-transparent hover:border-[#BDBDFF]"
        >
          Service
        </Link>
        <Link
          to="/portfolio"
          className="font-poppins font-medium hover:text-[#BDBDFF] border-b-2 border-transparent hover:border-[#BDBDFF]"
        >
          Portfolio
        </Link>
        <Link
          to="/blog"
          className="font-poppins font-medium hover:text-[#BDBDFF] border-b-2 border-transparent hover:border-[#BDBDFF]"
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className="font-poppins font-medium hover:text-[#BDBDFF] border-b-2 border-transparent hover:border-[#BDBDFF]"
        >
          Contact
        </Link>
      </div>

      {/* Resume Button */}
      <div>
        <button className="font-poppins font-normal px-4 py-2 border border-white rounded hover:border-[#BDBDFF] hover:text-[#BDBDFF] transition cursor-pointer">
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
