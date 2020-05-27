/*
Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.  
*/

let potencia = (base, expoente) =>
{
    let res = base
    if(expoente == 0)
    {
        return 1
    }
    for(let i=1; i<expoente; i++)
    {       
        res *= base
    }
    return res
}

console.log(potencia(3, 1))