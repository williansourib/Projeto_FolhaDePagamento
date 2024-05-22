const calcularINSS = require('./calculo_inss');
const calcularImpostoRenda = require('./calculo_imposto_renda');
const calcularSalarioLiquido = require('./calculo_salario_liquido');

const salarioBruto = 3500.00;
const outrosDescontos = 200.00;

const valorINSS = calcularINSS(salarioBruto);
const valorImpostoRenda = calcularImpostoRenda(salarioBruto);
const salarioLiquido = calcularSalarioLiquido(salarioBruto, outrosDescontos);

console.log(`Para um salário bruto de R$ ${salarioBruto.toFixed(2)}:`);
console.log(`- O valor a ser pago de INSS é R$ ${valorINSS.toFixed(2)}`);
console.log(`- O valor a ser pago de Imposto de Renda é R$ ${valorImpostoRenda.toFixed(2)}`);
console.log(`- O valor dos outros descontos é R$ ${outrosDescontos.toFixed(2)}`);
console.log(`- O salário líquido é R$ ${salarioLiquido.toFixed(2)}`);