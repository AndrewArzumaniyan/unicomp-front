import React from "react";

const Radio = ({elem, setSelected, name}) => {
  return (
    <label htmlFor={`radio-${elem}`} className="checkbox__label">
      <input 
        id={`radio-${elem}`}
        name={`${name}`}
        type="radio"
        className="checkbox__label-input" 
        onChange={(el) => {setSelected(elem)}}
      />
      <span className="checkbox__label-icon"></span>
      <span className="checkbox__label-text">{elem}</span>
    </label>
  );
}

export default Radio