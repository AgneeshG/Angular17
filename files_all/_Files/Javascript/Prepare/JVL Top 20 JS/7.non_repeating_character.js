// 7. Find the first non-repeating character in a string

function firstNonRepeatingCharacters(str){
    let frequencyMap = {}
    for(const char of str){
        if(frequencyMap[char]){
            frequencyMap[char] += 1
        } else {
            frequencyMap[char] = 1
        }
    }
    
    for(let char of str){
        if(frequencyMap[char] ==  1){
            return char;
        }
    }
    return null;
}

console.log(firstNonRepeatingCharacters('swiss'))

function Person(name, website) {
    this.name = name;
    this.website = website;
  }
  
  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and this is my website: ${this.website}`);
  };
  
  const paul = new Person(");
  
  paul.sayHello();

