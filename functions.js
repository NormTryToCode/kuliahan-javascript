
function checkStrict(a, b){
    if (a === b){
        console.log("a and b are the same");
    }
    else {
        console.log("They are not the same");
    }
}

let firstString = "hello";
let secondString = "hello";
let thirdString = "helloW";

checkStrict(firstString, secondString);
checkStrict(secondString, thirdString);
checkStrict(firstString, thirdString);
