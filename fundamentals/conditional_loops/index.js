const age = 18
// if true case found - then all statements will be executed after that case (for eg in below if no break - then 18 20 otherwise 18 only)
switch (age) {
    case 0:
        console.log("age 0")
    case 18:
        console.log("age 18")
        break;
    case 20:
        console.log("age 20")
}
// looping
const glo_arr = [1, 2, 3, 4]
for (let ele of glo_arr) {
    console.log(ele)
}

const glo_obj = {
    name: "Ashish",
    age: 23
}

for (let key in glo_obj) {
    console.log(key, glo_obj[key])
}

// try catch
try {
    const numer = 90
    const demino = 0
    if (demino == 0) {
        throw Error("trying to divide by 0")
    }
    else {
        console.log("divide done", numer / demino)
    }
}
catch (err) {
    console.log(err, "catch called")
}