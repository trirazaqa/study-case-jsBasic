function checkPrima(angka){
    var flag = 0;
    for(var i = 1; i  <= angka; i++){
        if(angka % i === 0){
            flag++
        }
    }
    if (flag === 2){
        return true;
    } else {
        return false;
    }
}

console.log(checkPrima(5))
console.log(checkPrima(11))