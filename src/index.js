const calcularINSS = require('./calculo_inss');

const salarioBruto = 4000.00;
const valorINSS = calcularINSS(salarioBruto);

console.log(`Para um salário bruto de R$ ${salarioBruto}, o valor a ser pago de INSS é R$ ${valorINSS.toFixed(2)}`);
