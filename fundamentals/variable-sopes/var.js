/* ____________ glo_a is showing global behaviour _____________ */
var glo_a = 78
function say_hello(){
    console.log(glo_a)
    glo_a+=1
}
say_hello()
say_hello()



/* ____________ fun_a is showing global behaviour _____________ */

function say_bye(){
    var fun_a = 90
    console.log(fun_a, "inside function")
    function say_bye_again(){
        console.log(fun_a, "inside function say bye again")
        fun_a+=1
    }
    console.log(fun_a, "inside function say bye")
    say_bye_again()
    console.log(fun_a, "inside function say bye")
}

// uncommenting this will give error - console.log(fun_a)
say_bye()


/* ______________ we can redeclare var ______________ */
var red_a = 90
var red_a = 190 // redeclaration will not give error
console.log(red_a,"redeclared")

/* ______________ hositing ______________ */
console.log(hoist_a, "accessing before declaration") // will give undefined
var hoist_a = 90;
console.log(hoist_a, "accessing after declaration")
