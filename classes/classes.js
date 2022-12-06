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
//# sourceMappingURL=classes.js.map