import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// import Saudacao from './componentes/Saudacao'

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
// import Multi, { BoaNoite } from './componentes/Multiplos'

// const elemento = <h1>React 2</h1>

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro"/>
            <Filho nome="Paulo"/>
            <Filho nome="Carla"/>
        </Pai>
    </div>
, document.getElementById('root'))

// $('<h1>').html('React 2')