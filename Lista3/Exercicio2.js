/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso/(altura*altura));
Isntancie uma pessoa chamada Jose que tenha 70 kg de peso e 1,75m de alturae peça ao Jose para dizer o valor do 
seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return 'Você está abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc <= 30) {
            return 'Você está acima do peso';
        } else if (imc > 30 && imc <= 40) {
            return 'Obeso';
        } else {
            return 'Obesidade morbida';
        }
    }
}

const p1 = new Pessoa('José', 70, 1.75);

console.log(`
Olá ${p1.nome}. 
Peso atual: ${p1.peso} Kg 
Altura: ${p1.altura} m
IMC: ${p1.calcularImc().toFixed(2)}
Classificação do IMC: ${p1.classificarImc()}
`);




