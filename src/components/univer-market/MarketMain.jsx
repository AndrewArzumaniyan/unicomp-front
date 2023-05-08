import React, {useState} from "react";
import ModalCard from "../UI/ModalCard.jsx";
import Market from "./Market.jsx";
import MarketHero from "./MarketHero.jsx";

const MarketMain = ({isResize}) => {
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
    <main className="main">
      <MarketHero/>
      
      <ModalCard univer={pickedUniver} visible={isModalOpen} delVisible={closeModal}/>
      <Market isResize={isResize} setPickedUniver={setPickedUniver} openModal={openModal}/>
    </main>
  );
}

export default MarketMain