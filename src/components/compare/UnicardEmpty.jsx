import React from "react";

const UnicardEmpty = ({...props}) => {
  return (
    <div {...props} className="unicard__card slide">
      <div className="unicard__icon"></div>
      <div className="unicard__text">
        <p className="unicard__text-el">Добавить</p>
        <p className="unicard__text-el">университет</p>
      </div>
    </div>
  );
}

export default UnicardEmpty