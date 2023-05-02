import React from "react";
import "../../styles/gidnavigation.scss";
import images from "../../images/images.js";

const GidNavigation = ({ openModal, selectCity }) => {
  const scroll = (el) => {
    if (!selectCity)
      return
    let to = document.getElementById(el.target.dataset.scrollto)
    to.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <section id="main" className="navigation">
      <div className="gid-container">
        <div className="btn-box">
          <span onClick={openModal} className="btn">Выбрать город</span>
        </div>
        {/* <h2 className="title">Собираем информацию. Ждите обновлений!)</h2> */}
        <div className="navigation__wrapper">
          <div className="navigation__column navigation__column-left">
            <div className="navigation__element" data-scrollto="food" onClick={scroll}>
              <div
                data-scrollto="food"
                className="navigation__element-bg"
                style={{backgroundImage: `url(${images["food.png"]}`}}
              ></div>
              <h3 className="navigation__element-title" data-scrollto="food">
                еда
              </h3>
            </div>

            <div className="navigation__element" data-scrollto="relax" onClick={scroll}>
              <div 
                data-scrollto="relax"
                className="navigation__element-bg"
                style={{backgroundImage: `url(${images["relax.png"]}`}}
              ></div>
              <h3 className="navigation__element-title" data-scrollto="relax">
                отдых
              </h3>
            </div>
          </div>

          <div className="navigation__element navigation__element-center" data-scrollto="accomodation" onClick={scroll}>
            <div 
              data-scrollto="accomodation"
              className="navigation__element-bg"
              style={{backgroundImage: `url(${images["accomodation.png"]}`}}
            ></div>
            <h3 className="navigation__element-title" data-scrollto="accomodation">
              жилье
            </h3>
          </div>

          <div className="navigation__column navigation__column-right">
            <div className="navigation__element" data-scrollto="application" onClick={scroll}>
              <div 
                data-scrollto="application"
                className="navigation__element-bg"
                style={{backgroundImage: `url(${images["application.png"]}`}}
              ></div>
              <h3 className="navigation__element-title" data-scrollto="application">
                приложения
              </h3>
            </div>

            <div className="navigation__element" data-scrollto="transport" onClick={scroll}>
              <div 
                data-scrollto="transport"
                className="navigation__element-bg"
                style={{backgroundImage: `url(${images["transport.png"]}`}}
              ></div>
              <h3 className="navigation__element-title" data-scrollto="transport">
                транспорт
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GidNavigation