/* 
Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultado e o resto da divisão destes dois valores. 
*/

let divisaoEResto = (dividendo, divisor) =>
{
    if(dividendo < divisor)
    {
        console.log('Resultado: 0')
    }
    else
    {
        console.log('Resultado: ' + (dividendo/divisor).toFixed(0))
    }
    console.log('Resto: ' + dividendo%divisor)
}


divisaoEResto(1, 9)
