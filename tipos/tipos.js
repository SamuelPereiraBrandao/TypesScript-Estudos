"use strict";
// string
let nome = 'João';
console.log(nome);
//nome = 22;
//numbers
let idade = 22;
let idade2 = 22.5;
//idade = 'Aana';
console.log(idade);
//boolean
let possuiHobbies = true;
//possuiHobbies = 1;
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
// array
let hobbies = ["Cozinhar", "Praticar Esportes", 11];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);
let endereco = ["Av principal", 99, 123];
console.log(endereco);
endereco = ["Rua Importante", 1256, 345];
console.log(endereco);
//enums
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
//any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
/* console.log(multiplicar(2,'bia'))
 */
console.log(multiplicar(4.75, 9));
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
