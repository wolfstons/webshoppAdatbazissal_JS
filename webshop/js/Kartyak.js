import Kartya from "./Kartya.js";

export default class Kartyak {
  #adatLista;
  #szuloElem;
  constructor(szuloElem, adatLista) {
    this.#szuloElem = szuloElem;
    this.#adatLista = adatLista;
    this.megjelenit();
  }
  megjelenit() {
    this.#adatLista.forEach((adat,index) => {
      let k=new Kartya(this.#szuloElem,adat,index)
      
    });
  }
}
