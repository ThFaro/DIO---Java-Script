/*

Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.

- Para relaizar o calculo receba o valor bruto do salário e o adicional dos benefícios

- O salário a ser transferido é calculado da seguinte maneira:

    (valor bruto do salário - percentual de imposto mediante a faixa salarial 
    + adicional dos benefícios)

- Para o calculo do percentual de imposto:
    De R$ 0.00 a R$ 1100.00 = 5%
    De R$ 1100.01 a R$ 2500.00 = 10%
    Maior que R$ 2500.00 = 15%

        Exemplo:
            Entrada:
                2000
                250
            
                Saída:
                    2050.00


*/
const { gets, print } = require('./funcoes-auxiliares-ex3');

const salarioBruto = gets();
const adicionalBeneficios = gets();

function calcularPorcentagem(valor, percentual) {
     return valor * (percentual/100);
}

function pegarAliquota(salario){

    if(salario>=0 && salario <= 1100){
        return 5;
    }else if (salario >= 1100.01 && salario <= 2500){
        return 10;
    }else{
        return 15;
    }   
}

const aliquotaImposto = pegarAliquota(salarioBruto);
const valorImposto = calcularPorcentagem(salarioBruto,aliquotaImposto);

const valorATransferir = salarioBruto - valorImposto + adicionalBeneficios;

print(valorATransferir);