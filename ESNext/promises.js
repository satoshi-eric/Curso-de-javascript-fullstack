function falarDepoisDe(segundos, frase) {
    // resolve: função que será chamada quando a função for atendida 
    // reject: função que será chamada quando a função for rejeitada
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000);
    })
}

// then recebe como parâmetro uma função dee callback com parâmetro o objeto passado pelo resolve quando é retornado do objeto promise que pode ser chamada novamente de forma aninhada e recebe uma função de callback como parâmetro com parâmetros sendo o retorno da função anterior
// Em outras palavras,  
falarDepoisDe(3, 'Que Legal!')
    .then(frase => frase.concat('?!?')) // then é chamada quando a promise é resolvida 
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))
