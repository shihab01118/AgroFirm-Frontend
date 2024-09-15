import FreeQuoteBg from "../../assets/images/ServicesBG.png";
import vegetablePic from "../../assets/images/FreeQuote.png";
import { MdMessage } from "react-icons/md";
import IconButton from "../shared/IconButton/IconButton";

const FreeQuote = () => {
  return (
    <section
      className="bg-center bg-cover bg-no-repeat min-h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${FreeQuoteBg})` }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 lg:px-0 py-20 flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2">
          <span className="px-3 py-1 rounded-full bg-white text-primary text-sm font-medium">
            Free Quote
          </span>
          <h3 className="text-white text-[32px] font-medium leading-[48px] mt-2 mb-10 mr-16">
            Agriculture Matters to the Future of Development
          </h3>
          <div className="relative">
            <img
              src={vegetablePic}
              alt="free-quote"
              className="rounded-[40px]"
            />
            <div className="absolute bottom-0 right-[72px]">
              <IconButton Icon={MdMessage} />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
            <p className="text-white leading-7 max-w-lg">Lorem ipsum dolor sit amet consectetur. Amet mauris nam ornare tempus. Enim ultrices massa nibh ut adipiscing eu dignissim erat.</p>
        </div>
      </div>
    </section>
  );
};

export default FreeQuote;
