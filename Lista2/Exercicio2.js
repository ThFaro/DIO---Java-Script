/*
Faça uma função que diga se você é maior de idade
*/


function verificarIdade(idade) {

    if (idade >= 18) {
        return 'Você é maior de idade'
    } else {
        return 'Você é menor de idade'
    }
}


console.log(verificarIdade(18))