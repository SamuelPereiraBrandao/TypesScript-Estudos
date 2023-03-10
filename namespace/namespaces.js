var Areas;
(function (Areas) {
    Areas.PI = 3.14;
    Areas.X1 = 4;
    function areaCircunferencial(raio) {
        return Areas.PI * Math.pow(raio, 2);
    }
    Areas.areaCircunferencial = areaCircunferencial;
    function areaRetangulo(base, altura) {
        return base * altura;
    }
    Areas.areaRetangulo = areaRetangulo;
})(Areas || (Areas = {}));
console.log(Areas.areaCircunferencial(10));
console.log("teste");
function somarTudo(Somar) {
    return Areas.PI + Somar;
}
console.log(somarTudo(10));
function Teste(xT) {
    return Areas.X1 - xT;
}
function Teste2(yT) {
    return 1000 - yT;
}
console.log(Teste2(50));
var Marcacoes;
(function (Marcacoes) {
    function somarP(soma1) {
        return soma1 + soma1;
    }
    Marcacoes.somarP = somarP;
})(Marcacoes || (Marcacoes = {}));
console.log(Marcacoes.somarP(50));
var app = document.getElementById("app");
var p = document.createElement("p");
var hr = document.createElement("hr");
p.textContent = "teste " + Marcacoes.somarP(4) + hr.textContent + " mais texto";
app === null || app === void 0 ? void 0 : app.appendChild(p);
app === null || app === void 0 ? void 0 : app.appendChild(hr);
var divprin = document.getElementById("divprincipal");
var SomarPI = Areas.X1 + Areas.PI;
if (SomarPI == 7.140000000000001) {
    var paragrafo = document.createElement("p");
    paragrafo.textContent = "PI(" + Areas.PI + ")" + "+ NÚMERO(" + Areas.X1 + ") QUE VAI RESULTAR EM: " + SomarPI;
    app.appendChild(paragrafo);
}
else {
    var paragrafo = document.createElement("p");
    paragrafo.textContent = "NÚMERO INVÁLIDO!";
    app.appendChild(paragrafo);
}
// 1. Seleciona o elemento div usando a propriedade id
