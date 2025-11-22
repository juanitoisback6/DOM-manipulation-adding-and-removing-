const addItem= document.getElementById("addItemBtn");
const list = document.getElementById("list");
const removebtn = document.getElementById("removeLastBtn");

let numbb= 0;

addItem.addEventListener("click", ()=>{
let newList = document.createElement("li");



  numbb++;

console.log(numbb)

newList.textContent=`item ${numbb}`;

list.appendChild(newList)


})

removebtn.addEventListener("click", ()=>{
 


  if (list.lastChild) {
    list.lastChild.remove();
  } else {
    console.log("No items to remove");
  }


})