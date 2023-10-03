const closerButton=document.getElementById("closerButton")
const modalDiv=document.getElementById("modal")

console.log(closerButton,modalDiv)
closerButton.addEventListener("click",()=>{
modalDiv.classList.toggle("closedModal")
})
