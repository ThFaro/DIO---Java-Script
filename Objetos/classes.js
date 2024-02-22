
class Pessoa{

    nome;
    idade;
    altura;

    descrever() {
        console.log(`Meu nome é ${this.nome}, e minha idade é ${this.idade} anos`); 
    }
}

const thiago =  new Pessoa();
thiago.nome = 'Thiago F Ribeiro'
thiago.idade = 37
thiago.altura = 1.74

const laura = new Pessoa();
laura.nome = 'Laura P Caires'
laura.idade = 37
laura.altura = 1.72

console.log(thiago)
console.log(laura)

//ou

thiago.descrever();
laura.descrever();