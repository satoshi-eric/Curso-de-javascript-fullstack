console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

/* this e exports são somente 2 referências para o mesmo objeto module.exports */
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
/* module.exports é aquele que realmente será exportado */
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = {publico: true}