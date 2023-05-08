import React, {useState, useMemo} from "react";
import Checkbox from "../UI/Checkbox.jsx";
import "../../styles/unicardModal.scss"
import SearchBox from "../UI/SearchBox.jsx";
import Modal from "../UI/Modal.jsx";
import useLoadBd from "../../API/useLoadBd.js";

const UnicardModal = ({isResize, isOpen, unicardModalClose, checkeds, setCheckeds, addUniCards}) => {
  let [data, dataLoading] = useLoadBd("http://www.unicomp.kz/api/universities");
  let [searchQuery, setSearchQuery] = useState('')

  const universitiesSearch = useMemo(() => {
    if (!data)
      return null
    return (data.filter((univer) => univer.name.toLowerCase().includes(searchQuery) || (univer.visibleName && univer.visibleName.toLowerCase().includes(searchQuery)))).sort((a, b) => {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0; 
    })
  }, [searchQuery, data])

  return (
    <Modal visible={isOpen} className="uni-modal" delVisible={unicardModalClose}>
      <div className="uni-modal__title-box">
        <h2 className="uni-modal__title title">Выберите университет:</h2>
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="checkbox__list-box uni-modal__list-box">
        {
          dataLoading 
          ? <div className="loading">
            <div className="loading-text">loading...</div>
            <div className="loading-icon"></div>
          </div>
          : universitiesSearch.length ? isResize >= 600
            ? [0,1].map((key) => (
              <ul key={key} className="checkbox__list">
                {
                !key
                ? universitiesSearch && universitiesSearch.slice(0, Math.round(universitiesSearch.length / 2)).map((university) => (
                  <li key={university._id} className="checkbox__item">
                    <Checkbox checkeds={checkeds} setCheckeds={setCheckeds} elem={university}/>
                  </li>
                ))
                : universitiesSearch && universitiesSearch.slice(Math.round(universitiesSearch.length / 2)).map((university) => (
                  <li key={university._id} className="checkbox__item">
                    <Checkbox checkeds={checkeds} setCheckeds={setCheckeds} elem={university}/>
                  </li>
                ))
                }
              </ul>
            ))
          : [3].map((key) => (
            <ul key={key} className="checkbox__list">
                {universitiesSearch && universitiesSearch.map((university) => (
                  <li key={university._id} className="checkbox__item">
                    <Checkbox checkeds={checkeds} setCheckeds={setCheckeds} elem={university}/>
                  </li>
                ))
                }
            </ul>
          )) : "Ничего не найдено:("
        }
      </div>
      <span onClick={addUniCards} className="uni-modal__btn btn">Выбрать</span>
    </Modal>
 );
}

export default UnicardModal