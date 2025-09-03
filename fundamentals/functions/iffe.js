// IIFE

// Like we can see from the name immediately invoked function expression it means these function are immediately invoked when we declare then and then its value got deleted means as they are invoked then immediately goes to the garbage collector.

// All the components we use in react are basically iife

// One thing always keep in mind that put a semicolon (;) always while defining iife as it is possible that if expression before it has not been closed and everything goes messed up

;(function iffe(){
    console.log('Hii from iife')
})()

// It can also be anonymous 

;(()=>{
    console.log('Hii from anonymous iife')
})()

// keep in mind that we can't access iife anywhere after declaring

console.log(iffe())