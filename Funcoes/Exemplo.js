function incrementarJuros(valor, percentualJuros) {

    const valorAcrecimo = (percentualJuros / 100) * valor;

    return valor + valorAcrecimo;

}

console.log(incrementarJuros(100, 10))


