import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

// components
import Banner from "../../components/Home/Banner";
import Features from "../../components/Home/Features";
import WhoWeAre from "../../components/Home/WhoWeAre";
import Services from "../../components/Home/Services";
import Store from "../../components/Home/Store";
import FreeQuote from "../../components/Home/FreeQuote";

// icons
import { FaArrowUpLong } from "react-icons/fa6";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Track the scroll position and show the button if scrolled beyond 100vh
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Banner />
      <div className="py-20 lg:hidden">
        <Features />
      </div>
      <div id="whoweare">
        <WhoWeAre />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="store">
        <Store />
      </div>
      <FreeQuote />
      <div
        onClick={scrollToTop}
        className={`fixed bottom-2 right-2 lg:bottom-5 lg:right-5 z-50 ${
          isVisible ? "block" : "hidden"
        }`}
        title="Scroll to top"
      >
        <button
          className={`w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-secondary flex justify-center items-center transition duration-200 hover:bg-secondaryDark `}
        >
          <FaArrowUpLong className={`text-title text-2xl`} />
        </button>
      </div>
    </>
  );
};

export default Home;
