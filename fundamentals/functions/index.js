/**
 * types of functions
 * 1 - function declaration
 * 2 - function expression
 * 3 - arrow function
 * 4 - anonymous function
 * 5 - async function
 * 5 - callback function
 * 6 - higher order function
 * 7 - generator function
 * 8 - iife
 */

function func_dec(){
    console.log("function declaration",this)
}
const func_exp = function(){
    console.log("function expression",this)
}
const func_arr = ()=>{
    console.log("arrow function",this)
}

const func_callback = (callback)=>{
    console.log(callback())
}

const func_higher_order = (fn1,fn2)=>{
    // basically performing operation on another function value or it can be returning other function too like closure is also example of hof
    const result = []
    for(let i = 0;i<5;i++){
        result.push(fn1()+fn2()+i)
    }
    console.log(result)
}



func_dec()
func_exp()
func_arr()
func_callback(func_dec) //func_dec is not returning anything therefore in console along with result we are seeing undefined
func_higher_order(()=>5,()=>7)




// A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.

/* use of closures */
function incrementor(num_by_increment){
    return function(num){
        return num + num_by_increment
    }
}

const increment_by_1 = incrementor(1)
const increment_by_2 = incrementor(2)
const increment_by_3 = incrementor(3)

console.log(increment_by_1(10))
console.log(increment_by_2(10))
console.log(increment_by_3(10))