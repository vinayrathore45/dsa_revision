const longestSubStr = (str) =>{
    const map = new Set();
    let left = 0, right = 0,len = 0,maxString = ''
    while(right<str.length){
        if(!map.has(str[right])){ 
            map.add(str[right]);
          // len = Math.max(len,map.size);
           maxString = maxString.length > str.slice(left,right+1).length? maxString : str.slice(left,right+1);
           right++;
        }
        else{
            map.delete(str[left]);
            left++;
        }
    }
    return [maxString,maxString.length];
}

console.log(longestSubStr('hellothere'))