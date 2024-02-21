const numero = 10;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O número é inválido');

} else if (numeroDivisivelPor5) {
    console.log('O numero', numero, 'é divisível por 5');

} else {
    console.log('O numero', numero, 'não é divisível por 5');
}

