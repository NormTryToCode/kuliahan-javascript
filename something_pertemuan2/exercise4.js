const arr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

// This is how you use Array.map() method to create a new array
// populated with the results of calling a provided function on
// every element in the calling array.
const map1 = arr.map((x) => x ** 2);
console.log(map1);

// Create a new array `map2` populated with only the odd-value from the
// array `arr`
function filterManual(x) {
    if (x % 2 != 0){
        return x;
    }
    else {
        return;
    }
}



let map2 = arr.map(filterManual);
let newArr = [];
for (element of map2){
    if (typeof element != "undefined") {
        newArr.push(element);
    }
}

map2 = newArr;

console.log(map2);
