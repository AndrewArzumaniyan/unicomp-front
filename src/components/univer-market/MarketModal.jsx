import React from "react";
import Modal from "../UI/Modal";
import unImgs from "../../images/images.js"
import "../../styles/marketModal.scss"

const MarketModal = ({visible, delVisible, univer}) => {
  return (
    <Modal visible={visible} delVisible={delVisible} className="market-modal">
      <div 
        className="market-modal__bg"
        style={{backgroundImage: `url(${unImgs[univer.img]})`}}
      ></div>
      <div className="market-modal__info">
        <h2 className="market-modal__title">
          {univer.visibleName ? univer.visibleName : univer.name}
        </h2>
        <div className="market-modal__descr">
          <h4 className="market-modal__address">
            {univer.address}
          </h4>
          <p>
            Скоро тут появится актуальная информация. Ожидайте)
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default MarketModal