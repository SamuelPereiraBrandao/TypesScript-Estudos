// string
let nome:string = 'João';
console.log(nome);
//nome = 22;
console.log('/////////////////////////////////////////////////////')

//numbers
let idade:number = 22;
let idade2:number = 22.5;
//idade = 'Aana';
console.log(idade);

//boolean
let possuiHobbies:boolean = true;
//possuiHobbies = 1;
console.log('/////////////////////////////////////////////////////')

console.log(possuiHobbies);

//tipos explícitos 
let minhaIdade:any;
minhaIdade = 22;



console.log(typeof possuiHobbies);
console.log(minhaIdade);

/* if(possuiHobbies){
    console.log('verdadeirooooo')
}else {
    console.log('falsoooo')
} */
console.log('/////////////////////////////////////////////////////')

// array
let hobbies:any[] = ["Cozinhar","Praticar Esportes",11]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100]
console.log(hobbies)
console.log('/////////////////////////////////////////////////////')

let endereco: [string,number,number] = ["Av principal",99, 123]
console.log(endereco)

endereco = ["Rua Importante",1256,345]
console.log(endereco)

//enums
console.log('/////////////////////////////////////////////////////')

enum Cor {
    Cinza, //0
    Verde = 100, //100
    Azul = 10, //2
    Vermelho, //3
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Vermelho, Cor.Azul)

console.log('/////////////////////////////////////////////////////')

//any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW',ano:2019}
console.log(carro)

console.log('/////////////////////////////////////////////////////')


function digaOi():void {
    console.log('Oi')
}
digaOi()
console.log('/////////////////////////////////////////////////////')

function multiplicar(numA:number, numB:number):number {
    return numA * numB
}
/* console.log(multiplicar(2,'bia'))
 */
console.log(multiplicar(4.75,9))
console.log('/////////////////////////////////////////////////////')


//objetos
let usuarios: {nome: string, idade: number} = {
    nome:'Samuel',
    idade:22
}
console.log(usuarios)


/* usuarios = {}
*/

usuarios = {
    nome: 'Maria',
    idade:28
}
console.log(usuarios)
console.log('/////////////////////////////////////////////////////')

/* usuarios = {
    name: 'Maria',
    age: 35
} */
type Funcionariotype = {
    supervisores:string[], baterPonto:(horas:number)=> string
}



let funcionario : Funcionariotype = {
    supervisores:['Ana', 'Fernando'],
    baterPonto(horario:number):string {
        if(horario <= 8){
            return 'Ponto normal'
        }else {
            return 'Passou do horario!'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(12))

console.log('/////////////////////////////////////////////////////')



let funcionario2 :Funcionariotype = {
    supervisores:['Bia', 'Carlos'],
    baterPonto(horario:number):string {
        if(horario <= 8){
            return 'Ponto normal'
        }else {
            return 'Passou do horario!'
        }
    }
}
console.log(funcionario2.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(12))
console.log('/////////////////////////////////////////////////////')


//union types
let nota:number | string = 10

console.log(`Minha nota é ${nota}!`)
nota = '100'
console.log(`Minha nota é ${nota}!`)
console.log('/////////////////////////////////////////////////////')

//checando tipos
let valor = 23
if(typeof valor == "number"){
    console.log("É um number!")
}else {
    console.log(typeof valor)
}

console.log('/////////////////////////////////////////////////////')


let altura = 12

let alturaOpcional:null | number = 12

alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '987654321',
    tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)


let podeSerNulo = null

podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'Maria'
console.log(podeSerNulo)

type ContaBancaria = {
    saldo: number,
    depositar:(valor: number) => void
}


let ContaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number){
        this.saldo += valor
    }
}

type Correntista = {
    nome: string,
    ContaBancaria: ContaBancaria,
    contatos: string[]
}

let Correntista: Correntista = {
    nome: 'Ana Silva',
    ContaBancaria: ContaBancaria,
    contatos: ['32567890','98765432']
}

Correntista.ContaBancaria.depositar(90000);
console.log(Correntista);