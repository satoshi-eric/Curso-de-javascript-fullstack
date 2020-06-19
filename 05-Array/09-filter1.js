const produtos = [
    { nome: 'noteebook', preco: 2499, fragil: true },
    { nome: 'ipad pro', preco: 10000, fragil: true},
    { nome: 'copo de vidro', preco: 12.99, fragil: true},
    { nome: 'copo de vidro', preco: 18.99, fragil: false}
]

/* filter recebe mesmos 3 parâmetros que map e foeach
 * elemento, indice e vetor
 * filtra de acordo com função de callback. Se retornar true, o elemento permanece. Se retornar false, o elemento é retirado
 */ 
console.log(produtos.filter(function(p){
    return p.preco > 2500   
}))

/* produtos frageis e caros (>500) */

const ehCaro = (produto) => {
    return produto.preco > 500
}

const ehFragil = (produto) => {
    return produto.fragil
}

console.log(produtos.filter(ehCaro).filter(ehFragil))