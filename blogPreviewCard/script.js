var card = document.querySelector(".card")
var headerText = document.querySelector(".header-text")

headerText.addEventListener("mouseover", function(){
    headerText.style.cursor = "pointer"
    headerText.style.color = "hsl(47, 88%, 63%)"
    card.style.filter = "drop-shadow(16px 16px 0px black)";
})
headerText.addEventListener("mouseout", function(){
    headerText.style.color = "black"
    card.style.filter = "drop-shadow(8px 8px 0px black)"
})