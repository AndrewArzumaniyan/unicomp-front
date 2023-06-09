import React, { useState, useMemo } from "react";
import "../../styles/market.scss";
import unImgs from "../../images/images.js"
import SearchBox from "../UI/SearchBox";
import useLoadBd from "../../API/useLoadBd";

const Market = ({setPickedUniver, openModal, isResize}) => {
  let [data, dataLoading] = useLoadBd('http://www.unicomp.kz/api/universities')
  let [cities, setCities] = useState([])
  let [searchQuery, setSearchQuery] = useState('')
  let [selectQuery, setSelectQuery] = useState({'city' : 'все', 'campus': 'все', 'ENTgrants': 'все'})
  let [page, setPage] = useState(1)

  function changeSelectQuery(e) {
    let tmp = {...selectQuery}
    tmp[e.target.name] = e.target.value
    setSelectQuery(tmp)
  }

  useMemo(() => {
    if (!data) return
    let tmp = ['все']
    data.forEach((univer) => {
      if (!tmp.includes(univer.city.trim()))
        tmp.push(univer.city.trim())
    })
    setCities(tmp)
  }, [data])

  const universitiesSearch = useMemo(() => {
    if (!data) return
    setPage(1)
    return data.filter((univer) => univer.name.toLowerCase().includes(searchQuery) || (univer.visibleName && univer.visibleName.toLowerCase().includes(searchQuery))).sort((a, b) => {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    })
  }, [searchQuery, data])

  const universitiesFilter = useMemo(() => {
    if (!data) return
    setPage(1)
    let result = [...universitiesSearch];

    for(let key in selectQuery) {
      if (selectQuery[key] !== 'все') {
        result = result.filter((univer) => univer[key] && univer[key].toLowerCase() === selectQuery[key].toLowerCase())
      }
    }

    return result.sort((a, b) => {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    });
  }, [selectQuery, universitiesSearch])

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
        {isResize >= 730
        ? <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        : ''
        } 
      </div>
      <div className="market__wrapper">
        <aside className="market__aside">
          <div className="market__subtitle-box">
            <h3 className="market__subtitle">Фильтры</h3>
            {isResize < 730
            ? <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            : ''
            } 
          </div>
          <div className="market__list">
              {dataLoading 
                ? <div className="loading">
                    <div className="loading-text">loading...</div>
                    <div className="loading-icon"></div>
                  </div>
                : <div className="market__filters-box">
                  <div className="market__filters-city market__filters-filter">
                    <h4 className="market__filters-title">город:</h4>
                    <select onChange={changeSelectQuery} name="city" id="">
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
                  </div>
                  
                  <div className="market__filters-campus market__filters-filter">
                    <h4 className="market__filters-title">общежитие:</h4>
                    <select onChange={changeSelectQuery} name="campus" id="">
                      {['все', 'да', 'нет'].map((ans) => (
                        <option
                          className={selectQuery === ans ? 'active' : ''}
                          key={`market-${ans}`}
                          value={ans}
                        >
                          {ans}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="market__filters-entgrants market__filters-filter">
                    <h4 className="market__filters-title">грант по ЕНТ:</h4>
                    <select onChange={changeSelectQuery} name="ENTgrants" id="">
                      {['все', 'да', 'нет'].map((ans) => (
                        <option
                          className={selectQuery === ans ? 'active' : ''}
                          key={`market-${ans}`}
                          value={ans}
                        >
                          {ans}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              }
          </div>
        </aside>
        
        <div className="market__cards-box">
          {dataLoading
          ? <div className="loading">
              <div className="loading-text">loading...</div>
              <div className="loading-icon"></div>
            </div>
          : universitiesFilter.length ? universitiesFilter.slice(0 + (page - 1) * 24, 24 + (page - 1) * 24).map((univer) => (
            <div key={`market-${univer._id}`} onClick={() => {setPickedUniver(univer); openModal()}} className="market__card card">
              <div
                className="card__bg"
                style={{background: `url(${univer.img ? unImgs[univer.img] : unImgs["stBg"]})`}}
              ></div>
              <div className="card__info">
                <h3 className="card__title">
                  {univer.visibleName || univer.visibleName ? univer.visibleName : univer.name}
                </h3>
                <h4 className="card__subtitle">
                  {univer.city}
                </h4>
                <span className="card__clicked"></span>
              </div>
            </div>
          )) : "Ничего не найдено:("
          }
          <div className="market__pagination-box">
            {!dataLoading
            ? Array.from({length: parseInt(universitiesFilter.length / 24) === universitiesFilter.length / 24 ? universitiesFilter.length / 24 : parseInt(universitiesFilter.length / 24) + 1}, (_, i) => i + 1).map((pag) => (
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