import React, {useState, useEffect, useMemo} from "react";
import axios from "axios";
import Checkbox from "../UI/Checkbox.jsx";
import "../../styles/unicardModal.scss"
import SearchBox from "../UI/SearchBox.jsx";
import Modal from "../UI/Modal.jsx";

const UnicardModal = ({isResize, isOpen, unicardModalClose, checkeds, setCheckeds, addUniCards}) => {
  let [universities, setUniversities] = useState([])
  let [universitiesLoading, setUniversitiesLoading] = useState(false)
  let [searchQuery, setSearchQuery] = useState('')

  const universitiesSearch = useMemo(() => {
    return universities.filter((univer) => univer.name.toLowerCase().includes(searchQuery) || univer.visibleName.toLowerCase().includes(searchQuery))
  }, [searchQuery, universities])
  
  useEffect(() => {
    setUniversitiesLoading(true)
    axios.get('http://www.unicomp.kz/api/universities').then((info) => {
      setUniversities(info.data)
      setUniversitiesLoading(false)
    })
  }, [])

 return (
    <Modal visible={isOpen} className="uni-modal" delVisible={unicardModalClose}>
      <div className="uni-modal__title-box">
        <h2 className="uni-modal__title title">Выберите университет:</h2>
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="checkbox__list-box uni-modal__list-box">
        {
          universitiesLoading 
          ? <div className="loading">
            <div className="loading-text">loading...</div>
            <div className="loading-icon"></div>
          </div>
          : isResize >= 600
            ? [0,1].map((key) => (
              <ul key={key} className="checkbox__list">
                {
                !key
                ? universitiesSearch.slice(0, Math.round(universitiesSearch.length / 2)).map((university) => (
                  <li key={university._id} className="checkbox__item">
                    <Checkbox checkeds={checkeds} setCheckeds={setCheckeds} elem={university}/>
                  </li>
                ))
                : universitiesSearch.slice(Math.round(universitiesSearch.length / 2)).map((university) => (
                  <li key={university._id} className="checkbox__item">
                    <Checkbox checkeds={checkeds} setCheckeds={setCheckeds} elem={university}/>
                  </li>
                ))
                }
              </ul>
            ))
          : [3].map((key) => (
            <ul key={key} className="checkbox__list">
                {universitiesSearch.map((university) => (
                  <li key={university._id} className="checkbox__item">
                    <Checkbox checkeds={checkeds} setCheckeds={setCheckeds} elem={university}/>
                  </li>
                ))
                }
            </ul>
          )
          )}
      </div>
      <span onClick={addUniCards} className="uni-modal__btn btn">Выбрать</span>
    </Modal>
 );
}

export default UnicardModal