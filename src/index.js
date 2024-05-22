const calcularINSS = require('./calculo_inss');
const calcularImpostoRenda = require('./calculo_imposto_renda');

const salarioBruto = 3500.00;
const valorINSS = calcularINSS(salarioBruto);
const valorImpostoRenda = calcularImpostoRenda(salarioBruto);

console.log(`Para um salário bruto de R$ ${salarioBruto.toFixed(2)}, o valor a ser pago de INSS é R$ ${valorINSS.toFixed(2)}`);
console.log(`Para um salário bruto de R$ ${salarioBruto.toFixed(2)}, o valor a ser pago de Imposto de Renda é R$ ${valorImpostoRenda.toFixed(2)}`);
