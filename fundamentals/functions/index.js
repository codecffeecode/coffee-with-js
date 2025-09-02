/**
 * types of functions
 * 1 - function declaration
 * 2 - function expression
 * 3 - arrow function
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

func_dec()
func_exp()
func_arr()


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