// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori  che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


// CREO UN ARRAY CON UN TOT DI NUMERI GENERATI RANDOMICAMENTE

let arrayLength = 10
let numberContainer = [];

while (numberContainer.length != arrayLength) {
    let numberToPush = (getRndInteger(1, 50));
    if (numberContainer.includes(numberToPush) == false) {
        numberContainer.push(numberToPush);
    }
}

console.log(numberContainer);

// CHIEDO DI INSERIE 2 NUMERI DOVE IL PRIMO DEVE ESSERE PIU' PICCOLO DEL SECONDO

let a;
let b;

do {
    a = parseInt(prompt("Inserisci il primo numero (compreso tra 1 e 50)"));
    b = parseInt(prompt("Inserisci il secondo numero (compreso tra 1 e 50 e più grande del primo numero inserito)"));
} while (a > b || a < 1 || b > 50);

console.log(a, b);

// RESTITUISCO UN NUOVO ARRAY TRAMITE UNA FUNZIONE CHE CONTENGA SOLO I NUMERI COMPRESI TRA A E B

const myFunction = (array, a, b) => {

    const numeriCompresi = numberContainer.filter((array) => {
        if (array >= a && array <= b) {
            return true;
        }
        return false;   
    });

    return numeriCompresi;
}

console.log(myFunction(numberContainer, a, b))

// FUNZIONI 

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}