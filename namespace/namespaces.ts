namespace Areas {
   export const PI = 3.14
   export const X1 = 4000
    
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









// 1. Seleciona o elemento div usando a propriedade id
