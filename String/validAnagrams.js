const validAnagrams = (str1,str2)=>{
    const map = new Map();
    if(str1.length!==str2.length)return false;
    for(let value of str1){
        map.set(value, map.get(value)+1||1);
    }

    for(let i =0;i<str2.length;i++){
        if(!map.get(str2[i])) return false;
        map.set(str2[i],map.get(str2[i])-1);
    }
    return true;
 }

 console.log(validAnagrams('coffee','ocffee'))