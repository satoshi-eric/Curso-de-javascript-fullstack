const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// const chineses = f => f.pais === 'China'
// const mulheres = f => f.genero === 'F'
// const menorSalario = (func, funcAtual) => {
//     return func.salario < funcAtual.salario ? func : funcAtual
// }

const ehMulher = (funcionario) => {
    return funcionario.genero === 'F'
}

const ehChinesa = (funcionario) => {
    return funcionario.pais === 'China'
}

const menorSalario = (funcionarioAnterior, funcionarioAtual) => {
    if(funcionarioAnterior.salario < funcionarioAtual.salario){
        return funcionarioAnterior
    }else {
        return funcionarioAtual
    }
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    // mulher chinesa com menor salário
    const func = funcionarios.filter(ehChinesa).filter(ehMulher).reduce(menorSalario)

    console.log(func)
})

/*
 * É possível configurar o arquivo package.json colocando em scripts:
 * "start": "nodemon",
 * "dev": "nodemon"
 * Para executar o script, usar o comando npm start
 * Para executar comando não padrão do node, usar o comando
 * npm run dev
 * 
 */ 