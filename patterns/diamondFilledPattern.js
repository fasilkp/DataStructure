let lines=11
let spaceCount=Math.floor(lines/2)
let starCount=1;

for(let i=0; i<lines; i++){
    let line=''
    for(let j=0; j<spaceCount; j++){
        line+=" "
    }   
    for(let j=0; j<starCount; j++){
        line+="*"
    } 
    console.log(line)
    if(i<lines/2 -1){
        starCount+=2;
        spaceCount--  
    }else{
        starCount-=2;
        spaceCount++;
    }
    
}