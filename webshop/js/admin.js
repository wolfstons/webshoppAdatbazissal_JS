import Tabla from "./Tabla.js";

const szuloElem = document.querySelector(".tablazat");
async function adatBetoltes() {
    try {
        // Megszólítjuk a backendet (amit korábban megírtál)
        const response = await fetch("http://localhost:3000/products");
        const termekek = await response.json();

        // Miután megjöttek az adatok, példányosítjuk a Kartyak osztályt
        new Tabla(termekek,szuloElem);
        
    } catch (error) {
        console.error("Hiba történt az adatok betöltésekor:", error);
        termekekElement.innerHTML = "Sajnos nem sikerült betölteni a termékeket.";
    }
}

// 2. Meghívjuk a függvényt az oldal betöltésekor
adatBetoltes();




window.addEventListener("szerk" , (event)=>{
  console.log(event.detail)
})


function frissit() {
  szuloElem.innerHTML = "";
  adatBetoltes();
}


window.addEventListener("torles", (event) => {
  lista = lista.filter(elem => elem.id !== event.detail);
  console.log(event.detail)
  frissit();
})