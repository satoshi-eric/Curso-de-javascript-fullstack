// operador ...rest(juntar)/spread(espalhar)
// usar rest como parâmetro de uma função

// usar spread com objeto
const funcionario = {nome: 'maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}

console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)