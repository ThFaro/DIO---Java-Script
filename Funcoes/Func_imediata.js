
function calcularImc(peso, altura) {

    return peso / Math.pow(altura, 2);

}

function classificarImc(IMC) {

    if (IMC < 18.5) {
        return 'Você está abaixo do peso'

    } else if (IMC >= 18.5 && IMC < 25) {
        return 'Peso normal'

    } else if (IMC >= 25 && IMC <= 30) {
        return 'Você está acima do peso'

    } else if (IMC > 30 && IMC <= 40) {
        return 'Obeso'

    } else {
        return 'Obesidade morbida'
    }
}


(function main() { /*O nome pode ser rertirado(função anonima) */

    const peso = 90;
    const altura = 1.74;

    const IMC = calcularImc(peso, altura);
    console.log('Seu IMC é de', IMC.toFixed(2), 'Classificação:', classificarImc(IMC))
})();

