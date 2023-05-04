// let arr = [5,1,2,3,1,2,1,5]

// for(let i=0; i<arr.length; i++){
  
//     if(arr[i]==5){
//         console.log(arr[i])
//         continue;
//     }

//     let sum=0;

//     let start,end, startPos, endPos; 

//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]+arr[j]<=5 && sum<arr[i]+arr[j]){
//             sum=arr[i]+arr[j]
//             start=arr[i];
//             end=arr[j]
//         }
//     }
//     let temp1=arr[arr.length-1]
//     let temp2=arr[arr.length-2]

//     console.log('temp',temp1, temp2)

//     arr[startPos]=temp1;
//     arr[endPos]=temp2;
//     arr.length--;
//     arr.length--;
//     i--;
//     console.log(arr)
//     console.log(start, end)

// }



let arr=[1,2,3,1,5,4]

for(let i=0; i<arr.length; i++){
    if(arr[i]==5){
        console.log(arr[i])
        deleteElement(i)
        continue;
    }
    let sum=0, pos;
    for(let j=0; j<arr.length; j++){
        if(arr[i]+arr[j]>sum && arr[i]+arr[j]<=5){
            sum=arr[i]+arr[j];
            pos=j
        }
        console.log(arr[i], arr[pos]);
        deleteElement(pos)
        deleteElement(i)
    }
}


function deleteElement(pos){
    for(let i=pos; i<arr.length; i++){
        arr[i]=arr[i+1]
    }
    arr.length--
}