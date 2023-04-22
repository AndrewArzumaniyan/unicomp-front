import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles/market.scss";
import unImgs from "../../images/images.js"
import SearchBox from "../UI/SearchBox";

const Market = ({setPickedUniver, openModal}) => {
  let [universities, setUniversities] = useState([])
  let [universitiesLoading, setUniversitiesLoading] = useState(false)
  let [cities, setCities] = useState([])
  let [searchQuery, setSearchQuery] = useState('')
  let [selectQuery, setSelectQuery] = useState('все')
  let [page, setPage] = useState(1)

  useMemo(() => {
    let tmp = ['все']
    universities.forEach((univer) => {
      if (!tmp.includes(univer.city.toLowerCase().trim()))
        tmp.push(univer.city.toLowerCase().trim())
    })
    setCities(tmp)
  }, [universities])

  const universitiesSearch = useMemo(() => {
    setPage(1)
    return universities.filter((univer) => univer.name.toLowerCase().includes(searchQuery) || univer.visibleName.toLowerCase().includes(searchQuery))
  }, [searchQuery, universities])

  const universitiesFilter = useMemo(() => {
    setPage(1)
    if (selectQuery === 'все') 
      return universitiesSearch
    return universitiesSearch.filter((univer) => univer.city.toLowerCase() == selectQuery.toLocaleLowerCase())
  }, [selectQuery, universitiesSearch])

  useEffect(() => {
    setUniversitiesLoading(true)
    axios.get('http://www.unicomp.kz/api/universities').then((info) => {
      setUniversities(info.data)
      setUniversitiesLoading(false)
    })
  }, [])

  function changePage(event) {
    setPage(+event.target.textContent.trim())
    document.getElementById('main').scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }


  return (
    <section id="main" className="market">
      <div className="market__container">
      <div className="market__title-box">
        <h2 className="market__title title">каталог университетов</h2>
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="market__wrapper">
        <aside className="market__aside">
          <h3 className="market__subtitle">Фильтры</h3>
          <div className="market__list">
              {universitiesLoading 
                ? <div className="loading">
                    <div className="loading-text">loading...</div>
                    <div className="loading-icon"></div>
                  </div>
                : <select onChange={(e) => setSelectQuery(e.target.value)} name="cities" id="">
                    {cities.map((city) => (
                      <option
                        className={selectQuery === city ? 'active' : ''}
                        key={`market-${city}`}
                        value={city}
                      >
                        {city}
                      </option>
                    ))}
                  </select>
              }
          </div>
        </aside>
        
        <div className="market__cards-box">
          {universitiesLoading
          ? <div className="loading">
              <div className="loading-text">loading...</div>
              <div className="loading-icon"></div>
            </div>
          : universitiesFilter.slice(0 + (page - 1) * 16, 16 + (page - 1) * 16).map((univer) => (
            <div key={`market-${univer._id}`} onClick={() => {setPickedUniver(univer); openModal()}} className="market__card card">
              <div
                className="card__bg"
                style={{background: `url(${unImgs[univer.img]})`}}
              ></div>
              <div className="card__info">
                <h3 className="card__title">
                  {univer.visibleName ? univer.visibleName : univer.name}
                </h3>
                <h4 className="card__subtitle">
                  {univer.city}
                </h4>
                <span className="card__clicked"></span>
              </div>
            </div>
          ))
          }
          <div className="market__pagination-box">
            {!universitiesLoading
            ? Array.from({length: parseInt(universitiesFilter.length / 16) === universitiesFilter.length / 16 ? universitiesFilter.length / 16 : parseInt(universitiesFilter.length / 16) + 1}, (_, i) => i + 1).map((pag) => (
              <div 
                onClick={changePage} 
                key={`market-pag-${pag}`} 
                className={`market__pagination-bullet ${pag === page ? 'active' : ''}`}
              >
                {pag}
              </div>
            ))
            : ''
            }
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Market