const sequencia = {
    _valor: 1, // variável privada. Usado por convenção, mas pode ser acessado 
    // existem getters e setters nativamente
    get valor(){ 
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

// javascript não possui sobrecarga de métodos

// ao acessar uma propriedade do objeto, o método getter é utilizado
console.log(sequencia.valor, sequencia.valor)
// ao modificar uma propriedade do objeto, o método setter é utilizado
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)