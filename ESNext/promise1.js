let p = new Promise(function(cumprirPromesa) {
    cumprirPromesa(3, 4)
})

p.then(function(valor, x){
    console.log(valor, x)
})