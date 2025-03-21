// 1. Reverse a string without using builtin methods

const originalString = 'Hello'
const reversedString = reverseString(originalString)
console.log(reversedString)

function reverseString(str){
    let reversedStr = ''
    for(let i = str.length-1; i>=0; i--){
        reversedStr += str[i]
    }
    return reversedStr;
}
