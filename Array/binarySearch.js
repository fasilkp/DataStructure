

function binarySearch(arr, target){
    let start = 0, end = arr.length-1
    
    if(target<arr[0] || target>arr[arr.length-1]){
        return "no search found"
    }
    while (true) {
        let mid = Math.ceil((start + end) / 2)
        if(arr[mid]===target){
            return mid
        }
        if(target>arr[mid]){
            start=mid+1;
        }
        if(target<arr[mid]){
            end=mid-1;
        }
    }
}

let search = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)
console.log(search)