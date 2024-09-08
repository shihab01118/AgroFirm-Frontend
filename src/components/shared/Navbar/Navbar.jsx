// icons
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaClock, FaTwitter } from "react-icons/fa6";

const Navbar = () => {
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
        <div className="px-4 flex items-center justify-center gap-4">
          <a href="#">
            <FaTwitter className="cursor-pointer text-lg" />
          </a>
          <a href="#">
            <FaInstagram className="cursor-pointer text-lg" />
          </a>
          <a href="#">
            <FaFacebook className="cursor-pointer text-lg" />
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
    </nav>
  );
};

export default Navbar;
