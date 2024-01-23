let arrayA = [1,12,3,17,5,15,19,8,9,20]
let arrayB = [11,12,13,14,15,16,17,18,19,20]

function recebendoarray(arrayA,arrayB){
    let arraysaida = []
    let contadorarray = 0


    for(let a = 0; a < arrayA.length; a ++){

       for(let b = 0; b < arrayB.length; b ++){

        if(arrayA[a] == arrayB[b]){
            arraysaida[contadorarray] = arrayA[a]
            contadorarray++
        }
       }
    }
    return arraysaida
}

console.log(recebendoarray(arrayA,arrayB))