Készítette: Stolár-Németh Villő és Páczi Balázs

```mermaid
classDiagram
    class Kartyak {
        -adatLista : array
        -szuloElem : html DOM
        +constructor(szuloElem, adatLista)
        +megjelenit() void
    }
    class Kartya {
        -obj : object
        -szuloElem
        -index: int
        +constructor(obj, szuloElem) void
        +megjelenit() void
        +esemenyKezelo() event
    }
    Kartyak --> Kartya

    class Tabla {
        -adatLista : array
        -szuloElem : html DOM
        +constructor(szuloElem, adatLista)
        +megjelenit() void
       
    }
    class Kocka {
        -obj : object
        -szuloElem: html DOM
        -index: int
        +megjelenit() void
        +constructor(obj, szuloElem) void
        +esemenyKezeloSzerk() event
        +esemenyKezeloTorlo() event
        
    }
    Tabla --> Kocka
