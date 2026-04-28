export default class Kocka {
    #obj;
    #index;
    #szuloElem;
    constructor(index, obj, szuloElem){
        this.#index = index;
        this.#obj = obj;
        this.#szuloElem = szuloElem;
        this.megjelenit();
        this.esemenyKezeloSzerk();
        this.esemenyKezeloTorlo();
    }

    megjelenit(){
        let kod = `
                
           
               <tr class="sor">
                    <td><img class="rounded" width="200px" src="${this.#obj.src}" alt="${this.#obj.nev}"></td>
                    <td>${this.#obj.nev}</td>
                    <td>${this.#obj.leiras}</td>
                    <td>${this.#obj.ar} Ft</td>
                    <td>
                        <button class="szerk">⚙️</button>
                        <button class="torles">❌</button>
                    </td>
                </tr>
        
        `
        this.#szuloElem.insertAdjacentHTML("beforeend", kod);
        this.sorElem = this.#szuloElem.querySelector(".sor:last-child");
    }

    esemenyKezeloSzerk(){
        const gombElem = this.sorElem.querySelector(".szerk");
        gombElem.addEventListener("click", () => {
        const e = new CustomEvent("szerk", { detail: this.#obj }); 
        window.dispatchEvent(e); 
        });
    }

    esemenyKezeloTorlo(){
        const gombElem = this.sorElem.querySelector(".torles");
        gombElem.addEventListener("click", () => {
            if (window.confirm("Biztosan törölni szeretnéd?")) {
                this.sorElem.remove();
            }
        });
    }
}