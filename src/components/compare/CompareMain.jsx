import React, {useState} from "react";
import Category from "./Category.jsx";
import Hero from "./CompareHero.jsx";
import Unicard from "./Unicard.jsx";
import UnicardModal from "./UnicardModal.jsx";
import Univers from "./Univers.jsx";
import DesktopTable from "./DesktopTable.jsx";
import MobileTable from "./MobileTable.jsx";


const Main = ({ isResize }) => {
  let [isUnicardModalOpen, setUnicardModalOpen] = useState(false)
  let [checkedUniversities, setCheckedUniversities] = useState([])
  let [checkedCategories, setCheckedCategories] = useState([])
  let [cardsUnivers, setCardsUnivers] = useState([])
  let [universities, setUniversities] = useState([])
  let [rows, setRows] = useState([])

  const openModal = () => {
    setUnicardModalOpen(true)
    document.body.classList.add('hidden')
  }
  const closeModal = () => {
    setUnicardModalOpen(false)
    document.body.classList.remove('hidden')
  }

  const addUniCards = () => {
    setCardsUnivers(checkedUniversities)
    closeModal()
  }

  const giveInfo = () => {
    if (checkedCategories.length < 1 || checkedUniversities.length < 1) {
      document.getElementById('main').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      return
    }
    setRows([])
    let tmp = [];
    for (let i in checkedCategories) {
      let row = [];
      row.push(checkedCategories[i].name);
      for (let university of checkedUniversities) {
        if (university[checkedCategories[i].id])
          row.push(university[checkedCategories[i].id]);
        else 
          row.push('-');
      }
      tmp.push(row);
    }
    setRows(tmp)

    tmp = []
    for(let university of checkedUniversities) {
      tmp.push(university)
    }
    setUniversities(tmp)
    setTimeout(() => {
      document.getElementById('table').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 200);
  }

  return (
    <main className="main">
      <Hero/>
      <Category isResize={isResize} checkedCategories={checkedCategories} setCheckedCategories={setCheckedCategories}/>
      <Univers/>
      <UnicardModal isResize={isResize} addUniCards={addUniCards} checkeds={checkedUniversities} setCheckeds={setCheckedUniversities} isOpen={isUnicardModalOpen} unicardModalClose={closeModal} />
      <Unicard giveInfo={giveInfo} cardsUnivers={cardsUnivers} unicardModalOpen={openModal}/>
      <div id="table"></div>
      {rows.length 
        ? isResize >= 970
        ? <DesktopTable universities={universities} rows={rows}></DesktopTable>
        : <MobileTable universities={universities} rows={rows} size={isResize}></MobileTable>
        : ''
      }
      
    </main>
  );
}

export default Main