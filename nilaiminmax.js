function nilaiMinMax(arrAngka) { 
    var max = arrAngka[0];
    var min = arrAngka[0];
    
    for(var i = 0; i < arrAngka.length; i++){
        if(max < arrAngka[i]){
            max = arrAngka[i];
        }
        if(min > arrAngka[i]){
            min = arrAngka[i];
        }
    }
    return {
        max : max,
        min : min
    }
}

console.log(nilaiMinMax([10,3,5,12,7]))