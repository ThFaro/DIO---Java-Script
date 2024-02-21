
/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variaveis. Sedno elas:

 1 - Preço do etanol
 2 - Preço da gasolina
 3 - O tipo de combustível que esta no seu carro
 4 - Gasto médio de combustível do carro por KM
 5 - Distância em KM da viagem

Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

const preco_gasolina = 6.66;
const preco_etanol = 5.79;
const consumo_medio = 10.00;
const distancia = 100.00;
const litros_consumidos = (distancia / consumo_medio);
const tipo_combustivel = 'Gasolina';


if (tipo_combustivel === 'Etanol') {

    const gasto_total = litros_consumidos * preco_etanol

    console.log();
    console.log('Preço do Combustível: R$', preco_etanol);
    console.log('Consumo médio:', consumo_medio, 'Km/L');
    console.log('Distância:', distancia, 'Km');
    console.log('___________________________________');
    console.log('Gasto total: R$', gasto_total.toFixed(2));

} else {

    const gasto_total = litros_consumidos * preco_gasolina

    console.log();
    console.log('Preço do Combustível: R$', preco_gasolina);
    console.log('Consumo médio:', consumo_medio, 'Km/L');
    console.log('Distância:', distancia, 'Km');
    console.log('___________________________________');
    console.log('Gasto total: R$', gasto_total.toFixed(2));
}