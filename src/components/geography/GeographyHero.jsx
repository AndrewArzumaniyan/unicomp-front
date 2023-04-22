import React from "react";
import Hero from "../UI/Hero";

const GeographyHero = () => {
  const slides = [
    {
      paginationName: 'сравнение',
      text: "СРАВНЕНИЕ ",
      link: "/",
      current: false
    },
    {
      paginationName: 'гид',
      text: "ПУТЕВОДИТЕЛЬ ",
      link: "/gid",
      current: false
    },
    {
      paginationName: 'география',
      text: "ГЕОГРАФИЯ ",
      link: "/geography",
      current: true
    },
    {
      paginationName: 'каталог',
      text: "КАТАЛОГ ",
      link: "/market",
      current: false
    },
  ]

  return (
    <Hero slides={slides} />
  );
}

export default GeographyHero;