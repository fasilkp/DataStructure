function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let pos=i;
        for(let j=i+1; j>=0; j--){
            if(arr[pos]<arr[j]){
                [arr[pos], arr[j]]=[arr[j], arr[pos]]
                pos=j;
            }
        }
    }
    return arr
}

console.log
(insertionSort([4,1,6,2,8,3,6,1]))
