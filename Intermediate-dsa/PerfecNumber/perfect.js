function Perfect(T, N){
    for(let i=0; i<T; i++){
        let divisor_sum = 1;
        for(let j=2; j*j<=N[i]; j++){
            if(N[i]%j === 0){
                divisor_sum = divisor_sum + j + N[i]/j;
            }
        }
        if(divisor_sum === N[i]){
            console.log('YES', divisor_sum);
        } else {
            console.log('No', divisor_sum);
        }
    }
}


Perfect(4, [4,6,28,496])
Perfect(1, [10])