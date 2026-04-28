import Kocka from "./Kocka.js";

export default class Tabla{
    #adatLista = [];
    #szuloElem;
    constructor(adatLista, szuloElem){
        this.#szuloElem = szuloElem;
        this.#adatLista = adatLista;
        this.megjelenit();
    }

    megjelenit(){
        this.#adatLista.forEach((index, adat) =>{
            let k = new Kocka(adat, index, this.#szuloElem);
        })
    }

}