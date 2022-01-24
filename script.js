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

console.log(result)