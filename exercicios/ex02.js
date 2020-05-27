/*
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  
Equilátero: Os três lados são iguais. 
Isósceles:  Dois lados iguais. 
Escaleno: Todos os lados são diferentes.  
Crie uma função que recebe os comprimentos dos três lados de um triângulo e 
retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se 
abstrair as condições matemáticas de existência de um triângulo)
*/


let tipoTriangulo = (lado1, lado2, lado3) => 
{
    let ladosIguais = 0
    if(lado1 == lado2)
    {
        ladosIguais += 1
    }
    if(lado2 == lado3)
    {
        ladosIguais += 1
    }
    if(lado3 == lado1)
    {
        ladosIguais += 1
    }

    if(ladosIguais == 3){
        return 'equilátero'
    }
    else if(ladosIguais == 1){
        return 'isóceles'
    }
    else if(ladosIguais == 0){
        return 'escaleno'
    }
}

console.log(tipoTriangulo(1, 1, 1))