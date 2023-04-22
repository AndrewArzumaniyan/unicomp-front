import React from "react";

const HeaderBurger = ({ isBurgerOpen, changeIsBurgerOpen }) => {
  return (
    <div 
      onClick={changeIsBurgerOpen} 
      className={`header__burger ${isBurgerOpen ? "active" : ''}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default HeaderBurger