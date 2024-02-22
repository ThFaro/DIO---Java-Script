/*

- Crie uma classe para representar carros.
Os carros possuem marca, uma cor e um gasto médio de combustível por quilômetros rodados.

- Crie um método que dado a quantidade de quilômetros e o preço do combustível nos de o valor
gasto em reais para realizar este percurso.

*/


class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
   
    calcularViagem(distanciaEmKm, valorCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * valorCombustivel;

    }
}

const uno = new Carro('Fiat', 'Prata', 1 / 12);
const palio = new Carro('Fiat', 'Preto', 1 / 10);

console.log(uno.calcularViagem(70, 5).toFixed(2));
console.log(palio.calcularViagem(70, 5).toFixed(2));

