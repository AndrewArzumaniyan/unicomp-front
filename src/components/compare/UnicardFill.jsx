import React from "react";
import unImgs from "../../images/images.js";

const UnicardFill = ({univer, ...props}) => {
  return (
    <div {...props} className="unicard__card slide">
      <div 
        className="unicard__card-bg"
        style={{backgroundImage: `url(${unImgs[univer.img]})`}}
      > 
      </div>
      <p className="unicard__card-name">
        {univer.visibleName ? (univer.visibleName.trim()) : (univer.name.trim())}
      </p>
    </div>
  );
}

export default UnicardFill