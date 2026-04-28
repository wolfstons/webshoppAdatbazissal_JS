export default class Kosar {
  constructor(src, nev, ar, leiras, kosarElem, kosarLista) {
    this.src = src;
    this.nev = nev;
    this.ar = ar;
    this.leiras = leiras;
    this.kosarElem = kosarElem;
    this.kosarLista = kosarLista;
    console.log(this.kosarLista)
    this.megjelenit();
  }

  megjelenit() {

    let kod = `<div class="col-md-4 mb-3 kartya">
        <div class="card h-100 shadow">
        <img src="${this.src}" class="card-img-top" alt="${this.nev}">
        <div class="card-body">
          <h5 class="card-title">${this.nev}</h5>
          <p class="card-text">${this.leiras}</p>
          <span class="fw-bold">${this.ar} Ft</span>
          <button>töröl</button>
        </div>
      </div>
    </div>
  `;
    this.kosarElem.innerHTML += kod;
  }

  esemenykezelo() {
    this.kosarElem.addEventListener("click", (event) => {

    });
  }
}
