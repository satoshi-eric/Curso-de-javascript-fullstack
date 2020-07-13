console.log(typeof Array, typeof new Array, typeof [])

// não é a mais recomandada
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

// mais recomandada a notação literal
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
// undefined
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
// tamanho do array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
// agora possui 10 = 9 + 1 elementos
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
// ordena por ordem alfabética
aprovados.sort()
console.log(aprovados)

// excluir elemento 1
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
/* 
 * splice(i, n, ...)
 * começa em i, retira n elementos e adiciona os ... elementos
 */
aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2')
console.log(aprovados)

