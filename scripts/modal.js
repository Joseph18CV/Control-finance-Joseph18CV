const buttonModal = [...document.querySelectorAll("[data-modal]")]

const inputValue = document.querySelector(".input-insert-value")

buttonModal.map((element) => {
    element.addEventListener("click", function(){
        let valueModal = element.getAttribute("data-modal")
        document.getElementById(valueModal).classList.toggle("show-modal")
        inputValue.classList.add("input-border")
        buttonAll.classList.remove("button-active")
        buttonEntrys.classList.remove("button-active")
        buttonExits.classList.remove("button-active")
    })
})

const navModal = document.getElementById("entrys-modal")
const navModal2 = document.getElementById("exits-modal")

navModal.addEventListener("click", function(){
    navModal.classList.toggle("button-active")
    navModal2.classList.remove("button-active")
})

navModal2.addEventListener("click", function(){
    navModal2.classList.toggle("button-active")
    navModal.classList.remove("button-active")
})

