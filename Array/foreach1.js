const aprovados = ['Agatha', 'Ariel', 'Guilherme', 'Leonardo']

/* foreach: 
    possui função de callback como parâmentro. 
    Essa função possui 2 parâmetros: 
        - o elemento da array a ser percorrido/iterado e 
        - o segundo é o índice do elemento */
aprovados.forEach(function(elemento, indice){
    console.log(`${indice+1}) ${elemento}`)
})
console.log()

/* neste caso, o índice é ignorado */
aprovados.forEach((nome) => console.log(nome))

console.log()

/* também é possível armazenar a função em uma variável e passá-la como parâmetro para o forEach */
const exibirAprovado = (aprovado) => console.log(aprovado)
aprovados.forEach(exibirAprovado)

/* Existe um terceiro parâmetro no forEach: o array */
aprovados.forEach(function(elemento, indice, array){
    console.log(`${indice+1})${elemento} - ${array[indice]}`)
    console.log(array)
})