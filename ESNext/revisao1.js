// let e const
{
    var a = 1
    let b = 2
    console.log(b) // let possui escopo de bloco
}

console.log(a)

// Template string
const produto = 'iPad'
console.log(`${produto} é caro`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)