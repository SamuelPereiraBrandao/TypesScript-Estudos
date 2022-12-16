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

class Produto {
    constructor(public nome:string, public preco:number, public desconto: number = 0){

    }      
     public resumo(): string {
                return `${this.nome} custa R$ ${this.preco} (${this.desconto * 100}% off)`
            }
}

 const prod1 = new Produto ('Caneta Bic Preta', 4.20)
prod1.desconto = 0.06
console.log(prod1.resumo())

const prod2 = new Produto ('Caderno Escolar', 18.80,0.15)
console.log(prod2.resumo()) 

/* class Carro {
    private velocidadeAtual: number = 0
    constructor(public marca:string, public modelo:string, private velocidadeMaxima: number = 200){
    }
    private alterarVelocidade (delta:number):any {
        const novaVelocidade = this.velocidadeAtual + delta 
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima
        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        }else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima
        }
    }
    public acelerar(): number {
        return this.alterarVelocidade(5)
    }
    public freiar(): number {
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford','Ka', 185)

Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar)

Array(50).fill(0).forEach(() => carro1.freiar())
console.log(carro1.freiar)

// simular erros
carro1.velocidadeAtual = 300;
console.log('atual ->' + carro1.velocidadeAtual)

carro1.velocidadeMaxima = 300;
console.log('atual ->' + carro1.velocidadeMxim) 

class Ferrari extends Carro {
}
const f40 = new Ferrari ('Ferrari','F40',324)
console.log(`${f40.marca} ${f40.modelo}`)
*/

// atributos e métodos estáticos
class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio:number):number {
        return this.PI * raio * raio
    }
}

console.log(Matematica.areaCirc(4))
 
/* const m1 = new Matematica()
console.log(m1.areaCirc(4))
const m2 = new Matematica()
m1.PI = 4.2
console.log(m1.areaCirc(4)) */

// classe abstrata
abstract class Calculo {
    protected resultado: number = 0

    abstract executar (...numeros:number[]):void

    getResultado(): number {
        return this.resultado
    }
}

 class Soma extends Calculo {
    executar (...numeros:number[]):void{
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}
 class Multiplicacao extends Calculo {
    executar (...numeros:number[]):void{
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

let c1 = new Multiplicacao()
c1.executar(2,3,4,5,10,99999999999999999)
console.log(c1.getResultado())