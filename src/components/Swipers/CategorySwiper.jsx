import React, {useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Scrollbar, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CategorySwiper = ({allCategories, checkedCategories, setCheckedCategories, categories}) => {
  let [checked, setChecked] = useState([])

  const changeChecked = (event) => {
    let res = [...checked]
    res[event.target.dataset.index] = !res[event.target.dataset.index]

    setChecked(res)
    let tmpCheckeds = [...checkedCategories]

    if (res[event.target.dataset.index]) {
      let tmp = categories.find((category) => category.id === event.target.id)
      tmpCheckeds.push(tmp)
    } else {
      tmpCheckeds = tmpCheckeds.filter((el) => el.id !== event.target.id)
    }
    setCheckedCategories(tmpCheckeds)
  }

  useEffect(() => { 
    let tmp = []
    
    if (allCategories) {
      for (let i = 0; i < categories.length; i++) {
        tmp.push(true)
      }
      setCheckedCategories(categories)
    } else {
      for (let i = 0; i < categories.length; i++) {
        tmp.push(false)
      }
      setCheckedCategories([])
    }

    setChecked(tmp)
  }, [allCategories])

  return (
    <Swiper
      modules={[Grid, Scrollbar, Mousewheel]}
      grabCursor={true}
      mousewheel={true}
      scrollbar={true}
      grid={{
        rows: 2
      }}
      breakpoints={{
        1140: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        820 : {
          slidesPerView: 4,
          spaceBetween: 30
        },
        700: {
          slidesPerView: 3.2,
          spaceBetween: 15,
        },
        400: {
          slidesPerView: 2.2,
          spaceBetween: 15
        },
        0: {
          slidesPerView: 1.5,
          spaceBetween: 15
        }
      }}
    >
      {categories.map(({ id, name }, index) => (
        <SwiperSlide key={index} onClick={changeChecked} data-index={index} id={`${id}`} className={`category__slider-slide ${checked[index] ? 'checked' : ''}`}>
          {name}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CategorySwiper