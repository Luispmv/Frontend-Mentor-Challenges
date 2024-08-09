// const iconPlus = document.querySelector(".iconPlus")
// const respuesta = document.querySelector(".inactive")

// iconPlus.addEventListener("click", toggleRespuesta)

// function toggleRespuesta(){
//     respuesta.classList.toggle("inactive")
// }


/*Icono de mas*/
const iconPlus1 = document.querySelector(".iconPlus1")
const iconPlus2 = document.querySelector(".iconPlus2")
const iconPlus3 = document.querySelector(".iconPlus3")
const iconPlus4 = document.querySelector(".iconPlus4")

const respuesta1 = document.querySelector(".inactive1")
const respuesta2 = document.querySelector(".inactive2")
const respuesta3 = document.querySelector(".inactive3")
const respuesta4 = document.querySelector(".inactive4")

iconPlus1.addEventListener("click", function(){
    const interaccion = respuesta1.classList.toggle("inactive1")
    iconPlus1.src = "./img/icon-plus.svg"
    if(!interaccion){
        iconPlus1.src = "./img/icon-minus.svg"
    }
})
iconPlus2.addEventListener("click", function(){
    const interaccion = respuesta2.classList.toggle("inactive2")
    iconPlus2.src = "./img/icon-plus.svg"
    if(!interaccion){
        iconPlus2.src = "./img/icon-minus.svg"
    }
})
iconPlus3.addEventListener("click", function(){
    const interaccion = respuesta3.classList.toggle("inactive3")
    iconPlus3.src = "./img/icon-plus.svg"
    if(!interaccion){
        iconPlus3.src = "./img/icon-minus.svg"
    }
})
iconPlus4.addEventListener('click', function(){
    const interaccion = respuesta4.classList.toggle("inactive4")
    iconPlus4.src = "./img/icon-plus.svg"
    if(!interaccion){
        iconPlus4.src = "./img/icon-minus.svg"
    }
})


