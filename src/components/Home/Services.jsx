import { useEffect, useState } from "react";

// components
import IconButton from "../shared/IconButton/IconButton";

// icons
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";

// images
import ServicesBG from "../../assets/images/ServicesBG.png";
import Service1 from "../../assets/images/Card1.png";
import Service2 from "../../assets/images/Card2.png";
import Service3 from "../../assets/images/Card3.png";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 768) {
          setCardsToShow(1); // Small screen
        } else {
          setCardsToShow(3); // Large screen
        }
      }
    };
  
    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once to set the initial state
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isLeftDisabled = currentIndex === 0;
  const isRightDisabled = currentIndex >= cards.length - cardsToShow;

  const handleLeftClick = () => {
    if (!isLeftDisabled) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (!isRightDisabled) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section
      className="bg-center bg-cover bg-no-repeat min-h-screen py-24 flex items-center justify-center"
      style={{ backgroundImage: `url(${ServicesBG})` }}
    >
      <div className="max-w-[1200px] w-full lg:mx-auto">
        <div className="mb-6 lg:mb-12 flex flex-col lg:flex-row gap-8 justify-between px-4 lg:px-0">
          <div>
            <p className="text-primary bg-white px-3 py-1 rounded-full w-fit text-sm font-medium mb-4">
              Our Services
            </p>
            <h3 className="text-white font-medium text-2xl lg:text-3xl leading-[36px] lg:leading-[48px]">
              Best Agricultural Services
            </h3>
          </div>
          <div className="flex gap-3.5 mt-auto justify-end">
            <div onClick={handleLeftClick}>
              <IconButton Icon={FaArrowLeft} small disabled={isLeftDisabled} />
            </div>
            <div onClick={handleRightClick}>
              <IconButton
                Icon={FaArrowRight}
                small
                disabled={isRightDisabled}
              />
            </div>
          </div>
        </div>

        {/* services cards */}
        <div className="flex overflow-hidden w-full">
          <div
            className="flex transition-transform duration-300 lg:gap-6 ease-in-out w-full"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-none p-5 pb-8 w-full lg:w-fit bg-white rounded-2xl relative"
              >
                <img
                  src={card.image}
                  alt="service card"
                  className="rounded-2xl mb-8 w-full lg:w-fit"
                />
                <div className="flex gap-1.5 items-center mb-3">
                  <GoDotFill className="text-secondary" />
                  <span className="uppercase text-sm text-[#999999]">
                    {card.category}
                  </span>
                </div>
                <h3 className="text-title font-medium text-2xl mb-4">
                  {card.title}
                </h3>
                <p className="text-body leading-7 max-w-[300px]">
                  {card.description}
                </p>
                <div className="absolute bottom-2 right-2">
                  <IconButton Icon={FiArrowUpRight} small />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

const cards = [
  {
    id: 1,
    category: "Fertilizer",
    title: "Harvest Concepts",
    description:
      "Nullam porta enim vel tellus comm, eget laoreet odio ultrices.",
    image: Service1,
    link: "#",
  },
  {
    id: 2,
    category: "Fruits",
    title: "Farming Products",
    description:
      "Nullam porta enim vel tellus comm, eget laoreet odio ultrices.",
    image: Service2,
    link: "#",
  },
  {
    id: 3,
    category: "Fertilizer",
    title: "Soil Fertilization",
    description:
      "Nullam porta enim vel tellus comm, eget laoreet odio ultrices.",
    image: Service3,
    link: "#",
  },
  {
    id: 4,
    category: "Fruits",
    title: "Farming Products",
    description:
      "Nullam porta enim vel tellus comm, eget laoreet odio ultrices.",
    image: Service2,
    link: "#",
  },
  {
    id: 5,
    category: "Fertilizer",
    title: "Harvest Concepts",
    description:
      "Nullam porta enim vel tellus comm, eget laoreet odio ultrices.",
    image: Service1,
    link: "#",
  },
  {
    id: 6,
    category: "Fruits",
    title: "Farming Products",
    description:
      "Nullam porta enim vel tellus comm, eget laoreet odio ultrices.",
    image: Service2,
    link: "#",
  },
];
