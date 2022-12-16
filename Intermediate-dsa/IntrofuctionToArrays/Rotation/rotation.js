function Rotation(A, B){
     A = ReverseArrayApproach2(A, 0, A.length-1)
     A = ReverseArrayApproach2(A, 0,B-1)
     A = ReverseArrayApproach2(A, B, A.length-1)
     return A
}

function ReverseArray(A){
    let revArr = []
    for(let i=A.length-1, j=0; i>=0, j<A.length; i--, j++){
        revArr[j]=A[i]
    }
    return revArr;
}
function ReverseArrayApproach2(A, start, end){
    let temp;
    while(start<end){
        temp = A[start];
        A[start]=A[end];
        A[end]= temp
        start++;
        end--;
    }
    return A;
}

// console.log(ReverseArray([4,2,6,3,1]));
// console.log(ReverseArrayApproach2([4,2,6,3,1], 0,2));

console.log(Rotation([1,2,3,4], 2));