import React from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import eCommerce from "../../Images/ecommerce.png";
import HOC from "../../Images/hoc.png";
import sidebar from "../../Images/sidebar.png";
import "swiper/css";
export const Projects = () => {
  const images = [
    {
      src: eCommerce,
    },
    {
      src: sidebar,
    },
    {
      src: HOC,
    },
  ];
  function ImagesItem(data) {
    return (
      <SwiperSlide className="swiper-slide">
        <img src={data?.src} alt="error" />
      </SwiperSlide>
    );
  }
  return (
    <div className="portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* {images.map((item) => ImagesItem(item))} */}
        <SwiperSlide>
          <img src={HOC} alt="error" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={eCommerce} alt="error" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sidebar} alt="error" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sidebar} alt="error" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
