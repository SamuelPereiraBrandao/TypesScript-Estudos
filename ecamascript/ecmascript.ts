// let & const 
console.log(seraQuePode)
var seraQuePode = '?'; // hoisting


let estaFrio = true
if(estaFrio){
    let acao = 'Colocar o casaco!';
    console.log(acao);
}

const cpf: string = '123.456.789-10';
console.log(cpf);

var segredo = 'externo'
function revelar() {
    const segredo = 'interno'
    console.log(segredo)
}
revelar()
console.log(segredo)

{
 {   const def = 'dewww'
    console.log(def)}

}

for(var i = 0; i <= 10; i++){
    console.log(i)
}

// console.log(i)

//arrow function
console.log("//////////////////////////////////////////////////////////////");
const somar = function (n1: number, n2:number):number {
    return n1 + n2
}

console.log(somar(2,2))

const subtrair = (n1: number, n2:number):number => n1 - n2
console.log(subtrair(2,3))


const saudacao = () => console.log("Olá!")
saudacao()



const falarCom = (pessoa:string) => console.log("Olá " + pessoa)

falarCom('Samuel')

//this



/* function normalComThis(){
    console.log(this.normalComThis)
}

const normalComThisEspecial = normalComThis.bind({nome:'Ana'})

normalComThisEspecial()

// this??
console.log(this)

const arrowComThisEspecial = arrowComThis
    .bind ({nome:'Samuel'})

arrowComThisEspecial(); */



//parâmetros padrão

function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5):void {
    console.log(inicio)
    while(inicio > fim){
        inicio--
        console.log(inicio)
    }
    console.log("Fim!")
}

contagemRegressiva(5)




// Rest & Spread
const numbers = [1, 10, 99, -5 , 512 ]
console.log(Math.max(...numbers))


const turmaA: string[] = ['Samuel','Marcelo','Mariana','Carla'];
const turmaB: string[] = ['Marcia','Fernanda','Luiz','Pedro', ...turmaA];

console.log('Turma B:' + turmaB)


//rest & spread (tupla)

const tupla: [number,string, boolean] = [1,'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
console.log(`1) ${a} ${b} ${c}`)
}


tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]){
    console.log(Array.isArray(params))
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)


// destructuring (Array)

const caracteristicas = ['Motor Zetec 1.8', 2020];

//const motor = caracteristica[0]
//const motor = caracteristica[1]

const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)


// destructuring (objeto)
console.log('//////////////////')

const item = {
    nome:'SSD 480GB',
    preco:275,
    caracteristicas:{
        w:'Importado'
    }

}

/* const nomeItem = item.nome
const preco = item.preco */



console.log('//////////////////')

const usuarioID: string = 'SuporteCod3r'
const notificacoes: string = '19'
const boasVindas = `
Boas Vindas ${usuarioID},
Notificações: ${parseInt(notificacoes) > 9 ? '+9' :notificacoes}
`
console.log(boasVindas)
console.log(`${caracteristicas[0]}`)






