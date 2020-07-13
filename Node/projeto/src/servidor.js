// É necessário declarar a porta para identificar o processo que se quer comunicar. É necessário identifá-la pois há diversos processos
const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bandoDeDados')
const { salvarProduto } = require('./bandoDeDados')

// Para qualquer requisição que se passa pelo servidor, ele vai passar por esse middleware e se no corpo da requisição, houver um padrão urlencoded, ele vai transformar o texto em objeto para ser utilizado. Vai ser disparado para qualquer requisição
app.use(bodyParser.urlencoded({extended: true}))

// ao receber uma requisição, esse middleware 1 será executado para ir para a próxima função definida por next
// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...')
//     next()
// })

// get é uma forma de requisição
app.get('/produtos', (req, res, next) => {
    // qualquer requisição para o servidor será respondida pelo objeto abaixo   
    // res.send({nome: 'Notebook', preco: 123.45}) // converter para JSON
    res.send(bancoDeDados.getProdutos())
})

// ao realizar uma requisição por essa url passando um numero do produto, esses numero será passado para a função get como o parâmtro id
app.get('/produtos/:id', (req, res, next) => {
    // o parâmtro está dentro da requisição sendo um objeto chamado params que recebe o nome do parâmtro que está na url
    res.send(bancoDeDados.getProduto(req.params.id))
})

// submeter dados e salvar um  novo produto
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        // as propriedades do produto serão atribuídas por valores da requisição através do atributo body
        nome: req.body.nome,
        preco: req.body.preco
    })  
    // resposta da requisição como produto retornado pela função salvarProduto
    res.send(produto)
})


// função para escutar a porta definida
app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})