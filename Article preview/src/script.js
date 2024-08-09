const socialMedia = document.querySelector(".social-media")
const share = document.getElementById("share")
const shareMedia = document.getElementById("share-media")

share.addEventListener("click", function(){
    socialMedia.classList.toggle("social-media")
})
shareMedia.addEventListener("click", function(){
    socialMedia.classList.add("social-media")
})