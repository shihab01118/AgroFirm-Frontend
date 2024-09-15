import banner from "../../assets/images/Banner.png";
import Button from "../shared/Button/Button";
import Features from "./Features";

const Banner = () => {
  return (
    <section
      className="bg-cover lg:bg-center bg-right bg-no-repeat lg:min-h-[780px] flex relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="max-w-[1200px] w-full mx-auto mt-[130px] mb-24 px-4 lg:px-0 text-white">
        <div className="w-full max-w-xl">
          <p className="text-sm px-5 py-1 border border-white rounded-full font-signika w-fit">
            Believe In Quality!
          </p>
          <h1 className="font-medium font-signika text-8xl my-6">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-sm leading-6 mb-6 border-t border-white border-opacity-40 pt-2">
            Lorem ipsum dolor sit amet consectetur. Id varius a at sit morbi
            volutpat semper. Massa pellentesque dolor gravida eleifend nec
            fringilla.
          </p>
          <Button value="Contact Us" white />
        </div>
      </div>
      <div className="lg:absolute z-40 left-1/2 transform lg:-translate-x-1/2 w-full -bottom-24">
        <Features />
      </div>
    </section>
  );
};

export default Banner;
