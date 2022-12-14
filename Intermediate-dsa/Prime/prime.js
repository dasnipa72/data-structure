function Prime(Num){
    let result = true;
    for(let i=2; i*i<=Num; i++){
        if(Num%i == 0){
            console.log("No");
            result = false
            return;
        }
    }
    result && console.log("YES");
}

Prime(999983);