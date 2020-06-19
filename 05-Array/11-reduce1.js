const alunos = [
    { nome: 'João', nota: 7.5, bolsista: false },
    { nome: 'Maria', nota: 9.5, bolsista: true },
    { nome: 'Nathalia', nota: 9.3, bolsista: true },
    { nome: 'Paulo', nota: 5.4, bolsista: false }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)