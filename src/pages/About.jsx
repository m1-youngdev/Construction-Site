import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaArrowRight,
  FaAward,
  FaUserTie,
  FaClock,
  FaShieldAlt,
  FaComments,
} from "react-icons/fa";
import { GiBulldozer } from "react-icons/gi";

function About() {
  const aboutHero =
    "https://res.cloudinary.com/dwmgepoeg/image/upload/v1785520879/aboutHeroBg_p1ylvc.jpg";
  return (
    <>
      <Navbar />
      <section>
        <div
          className="aboutHero relative h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 flex flex-col h-full items-center justify-center">
            <h1 className="text-center font-space font-bold text-[21px] text-[#CBD5E1]">
              Building Excellence. Delivering Trust.
            </h1>
            <p className="text-[#CBD5E1] text-[16px] font-inter text-center">
              We deliver innovative construction, real estate, logistics, and
              equipment solutions that shape communities and create lasting
              value.
            </p>
            <div className="buttons w-full flex justify-center p-8 gap-5">
              <button className="w-6/12 flex items-center justify-center bg-[#DAA520] p-2 rounded-md font-inter text-[#365CB8] font-semibold hover:bg-[#C28F1B]">
                Our Projects <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        <div className="whoWeAre flex flex-col p-8 gap-10 mt-8 lg:flex-row">
          <div className="wwaImg flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/dwmgepoeg/image/upload/v1785588552/pexels-photo-37090943_ykrl7q.jpg"
              alt=""
              className="rounded-xl shadow-lg shadow-black"
            />
          </div>
          <div className="wwaTxt flex flex-col items-center">
            <h2 className="font-space text-2xl font-semibold mb-3">
              Who We Are
            </h2>
            <p className="text-center font-inter text-md">
              Founded with a vision to redefine quality in construction and
              infrastructure development, Your Company Name has grown into a
              trusted multi-business organization serving clients across
              residential, commercial, industrial, and public sectors. <br />{" "}
              Beyond construction, our expertise spans real estate development,
              logistics, and equipment leasing, allowing us to deliver complete
              project solutions under one trusted brand.
            </p>
          </div>
        </div>

        <div className="mission grid grid-cols-1 p-8 gap-10 mt-6 lg:grid-cols-3">
          <div className="missionCard shadow-md shadow-[#365CB8] rounded-xl py-5 px-2 text-center">
            <h2 className="font-space text-xl font-semibold">Mission</h2>
            <p className="font-inter text-md">
              To deliver innovative, sustainable, and high-quality solutions
              that exceed client expectations.
            </p>
          </div>
          <div className="missionCard shadow-md shadow-[#365CB8] rounded-xl py-5 px-2 text-center">
            <h2 className="font-space text-xl font-semibold">Vision</h2>
            <p className="font-inter text-md">
              To become one of Africa's most trusted construction and
              infrastructure companies.
            </p>
          </div>
          <div className="missionCard shadow-md shadow-[#365CB8] rounded-xl py-5 px-2 text-center">
            <h2 className="font-space text-xl font-semibold">Values</h2>
            <ul className="font-inter text-md">
              <li>Integrity</li>
              <li>Safety</li>
              <li>Excellence</li>
              <li>Innovation</li>
              <li>Accountability</li>
            </ul>
          </div>
        </div>

        <div className="whyChooseUs grid grid-cols-1 place-items-center gap-5 lg:grid-cols-3">
          <div className="wcuCard flex flex-col items-center py-5 px-10 shadow-md shadow-[#365CB8] rounded-lg">
            <div className="w-16 h-16 rounded-full bg-[#DAA520]/10 flex items-center justify-center mb-5">
              <FaUserTie className="text-[#DAA520] text-3xl" />
            </div>
            <h2>Experienced Professionals</h2>
          </div>
          <div className="wcuCard flex flex-col items-center py-5 px-10 shadow-md shadow-[#365CB8] rounded-lg">
            <div className="w-16 h-16 rounded-full bg-[#DAA520]/10 flex items-center justify-center mb-5">
              <FaClock className="text-[#DAA520] text-3xl" />
            </div>
            <h2>Timely Delivery</h2>
          </div>
          <div className="wcuCard flex flex-col items-center py-5 px-10 shadow-md shadow-[#365CB8] rounded-lg">
            <div className="w-16 h-16 rounded-full bg-[#DAA520]/10 flex items-center justify-center mb-5">
              <GiBulldozer className="text-[#DAA520] text-3xl" />
            </div>
            <h2>Modern Equipment</h2>
          </div>
          <div className="wcuCard flex flex-col items-center py-5 px-10 shadow-md shadow-[#365CB8] rounded-lg">
            <div className="w-16 h-16 rounded-full bg-[#DAA520]/10 flex items-center justify-center mb-5">
              <FaShieldAlt className="text-[#DAA520] text-3xl" />
            </div>
            <h2>Safety First</h2>
          </div>
          <div className="wcuCard flex flex-col items-center py-5 px-5 shadow-md shadow-[#365CB8] rounded-lg">
            <div className="w-16 h-16 rounded-full bg-[#DAA520]/10 flex items-center justify-center mb-5">
              <FaComments className="text-[#DAA520] text-3xl" />
            </div>
            <h2>Transparent Communication</h2>
          </div>
          <div className="wcuCard flex flex-col items-center py-5 px-5 shadow-md shadow-[#365CB8] rounded-lg">
            <div className="w-16 h-16 rounded-full bg-[#DAA520]/10 flex items-center justify-center mb-5">
              <FaAward className="text-[#DAA520] text-3xl" />
            </div>
            <h2>Quality Assurance</h2>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
