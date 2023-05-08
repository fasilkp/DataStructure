function binarySearch(arr, target, left=0, right){
    right= right ?? arr.length;
    let mid = Math.floor((left+right)/2)
    if(left>right){
        return -1
    }
    
    if(arr[mid]===target){
        return mid;
    }
    if(target>arr[mid]){
        left=mid+1
    }else{
        right=mid-1
    }
    return binarySearch(arr, target, left, right)
}

console.log(
    binarySearch([1,2,3,4,5,7,8,9], 1)
)