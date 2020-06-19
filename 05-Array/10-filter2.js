Array.prototype.filter2 = function(callback) {
    let array_new = []
    for(let i = 0; i<this.length; i++){
        if(callback(this[i], i, this)){
            array_new.push(this[i])
        }
    }
    return array_new
}

const array = [1, 2, 3, 4, 60]
const maior_que50 = (num) => num >50

console.log(array.filter2(maior_que50))