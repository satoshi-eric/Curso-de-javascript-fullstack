
function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()
    
new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
// a cada theen, o valor do parâmetro é o resultado do anterior
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)