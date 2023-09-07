// Arrow function 

// function saberi(a, b) {
//     return a + b;
// }

// let zbir = (a, b) => a + b;

// function isPositive(num) {
//     return num > 0;
// }

// let positiveNum = num => {
//     return num > 0;
// }

// document.addEventListener('click', function () {
//     console.log('Document clicked!')
// })

// document.addEventListener('click', () => console.log('Document clicked!'))

// Promises intro

let promise = new Promise((resolve, reject) => {
    let sum = 1 + 0;
    if (sum < 3) {
        resolve('Less than three');
    } else {
        reject('Greater than three');
    }
})

promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
}).finally(() => {
    console.log("Finally some other message")
})

//Return promise as function result and add more arguments and conditions

function getInfo(arg) {
    return new Promise((resolve, reject) => {
        if (arg === 2) {
            resolve({ arg, message: "This is true." })
        } else if (arg < 0) {
            resolve({ arg, message: "This is true and less than zero." })
        } else {
            reject({ arg, message: "This is false." })
        }
    })
}

getInfo(1 - 8).
    then((res) => console.log(res.message + ' Info: ' + res.arg)).
    then(() => console.log('Something else after resolve.')).
    catch((res) => console.log(res.message + ' Info: ' + res.arg));


const submitFormOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Form one submitted")
    }, 2000)
})
const submitFormTwo = new Promise((resolve, reject) => {
    resolve("Form two submitted")
})
const submitFormThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Form three submitted")
    }, 3000)
})

//Wait for each one to be resolved

// Promise.all([
//     submitFormOne,
//     submitFormTwo,
//     submitFormThree
// ]).then((messages) => console.log(messages))

//First one to finish (resolved)

Promise.race([
    submitFormOne,
    submitFormTwo,
    submitFormThree
]).then((message) => console.log(message))