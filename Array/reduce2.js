const alunos = [
    { nome: 'João', nota: 7.5, bolsista: false },
    { nome: 'Maria', nota: 9.5, bolsista: true },
    { nome: 'Nathalia', nota: 9.3, bolsista: true },
    { nome: 'Paulo', nota: 5.4, bolsista: false }
]

/* desafio 1: todos os alunos são bolsistas? */

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

/* desafio 2: Algum aluno é bolsista? */
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))