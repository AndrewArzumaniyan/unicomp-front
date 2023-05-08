import React, { useEffect, useState } from 'react';
import Main from '../components/compare/CompareMain.jsx';
import HeaderBurger from '../components/UI/HeaderBurger.jsx';
import Footer from '../components/UI/Footer.jsx';
import Header from "../components/UI/Header.jsx";
import autoScroll from './autoScroll.js';

const Compare = () => {
  autoScroll(1300);

  let [isBurgerOpen, setIsBurgerOpen] = useState(false);
  let [isResize, setIsResize] = useState(window.innerWidth);

  useEffect(() => {
    // window.addEventListener('resize', () => {
      setIsResize(window.innerWidth)
    // })
  }, [window.innerWidth])

  const changeIsBurgerOpen = () => {
    setIsBurgerOpen(!isBurgerOpen);
  }

  return (
    <div className="wrapper">
      {isResize < 700
        ? <HeaderBurger isBurgerOpen={isBurgerOpen} changeIsBurgerOpen={changeIsBurgerOpen}></HeaderBurger>
        : ''
      }
      <Header isBurgerOpen={isBurgerOpen}/>

      <Main isResize={isResize}/>

      <Footer></Footer>
    </div>
  );
}

export default Compare;
