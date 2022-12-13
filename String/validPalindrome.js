const isPalindrome = (str) => {
    if(!str.length) return true;
   let left  = 0, right = str.length - 1;
   while(left<right){
    if(str[left]!==str[right])return false;
    left++;
    right--;
   }
   return true;
}

console.log(isPalindrome('abcaba'))