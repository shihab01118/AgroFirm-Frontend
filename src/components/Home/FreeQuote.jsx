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
          <p className="text-white leading-6 max-w-lg mb-10 pt-6 font-noto">
            প্রান্ত ফসলের উৎপাদনশীলতা বাড়াতে ও কৃষকদের প্রশিক্ষণ দিয়ে সহায়তা
            করে। তারা আধুনিক কৃষি প্রযুক্তি ব্যবহার করে উৎপাদনশীলতা বাড়ায় এবং
            কৃষকদের প্রশিক্ষণ ও সহায়তা প্রদান করে।
          </p>
          <div className="flex flex-col">
            {quotes.map((item) => (
              <div
                key={item?.id}
                className="hover:bg-white hover:rounded-lg px-2 lg:px-4 py-5 border-b border-white border-opacity-20 flex items-center gap-3.5 lg:gap-8 group transition-all duration-150 row font-noto"
              >
                <h4 className="text-title font-medium text-4xl lg:text-7xl group-hover:text-primary number w-12 lg:w-auto">
                  {item?.no}
                </h4>
                <p className="text-white group-hover:text-primary leading-7 lg:text-xl font-medium min-w-[135px] lg:w-auto">
                  {item?.title}
                </p>
                <p className="text-white text-xs lg:text-sm text-opacity-60 group-hover:text-body leading-6">
                  {item?.description}
                </p>
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
    no: "০১",
    title: "ফসল গবেষণা ও উন্নয়ন",
    description:
      "প্রান্ত বিভিন্ন উচ্চ ফলনশীল ও পুষ্টিকর ফসল নিয়ে ব্যাপক গবেষণা করে। ফসলগুলির উৎপাদন এবং গুণমান উন্নত করাই প্রান্তর লক্ষ্য। ",
  },
  {
    id: 2,
    no: "০২",
    title: "কৃষি প্রযুক্তি",
    description:
      "উৎপাদনশীলতা এবং দক্ষতা বাড়াতে প্রান্ত আধুনিক কৃষি যন্ত্রপাতি, নির্ভুল কৃষি এবং টেকশই কৃষি পদ্ধতি ব্যাবহার করছে।",
  },
  {
    id: 3,
    no: "০৩",
    title: "কৃষক সাবলীকরন",
    description:
      "প্রান্ত কৃষকদের প্রশিক্ষন এবং সহায়তা প্রদান করে, তাদের টেকশই কৃষি পদ্ধতি গ্রহণ এবং তাদের জীবনযাপন উন্নত করার জন্য জ্ঞান ও দক্ষতা দিয়ে কাজ করছে।",
  },
  {
    id: 4,
    no: "০৪",
    title: "বাজার বৃদ্ধি",
    description:
      "কৃষকদের তাদের কৃষি পণ্যের জন্য ন্যায্য মূল্য নিশ্চিত করে দেশীয় এবং আন্তর্জাতিক বাজারে এক্সেস করতে সহায়তা করা হয় এবং রপ্তানিতে উৎসাহিত করা হয়।",
  },
];
