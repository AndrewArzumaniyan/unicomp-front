import React, { useState, useEffect } from "react";
import GeographyHero from "../gid/GidHero";
import GidNavigation from "./GidNavigation";
import GidModal from "./GitModal";
import axios from "axios";
import GidArticle from "./GidArticle";
import { useMemo } from "react";

const GidMain = ({ isResize }) => {
  let [gid, setGid] = useState([])
  let [isModalOpen, setModalOpen] = useState(false)
  let [gidLoading, setGidLoading] = useState(false)
  let [selectCity, setSelectCity] = useState('')

  const selectGid = useMemo(() => {
    return gid.filter((el) => el.name === selectCity)[0]
  }, [selectCity])

  const readySities = useMemo(() => {
    let tmp = []
    for (let el of gid) {
      tmp.push(el.name)
    }
    return tmp
  }, [gid])

  useEffect(() => {
    setGidLoading(true)
    axios.get('http://www.unicomp.kz/api/gid').then((info) => {
      setGid(info.data)
      setGidLoading(false)
    })
  }, [])

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
      <GidModal isResize={isResize} setSelectCity={setSelectCity} isOpen={isModalOpen} closeModal={closeModal} cities={readySities} gidLoading={gidLoading}/>
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