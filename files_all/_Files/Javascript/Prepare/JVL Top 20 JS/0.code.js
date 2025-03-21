// 1. remove duplicate word from sentence

// function removeDuplicateSentence(arr){
//     const splittedArr = arr.split(' ')
//     return splittedArr.reduce((unique, item)=>{
//         return unique.includes(item) ? unique : [...unique, item]
//     })
// }

// let sentence = ' remove duplicate word from sentence remove duplicate word from array sentence '
// console.log(removeDuplicateSentence(sentence))

// 1 reverse string
function reverseString(str){
    reversedString = '';
    for(let i=str.length-1; i>=0; i--){
        reversedString += str[i];
    }
    return reversedString;
}
let revStr = 'Hello'
console.log(reverseString(revStr))


// 2. Check palindrome
function checkPalindrome(str){
    let reverseStr = ''
    for(let i=str.length-1;i>=0;i--){
        reverseStr += str[i]
    }
    const cleanedStr = reverseStr.toLocaleUpperCase()
    return cleanedStr === str;
}
console.log(checkPalindrome('hello'))

// 3. Count characters
function countChar(str){
    charCount = {}
    for(let char of str){
        if(charCount[char]){
            charCount[char]++
        } else {
            charCount[char] = 1
        }
    }
    return charCount;
}
let sentence = 'find the number of characters in a string'
console.log(countChar(sentence))


// 4. Find longet word in the sentence

function findLongestWord(str){
    const splitSentence = str.split(' ')
    longestWrd = ''
    for(let wrd of splitSentence){
        if(wrd.length > longestWrd.length){
            longestWrd = wrd
        } else {
            longestWrd
        }
    }
    return longestWrd;
}
let sentence1 = 'learning javascript is easy'
console.log(findLongestWord(sentence1))

// 5. Remove duplicates from an array

function removeDuplicateFromArray(arr){
    let singleValue = []

}


// 7. Balanced Parentheses 