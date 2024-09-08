// icons
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaClock, FaTwitter } from "react-icons/fa6";
import Button from "../Button/Button";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className=" bg-primary hidden lg:block">
        <div className="h-12 max-w-[1200px] w-full lg:mx-auto flex justify-between items-center">
          {/* navbar top-left */}
          <div className="flex gap-6">
            <div className="flex gap-2.5 items-center text-white text-sm">
              <FaPhoneAlt />
              <p>
                <a href="tel:800 000 0000">800 000 0000</a>
              </p>
            </div>
            <div className="flex gap-2.5 items-center text-white text-sm">
              <FaEnvelope />
              <p>
                <a href="mailto:example@gmail.com">example@gmail.com</a>
              </p>
            </div>
            <div className="flex gap-2.5 items-center text-white text-sm">
              <FaClock />
              <p>Mon - Fri: 9:00 - 19:00</p>
            </div>
          </div>

          {/* navbar top-right */}
          <div className="flex items-center justify-center gap-6 text-white">
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
      </div>

      {/* navbar top for mobile device */}
      <div className="flex justify-between lg:hidden bg-primary py-2">
        <div className="px-4 flex items-center justify-center gap-4 text-white">
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
        <div className="pr-4 flex flex-col items-end justify-center text-sm">
          <div className="flex gap-2.5 items-center text-white text-sm">
            <FaPhoneAlt />
            <p>
              <a href="tel:800 000 0000">800 000 0000</a>
            </p>
          </div>
          <div className="flex gap-2.5 items-center text-white text-sm">
            <FaEnvelope />
            <p>
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* navbar bottom */}
      <div className="bg-white hidden lg:block">
        <div className="max-w-[1200px] w-full mx-auto py-2.5 flex justify-between items-center">
          {/* logo */}
          <div>
            <img src="/logo.png" alt="Pranto" />
          </div>
          {/* navlinks */}
          <div>
            <ul className="flex items-center gap-10 list-none text-nav">
              <li className="font-semibold">Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Products</li>
            </ul>
          </div>
          {/* button */}
          <Button value="Get In Touch" secondary />
        </div>
      </div>

      {/* navbar bottom for mobile */}
      <div className="flex justify-between items-center bg-white px-4 py-2.5 lg:hidden">
        {/* logo */}
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="relative">
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <RxCross2 className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl text-primary" />
            )}
          </div>
          {open && (
            <div className="absolute right-0 mt-1.5 bg-white shadow rounded p-4  navlinks z-50 w-[183px]  text-sm">
              <ul className="flex flex-col gap-4 list-none text-nav pb-4">
                <li className="font-semibold">Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Products</li>
              </ul>
              <Button value="Get In Touch" secondary />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
