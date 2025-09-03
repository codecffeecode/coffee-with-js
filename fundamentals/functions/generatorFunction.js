// A generator function basically acts like a custom iterator which iterates when you want not like other function that returns a value when they are fully executed it will only executes when you want

function* displayEven(number){
    for(let i = 0; i<=number ; i++){
        if(i%2===0){
        yield i
    }}
}

const display = displayEven(6)
console.log(display,'from generator') // this will return generator object having property of next
console.log(display.next())
console.log(display.next())
console.log(display.next())
console.log(display.next())
console.log(display.next())