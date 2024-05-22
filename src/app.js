const readlineSync = require('readline-sync');
const calcularSalarioLiquido = require('./calculo_salario_liquido');
const fs = require('fs');
const PDFDocument = require('pdfkit');

function criarPDF(nome, cpf, mesPagamento, salarioBruto, salarioLiquido, valorINSS, valorImpostoRenda, outrosDescontos) {
    const doc = new PDFDocument();
    const nomeArquivo = `folhas_pagamento/${nome}_${mesPagamento}.pdf`;
    doc.pipe(fs.createWriteStream(nomeArquivo));

    doc.fontSize(20).text('Folha de Pagamento', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Nome: ${nome}`);
    doc.fontSize(12).text(`CPF: ${cpf}`);
    doc.fontSize(12).text(`Mês de Pagamento: ${mesPagamento}`);
    doc.fontSize(12).text(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
    doc.fontSize(12).text('Descontos:');
    doc.fontSize(10).text(`  - INSS: R$ ${valorINSS.toFixed(2)}`);
    doc.fontSize(10).text(`  - Imposto de Renda: R$ ${valorImpostoRenda.toFixed(2)}`);
    doc.fontSize(10).text(`  - Outros Descontos: R$ ${outrosDescontos.toFixed(2)}`);
    doc.fontSize(12).text(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);

    doc.end();
    console.log(`PDF gerado em ${nomeArquivo}`);
}

// Solicita informações do funcionário
const nome = readlineSync.question('Digite o nome do funcionário: ');
const cpf = readlineSync.question('Digite o CPF do funcionário: ');
const mesPagamento = readlineSync.questionInt('Digite o mês do pagamento (numérico): ');
const salarioBruto = readlineSync.questionFloat('Digite o salário bruto do funcionário: ');
const outrosDescontos = readlineSync.questionFloat('Digite o valor de outros descontos (se houver): ');

// Calcula o salário líquido e os descontos
const {
    salarioLiquido,
    valorINSS,
    valorImpostoRenda,
    outrosDescontos: descontos
} = calcularSalarioLiquido(salarioBruto, outrosDescontos);

// Formata e exibe as informações no terminal
console.log('\n--- Folha de Pagamento ---');
console.log(`Nome: ${nome}`);
console.log(`CPF: ${cpf}`);
console.log(`Mês de Pagamento: ${mesPagamento}`);
console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
console.log(`Descontos:`);
console.log(`  - INSS: R$ ${valorINSS.toFixed(2)}`);
console.log(`  - Imposto de Renda: R$ ${valorImpostoRenda.toFixed(2)}`);
console.log(`  - Outros Descontos: R$ ${descontos.toFixed(2)}`);
console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);

// Pergunta ao usuário se deseja gerar um PDF
const gerarPDF = readlineSync.keyInYNStrict('Deseja gerar um PDF com a folha de pagamento? (Y/N) ');

if (gerarPDF) {
    // Cria o PDF
    criarPDF(nome, cpf, mesPagamento, salarioBruto, salarioLiquido, valorINSS, valorImpostoRenda, outrosDescontos);
}
