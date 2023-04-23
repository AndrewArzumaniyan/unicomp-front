import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

import unImgs from "../../images/images.js";

const MobileTable = ({ universities, rows, size }) => {
  return (
    <section id="table" className="mobile-table">
      <div className="container mobile-table__container">
        <Swiper
          modules= {[Navigation, Grid]}
          loop={true}
          navigation={{
            nextEl: '.mobile-table__btn-next',
            prevEl: '.mobile-table__btn-prev',
          }}
          allowTouchMove={false}
        >
          {universities.map((university) => (
            <SwiperSlide>
              <div className="mobile-table__slide-bg" style={{backgroundImage: `url(${unImgs[university.img]})`}}></div>
              <h3 className="mobile-table__slide-title">
                {university.visibleName ? university.visibleName : university.name}
              </h3>
            </SwiperSlide>
          ))}
          <div class="mobile-table__btn-prev swiper-button-prev"></div>
          <div class="mobile-table__btn-next swiper-button-next"></div>
        </Swiper>

  

        {rows.map((row) => (
          <div className="mobile-table__info">
            <h4 className="mobile-table__info-title">
              {row[0]}
            </h4>
            <Swiper
              modules= {[Navigation, Grid]}
              loop={true}
              navigation={{
                nextEl: '.mobile-table__btn-next',
                prevEl: '.mobile-table__btn-prev',
              }}
              allowTouchMove={false}
            >
              {row.map((el, ind) => {
                if (ind === 0) 
                  return ''
                return (
                  <SwiperSlide>
                    {el}
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MobileTable