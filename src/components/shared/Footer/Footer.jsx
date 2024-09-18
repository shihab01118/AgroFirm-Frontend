import { GoDotFill } from "react-icons/go";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import FooterBg from "../../../assets/images/FooterBG.png";
import Logo from "../../../assets/images/Logo.png";
import FooterTopImg from "../../../assets/images/FooterTop.png";

const Footer = () => {
  return (
    <footer>
      <div className="w-full">
        <img src={FooterTopImg} alt="background" className="w-full" />
      </div>
      <div className="bg-secondary h-[120px] flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-4 lg:px-0 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between items-center">
          <div className="flex items-center gap-2.5 text-list text-sm lg:text-base">
            <span>FARMERS</span>
            <GoDotFill className="text-white" />
            <span>ORGANIC</span>
            <GoDotFill className="text-white" />
            <span>FOODS</span>
            <GoDotFill className="text-white" />
            <span>PRODUCTS</span>
          </div>
          <div className="flex lg:items-center justify-between lg:justify-normal gap-4 lg:gap-8">
            <div className="flex items-center gap-1.5 lg:gap-3">
              <div className="w-8 h-8 lg:w-[50px] lg:h-[50px] rounded-full bg-white flex justify-center items-center">
                <FaPhoneAlt className="text-list lg:text-xl" />
              </div>
              <span className="text-sm lg:text-base">+ 1(212) 000-000</span>
            </div>
            <div className="flex items-center gap-1.5 lg:gap-3">
              <div className="w-8 h-8 lg:w-[50px] lg:h-[50px] rounded-full bg-white flex justify-center items-center">
                <FaEnvelope className="text-list lg:text-xl" />
              </div>
              <span className="text-sm lg:text-base">example@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-center bg-cover bg-no-repeat w-full"
        style={{ backgroundImage: `url(${FooterBg})` }}
      >
        <div className="max-w-[1200px] w-full mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 py-24 gap-10 lg:gap-0">
            <div>
              <img src={Logo} alt="Logo" />
              <p className="my-8 text-body">
                Lorem ipsum dolor sit amet consectetur. Urna nam congue tempor
                aenean in molestie elementum eget.
              </p>
              <div className="flex items-center gap-6 text-primary">
                <a href="#">
                  <FaFacebook className="cursor-pointer text-lg" />
                </a>
                <a href="#">
                  <FaInstagram className="cursor-pointer text-lg" />
                </a>
                <a href="#">
                  <FaTwitter className="cursor-pointer text-lg" />
                </a>
              </div>
            </div>
            <div className="col-span-2 lg:ml-[130px]">
              <h3 className="text-title text-2xl lg:text-3xl font-medium leading-9 lg:leading-[48px]">
                Lorem ipsum dolor sit amet consectetur. Rutrum ut ipsum cursus
                massa est.
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 mt-10 gap-8 lg:gap-0">
                <div>
                  <p className="text-list font-medium text-lg mb-6">
                    Useful Link
                  </p>
                  <div className="space-y-2 text-[15px] text-body">
                    <p>Company</p>
                    <p>About</p>
                    <p>Contact</p>
                  </div>
                </div>

                <div className="">
                  <p className="text-list font-medium text-lg mb-6">
                    Our address
                  </p>
                  <div className="space-y-2 text-[15px] text-body">
                    <p>Old Westbury</p>
                    <p>200,New York,</p>
                    <p>United States</p>
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <p className="text-list font-medium text-lg mb-6">
                    Working Time
                  </p>
                  <div className="space-y-2 text-[15px] text-body">
                    <p>Mon - Fri: 9.00am - 5.00pm</p>
                    <p>Saturday: 10.00am - 6.00pm</p>
                    <p>Sunday Closed</p>
                  </div>
                </div>
              </div>
              <hr className="my-8 border border-list border-opacity-20" />
              <div className="flex flex-col lg:flex-row gap-3 justify-between items-center w-full text-body text-sm">
                <p>
                  <span>Terms & Conditions</span> | <span>Privacy Policy</span>
                </p>
                <p>
                  Copyright © {new Date().getFullYear()} Pranto. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
