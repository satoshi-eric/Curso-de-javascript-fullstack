/* implementando forEach */
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Ariel', 'Guilherme', 'Leonardo']

aprovados.forEach2(function(elemento, indice){
    console.log(`${indice+1}) ${elemento}`)
})