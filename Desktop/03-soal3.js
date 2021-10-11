const arr = [1, 2, 3, 4, 5];

function searchInArray(arr, num) {
    if (arr.indexOf(num) === -1) {
        console.log("Angka tidak ditemukan")
    } else {
        console.log("Angka ditemukan pada index : " + arr.indexOf(num))
    }
}

searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);