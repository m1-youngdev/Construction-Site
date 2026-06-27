import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  const heroImage =
    "https://res.cloudinary.com/dwmgepoeg/image/upload/v1782326101/pexels-photo-18283441_zli1ff.jpg";
  return (
    <div>
      <Navbar />
      
        <div
          className="hero relative h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="absolute inset-0 bg-[#101F3D] bg-opacity-70"></div>
            <div className="relative z-10 flex flex-col h-full items-center justify-center">
              <h1 className="text-center">Building Infrastructure, Energy & Real Estate Solutions Across Nigeria.</h1>
              <p>Your trusted partner in modern construction</p>
            </div>

        </div>
      
    </div>
  );
}

export default Home;
