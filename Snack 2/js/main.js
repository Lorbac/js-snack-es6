// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



let squadre = [
    {nome: "Lazio", puntiFatti: 0, falliSubiti: 0},
    {nome: "Inter", puntiFatti: 0, falliSubiti: 0},
    {nome: "Milan", puntiFatti: 0, falliSubiti: 0},
    {nome: "Roma", puntiFatti: 0, falliSubiti: 0},
    {nome: "Juventus", puntiFatti: 0, falliSubiti: 0}
];


for (let i = 0 ; i < squadre.length ; i++) {
    squadre[i].puntiFatti = getRndInteger(1, 90);
    squadre[i].falliSubiti = getRndInteger(1, 40);
}

console.log(squadre);





//FUNZIONI

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


