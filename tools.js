let optionCont = document.querySelector(".option-cont")
let toolCont = document.querySelector(".tool-cont")
let pencilToolCont = document.querySelector(".pencil-tool-cont")
let eraserToolCont = document.querySelector(".eraser-tool-cont")
let optionFlag = true

//true=>tools show  false=>hide tools
optionCont.addEventListener("click", (event) => {
    optionFlag = !optionFlag

    if (optionFlag) openTools()
    else closeTools()
})

function openTools() {
    let iconElem = optionCont.children[0]
    iconElem.classList.remove("fa-times")    //cross stymbol
    iconElem.classList.add("fa-bars")       //bar symbol
    toolCont.style.display = "flex"
}

function closeTools() {
    let iconElem = optionCont.children[0]
    iconElem.classList.remove("fa-bars")    //cross stymbol
    iconElem.classList.add("fa-times")       //bar symbol
    toolCont.style.display = "none"
    pencilToolCont.style.display = "none"
    eraserToolCont.style.display = "none"
}