import React, {useState} from "react";
import MarketModal from "./MarketModal.jsx";
import Market from "./Market.jsx";
import MarketHero from "./MarketHero.jsx";

const MarketMain = () => {
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
      
      <MarketModal univer={pickedUniver} visible={isModalOpen} delVisible={closeModal}/>
      <Market setPickedUniver={setPickedUniver} openModal={openModal}/>
    </main>
  );
}

export default MarketMain