/*

Elabore um algoritmo que  calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e 
a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
adequado.

Código de condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%

*/

const preco = 10
const cond_pagamento = 2

console.log('Valor do produto: R$', preco.toFixed(2))

if (cond_pagamento === 1) {

    desconto = preco * 0.1

    console.log('Forma de pagamento: Débito/PIX')
    console.log('Desconto de 10%: R$', desconto.toFixed(2))
    console.log('Total a pagar: R$', (preco - desconto).toFixed(2))

} else if (cond_pagamento === 2) {

    desconto = preco * 0.15

    console.log('Forma de pagamento: Dinheiro')
    console.log('Desconto de 15%: R$', desconto.toFixed(2))
    console.log('Total a pagar: R$', (preco - desconto).toFixed(2))

} else if (cond_pagamento === 3) {

    acrecimo = preco * 0.1

    console.log('Forma de pagamento: Parcelado(3x ou mais)')
    console.log('Juros de 10%: R$', acrecimo.toFixed(2))
    console.log('Total a pagar: R$', (preco + desconto).toFixed(2))

} else if (cond_pagamento === 4) {

    console.log('Forma de pagamento: Parcelado(2x)')
    console.log('Total a pagar: R$', preco.toFixed(2))

} else {
    console.log('Forma de pagamento inválida')
}