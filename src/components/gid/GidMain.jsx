import React, { useState, useEffect } from "react";
import GeographyHero from "../gid/GidHero";
import GidNavigation from "./GidNavigation";
import GidModal from "./GitModal";
import axios from "axios";

const GidMain = ({ isResize }) => {
  let [gid, setGid] = useState([])
  let [isUnicardModalOpen, setUnicardModalOpen] = useState(false)
  let [gidLoading, setGidLoading] = useState(false)
  let [gidCities, setGidCities] = useState([])
  let [selectCity, setSelectCity] = useState('')

  useEffect(() => {
    setGidLoading(true)
    axios.get('http://www.unicomp.kz/api/gid').then((info) => {
      setGid(info.data)
      setGidLoading(false)

      let tmp = []
      for (let el of gid) {
        tmp.push(el.name)
      }
      setGidCities(tmp)
    })
  }, [])

  const openModal = () => {
    setUnicardModalOpen(true)
    document.body.classList.add('hidden')
  }

  const closeModal = () => {
    setUnicardModalOpen(false)
    document.body.classList.remove('hidden')
  }

  return (
    <div className="main">
      <GidModal isResize={isResize} setSelectCity={setSelectCity} isOpen={isUnicardModalOpen} closeModal={closeModal} cities={gidCities}/>
      <GeographyHero/>
      <GidNavigation openModal={openModal}/>
    </div>
  );
}

export default GidMain