var Geometria;
(function (Geometria) {
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
    })(Areas = Geometria.Areas || (Geometria.Areas = {}));
})(Geometria || (Geometria = {}));
console.log(Geometria.Areas.areaCircunferencial(10));
console.log("teste");
function somarTudo(Somar) {
    return Geometria.Areas.PI + Somar;
}
console.log(somarTudo(10));
function Teste(xT) {
    return Geometria.Areas.X1 - xT;
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
var SomarPI = Geometria.Areas.X1 + Geometria.Areas.PI;
if (SomarPI == 7.140000000000001) {
    var paragrafo = document.createElement("p");
    paragrafo.textContent = "PI(" + Geometria.Areas.PI + ")" + " + NÚMERO (" + Geometria.Areas.X1 + ") QUE VAI RESULTAR EM: " + SomarPI;
    app.appendChild(paragrafo);
}
else {
    var paragrafo = document.createElement("p");
    paragrafo.textContent = "NÚMERO INVÁLIDO!";
    app.appendChild(paragrafo);
}
var input = document.getElementById('message');
var value = input === null || input === void 0 ? void 0 : input.value;
console.log(value); // 👉️ "Initial value"
if (input != null) {
    console.log(input.value); // 👉️ "Initial value"
}
input === null || input === void 0 ? void 0 : input.addEventListener('input', function (event) {
    var target = event.target;
    var paragrafo = document.createElement("h1");
    paragrafo.textContent = "N:" + target.value;
    app.appendChild(paragrafo);
});
// 1. Seleciona o elemento div usando a propriedade id
