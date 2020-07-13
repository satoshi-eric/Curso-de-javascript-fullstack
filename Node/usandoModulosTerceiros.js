const _ = require('lodash')

setInterval(() => console.log(_.random(1, 1000)), 2000)

/* Para instalar dependências de terceiros de forma global, utilizar a flag -g ao utilizar o npm install */
/* instalamos o nodemon, podemos usar o comando rs para reiniciá-lo */