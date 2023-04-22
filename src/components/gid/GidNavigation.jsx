import React from "react";
import "../../styles/gidnavigation.scss";
import images from "../../images/images.js";

const GidNavigation = () => {
  return (
    <section id="main" className="navigation">
      <div className="gid-container">
        <div className="navigation__wrapper">
          <div className="navigation__column navigation__column-left">
            <div className="navigation__element">
              <div 
                className="navigation__element-bg"
                style={{backgroundImage: `url(${images["food.png"]}`}}
              ></div>
              <h3 className="navigation__element-title">
                еда
              </h3>
            </div>

            <div className="navigation__element">
              <div 
                className="navigation__element-bg"
                style={{backgroundImage: `url(${images["relax.png"]}`}}
              ></div>
              <h3 className="navigation__element-title">
                отдых
              </h3>
            </div>
          </div>

          <div className="navigation__element navigation__element-center">
            <div 
              className="navigation__element-bg"
              style={{backgroundImage: `url(${images["accomodation.png"]}`}}
            ></div>
            <h3 className="navigation__element-title">
              жилье
            </h3>
          </div>

          <div className="navigation__column navigation__column-right">
            <div className="navigation__element">
              <div 
                className="navigation__element-bg"
                style={{backgroundImage: `url(${images["application.png"]}`}}
              ></div>
              <h3 className="navigation__element-title">
                приложения
              </h3>
            </div>

            <div className="navigation__element">
              <div 
                className="navigation__element-bg"
                style={{backgroundImage: `url(${images["transport.png"]}`}}
              ></div>
              <h3 className="navigation__element-title">
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