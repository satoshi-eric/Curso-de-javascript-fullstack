/* map transforma um array em outro com o mesmo tamanho */

/* array de numeros */
const nums = [1, 2, 3, 4, 5]

/* for com propósito 
 * map recebe uma função de callback com os parâmetros:
    - valor atual
    - indice
    - array completo
*/
/* duplica todos os elementos */
let resultado = nums.map(function(elemento_atual){
    return elemento_atual*2
})

console.log(resultado)

/* map não transforma o array atual */

const soma10 = (e) => e+10
const triplo = (e) => e*3
const paraDinheiro = (e) => `R$${parseFloat(e).toFixed(2).replace('.', ',')}`

/* é possível usar múltiplos maps */
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)