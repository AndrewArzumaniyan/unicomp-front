import React from "react";
import Modal from "../UI/Modal";
import unImgs from "../../images/images.js"
import "../../styles/marketModal.scss"

const GeogrpahyModal = ({visible, delVisible, univer}) => {
  function createMarketDescr(field, title) {
    if (!field || field === '-')
      return
    return (
      <div className="market-modal__descr-box">
        <h5 className="market-modal__subtitle">
          {title}
        </h5>
        <p className="market-modal__descr-info">
          {field}
        </p>
      </div>
    )
  } 

  return (
    <Modal visible={visible} delVisible={delVisible} className="market-modal">
      <div
        className="market-modal__bg"
        style={{backgroundImage: `url(${univer.img ? unImgs[univer.img] : unImgs["stBg"]})`}}
      ></div>
      <div className="market-modal__info">
        <h2 className="market-modal__title">
          {univer.visibleName ? univer.visibleName : univer.name}
        </h2>
        <div className="market-modal__descr">
          <h4 className="market-modal__address">
            {univer.city}, {univer.address}
          </h4>
          {createMarketDescr(univer.price, "Цена обучения на бакалавриате:")}
          {createMarketDescr(univer.campus, "Общежитие:")}
          {createMarketDescr(univer.ENTgrants, "Гранты по ЕНТ:")}
          {createMarketDescr(univer.lang, "Язык обучения:")}
          {createMarketDescr(univer.internalGrants, "Внутренние гранты:")}
          {createMarketDescr(univer.magistracy, "Магистратура:")}
          {createMarketDescr(univer.priceMagistracy, "Цена обучения на магистратуре:")}
          {createMarketDescr(univer.doctoral, "Докторантура:")}
          {createMarketDescr(univer.priceDoctoral, "Цена обучения на докторантуре:")}
          {createMarketDescr(univer.exchangeStudy, "Академическая мобильность:")}
          {createMarketDescr(univer.tel, "Телефон:")}
          {createMarketDescr(univer.mail, "Email:")}
        </div>

      </div>
    </Modal>
  );
}

export default GeogrpahyModal