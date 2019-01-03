
var isValid = function(s) {
    let braces= s.split('')
    if(braces.length % 2 !== 0) return false;
    let parentheses = "[]{}()",stack = [],i, character, bracePosition;
    for(i = 0; character = braces[i]; i++) {
        bracePosition = parentheses.indexOf(character);
        if(bracePosition % 2 === 0) stack.push(bracePosition + 1); 
        else if(stack.pop() !== bracePosition) return false;
    }
    return stack.length === 0;
};