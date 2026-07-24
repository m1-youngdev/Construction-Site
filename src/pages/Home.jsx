import React from "react";
import Navbar from "../components/Navbar";
import Counter from "../components/Counter";
import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import FeaturedProjects from "../components/FeaturedProjects";
import Footer from "../components/Footer";

function Home() {
  const heroImage =
    "https://res.cloudinary.com/dwmgepoeg/image/upload/v1782326101/pexels-photo-18283441_zli1ff.jpg";

    return (
    <>
      <Navbar />

      <div
        className="hero relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-[#101F3D] bg-opacity-70"></div>
        <div className="relative z-10 flex flex-col h-full items-center justify-center">
          <h1 className="text-center font-space font-bold text-[20px] text-[#CBD5E1]">
            Building Infrastructure, Energy & Real Estate Solutions Across
            Nigeria.
          </h1>
          <p className="text-[#CBD5E1] text-[16px] font-inter text-center">
            Delivering innovative construction solutions with precision,
            quality, and lasting value.
          </p>
          <div className="buttons w-full flex justify-center p-8 gap-5">
            <button className="w-5/12 bg-[#DAA520] p-2 rounded-md font-inter text-[#365CB8] font-semibold hover:bg-[#C28F1B]">
              Get a Quote
            </button>
            <button className="w-5/12 bg-[#DAA520] p-2 rounded-md font-inter text-[#365CB8] font-semibold hover:bg-[#C28F1B]">
              Our Services
            </button>
          </div>
        </div>
      </div>
      <section className="max-w-screen flex flex-col justify-center items-center">
        <div className="about flex flex-col items-center gap-5 mt-10 p-7 lg:flex-row">
          <div className="aboutImage w-10/12 border-4 rounded-xl">
            <img
              src="https://res.cloudinary.com/dwmgepoeg/image/upload/v1782747066/pexels-photo-8487764_hr7gjl.jpg"
              alt="aboutImg"
              className="w-full rounded-lg"
            />
          </div>
          <div className="aboutTxt flex-col items-center justify-center">
            <h2 className="text-center mb-2 font-space font-bold text-2xl ">
              About us
            </h2>
            <p className="font-inter text-[16px] text-center">
              With over 15 years of industry experience, we deliver reliable
              construction, engineering, and infrastructure solutions that stand
              the test of time. Our commitment to quality workmanship, safety,
              and client satisfaction has earned us the trust of businesses,
              organizations, and communities across every project we undertake.
            </p>
            <div className="flex justify-center items-center">
              <button className="learnMore w-5/12 bg-[#DAA520] p-2 rounded-md font-inter text-[#365CB8] font-semibold mt-5 hover:bg-[#C28F1B] ">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="stats grid grid-cols-2 gap-8 mt-5 p-5 max-w-screen lg:grid-cols-4 lg:gap-10">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-5xl font-bold text-[#365CB8] font-space ">
              <Counter end={15} suffix="+" />
            </h2>

            <p className="text-[#365CB8]">Years Experience</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h2 className="text-5xl font-bold text-[#365CB8] font-space">
              <Counter end={250} suffix="+" />
            </h2>

            <p className="text-[#365CB8]">Projects Completed</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h2 className="text-5xl font-bold text-[#365CB8] font-space">
              <Counter end={100} suffix="+" />
            </h2>

            <p className="text-[#365CB8]">Skilled Professionals</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h2 className="text-5xl font-bold text-[#365CB8] font-space">
              <Counter end={98} suffix="%" />
            </h2>

            <p className="text-[#365CB8]">Client Satisfaction</p>
          </div>
        </div>

        <div className="services w-screen flex flex-col justify-center items-center mt-10">
          <h2 className="text-black font-space text-2xl font-bold">
            Services
          </h2>
          <div className="serviceCards grid grid-cols-1 gap-8 w-full mt-7 place-items-center mb-5 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        <div className="featuredProjects">
              <FeaturedProjects />
        </div>

        <div className="contactUs p-5 mb-5">
          <div className="flex flex-col justify-center items-center rounded-md shadow-sm shadow-[#365CB8] p-3">
            <p className="text-center text-black font-inter text-xl">Have a Project to build? <br/> Let us handle it, and give you the peace of mind you deserve!!</p>
            <button className="w-5/12 bg-[#DAA520] p-2 rounded-md font-inter text-[#365CB8] font-semibold mt-7 mb-3 hover:bg-[#C28F1B]">Contact Us</button>
          </div>
        </div>
      </section>
      <Footer /> 
    </>
  );
}

export default Home;
