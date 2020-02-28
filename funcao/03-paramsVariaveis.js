// arguments: array interno de uma função
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.2, 1.4, 2.3, 5.6))
console.log(soma(1.2, 2.3, 'Teste'))
console.log(soma('a'+'b'+'c'))