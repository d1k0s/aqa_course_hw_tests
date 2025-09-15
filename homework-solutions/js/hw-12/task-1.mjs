import { ConfigSet } from "ts-jest";

function delayTwoSeconds(delay) {
    setTimeout(delay, 2000)
} 

const promise = new Promise((resolve) => resolve(1));
promise.then((result) => console.log(result));

const newPromise = new Promise((resolve, reject) => reject("Error"))
newPromise.then((result) => console.log(result))
            .catch((error) => console.log(error));

function prmiseNumber(n) {
    return new Promise((resolve, reject) => resolve(n))
}
console.log(prmiseNumber(5))

Promise.all([prmiseNumber(1), prmiseNumber(2), prmiseNumber(3)])
    .then((values) => {
        values.forEach((value) => console.log(values))
    })
    .catch((error) => console.log("Error"))

Promise.allSettled([prmiseNumber(1), prmiseNumber(2), prmiseNumber(3)]).then((values) => {
    values.forEach((value) => {
        if (value.status === "fulfilled") {
            console.log('Fulfilled:', value.value)
        } else {
            console.log('Rejected:', value.reason)
        }
    })
})

async function handleAllPromises() {
    try {
        const values = await Promise.all([prmiseNumber(1), prmiseNumber(2), prmiseNumber(3)])
        values.forEach((result) => {
            console.log(result)
        })
    } catch (error) {
        console.log(error)
    }
}

async function handleAllSettledPromises() {
    try {
        const results = await Promise.allSettled([prmiseNumber(1), prmiseNumber(2), prmiseNumber(3)]);

        results.forEach((result) => {
            if (result.status === "fulfilled") {
                console.log(`Fulfilled: ${result.value}`);
            } else {
                console.log(`Rejected: ${result.reason}`);
            }
        })
    } catch (error) {
        console.log(error);
    }
}