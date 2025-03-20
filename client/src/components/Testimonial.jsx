import React from "react";
import { testimonialsData } from "../assets/assets";
import { Quote, Upload } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:max-w-[90%] lg:max-w-[80%] mx-auto mt-10 sm:mt-16 md:mt-20 lg:mt-24">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl text-center leading-tight text-gray-900 mb-6 sm:mb-10 md:mb-16">
        Customer Testimonials
      </h1>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="my-6 sm:my-8 md:my-10 lg:my-12 pb-10">
        {testimonialsData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-full p-4 sm:p-5 md:p-6 bg-gray-50 rounded-lg shadow-md text-center flex flex-col mb-14">
              <div className="mb-3 sm:mb-4 flex justify-start ">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="mb-4 text-sm  text-start flex-grow">{item.text}</p>
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src={item.image}
                  alt={`${item.author} avatar`}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                />
                <div className="text-left">
                  <p className="font-semibold text-xs sm:text-sm md:text-base">
                    {item.author}
                  </p>
                  <p className="text-xs text-gray-600">{item.jobTitle}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Call to Action */}
      <div className="flex flex-col items-center text-center mt-8 sm:mt-10 md:mt-12 mb-10 sm:mb-12 md:mb-16">
        <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight text-gray-900 mb-4 sm:mb-6 md:mb-8">
          See the magic. Try now
        </h1>
        <button className="cursor-pointer rounded-full flex items-center bg-black text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 gap-2 hover:opacity-70 transition-all duration-300 w-max">
          <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm md:text-base">
            Upload your image
          </span>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
