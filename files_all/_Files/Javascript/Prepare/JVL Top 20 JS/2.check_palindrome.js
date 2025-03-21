// 2. Check if a string is a palindrome

// function isPalindrome(str){
//     function reverseString(string){
//         let reverseStr = ''
//         for(let i=str.length-1; i>=0; i--){
//             reverseStr += string[i]
//         }
//         return reverseStr;
//     }
//     const cleanedStr = str.toLowerCase()
//     return cleanedStr === reverseString(cleanedStr)
// }

// console.log(isPalindrome('radar'))


function isPalindrome(str){
    function reverseStr(string){
        reversed = ''
        for(let i=str.length-1; i>=0; i--){
            reversed += str[i]
        }
        return reversed;
    }
    const cleanedStr = str.toLowerCase()
    return cleanedStr === reverseStr(cleanedStr)
}

console.log(isPalindrome('bread'))