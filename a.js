

// var result = Add(7, 8)
// console.log(result)

// FIP, CIP, MIP, IIP

//1 - Function Statement
// function Add(num1, num2){
//     let res = num1 + num2
//     return res
// }

//2 - Function Expression
// var Add  = function(num1, num2){
//     let res = num1 + num2
//     return res
// }(6,9)

// console.log(Add)

//3 - Function Constructor //small change 
// Create with 'New' key Word
// Output of this depend on how we call the function
// here it's a object it self

//4 - Arrow Function ES6]

//Javascript returns how function called not how function written

// function foo(){
//     return 'foo'
// }
// console.log(foo)
// CIP isn't applied on =>
var foo = ()=>{
    return;
}
var f1 = new foo();
console.log(f1)
// JS every function has arguments object

function Add(){

    console.log(arguments.length)

    function AddInternal(){
        console.log(arguments.length)
    }
}

// rest parameter access with ...dj - like array object