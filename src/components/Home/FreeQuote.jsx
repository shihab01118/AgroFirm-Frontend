import FreeQuoteBg from "../../assets/images/ServicesBG.png";
import vegetablePic from "../../assets/images/FreeQuote.png";
import { MdMessage } from "react-icons/md";
import IconButton from "../shared/IconButton/IconButton";

// styles
import "./FreeQuote.css";

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
          <h3 className="text-white text-2xl lg:text-3xl font-medium leading-[36px] lg:leading-[48px] mt-4 mb-10 lg:mr-16">
            Agriculture Matters to the Future of Development
          </h3>
          <div className="relative">
            <img
              src={vegetablePic}
              alt="free-quote"
              className="rounded-[40px]"
            />
            <div className="absolute bottom-0 right-0 lg:right-[72px]">
              <IconButton Icon={MdMessage} />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <p className="text-white leading-7 max-w-lg mb-10 pt-6">
            Lorem ipsum dolor sit amet consectetur. Amet mauris nam ornare
            tempus. Enim ultrices massa nibh ut adipiscing eu dignissim erat.
          </p>
          <div className="flex flex-col">
            {quotes.map((item) => (
              <div
                key={item?.id}
                className="hover:bg-white hover:rounded-lg px-2 lg:px-4 py-5 border-b border-white border-opacity-20 flex items-center gap-3.5 lg:gap-8 group transition-all duration-150 row"
              >
                <h4 className="text-title font-medium text-4xl lg:text-7xl group-hover:text-primary number w-12 lg:w-auto">
                  {item?.no}
                </h4>
                <p className="text-white group-hover:text-primary leading-7 lg:text-xl font-medium min-w-[135px] lg:w-auto">{item?.title}</p>
                <p className="text-white text-sm lg:text-base text-opacity-60 group-hover:text-body leading-6">{item?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeQuote;

const quotes = [
  {
    id: 1,
    no: "01",
    title: "Schedule Your Experience",
    description: "Quisqu tell us risus adpis viera bibe um urna.",
  },
  {
    id: 2,
    no: "02",
    title: "Get Profession Advice",
    description: "Quisqu tell us risus adpis viera bibe um urna.",
  },
  {
    id: 3,
    no: "03",
    title: "Meet Our Expert Farmer",
    description: "Quisqu tell us risus adpis viera bibe um urna.",
  },
  {
    id: 4,
    no: "04",
    title: "Now Get Best Products",
    description: "Quisqu tell us risus adpis viera bibe um urna.",
  },
];
