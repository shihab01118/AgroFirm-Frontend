import CountUp from "react-countup";

// images
import sectionBG from "../../assets/images/WhoWeAreBG.png";
import Farmer from "../../assets/images/WhoWeAre.png";

// icons
import { FaCheckCircle } from "react-icons/fa";
import Button from "../shared/Button/Button";

const WhoWeAre = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${sectionBG})` }}
    >
      <div
        className="max-w-[1200px] w-full mx-auto lg:pt-[180px] py-24 px-4 lg:px-0 flex flex-col lg:flex-row justify-between
       items-center gap-16"
      >
        <div className="w-full relative">
          <img src={Farmer} alt="Farmer" />

          <div className="bg-secondary absolute right-0 bottom-0 w-[41%] h-[31%] rounded-[28px] px-3 py-1 lg:p-4 ">
            <div className="text-list font-signika font-semibold text-5xl lg:text-7xl border-b-2 w-fit border-b-[#666666] border-opacity-30 pb-1 mx-auto lg:mx-0">
              <CountUp className="" end={635} enableScrollSpy />
              <span>+</span>
            </div>
            <p className="text-[#666666] mt-2 lg:mt-6 text-[13px] lg:text-base text-center lg:text-left">Growth Tons of Harvest</p>
          </div>
        </div>
        <div className="w-full">
          <p className="px-3 py-1 bg-white rounded-full text-sm text-primary w-fit font-medium">
            Who We Are
          </p>
          <h2 className="text-2xl lg:text-3xl font-medium mt-4 mb-5 leading-[36px] lg:leading-[48px]">{`We're Committed to Caring`}</h2>
          <p className="text-body text-justify leading-7">
            Greetings from Dosner Organic Farms.We distribute only organic herbs
            and produce directly to consumers.
          </p>
          <div className="mt-8 mb-10 grid grid-cols-1 lg:grid-cols-2 text-list">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="text-secondary text-xl" />
                <h4 className="text-title font-medium">Gourmet Mushrooms</h4>
              </div>
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="text-secondary text-xl" />
                <h4 className="text-title font-medium">
                  Natural Healthy Products
                </h4>
              </div>
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="text-secondary text-xl" />
                <h4 className="text-title font-medium">Lavender Farming</h4>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="text-secondary text-xl" />
                <h4 className="text-title font-medium">
                  Best Quality Standards
                </h4>
              </div>
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="text-secondary text-xl" />
                <h4 className="text-title font-medium">
                  Fertilizer Distribution
                </h4>
              </div>
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="text-secondary text-xl" />
                <h4 className="text-title font-medium">Organic Fertilizer</h4>
              </div>
            </div>
          </div>
          <div>
            <Button value="Know More" primary />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
