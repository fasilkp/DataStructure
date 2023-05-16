function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    let mid= Math.floor(arr.length/2)
    let leftArr= arr.slice(0,mid)
    let rightArr= arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr){
    let temp=[], left=0, right=0
    while(left<leftArr.length  && right <rightArr.length) {
       if(leftArr[left]<rightArr[right]){
            temp.push(leftArr[left])
            left++;
        }else{
            temp.push(rightArr[right])
            right++;
        }
    }
    console.log(temp)
    return [...temp, ...leftArr.slice(left), ...rightArr.slice(right)]

}

let arr= [4,54,2,5,6,23,8,1]
console.log(mergeSort(arr))


