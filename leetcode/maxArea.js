//Question

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

//Solution


let height = [1,8,6,2,5,4,8,3,7]

let largestArea= 0;
for(let i=0; i<height.length; i++){
    let area=0
    for(let j=i+1; j<height.length; j++){
        if(height[i]<height[j]){
            area= height[i] * (j-i)
        }
        else{
            area= height[j] * (j-i)
        }
    }
    if(largestArea<area){
        largestArea=area
    }

}
console.log(largestArea)