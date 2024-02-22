/*
Chamando uma função dentro de outra

*/

function escreverNome(nome) {
    return nome;
}

function verificarIdade(idade) {
    
    if (idade >= 18) {
        console.log (escreverNome('Thiago') + ' é maior de idade');
    } else {
        console.log (escreverNome('Thiago') + ' é menor de idade');
    }
}

verificarIdade(18);



