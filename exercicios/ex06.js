/*
 Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
 A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
 retornará o valor da aplicação sob o regime de juros compostos.
*/

/*
 * C: Capital inicial
 * j: taxa de juros
 * t: tempo de aplicação
 */ 


let jurosSimples = (C, j, t) =>
{
    return (C + (C*j*t)).toFixed(2)
}

let jurosCompostos = (C, j, t) =>
{
    return (C * Math.pow((1+j), t)).toFixed(2)
}

console.log(jurosSimples(2000, 0.01, 36))
console.log(jurosCompostos(2000, 0.01, 36))