// Closure é o escopo criado quando uma função é declerada
// Esse escopo permite a função acessar e manipular as variáveis externas à função

// Contexto léxico

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())