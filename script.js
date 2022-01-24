/*Твоя задача написать функцию, которая будет работать так же, как и метод find.

Пример работы find:

const numbers = [4, 5, 6]
// результат: [4, 5, 6]
numbers.find(item => item > 4);
// результат: 5
*/
const arr = [4, 5, 6];

function find(arr, cb) {
   
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return arr[i]
        }
    } 
}

const result = find(arr, (item, i, arr) => {
    return item > 4
})

// ------------------------

const greetings = ["hi", "hello", "how are you"]; 

function map(arr, cback) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(cback(arr[i]))
    }
    return newArr
}

const resultArr = map(greetings, (item) => {
    return item.toUpperCase()
})

// ------------------------------------

const numbers = [4, 5, 6]

function filter(arr, callback) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}

const resFilter = filter(numbers, (item) => {
    return item < 6
})

console.log(resFilter)

