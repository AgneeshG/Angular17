// 5. Remove duplicates from an array

// Example1: Using set
function removeDuplicates(arr){
    return [...new Set(arr)]
}
const array = [1,2,3,3,4,5,5,6,7,7,7,7,8,10,10,'one','one']
console.log(removeDuplicates(array))

// Example2: filter and indexof
function removeDuplicates2(arr){
    return arr.filter((val, index, self)=> self.indexOf(val) == index)
}
console.log(removeDuplicates2(array))   

// Example3: reduce
function removeDuplicates3(arr){
    return arr.reduce((unique, item)=>{
        return unique.includes(item) ? unique: [...unique, item]
    }, [])
}
console.log(removeDuplicates3(array))