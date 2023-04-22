import React from "react";

const ScrollTo = ({ to, children, className }) => {
  function scrollTo(event) {
    event.preventDefault()
    document.getElementById(to).scrollIntoView({
      behavior: 'smooth',
      block: "start",
    })
  }

  return (
    <a onClick={scrollTo} className={className}>
      {children}
    </a>
  );
}

export default ScrollTo