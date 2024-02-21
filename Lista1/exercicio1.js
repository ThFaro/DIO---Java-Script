/* 

Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a
sua méida e a sua classificação conforme a tabela abaixo:

Média = (nota1 + nota2 + nota3) / 3

- Média menor que 5 = Reprovado
- Média entre 5 e 7 = Recuperação
- Média acima de 7 = Aprovado

*/

const nota1 = 5
const nota2 = 3
const nota3 = 7

const media = (nota1 + nota2 + nota3) / 3
console.log('Sua média final foi de', media.toFixed(2))

if (media > 7) {
    console.log('Você está aprovado')
} else if (media <5) {

    console.log('Você está reprovado')
} else {
    console.log('Você está de recuperação')
}