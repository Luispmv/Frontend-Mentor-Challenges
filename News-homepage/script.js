const menuIcon = document.querySelector(".menu-icon")
const asideOptions = document.querySelector(".inactive")
const closeIcon = document.querySelector(".close-icon")

menuIcon.addEventListener("click", toggleAside)
closeIcon.addEventListener("click", toggleAside)

function toggleAside(){
    asideOptions.classList.toggle("inactive")
}