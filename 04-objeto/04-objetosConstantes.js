// objeto constante aponta para um endereço de memória

// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}

// Object.freeze não permite que os atributos do objeto sejam modificados

Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = {nome: 'João'}
Object.freeze(pessoaConstante)
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)