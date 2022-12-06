class Data {
    // publico por padrão
    dia:number
    public mes:number
    ano:number

    constructor(dia:number = 1, mes:number = 1, ano:number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}
const aniversario = new Data(3,11,1911)
aniversario.dia = 22
console.log(aniversario.dia+` Anos`)
console.log(aniversario)


const casamento = new Data //posso omitir os "()"
casamento.ano = 2035
console.log(casamento)

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

class DataEsperta {
    constructor(public dia:number = 1, public mes:number = 1, public ano:number = 1970){
   
    }
}
const aniversarioEsperta = new DataEsperta(3,11,1911)
aniversarioEsperta.dia = 22
console.log(aniversarioEsperta.dia+` Anos`)
console.log(aniversarioEsperta)


const casamentoEsperta = new Data //posso omitir os "()"
casamentoEsperta.ano = 2022
console.log(casamentoEsperta)