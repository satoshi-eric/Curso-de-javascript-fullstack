/*
Construa uma função para um sistema de notas de uma instituição que possui a 
seguinte política de classificação: Todo aluno recebe uma nota de 0 a 100. 
Alunos com nota abaixo de 40 são reprovados. 
As notas possuem a seguinte regra de arredondamento: 
Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. 
Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. 
Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada 
por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. 
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado. 
*/

const proximoMultiploCinco = (num) => {
    for(let i = 0; i < 5; i++){
        if(((num+i) % 5) == 0){
            return num+i
        }
    }
}

const arrendondarNota = (nota) => {
    if(nota > 100){
        console.log('A nota não pode ser maior que 100')
        return -1
    }else if(nota < 0){
        console.log('A nota não pode ser menor que 0')
        return -1
    }else{
        if(nota >=38){
            if((proximoMultiploCinco(nota) - nota) < 3){
                return proximoMultiploCinco(nota)
            }else{
                return nota
            }
        }else{
            return nota
        }
    }
}

const avaliarNota = (nota) => {
    if(arrendondarNota(nota) < 0){
        return "Erro"
    }if(arrendondarNota(nota) < 40){
        return true
    }else{
        return false
    }
}

console.log(avaliarNota(101))