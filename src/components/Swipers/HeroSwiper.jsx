import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"

const HeroSwiper = ({slides}) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="swiper-pagination-bullet bullet-text"><span>0${index + 1}</span> ${slides[index].paginationName}</span>`;
    },
  };

  return (
    <Swiper
      modules={[Pagination, EffectFade]}
      effect="fade"
      grabCursor={true}
      simulateTouch={false}
      speed={800}
      pagination={pagination}
    > 
    {slides.map((slide) => (
      <SwiperSlide key={slide.paginationName}>
        <div className="hero__slide-bg"></div>
        <div className="hero__slide-box">
          <h1 className="hero__title">{slide.text}<span>УНИВЕРСИТЕТОВ</span></h1>
          <Link to={slide.link} className="hero__btn btn">перейти</Link>
        </div>
      </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSwiper