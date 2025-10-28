import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[var(--primary)] to-[var(--primary)] text-white py-12 mt-10 overflow-hidden">
      {/* Decorative Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.41,168.19-17.14,250.45-.39,63.23,12.55,124.23,35.11,187.76,46.55,104.43,19.09,207.77,5.86,309.9-27.79V120H0V95.77C104.83,74.46,210.19,68.64,321.39,56.44Z" />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left z-10">
        {/* Logo & Description */}
        <div>
          <Link
            to="/"
            className="text-white italic font-bold text-3xl flex justify-center md:justify-start items-center gap-2"
          >
            <span className="text-5xl text-white font-extrabold">S</span>
            ketchVenture
          </Link>
          <p className="text-sm text-gray-200 mt-3 max-w-xs mx-auto md:mx-0">
            A creative summer camp for young artists — where imagination meets
            color, fun, and friendship.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white/30 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-white transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white/30 inline-block pb-1">
            Connect With Us
          </h3>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">SketchVenture</span> — All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
