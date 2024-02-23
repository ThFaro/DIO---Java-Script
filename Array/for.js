
/*
const nome = 'Thiago Faro Ribeiro'

for (let i = 0; i <nome.length; i++) {
    const letra = nome[i]
    console.log(letra)
}
*/

notas = [5, 7, 8, 2, 5, 8];
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i]; // essa variavel precisa ser criada para que os valores sejam acessado, caso contrario os indices que serao acessados

    soma += nota // ou soma = soma + nota

}

const media = soma / notas.length;

console.log(media.toFixed(2));
