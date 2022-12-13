const groupAnagrams = (strs) =>{
    const sortedStrs = strs.map(word=>word.split('').sort().join(''));
    const obj = {};
    for(let i = 0; i<strs.length; i++){
        if(!obj[sortedStrs[i]]) obj[sortedStrs[i]] = [strs[i]];
        else  obj[sortedStrs[i]].push(strs[i])
    }
    return Object.values(obj);
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))