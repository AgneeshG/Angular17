// 7. Check if a string contains balaced parentheses

function isBalanced(str){
    // create empty stack
    const stack = []

    // Traverse each character in string
    for(const char of str){
        if(char == '('){
            stack.push(char)
        } else if(char == ')'){
            if(stack.length == 0){
                return false
            }
            stack.pop()
        }
    }
    return stack.length === 0
}
// stringVal = '(())'
console.log(isBalanced("(())"))