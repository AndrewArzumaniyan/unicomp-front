import React from "react";
import Modal from "../UI/Modal";
import Radio from "../UI/Radio";
import "../../styles/unicardModal.scss"
import { useState } from "react";

const GidModal = ({ isResize, isOpen, closeModal, setSelectCity, cities, gidLoading }) => {
  let [chcity, setChCity] = useState('')
  
  return (
    <Modal visible={isOpen} className="uni-modal">
      <div className="gid-modal__title-box">
        <h3 className="gid-modal__title title">ВЫБРАТЬ ГОРОД</h3>
      </div>
      
      <div className="checkbox__list-box uni-modal__list-box">
        {
          gidLoading 
          ? <div className="loading">
            <div className="loading-text">loading...</div>
            <div className="loading-icon"></div>
          </div>
          : isResize >= 600
            ? [0,1].map((key) => (
              <ul key={key} className="checkbox__list">
                {
                !key
                ? cities.slice(0, Math.round(cities.length / 2)).map((city) => (
                  <li key={`gid-${city}`} className="checkbox__item">
                    <Radio setSelected={setChCity} elem={city} name="city"/>
                  </li>
                ))
                : cities.slice(Math.round(cities.length / 2)).map((city) => (
                  <li key={`gid-${city}`} className="checkbox__item">
                    <Radio setSelected={setChCity} elem={city} name="city"/>
                  </li>
                ))
                }
              </ul>
            ))
          : [3].map((key) => (
            <ul key={key} className="checkbox__list">
                {cities.map((city) => (
                  <li key={`gid-${city}`} className="checkbox__item">
                    <Radio setSelected={setChCity} elem={city} name="city"/>
                  </li>
                ))
                }
            </ul>
          )
          )}
      </div>
      <span onClick={() => { setSelectCity(chcity); closeModal() }} className="uni-modal__btn btn">Выбрать</span>
    </Modal>
  );
}

export default GidModal