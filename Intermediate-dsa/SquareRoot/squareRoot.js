function SquareRoot(A){
    for(let i=1; i*i<=A; i++){
        if(i*i === A){
            return i
        }
    }
    return -1
}

let val = SquareRoot(36);
console.log(val);
val = SquareRoot(1001);
console.log(val);