const validParenthesis = (str) => {
    const map = {'(' : ')',
                 '{' : '}',
                 '[' : ']'};
    const stack = [];

    for(let i = 0; i < str.length; i++){
        if(str[i]==='('|| str[i] === '{' || str[i] === '[') stack.push(str[i])
        else if (map[stack.pop()]!== str[i]) return false;
    }
    return stack.length === 0;
}

console.log(validParenthesis('(({{}}[]))'));