namespace Areas {
   export const PI = 3.14
   export const X1 = 4
    
    export function areaCircunferencial (raio: number): number{
        return PI * Math.pow(raio,2)
    }
    
    
   export function areaRetangulo (base: number, altura:number):number{
        return base * altura
    }
}



console.log(Areas.areaCircunferencial(10))
console.log("teste")


function somarTudo(Somar:number):number{

    return Areas.PI + Somar
}

console.log(somarTudo(10))


function Teste(xT:number):number{
    return Areas.X1 - xT
}

function Teste2(yT:number):number {
    return 1000 - yT
}

console.log(Teste2(50))



namespace Marcacoes {
   export function somarP (soma1:number):number{
       return soma1+soma1
    }
}
console.log(Marcacoes.somarP(50))

const app = document.getElementById("app");

const p = document.createElement("p")
const hr = document.createElement("hr")
p.textContent = "teste " + Marcacoes.somarP(4) + hr.textContent + " mais texto"
app?.appendChild(p)
app?.appendChild(hr)


const divprin = document.getElementById("divprincipal")
    const SomarPI = Areas.X1 + Areas.PI


if(SomarPI == 7.140000000000001){
    const paragrafo = document.createElement("p")
    paragrafo.textContent = "PI("+Areas.PI+")"+" + NÚMERO (" +Areas.X1 + ") QUE VAI RESULTAR EM: " + SomarPI;
    app.appendChild(paragrafo)
}else {
    const paragrafo = document.createElement("p")
    paragrafo.textContent = "NÚMERO INVÁLIDO!";
    app.appendChild(paragrafo)
}

const input = document.getElementById('message') as HTMLInputElement | null;

const value = input?.value;
console.log(value) // 👉️ "Initial value"

if (input != null) {
  console.log(input.value); // 👉️ "Initial value"
}

input?.addEventListener('input', function (event) {
  const target = event.target as HTMLInputElement;
  const paragrafo = document.createElement("p")
  paragrafo.textContent = "Número:"+target.value;
  app.appendChild(paragrafo)
});

// 1. Seleciona o elemento div usando a propriedade id
