
let myNumber = 1;
let myTwoNumber = -2;


function validateNumber(a) {
    try {
        if (a > 0) {
            return a;
        }
        else {
            throw new TypeError("the number cannot be below 0");
        }
    }
        catch (error) {
            return error.message;
        }
}
console.log(validateNumber(myNumber));
console.log(validateNumber(myTwoNumber));
