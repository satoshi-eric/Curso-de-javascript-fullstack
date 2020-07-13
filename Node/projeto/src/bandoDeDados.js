// objeto para settar os ids dos produtos
const sequence = {
    _id: 1,
    get id(){return this._id++}
}

// objeto que possui chaves de cada produto, onde cada chave é o id em si, e o valor é o produto em si
const produtos = {}

function salvarProduto(produto){
    // se o id do produto não estiver setado
    if(!produto.id) 
        // a propriedade id do parâmetro produto recebe o retorno da função get id() de sequence
        produto.id = sequence.id
    // o objeto produtos com id produto.id recebe o valor de produto
    produtos[produto.id] = produto
    // retorna produto com o id
    return produto
}

// pegar o produto pelo id
function getProduto(id) {
    // retorna o produto com o id definido por 'id', ou um objeto vazio caso esteja nulo ou undefined 
    return produtos[id] || {}
}

function getProdutos() {
    // retorna os nomes das chaves do objeto produto
    return Object.values(produtos)
}

// Exportando funções para fora desse arquivo
module.exports = {salvarProduto, getProduto, getProdutos}