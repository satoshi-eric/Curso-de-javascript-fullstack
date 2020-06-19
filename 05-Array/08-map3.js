/* implementação do map */

Array.prototype.map2 = function(callback){
    const array_return = []
    for(let i = 0; i < this.length; i++){
        array_return.push(callback(this[i], i, this))
    } 
    return array_return
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "kit lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]



/*minha implemantação */
const precos = carrinho.map2(function (elemento){
    return `R$${parseFloat(JSON.parse(elemento)["preco"]).toFixed(2)}`
})

console.log(precos)

/* outra implementação */
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)