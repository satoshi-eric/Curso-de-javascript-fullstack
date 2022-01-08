const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Para pegar o corpo da requisição
// usamos req.body para pegar o corpo da requisição
// Sem o bodyParser, não conseguimos pegar o corpo da requisição com o req.body
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h1>Parabéns. Usuário incluido!</h1>')
})

app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Parabéns. Usuário alterado!</h1>')
})

app.listen(3003)