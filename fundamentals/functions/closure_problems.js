/**
1) once with reset + error replay
Goal: run a function at most once; cache its result or error. expose reset() to clear state.
Edge: if first call throws, subsequent calls rethrow the same error until reset.
 */

function once(fn) {
    let called = false, value, err, hasError = false;
    function wrapper(...args) {
        if (called) {
            if (hasError) {
                return "once: already called with error"
            }
            return "once: already called value = " + value
        }
        called = true
        try {
            value = fn.apply(this, args)
            return "once: called value = " + value
        }
        catch (e) {
            hasError = true
            err = e
            return "once: called with error = " + e
        }
    }
    wrapper.reset = () => {
        called = false
        value = undefined
        err = undefined
        hasError = false
    }
    return wrapper
}

function test_once() {
    const once_func = once(() => {
        console.log("once_func called")
        return 10
    })
    console.log(once_func())
    console.log(once_func())
    once_func.reset()
    console.log(once_func())
}

function test_once_with_error(){
    const once_func = once(()=>{
        console.log("once_func called")
        throw new Error("once_func error")
    })
    console.log(once_func())
    console.log(once_func())
    once_func.reset()
    console.log(once_func())
}

test_once()
test_once_with_error()