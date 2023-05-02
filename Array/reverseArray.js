
function reverseArray(arr){
    let temp;
    for(let i=0; i<arr.length/2; i++){
        temp=arr[i];
        arr[i]=arr[arr.length-1-i]
        arr[arr.length-1-i]=temp
    }
    return arr
}

console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]))