const main = document.querySelector("#app")

const buttonAll = document.getElementById("all")
const buttonEntrys = document.getElementById("entrys")
const buttonExits = document.getElementById("exits")

const all = document.getElementById("empty-all")

buttonAll.addEventListener("click", function() {
    buttonAll.classList.add("button-active")
    buttonEntrys.classList.remove("button-active")
    buttonExits.classList.remove("button-active")
})

buttonEntrys.addEventListener("click", function() {
    buttonAll.classList.remove("button-active")
    buttonEntrys.classList.add("button-active")
    buttonExits.classList.remove("button-active")
})

buttonExits.addEventListener("click", function() {
    buttonAll.classList.remove("button-active")
    buttonEntrys.classList.remove("button-active")
    buttonExits.classList.add("button-active")
    
})