
/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variaveis. Sedno elas:

 1 - Preço do combustível
 2 - Gasto médio de combustível do carro por KM
 3 - Distância em KM da viagem

Imprima no console o valor que será gasto de combustível para realizar esta viagem.

*/

const preco_combustivel = 5.79;
const consumo_medio = 9.00.toFixed(2);
const distancia = 100.00;
const gasto_total = (distancia/consumo_medio)*preco_combustivel;

console.log();
console.log('Preço do Combustível: R$', preco_combustivel);
console.log('Consumo médio:', consumo_medio,'Km/L');
console.log('Distância:', distancia, 'Km');
console.log('___________________________________');
console.log('Gasto total: R$',gasto_total.toFixed(2));