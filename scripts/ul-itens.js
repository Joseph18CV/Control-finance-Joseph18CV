let soma = 0
let currentView = []

function insertValue () {
    const buttonInsertValueModal = document.querySelector(".insert-value-modal")
    buttonInsertValueModal.addEventListener("click", () => {

        let valueInput = document.querySelector(".input-insert-value").value
        if (valueInput == ""){
            alert("Preencha o campo do valor")
        }
        let value = 0
        const entrysModal = document.getElementById("entrys-modal")
        const exitsModal = document.getElementById("exits-modal")

        if (entrysModal.classList.contains("button-active")){
            value = entrysModal.value
        }
        if (exitsModal.classList.contains("button-active")){
            value = exitsModal.value
        }
        let count = 0
        insertedValues.forEach((element) => {
            count = element.id
        })
        let object = {
            id: count+1,
            value: Number(valueInput),
            categoryID: Number(value),
        }
        if (object.categoryID == 0){
            alert("Preencha o tipo do valor")
        }
        else if (object.categoryID == 0 && object.id == 0 && object.value == 0){
            return undefined
        }else if (object.categoryID >= 1 && object.id >= 0 && object.value > 0){
            insertedValues.push(object)
            all.style.display = "none"  
        }
        createElements(insertedValues)
        entrysModal.classList.remove("button-active")
        exitsModal.classList.remove("button-active")
    })
}
insertValue(insertedValues)

const ul = document.querySelector("#all-items")

function createElements (list) {

    ul.innerHTML = ""

    list.forEach((element) => {
        
        let typeValue = ""
        if(element.categoryID == 1){
            typeValue = "Entrada"
        }else if (element.categoryID == 2){
            typeValue = "Saída"
        }
  
    let li = document.createElement("li")
        li.classList.add("items")
    let div = document.createElement("div")
        div.classList.add("div-value")
    let span = document.createElement("span")
        span.innerText = "R$"
    let p = document.createElement("p")
        p.innerText = `${element.value},00`
    let div2 = document.createElement("div")
        div2.classList.add("type-entry-exit")
    let p2 = document.createElement("p")
        p2.innerText = typeValue
    let button = document.createElement("button")
        button.classList.add("trash")
        button.addEventListener("click", () => {
            // li.innerHTML = ""
            let i = insertedValues.indexOf(element)
            insertedValues.splice(i, 1)
            if(currentView.length === 0){
                createElements(insertedValues)
                sumValuesItems(insertedValues)
                if(insertedValues.length === 0){
                    all.style.display = "flex"
                }
                return
            }
            if(currentView !== []){
                let i2 = currentView.indexOf(element)
                currentView.splice(i2, 1)
                createElements(currentView)
                sumValuesItems(currentView)
                if(currentView.length === 0){
                    all.style.display = "flex"
                }
            } 
        })
    let trashItem = document.createElement("i")
        trashItem.classList.add("fa-solid")
        trashItem.classList.add("fa-trash")
        trashItem.classList.add("opacity")
        trashItem.getAttribute = element.id

        
    button.appendChild(trashItem)   

    div.append(span, p)
    div2.append(p2, button)

    li.append(div, div2)
    ul.appendChild(li)
    })

    sumValuesItems(insertedValues)
}
createElements(insertedValues)

function clickButtonAll() {
    const li = document.querySelectorAll(".items")
    buttonAll.addEventListener("click", function(){
        li.innerHTML = ""
        sumValuesItems(insertedValues)
        createElements(insertedValues)
        currentView = []
        if(insertedValues.length !== 0){
            all.style.display = "none"
        }else{
            all.style.display = "flex"
        }
    })
}   
clickButtonAll()

function clickButtonEntrys() {
    const li = document.querySelectorAll(".items")
    buttonEntrys.addEventListener("click", function(){
        li.innerHTML = ""
        let entrys = insertedValues.filter((elements) => {
            return elements.categoryID === 1
        })
        createElements(entrys)
        currentView = [...entrys]
        sumValuesItems(currentView)
        if(currentView.length !== 0){
            all.style.display = "none"
        }else{
            all.style.display = "flex"
        }
    })
}   
clickButtonEntrys()

function clickButtonExit(){
    const li = document.querySelectorAll(".items")
    buttonExits.addEventListener("click", function(){
        li.innerHTML= ""
        let exits = insertedValues.filter((elements) => {
            return elements.categoryID === 2
        })
        createElements(exits)
        currentView = [...exits]
        sumValuesItems(currentView)
        if(currentView.length !== 0){
            all.style.display = "none"
        }else{
            all.style.display = "flex"
        }
    })
}
clickButtonExit()

function sumValuesItems (list) {
    let sumItems = document.querySelector(".count-values")
    if (list.length == 0){
        sumItems.innerText = `R$ ${0},00`
    }else{
    let sumValues = list.reduce((value1, value2) => {
        return value1 + value2.value 
    },0)
    sumItems.innerText = `R$ ${sumValues},00`
    }
}
