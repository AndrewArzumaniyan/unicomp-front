import React from "react";
import "../../styles/unicard.scss"
import UnicardEmpty from "./UnicardEmpty.jsx";
import UnicardFill from "./UnicardFill.jsx";

const Unicard = ({unicardModalOpen, cardsUnivers, giveInfo}) => {
  const newCardsUnivers = () => {
    let res = [...cardsUnivers]
    
    if (cardsUnivers.length < 3) {
      for (let i = cardsUnivers.length; i < 3; i++) {
        res.push('')
      } 
    }

    return res
  }

  return (
    <section className="unicard">
      <div className="color"></div>
      <div className="unicard__slider">
        <h3 className="unicard__title">Выберите хотя бы один ВУЗ</h3>
        <div className="unicard__box">
          {!cardsUnivers.length ?
            [1,2,3].map((el) => (
              <UnicardEmpty key={el} onClick={unicardModalOpen}/>
            )) :
            newCardsUnivers().map((univer, ind) => {
              if (univer !== '')
                return <UnicardFill key={univer.id} univer={univer} onClick={unicardModalOpen}/>
              else
                return <UnicardEmpty key={ind} onClick={unicardModalOpen}/>
            }
          )
          }
        </div>
      </div>

      <div className="unicard__btn-box">
        <span onClick={giveInfo} className="unicard__btn btn">сравнить</span>
        <p className="compare-error-text"></p>
      </div>
    </section>
  );
}

export default Unicard