function printUptoN(n){
    console.log(n)
    if(n==0){
        return
    }
    return printUptoN(n-1);
}

printUptoN(10)