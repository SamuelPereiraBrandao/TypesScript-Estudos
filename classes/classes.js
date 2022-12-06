"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1911);
aniversario.dia = 22;
console.log(aniversario.dia + ` Anos`);
console.log(aniversario);
const casamento = new Data; //posso omitir os "()"
casamento.ano = 2035;
console.log(casamento);
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperta = new DataEsperta(3, 11, 1911);
aniversarioEsperta.dia = 22;
console.log(aniversarioEsperta.dia + ` Anos`);
console.log(aniversarioEsperta);
const casamentoEsperta = new Data; //posso omitir os "()"
casamentoEsperta.ano = 2022;
console.log(casamentoEsperta);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$ ${this.preco} (${this.desconto * 100}% off)`;
    }
}
const prod1 = new Produto('Caneta Bic Preta', 4.20);
prod1.desconto = 0.06;
console.log(prod1.resumo());
const prod2 = new Produto('Caderno Escolar', 18.80, 0.15);
console.log(prod2.resumo());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
        }
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    freiar() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
console.log(carro1.acelerar());
console.log(carro1.acelerar());
console.log(carro1.acelerar());
console.log(carro1.acelerar());
//# sourceMappingURL=classes.js.map