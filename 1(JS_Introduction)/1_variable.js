var flag= true
var num = 14

for(var i = 2; i*i<= num; i++){
    if(num%i==0){
        flag=false
        break
    }

}

if(flag){
    console.log('no is prime')
}
else{
    console.log('no. is not prime')
}


let a=10 // let can be reassigned but not redeclared
const a=10; // it is a global variable that nither reassigned nor reassigned;