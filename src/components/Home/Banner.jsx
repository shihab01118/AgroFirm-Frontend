import banner from "../../assets/images/Home-Banner.jpg";
import Button from "../shared/Button/Button";
import Features from "./Features";

const Banner = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat min-h-[75vh] lg:min-h-[780px] flex items-center lg:items-start relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="max-w-[1200px] w-full mx-auto pt-24 lg:pt-[130px] pb-24 px-4 lg:px-0 text-white relative">
        <div className="w-full max-w-2xl">
          <p className="text-sm px-5 py-1 border border-white rounded-full font-noto w-fit">
            টেকসই কৃষিক্ষেত্রের অগ্রদূত
          </p>
          <h1
            className="font-semibold font-noto text-[45px] lg:text-7xl my-6"
            style={{
              lineHeight: "normal",
              "@media (min-width: 1024px)": { lineHeight: "88px" },
            }}
          >
            প্রান্ত এগ্রো রিসার্চ অ্যান্ড ডেভেলাপমেন্ট ইনিশিয়েটিভ
          </h1>
          <p className="text-sm leading-6 mb-6 border-t border-white border-opacity-40 pt-2 font-noto">
            বাংলাদেশের কৃষি খাতে বিপ্লব আনার লক্ষ্যে কুমিল্লা জেলার মেঘনা
            উপজেলার হরিপুরে নির্মিত হয়েছে প্রান্ত রিসার্চ অ্যান্ড ডেভেলাপমেন্ট
            ইনিশিয়েটিভ। কৃষি পদ্ধতিকে আধুনিক ও বিকশিত করতে প্রতিশ্রুতিবদ্ধ
            প্রান্ত।
          </p>
          <Button value="Contact Us" white />
        </div>
      </div>
      <div className="lg:absolute z-40 left-1/2 transform lg:-translate-x-1/2 w-full -bottom-24 hidden lg:block">
        <Features />
      </div>
    </section>
  );
};

export default Banner;
