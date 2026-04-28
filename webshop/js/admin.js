import Tabla from "./Tabla.js";
import { termekek } from "./adat.js"

let lista = [...termekek];

const szuloElem = document.querySelector(".tablazat");
new Tabla(termekek, szuloElem)

window.addEventListener("szerk" , (event)=>{
  console.log(event.detail)
})


function frissit() {
  szuloElem.innerHTML = "";
  new Tabla(lista, szuloElem);
}


window.addEventListener("torles", (event) => {
  lista = lista.filter(elem => elem.id !== event.detail);
  console.log(event.detail)
  frissit();
})