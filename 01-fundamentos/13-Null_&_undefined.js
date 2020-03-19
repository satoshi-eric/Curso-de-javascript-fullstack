/* ao definir 2 variáveis objeto a
 * com uma propriedade name com o valor Teste
 * e depois definir uma variável b
 * recebendo a variável a, 
 * se modificarmos a variável b,
 * a variável a também será modificada
 */
/*
 const a = { name: "Teste" }
 console.log(a)
 const b = a
 b.name = "opa"
 console.log(a)
 */

 // Isso ocorre pois a e b apontam para o
 // mesmo endereço de memória
 // Atribuição por referência
 // Atribuição por valor: ocorre por valores primitivos 

let valor // não inicializada
console.log(valor)
// console.log(valor2)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined

console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(produto)
console.log(!!produto.preco)
console.log(produto)