/*
 * concat concatena os elementos do array
 * ele retorna uma array, mas, não mexe na array que está sendo concatenada
 * 
 */

const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos, 'fulano')
console.log(todos, filhos, filhas)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))