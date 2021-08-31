// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


// BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera


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

const laLeggerissima = () => {

    var biciLeggera = bici[0];

    for(let i=0 ; i < bici.length ; i++) {

        if (bici[i].peso < biciLeggera.peso) {
            biciLeggera = bici[i];
        }
    }
    
    return biciLeggera
}

console.log(laLeggerissima(bici));