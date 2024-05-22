const calcularINSS = require('./calculo_inss');
const calcularImpostoRenda = require('./calculo_imposto_renda');

function calcularSalarioLiquido(salarioBruto, outrosDescontos = 0) {
    const valorINSS = calcularINSS(salarioBruto);
    const valorImpostoRenda = calcularImpostoRenda(salarioBruto);
    
    const salarioLiquido = salarioBruto - valorINSS - valorImpostoRenda - outrosDescontos;
    
    return salarioLiquido;
}


module.exports = calcularSalarioLiquido;
