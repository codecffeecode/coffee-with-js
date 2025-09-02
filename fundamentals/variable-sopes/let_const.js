/*
let/const - block scopic {}
     accessing before declaration will give error - refrence error
     hoisted but not initiatlised - trying to access - behaviour is known as Temporal Dead Zone (TDZ)
     const - must be initialised at the time of declaration of var
     we cannot re-declare let/const in same block
*/

// cannot redeclare in same block

{
    let block_a = 90
    console.log(block_a)
    // let block_a = 89 //uncommenting this will give error - SyntaxError: Identifier 'block_a' has already been declared
}

{
    let block_a = 89
    console.log(block_a)
}

let glo_b = 901

{
    let glo_b = 77
    console.log(glo_b)  // 77
}

console.log(glo_b)


//  TDZ
// console.log(tdz_a) // ReferenceError: Cannot access 'tdz_a' before initialization
let tdz_a = 90