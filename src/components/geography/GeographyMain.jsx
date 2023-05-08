import React, {useState} from "react";
import GeographyHero from "./GeographyHero";
import ModalCard from "../UI/ModalCard.jsx";
import Map from "./Map"
import "../../styles/map.scss"

const GeographyMain = () => {
  let [pickedUniver, setPickedUniver] = useState({})
  let [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    document.body.classList.add('hidden')
  }
  
  const closeModal = () => {
    setIsModalOpen(false)
    document.body.classList.remove('hidden')
  }

  return (
    <div className="main">
      <GeographyHero/>

      <ModalCard univer={pickedUniver} visible={isModalOpen} delVisible={closeModal}/>

      <div id="main" className="map" style={{ width: `100vw`, height: `100vh` }}>
        <Map
          setPickedUniver={setPickedUniver}
          openModal={openModal}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA-zai589VLK5bztyCdsgutMH0I3a1luUM`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}

export default GeographyMain