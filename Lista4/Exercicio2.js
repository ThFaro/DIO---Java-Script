/*
Crie um programa que seja capaz de percorrer uma lista de números e imprima cada numero par
encontrado
*/

const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listaPar = [];
const listaImpar = [];


for (let i = 0; i < lista.length; i++) {
    numero = lista[i];

    if (numero % 2 == 0) {

        listaPar.push(numero);
    } else {
        listaImpar.push(numero);
    }
}

console.log(`Números pares: ${listaPar}
Números ímpares: ${listaImpar}`);
