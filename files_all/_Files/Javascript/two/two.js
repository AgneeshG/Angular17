function sum(a, b) {
    return a + b
}
console.log(6, sum(2, 4))

add = function (a, b) {
    return a + b + 10
}
console.log(18, add(3, 5));

sub = function sub1(a, b) {
    return a - b
}
console.log(7, sub(12, 5));

mul = (a, b) => {
    return a * b
}
console.log(15, mul(3, 5));


//--------------------------------------

for (let i = 0; i < 5; i++) {
    console.log('1. value of i : ', i);
}

let i = 3
while (i < 6) {
    console.log('2. value of i : ', i);
    i++;
}

i = 3
do {
    console.log('3. value of i : ', i);
} while (i > 5);

let arr = [1, 2, 3, 4, 5]
for (let value of arr) {
    console.log('of : ', value);
}


let obj = {
    name: 'john',
    age: 24,
    isDev: true,
    temp:this.age
}


for (let values in obj) {
    console.log(values, obj[values]);
}

function fun(num) {
    // a += num
    console.log(num);
}
arr.forEach(fun)


function func1(a, b) {
    return a + b
}
function higherFunc(a, b, func) {
    let c = a + b
    c = func(c, 10)
    console.log('hello')
    return c
    // console.log(c)
}
// higherFunc(10,12,func1)
console.log('higher function : ', higherFunc(12, 14, func1));



const btn1 = document.getElementById('btn1')
btn1.addEventListener('click', function () {
    alert('button clicked')
})



function myProm() {
    myPromise = new Promise((resolve, rejecct) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 10)
            if (randomNum < 5) {
                resolve(`Success! Random number is : ${randomNum}`)
            } else {
                rejecct(`Error! Random number is : ${randomNum}`)
            }
        }, 1000);
    })
    myPromise.then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
}
btn1.addEventListener('click', myProm)



// ----------- Clousre -------------
console.log('-------- clousre ----------')
// console.log('clousre : \n')

let a = 100
function outer(name){
    let outerVariable = 'Bread';
    function inner(){
        let innerVariable = 'Butter'
        console.log('inner variable ', innerVariable)
        console.log('outer variable ', outerVariable)
        console.log('global variable ',a)
        console.log('glob func parameter ', name)
    }
    return inner
}
let Call1 = outer('vidya')
Call1()
let innerCall2 = outer('john')
innerCall2()
Call1()


function makeAdder(x){
    return function(y){
        return x + y
    }
}

let add10 = makeAdder(10)
console.log(add10(5))

let add100 = makeAdder(100)
console.log(add100(20))



console.log('-------- clousre ----------')

let gvalue = 'data'
function outerfunc(name){
    let outervar = 'bread'
    function innerfunc(){
        innervar = 'butter'
        console.log('inner variable ',innervar)
        console.log('outer variable ', outervar)
        console.log('global variable ', gvalue)
        console.log('outer arg ', name)
    }
    return innerfunc
}

let funcone = outerfunc('jamie\n\n')
let functwo = outerfunc('carlo\n\n')
functwo()
funcone()


function makeAddertwo(x){
    return function(y){
        return x + y
    }
}

let add20 = makeAddertwo(20)
console.log(add20(0))
let add30 = makeAddertwo(30)
console.log(add30(105))

function makeadderthree(num){

}



console.log('-------- temp --------')

class User{
    static numOfUsers = 0
    constructor(name, age){
        this.name = name
        this.age = age
        User.numOfUsers++
    }
    login(){
        console.log('you have successfully logged in ' + this.name)
    }
    logout(){
        console.log('you are logged out')
    }
    static displayTotalUsers(){
        console.log('Total number of users : ', User.numOfUsers)
    }
}

class PaidUser extends User{
    constructor(name,age){
        super(name,age)
        this.storage = 100
    }
    message(){
        console.log('You have 100gb free storage')
    }
}

let userOne = new User('Ravi', 25)
let userTwo = new User('Jamie', 32)
let userThree = new User('Hendry', 28)

let paidUserOne = new PaidUser('Harry', 28)
paidUserOne.login()
paidUserOne.message()

// console.log('Total number of users : ',User.numOfUsers)
userOne.login()
User.displayTotalUsers()


console.log('----------------------------------')

class FreeSubscription{
    constructor(username, age){
        this.username = username
        this.age = age
    }
    message(){
        console.log('you have limited access for free subscription')
    }
}

class PaidSubscription extends FreeSubscription{
    constructor(username, age){
        super(username, age)
        this.availableCount = 5
    }
    message(){
        console.log('You have premium access')
    }
}



class PremiumSub extends PaidSubscription{
    constructor(username, age, count){
        super(username, age, )
    }

}

console.log('---------- temp close -----------')




class one{
    // static city = 'coimbatore'

    displayTwo(name,age){
        this.name = name
        this.age = age
        console.log(`last dispaly ${this.name} and ${this.age}`)
    }
    display(){
        console.log(`last dispaly ${this.name} and ${this.age}`)
    }
    func(){
        this.display()
        this.displayTwo()
    }
}

let sampleOne = new one()
sampleOne.displayTwo('hari', 32)
console.log()















    // constructor(name,age){
    //     this.name = name
    //     this.age = age
    // }