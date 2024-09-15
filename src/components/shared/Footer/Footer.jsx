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
        <div className="max-w-[1200px] w-full mx-auto px-4 lg:px-0 flex justify-between items-center">
          <div className="flex items-center gap-2.5 text-list">
            <span>FARMERS</span>
            <GoDotFill className="text-white" />
            <span>ORGANIC</span>
            <GoDotFill className="text-white" />
            <span>FOODS</span>
            <GoDotFill className="text-white" />
            <span>PRODUCTS</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                <FaPhoneAlt className="text-list text-xl" />
              </div>
              <span>+ 1(212) 000-000</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                <FaEnvelope className="text-list text-xl" />
              </div>
              <span>example@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-center bg-cover bg-no-repeat w-full"
        style={{ backgroundImage: `url(${FooterBg})` }}
      >
        <div className="max-w-[1200px] w-full mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-3 py-24">
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
            <div className="col-span-2 ml-[130px]">
              <h3 className="text-title text-[32px] font-medium leading-[42px]">
                Lorem ipsum dolor sit amet consectetur. Rutrum ut ipsum cursus
                massa est.
              </h3>
              <div className="grid grid-cols-3 mt-10">
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
                <div>
                  <p className="text-list font-medium text-lg mb-6">
                    Working Time
                  </p>
                  <div className="space-y-2 text-[15px] text-body">
                    <p>Mon - Fri: 9.00am - 5.00pm</p>
                    <p>Saturday: 10.00am - 6.00pm</p>
                    <p>Sunday Closed</p>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-list font-medium text-lg mb-6">
                    Our address
                  </p>
                  <div className="space-y-2 text-[15px] text-body">
                    <p>Old Westbury</p>
                    <p>200,New York,</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
              <hr className="my-8 border border-list border-opacity-20" />
              <div className="flex justify-between items-center w-full text-body text-sm">
                <p>
                  <span>Terms & Conditions</span> | <span>Privacy Policy</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} Pranto. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
