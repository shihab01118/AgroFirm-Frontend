import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// images
import StoreBg from "../../assets/images/StoreBG.png";
import Vegetables from "../../assets/images/Vagitables.png";
import Slide1 from "../../assets/slider-images/slider-1.jpeg";
import Slide2 from "../../assets/slider-images/slider-2.jpeg";
import Slide3 from "../../assets/slider-images/slider-3.jpeg";
import Slide4 from "../../assets/slider-images/slider-4.jpeg";
import Slide5 from "../../assets/slider-images/slider-5.jpeg";
import Slide6 from "../../assets/slider-images/slider-6.jpeg";
import Slide7 from "../../assets/slider-images/slider-7.jpeg";
import Slide8 from "../../assets/slider-images/slider-8.jpeg";

// components
import Button from "../shared/Button/Button";

// styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Store = () => {
  return (
    <section
      className="bg-cover lg:bg-center bg-right bg-no-repeat lg:min-h-screen relative py-24"
      style={{ backgroundImage: `url(${StoreBg})` }}
    >
      {/* store section */}
      <div className="max-w-[1200px] lg:mx-auto w-full px-4 lg:p-8 lg:bg-white rounded-[40px] flex flex-col gap-16 lg:gap-0 lg:flex-row items-center h-fit ">
        <div className="w-full lg:w-1/2">
          <img src={Vegetables} alt="vegetables" className="rounded-lg" />
        </div>
        <div className="w-full lg:w-1/2 text-left lg:ml-20">
          <p className="py-1 px-3 rounded-full text-sm bg-[#F8F7F0] text-primary font-medium w-fit mb-4">
            Our Store
          </p>
          <h3 className="text-title font-medium text-2xl lg:text-3xl max-w-[365px] leading-[36px] lg:leading-[48px] mb-5">
            Organic Vegetables in Our Store
          </h3>
          <p className="text-body leading-7 mb-8">
            Lorem ipsum dolor sit amet consectetur. Urna nam congue tempor
            aenean in molestie elementum eget.
          </p>
          <Button value="Buy Now" primary />
        </div>
      </div>

      {/* slider */}
      <div className="mt-24 max-w-[1200px] lg:mx-auto w-full px-4">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide} alt="img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Store;

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];
