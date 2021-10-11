const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arr) {
    let sum = 0
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            sum += sumOfArray(item)
        } else {
            sum += item
        }
    })
    return sum / arr.length
}

const avg1 = sumOfArray(arr1);
const avg2 = sumOfArray(arr2);
let result = []
let count = 0

function countAboveAvg(arr, avg) {
    console.log("==========================")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= avg) {
            console.log(arr[i])
        }
    }
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);