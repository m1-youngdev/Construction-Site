import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-6/12 bg-[#101F3D] z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)}>
            <FaTimes className="text-3xl text-white" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col px-8 gap-8 mt-8">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-white text-xl"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-white text-xl"
          >
            About
          </Link>

          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="text-white text-xl"
          >
            Services
          </Link>

          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="text-white text-xl"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-white text-xl"
          >
            Contact
          </Link>

          <Link
            to="/blog"
            onClick={() => setIsOpen(false)}
            className="text-white text-xl"
          >
            Blog
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
