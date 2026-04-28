import Kartyak from "./Kartyak.js";
import Kosar from "./Kosar.js";

const termekekElement = document.getElementsByClassName("kartya")[0];
const kosarElem = document.querySelector(".kosar");
const kosarKepElem = document.querySelector(".kosarcim");
export const KOSARLISTA = [];

async function adatBetoltes() {
    try {
        // Megszólítjuk a backendet (amit korábban megírtál)
        const response = await fetch("http://localhost:3000/products");
        const termekek = await response.json();

        // Miután megjöttek az adatok, példányosítjuk a Kartyak osztályt
        new Kartyak(termekekElement, termekek);
        
    } catch (error) {
        console.error("Hiba történt az adatok betöltésekor:", error);
        termekekElement.innerHTML = "Sajnos nem sikerült betölteni a termékeket.";
    }
}

// 2. Meghívjuk a függvényt az oldal betöltésekor
adatBetoltes();


window.addEventListener("kosarba", (event) => {
  KOSARLISTA.push(event.detail);
  if (KOSARLISTA.length > 0) {
    kosarKepElem.innerHTML = `<div class="card" style="width: 8rem;">
    <img src="/webshop/src/kosar.jpg" class="card-img-top" alt="kosar">
    <div class="card-body text-center">
      <p class="card-text">Kosár (${KOSARLISTA.length})</p>
    </div>
  </div>`;
  }
  kosarElem.innerHTML = "";
  KOSARLISTA.forEach((element) => {
    new Kosar(
      element.src,
      element.nev,
      element.ar,
      element.leiras,
      kosarElem,
      KOSARLISTA,
    );
  });

  console.log(KOSARLISTA);
});
