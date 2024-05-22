function calcularImpostoRenda(salarioBruto) {
    let imposto = 0;

    if (salarioBruto <= 2112.00) {
        imposto = 0;
    } else if (salarioBruto <= 2826.65) {
        imposto = salarioBruto * 0.075 - 142.80;
    } else if (salarioBruto <= 3751.05) {
        imposto = salarioBruto * 0.15 - 354.80;
    } else if (salarioBruto <= 4664.68) {
        imposto = salarioBruto * 0.225 - 636.13;
    } else {
        imposto = salarioBruto * 0.275 - 869.36;
    }

    return imposto;
}


module.exports = calcularImpostoRenda;
