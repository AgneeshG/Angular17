// Find the longest word in the string

function findLongestWord(sentence){
    // split the sentence using space as delimeter
    const words = sentence.split(' ');
    // track longest word
    let longestWord = '';

    for(const word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

const sentence = 'find the longest word in the string'
console.log(findLongestWord(sentence))