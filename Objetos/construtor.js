class Pessoa {

    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2024 - idade;

    }
    descrever() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} anos. Nasci no ano de ${this.anoNascimento}`);
    }
}

const thiago = new Pessoa('Thiago', 37);
const laura = new Pessoa('Laura', 37);

thiago.descrever();


// função recebendo um objeto

function compararIdadeDasPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} tem ${p1.idade}, logo ele é mais velho que ${p2.nome}`)
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} tem ${p2.idade}, logo ela é mais velha que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

compararIdadeDasPessoas(thiago, laura);