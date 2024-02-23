


const alunos = ['João', 'Vitor', 'Marina'];
console.log(alunos[0]); // procurando por posição

console.log(alunos.length); // Mostrar o tamanho da lista

alunos.push('Thiago') // adicionando na lista Obs: Adiciona sempre no final. Obs: Pode-se ter mais de um tipo de dado dentro da mesma array
console.log(alunos)

alunos[0] = 'Laura' // adicionando na lista na posição desejada. Obs: O que estava nesta posição antes é apagado.
console.log(alunos)


alunos.pop() // deleta a ultima posição da lista
console.log(alunos)

alunos.shift() // deleta a primeira posição da lista
console.log(alunos)


