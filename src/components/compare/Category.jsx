import React, { useState, useEffect } from "react";
import CategorySwiper from "../Swipers/CategorySwiper.jsx"
import axios from "axios";
import "../../styles/category.scss"


const Category = ({checkedCategories, setCheckedCategories}) => {
  let [allCategories, isAllCategories] = useState(false)
  let [categories, setCategories] = useState([])
  let [categoriesLoading, setCategoriesLoading] = useState(false)

  const changeAllCategories = () => {
    isAllCategories(!allCategories)
  }

  useEffect(() => {
    async function fetchCategories () {
      setCategoriesLoading(true)
      let tmp = await axios.get('http://www.unicomp.kz/api/categories')
      setCategories(tmp.data)
      setCategoriesLoading(false)
    }
    fetchCategories()
  }, [window.innerWidth])

  return (
    <section id="main" className="category">
      <div className="container">
        <h2 className="category__title title">Выбрать категории</h2>
        <a onClick={changeAllCategories} className="category__all-btn">выбрать все</a>

        {!categoriesLoading
        ? <CategorySwiper categories={categories} allCategories={allCategories} checkedCategories={checkedCategories} setCheckedCategories={setCheckedCategories}/>
        : <div className="loading">
          <div className="loading-text">loading...</div>
          <div className="loading-icon"></div>
        </div>
        }
      </div>
    </section>
  );
}

export default Category