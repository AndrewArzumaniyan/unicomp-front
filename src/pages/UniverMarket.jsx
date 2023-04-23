import React, { useState, useEffect } from "react";
import "../styles/global.scss"
import MarketMain from "../components/univer-market/MarketMain";
import Header from "../components/UI/Header.jsx";
import HeaderBurger from "../components/UI/HeaderBurger";
import Footer from "../components/UI/Footer";
import autoScroll from "./autoScroll.js";

const UniverMarket = () => {
  autoScroll(1300);

  let [isBurgerOpen, setIsBurgerOpen] = useState(false);
  let [isResize, setIsResize] = useState(window.innerWidth)

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
      <MarketMain isResize={isResize}/>
      <Footer/>
    </div>
  );
}

export default UniverMarket