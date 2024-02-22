/*
Separe o exericio de calcular preço da lista 1 em funções
*/
const valor = 100
const forma_pagamento = 5

function calcularDesconto(valor,desconto){

    return valor*(desconto/100)
}

function aplicarDesconto(valor,desconto){
    
    return valor - (valor*(desconto/100));
}

function aplicarJuros(valor,juros){

    return valor + (valor*(juros/100));
}

function main(){
if (forma_pagamento === 1) {

    console.log('Forma de pagamento: Debito/PIX')
    console.log('Desconto de 10%: R$', (calcularDesconto(valor,10).toFixed(2)))
    console.log('Total a pagar: R$',(aplicarDesconto(valor,10)).toFixed(2))

} else if (forma_pagamento === 2) {

    console.log('Forma de pagamento: Dinheiro')
    console.log('Desconto de 15%: R$', (calcularDesconto(valor,15).toFixed(2)))
    console.log('Total a pagar: R$',(aplicarDesconto(valor,15)).toFixed(2))


} else if (forma_pagamento === 3) {

    console.log('Forma de pagamento: Parcelado(3x ou mais)')
    console.log('Juros de 10%: R$', (calcularDesconto(valor,10)).toFixed(2))
    console.log('Total a pagar: R$', (aplicarJuros(valor,10)).toFixed(2))

} else if (forma_pagamento === 4) {

    console.log('Forma de pagamento: Parcelado(2x)')
    console.log('Total a pagar: R$', valor.toFixed(2))

} else {
    console.log('Forma de pagamento inválida')
}
}

main();