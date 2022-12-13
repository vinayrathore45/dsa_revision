const longestCommonPrefix = (arr) =>{
    for(let i = 0; i < arr[0].length; i++){
        for(let str of arr){
            if(str[i] !== arr[0][i]) return str.slice(0,i)
        }
    }
    return arr[0]
}

console.log(longestCommonPrefix(["flower","flow","flight"]));