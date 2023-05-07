let arr = [2,3,4,5,6,7,8,9,10]


for(let i=0; i<arr.length; i++){
    let prime=true;
    for(let j=2; j<=arr[i]/2; j++){
        if(arr[i]%j==0){
            prime = false;
            break;
        }
    }
    if(prime){
        console.log(arr[i])
    }
}