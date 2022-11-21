"use strict";
// string
let nome = 'João';
console.log(nome);
//nome = 22;
console.log('/////////////////////////////////////////////////////');
//numbers
let idade = 22;
let idade2 = 22.5;
//idade = 'Aana';
console.log(idade);
//boolean
let possuiHobbies = true;
//possuiHobbies = 1;
console.log('/////////////////////////////////////////////////////');
console.log(possuiHobbies);
//tipos explícitos 
let minhaIdade;
minhaIdade = 22;
console.log(typeof possuiHobbies);
console.log(minhaIdade);
/* if(possuiHobbies){
    console.log('verdadeirooooo')
}else {
    console.log('falsoooo')
} */
console.log('/////////////////////////////////////////////////////');
// array
let hobbies = ["Cozinhar", "Praticar Esportes", 11];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);
console.log('/////////////////////////////////////////////////////');
let endereco = ["Av principal", 99, 123];
console.log(endereco);
endereco = ["Rua Importante", 1256, 345];
console.log(endereco);
//enums
console.log('/////////////////////////////////////////////////////');
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Vermelho"] = 11] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Vermelho, Cor.Azul);
console.log('/////////////////////////////////////////////////////');
//any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
console.log('/////////////////////////////////////////////////////');
function digaOi() {
    console.log('Oi');
}
digaOi();
console.log('/////////////////////////////////////////////////////');
function multiplicar(numA, numB) {
    return numA * numB;
}
/* console.log(multiplicar(2,'bia'))
 */
console.log(multiplicar(4.75, 9));
console.log('/////////////////////////////////////////////////////');
//objetos
let usuarios = {
    nome: 'Samuel',
    idade: 22
};
console.log(usuarios);
/* usuarios = {}
*/
usuarios = {
    nome: 'Maria',
    idade: 28
};
console.log(usuarios);
console.log('/////////////////////////////////////////////////////');
let funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Passou do horario!';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(12));
console.log('/////////////////////////////////////////////////////');
let funcionario2 = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Passou do horario!';
        }
    }
};
console.log(funcionario2.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(12));
console.log('/////////////////////////////////////////////////////');
//union types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '100';
console.log(`Minha nota é ${nota}!`);
console.log('/////////////////////////////////////////////////////');
//checando tipos
let valor = 23;
if (typeof valor == "number") {
    console.log("É um number!");
}
else {
    console.log(typeof valor);
}
console.log('/////////////////////////////////////////////////////');
let altura = 12;
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '987654321',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let podeSerNulo = null;
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'Maria';
console.log(podeSerNulo);
let ContaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let Correntista = {
    nome: 'Ana Silva',
    ContaBancaria: ContaBancaria,
    contatos: ['32567890', '98765432']
};
Correntista.ContaBancaria.depositar(90000);
console.log(Correntista);
//# sourceMappingURL=tipos.js.map