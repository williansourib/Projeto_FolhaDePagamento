function calcularINSS(salarioBruto) {
    const tetoINSS = 908.85;

    if (salarioBruto <= 1412.00) {
        return salarioBruto * 0.075;  
    } else if (salarioBruto <= 2666.68) {
        return salarioBruto * 0.09;  
    } else if (salarioBruto <= 4000.03) {
        return salarioBruto * 0.12;  
    } else if (salarioBruto <= 7786.02) {
        return salarioBruto * 0.14;  
    } else {
        return tetoINSS;  
    }
}


module.exports = calcularINSS;