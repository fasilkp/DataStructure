//Q: print all pairs which get sum=10

function searchPairs(arr, target){
    let numSet = new Set();
    for(let i=0; i<arr.length; i++){
     if(numSet.has(target-arr[i])){
        console.log(target-arr[i], arr[i])
     }else{
        numSet.add(arr[i])
     }
        
    }
}

let arr=[5,2,5,4,7,6,4,3,8];

searchPairs(arr, 10)