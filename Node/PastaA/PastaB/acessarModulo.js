/* Caminho relativo */
const moduloA = require('../../01-moduloA')
/* Caminho absoluto */
// const moduloA = require('C:/Users/satos/Documents/GitHub/Curso-de-javascript-fullstack/06-Node/01-moduloA.js')
console.log(moduloA)

const c = require('./PastaC/indeex')
console.log(c.ola2)


const http = require('http')
http.createServer((req, res) => {
    res.write('Bom Dia')
    res.end()
}).listen(8080)
