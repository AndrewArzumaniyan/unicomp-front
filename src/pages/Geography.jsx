import React, { useState, useEffect } from "react";
import "../styles/global.scss"
import GeographyMain from "../components/geography/GeographyMain";
import Header from "../components/UI/Header.jsx";
import HeaderBurger from "../components/UI/HeaderBurger";
import Footer from "../components/UI/Footer";
import autoScroll from "./autoScroll.js";

const Geogrpahy = () => {
  // autoScroll(1200)

  let [isBurgerOpen, setIsBurgerOpen] = useState(false);
  let [isResize, setIsResize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', (el) => {
      setIsResize(el.target.innerWidth)
    })
  })

  const changeIsBurgerOpen = () => {
    setIsBurgerOpen(!isBurgerOpen);
  }

  return (
    <div className="wrapper">
      {isResize < 700
        ? <HeaderBurger isBurgerOpen={isBurgerOpen} changeIsBurgerOpen={changeIsBurgerOpen}></HeaderBurger>
        : ''
      }
      <Header/>
      <GeographyMain/>
    </div>
  );
}

export default Geogrpahy