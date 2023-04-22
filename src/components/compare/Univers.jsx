import React from "react";
import "../../styles/univers.scss"

const Univers = () => {
  return (
    <section className="univers">
      <div className="color"></div>
      <div className="container">
        <h2 className="univers__title title">ВЫБРАТЬ ВУЗЫ</h2>
        <h3 className="univers__subtitle">Рекомендованные</h3>
      </div>
      <div className="univers__advertisement">
        Тут могла бы быть ваша реклама!
      </div>
    </section>
  );
}

export default Univers