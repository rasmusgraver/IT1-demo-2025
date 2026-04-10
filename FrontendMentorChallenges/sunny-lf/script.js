const hamburger = document.querySelector(".hamburger")
const close = document.querySelector(".close")
const navElm = document.querySelector("nav")

hamburger.addEventListener("click", function () {
  navElm.classList.add("active")
})
close.addEventListener("click", function () {
  navElm.classList.remove("active")
})
