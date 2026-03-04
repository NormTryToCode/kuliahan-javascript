
const myObj = {
    "1": "value",
    "2": "value2",
    "Hello, World": "Hello my friend",
};

console.log(myObj["1"]);
console.log(myObj["Hello, World"]);
console.log(myObj);

delete myObj["Hello, World"]

console.log(myObj);

