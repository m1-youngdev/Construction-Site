import React from "react";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 border border-red-700">
        <div className="flex justify-between px-3 py-4 ">
          <div className="logo">
            <h1 className="font-bold font-space text-[20px]">CONSTRUCTION</h1>
          </div>
          <div className="menu hidden lg:flex">
            <ul className="flex gap-5">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="hamburger lg:hidden">
            <FiMenu className="text-[20px]" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
