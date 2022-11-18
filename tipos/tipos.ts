// string
let nome:string = 'João';
console.log(nome);
//nome = 22;

//numbers
let idade:number = 22;
let idade2:number = 22.5;
//idade = 'Aana';
console.log(idade);

//boolean
let possuiHobbies:boolean = true;
//possuiHobbies = 1;

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

// array
let hobbies:any[] = ["Cozinhar","Praticar Esportes",11]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100]
console.log(hobbies)

let endereco: [string,number,number] = ["Av principal",99, 123]
console.log(endereco)

endereco = ["Rua Importante",1256,345]
console.log(endereco)

//enums

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


//any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW',ano:2019}
console.log(carro)



function digaOi():void {
    console.log('Oi')
}
digaOi()

function multiplicar(numA:number, numB:number):number {
    return numA * numB
}
/* console.log(multiplicar(2,'bia'))
 */
console.log(multiplicar(4.75,9))


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