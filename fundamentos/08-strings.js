const escola = 'Cod3r'

//mostra o caracter na posiçção 5
console.log(escola.charAt(4))
//não mostra caracter pois ele não existe
console.log(escola.charAt(5))
//mostra valor da tabela ASCCI
console.log(escola.charCodeAt(3))
//mostra a posição do caracter solicitado
console.log(escola.indexOf('3'))
//mostra todos os caracteres desde o indice 1
console.log(escola.substring(1))
//mostra os caracteres desde o índice 0 até o 3
console.log(escola.substring(0, 3))
//concatena as strings
console.log('Escola '.concat(escola).concat("!"))
//substitui o '3' da string por 'e'
console.log(escola.replace(3, 'e'))
// cria um array a partir da string
console.log('Ana,Maria,Pedro'.split(','))