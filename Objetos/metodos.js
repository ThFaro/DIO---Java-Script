
const pessoa = {
    nome: 'Thiago F Ribeiro',
    idade: 37,
    
    descrever: function(){
        console.log(`Meu nome é ${this.nome}, e minha idade é ${this.idade} anos`);
    
    }
};

pessoa.descrever();

// acessando dinamicamente um atributo

const atributo = 'idade';

console.log(pessoa['idade']);