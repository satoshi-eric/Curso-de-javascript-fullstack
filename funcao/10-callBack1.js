const fabricantes = ['Mercedes', 'Audi', 'BMW']

// função callback é passada como parâmetro em outra função e depois de determinado evento, ela é chamada
function imprimir(nome, indice){
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))