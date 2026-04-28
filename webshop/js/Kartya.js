export default class Kartya {
  #obj;
  #szuloElem;
  #index
  constructor(szuloElem, adat,index) {
    this.#szuloElem = szuloElem;
    this.#obj = adat;
    this.#index=index;
    this.megjelenit();
    this.esemenyKezelo();
  }

  esemenyKezelo() {
    const buttonElem = document.querySelector(".kartya:last-child button");
    
    buttonElem.addEventListener("click", () => {
       const e = new CustomEvent("kosarba", { detail: this.#obj }); 
      window.dispatchEvent(e); 
    });
  }



  megjelenit() {
  let kod = `
    <div class="col-md-4 mb-3 kartya">
      <div class="card h-100 shadow">
        <img src="${this.#obj.src}" class="card-img-top" alt="${this.#obj.nev}">
        <div class="card-body">
          <h5 class="card-title">${this.#obj.nev}</h5>
          <p class="card-text">${this.#obj.leiras}</p>
          <span class="fw-bold">${this.#obj.ar} Ft</span>
          <button>kosárba</button>
        </div>
      </div>
    </div>
  `;
  this.#szuloElem.querySelector(".row").insertAdjacentHTML("beforeend",kod) ;
}

  
}
