// in js objects are basically key value pair 

// to declare an obj
let obj={}          // object declaration

//let person={
  //  name:'mohit',
    //age : 20,
    //phone: 123456
//}

//console.log(person)
let cap={
    firstname:'steve',
    ishello:'true',
    lastname:'rogess',
    frnds:['bucky','tony','dr banner'],
    age:102,
    address:{
        state: 'uttar pradesh',
        city: 'new york'
    },
    sayHi: function fn(){
        console.log('hello anmol')

    }
}
//console.log(cap)


/// access a propert of an object 
//console.log(cap.firstname)
//console.log(cap.lastname)
//console.log(cap.frnds[2])
//console.log(cap.address.state)
//cap.sayHi()

// loop ------> for in loop

for(let key in cap){
    console.log('key:',key,'value:',cap[key])
}
cap.movies=["hello",'new ']  // add a new property of object
delete cap.age  // delte property of object 
cap.istrue=false  // update property of object 