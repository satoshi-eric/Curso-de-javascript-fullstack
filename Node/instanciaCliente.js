const contadorA = require('./06-intanciaUnica')
const contadorB = require('./06-intanciaUnica')

const contadorC = require('./06-instanciaNova')()
const contadorD = require('./06-instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)