const autoScroll = (time) => {
  setTimeout(() => {
    document.getElementById("main").scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }, time)
}

export default autoScroll