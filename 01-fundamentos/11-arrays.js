//declaração literal
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])

valores[10] = 10
console.log(valores)
// tamaho do array
console.log(valores.length)

// adiciona novos elementos da array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// pega o ultimo valor do array e tira esse valor
console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)