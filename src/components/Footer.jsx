import { FaTwitter, FaInstagram, FaFacebook, FaLocationDot  } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer p-5 bg-[#365CB8] mt-5 flex flex-col">
          <div className="footerLogo mb-3">
            <a href="#">
              <h1 className="font-space text-2xl font-bold">CONSTRUCTION</h1>
            </a>
          </div>

          <div className="links mb-4">
            <ul className="gap-7 text-xl font-inter">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="contactDetails mb-7">
            <p className="flex items-center text-xl font-inter mb-3">
              {" "}
              <FaLocationDot className="mr-2 text-2xl"/> No. 123 Neighborhood Road, Earth
            </p>
            <p className="text-xl font-inter flex items-center ">
                <MdMail className="mr-2 text-2xl"/>
              {" "}
              <a href=""> construction@wemail.com</a>
            </p>
          </div>

          <div className="socials flex justify-center mb-5">
            <ul className="text-4xl flex gap-6">
              <a href="">
                {" "}
                <li>
                  {" "}
                  <FaTwitter />{" "}
                </li>
              </a>
              <a href="">
                <li>
                  {" "}
                  <FaInstagram />{" "}
                </li>
              </a>
              <a href="">
                {" "}
                <li>
                  {" "}
                  <FaFacebook />{" "}
                </li>
              </a>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
