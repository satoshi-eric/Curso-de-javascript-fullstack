const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // massa quebrou ocarro! remove último elemento
console.log(pilotos)

pilotos.push('Verstappen') // adiciona ao último elemento
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

// adiconar elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover elementos
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
