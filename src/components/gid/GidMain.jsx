import React, { useState } from "react";
import GeographyHero from "../gid/GidHero";
import GidNavigation from "./GidNavigation";
import useLoadBd from "../../API/useLoadBd.js"
import GidModal from "./GitModal";
import GidArticle from "./GidArticle";
import { useMemo } from "react";

const GidMain = ({ isResize }) => {
  let [isModalOpen, setModalOpen] = useState(false)
  let [data, dataLoading] = useLoadBd('http://www.unicomp.kz/api/gid')
  let [selectCity, setSelectCity] = useState('')

  const selectGid = useMemo(() => {
    if (!data) return null
    return data.filter((el) => el.name === selectCity)[0]
  }, [selectCity])

  const readyCities = useMemo(() => {
    if (!data) return null
    let tmp = []
    for (let el of data) {
      tmp.push(el.name)
    }
    return tmp
  }, [data])

  const openModal = () => {
    setModalOpen(true)
    document.body.classList.add('hidden')
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.classList.remove('hidden')
  }

  return (
    <div className="main">
      <GidModal isResize={isResize} setSelectCity={setSelectCity} isOpen={isModalOpen} closeModal={closeModal} cities={readyCities} gidLoading={dataLoading}/>
      <GeographyHero/>
      <GidNavigation selectCity={selectCity} openModal={openModal}/>
      {selectGid ?
        <GidArticle selectCity={selectCity} gidEl={selectGid}/>
      : ""
      }
    </div>
  );
}

export default GidMain