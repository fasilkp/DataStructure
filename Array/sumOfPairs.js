//Q: print all pairs which get sum=10

function searchPairs(arr, num){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]==num){
                console.log(`[${arr[i]}, ${arr[j]}],`);
            }
        }
    }
}

let arr=[5,2,5,4,7,6,4,3,8];

searchPairs(arr, 10)