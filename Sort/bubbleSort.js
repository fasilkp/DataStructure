function bubbleSort(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[i]>arr[j]){
                [arr[i], arr[j]]=[arr[j], arr[i]]
            }
        }
    }
    return arr
}

console.log
(bubbleSort([4,1,6,2,8,3,6,0]))