console.log("Hello")
// window.alert("Hello")
// window.alert("Good morning")

document.getElementById("h4id").textContent = `I like pizza`
document.getElementById('pid').textContent = `Hello everyone`

let x = 43
let y = 154.7
let str1 = "Learn javascript"


console.log(x)
document.getElementById('pid').textContent = `value of y is ${y}`
console.log(typeof y);
console.log(`sample text : ${str1}`);
document.getElementById('p2id').textContent = `type of str1 variable : ${typeof(str1)}`


// get user input in two ways

// let username = window.prompt("type your name here : ")
// document.getElementById('sampleP').textContent = `Hello ${username}`


let username;

document.getElementById('btn1').onclick = function(){
    username = document.getElementById('username').value;
    document.getElementById('forUsername').textContent = `Hello ${username}`
}


// type conversion

let a 
let b 
let c 

a = Number(a);
b = String(b);
c = Boolean(c);

console.log(typeof a," type and ",a);
console.log(typeof b, " ", b);
console.log(typeof c, c);


// constant variable
const PI = 3.14159
let radius
let circumference;

document.getElementById('btn2').onclick = function(){
    radius = document.getElementById('getRadius').value;
    value = Number(radius)
    circumference = 2 * PI * radius;
    document.getElementById('circumference').textContent = ` value of circumference : ${circumference}`
}

let age;
let Age;

document.getElementById('submitAge').onclick = function(){
    age = document.getElementById('age').value;
    Age = Number(age)
    document.getElementById('displayAge').textContent = `You are ${Age} years old.`
}


// counter app
let increaseBtn = document.getElementById('increaseBtn')
let resetBtn = document.getElementById('resetBtn')
let decreaseBtn = document.getElementById('decreaseBtn')
countLabel = document.getElementById('countLabel')

let count = 0;
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0
    countLabel.textContent = count
}

//Checkbox and Radio button


