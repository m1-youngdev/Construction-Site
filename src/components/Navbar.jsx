import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";


function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#DAA520] bg-opacity-25">
        <div className="flex justify-between px-3 py-4 ">
          <div className="logo">
            <h1 className="font-bold font-space text-[20px]">CONSTRUCTION</h1>
          </div>
          <div className="menu pr-20 hidden lg:flex">
            <ul className="flex gap-5 font-inter text-md">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/Projects">Projects</Link>
              </li>
              <li>Contact</li>
              <li>
                <Link to="/Blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="hamburger lg:hidden">
            <button onClick={() => setIsOpen(true)}>
              <FiMenu className="text-[20px]" />
            </button>
          </div>
        </div>

        <Sidebar 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        />

      </nav>
    </div>
  );
}

export default Navbar;
