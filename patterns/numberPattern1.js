// Print the number pattern ?

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 7 8 9 10
// 4 5 6
// 2 3
// 1

// solution 

let line=8
let colCount=1;
let colStart=1;
let count=1;

for(let i=0; i<line; i++){
    let lineStr=''
    for(let j=0; j<colCount; j++){
        lineStr+=" "+(colStart+j);
    }
    console.log(lineStr)
    if(i<(line/2)-1){
        colStart+= count;
        colCount++;
        count++;
    }
    if(i>(line/2)-1){
        colStart-= count-1;
        colCount--;
        count--;
    }
}