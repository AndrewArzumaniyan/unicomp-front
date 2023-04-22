import React from "react";
import "../../styles/hero.scss";
import { Link } from "react-router-dom";
import "swiper/css/pagination";

const Hero = ({ slides }) => {
  function smoothScrollLink(anchor) {
    const blockId = anchor.getAttribute('href')
    
    document.querySelector(''+blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  function handleClick(event) {
    event.preventDefault();
    setTimeout(smoothScrollLink, 10, event.target);
  }

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__slide">
          <div className="hero__bg"></div>
          <div className="hero__box">
            <h1 className="hero__title">
              {slides.find((slide) => slide.current === true).text}
              <span>УНИВЕРСИТЕТОВ</span>
            </h1>
            <a onClick={handleClick} href="#main" className="hero__btn btn">перейти</a>
          </div>
        </div>
        <div className="hero__pagination">
          {slides.map((slide, i) => (
            <Link 
              key={`hero-${i}`}
              to={slide.link} 
              className={`hero__pagination-bullet ${slide.current ? 'active' : ''}`}
            >
              <span>0{i+1}</span> {slide.paginationName}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;