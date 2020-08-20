function falarDepoisDe(segundos, frase) {
    // resolve: função que será chamada quando a função for atendida 
    // reject: função que será chamada quando a função for rejeitada
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000);
    })
}

falarDepoisDe(3, 'Que Legal!')
    .then(frase => frase.concat('?!?')) // then é chamada quando a promise é resolvida 
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))
