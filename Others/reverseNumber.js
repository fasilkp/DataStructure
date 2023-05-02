function reverseNumber(num){
    let reverse=0
    while(num>0){
        let reminder= num%10;
        reverse= reminder + reverse*10
        num= Math.floor(num/10)
    }
    return reverse
}

console.log(reverseNumber(87823))