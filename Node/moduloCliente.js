/* Para importar módulos, é necessário usar o ./ referenciando que o arquivo importado está na mesma pasta do arquivo que utiliza o arquivo importado*/
/* Não é necessário colocar a extensão, mas é possível usá-la */
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)