// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [
    {
        nome: "Bianchi",
        peso: 10
    },
    {
        nome: "Graziella",
        peso: 20
    },
    {
        nome: "Ciccio",
        peso: 30
    }
];

let biciLeggera = bici[0];

for(let i=0 ; i < bici.length ; i++) {

    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }
}

console.log(biciLeggera);

let {nome, peso} = biciLeggera;

document.getElementById("peso").innerHTML = `La bici "${nome}" pesa ${peso}kg  ed è la più leggera rispetto alle altre`