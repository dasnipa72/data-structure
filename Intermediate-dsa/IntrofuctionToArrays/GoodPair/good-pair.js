function GoodPair(A, B){
    for(let i=0; i<A.length-1; i++){
        for(let j=i+1; j<A.length; j++){ // since we have to just check only upper tringle to avoid check the pair twice 
            if(A[i]+A[j]==B){
                return true;
            }
        }
    }
    return false;
}

console.log(Number(GoodPair([1,2,3,4],7)));
console.log(Number(GoodPair([1,2,4],4)));
console.log(Number(GoodPair([1,2,2],4)));