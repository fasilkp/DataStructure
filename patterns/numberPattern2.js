let line=9;
let numCount=1
let mid=Math.floor(line/2)

for(let i=0; i<line; i++){
    let lineStr=''
    let num=1;
    let jMid=Math.ceil(numCount/2)
    for(let j=1; j<=numCount; j++){
        lineStr+=num
        if(j<jMid){
            num++
        }
        else{
            num--;
        }
    }
    if(i<mid){
        numCount+=2
    }else{
        numCount-=2;
    }
    console.log(lineStr)
}