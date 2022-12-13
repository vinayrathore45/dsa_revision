const printAllDup = (str) =>{
    let map = new Map();
    for(let char of str){
        if(char === ' ')continue;
        map.set(char, map.get(char)+1||1);
    }
    return map;
}

console.log(printAllDup('hello world  !'));