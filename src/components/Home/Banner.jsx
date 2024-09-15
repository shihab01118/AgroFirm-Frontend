import banner from "../../assets/images/Banner.png";
import Button from "../shared/Button/Button";

const Banner = () => {
  return (
    <section
      className="bg-cover lg:bg-center bg-right bg-no-repeat lg:min-h-[750px] flex items-center lg:relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="max-w-[1200px] w-full mx-auto py-24 px-4 lg:px-0 text-white">
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
    </section>
  );
};

export default Banner;
