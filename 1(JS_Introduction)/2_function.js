// normal function

function sayHi(){
    console.log('i will say heyy')
}// function declared


sayHi()


function add(a, b){ // a and b are parameter
    console.log(a+b)
}

add(2,3)  // 2 and 3 are arugments

function mul(a, b){ // a and b are para
    console.log(a*b)
}

mul(2,3) 

function div(a, b){ // a and b are para

    console.log(a/b)
}

div(2,3) 


///function as first class citizens
// variable and function treated as same in js 





let sayHi= function(){ // anonyms functions
    console.log('hello')
}

//function expression

sayHi() //here variable called as function




//IIFE (Immediately invoked function Expressio)
let add=(function (a,b) {
    return a+b
})(10,20)
  
console.log(add)