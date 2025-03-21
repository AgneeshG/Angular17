// 3. Count the occurrences of each character in a string

// function countCharacterOccurrences(str){
//     const counts = {}
//     for(let char of str){
//         if(counts[char]){
//             counts[char]++;
//         } else {
//             counts[char]=1;
//         }
//     }
//     return counts
// }
// const inputString = ' Hello World abc abc '
// const characterCounts = countCharacterOccurrences(inputString)
// console.log(characterCounts)   



function countCharacterOccurrences(str){
    const counts = {}
    for(let char of str){
        if(counts[char]){
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }
    return counts
}

const inputString = 'Hello'
const characterCounts = countCharacterOccurrences(inputString)
console.log(characterCounts)

// count the occurrences of each character in string